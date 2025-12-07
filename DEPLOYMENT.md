# Deployment Guide - The Moderate Populist

This guide covers deploying your Next.js application to AWS using cost-effective options.

## Prerequisites

- AWS Account
- AWS CLI installed and configured
- Node.js 18+ installed locally

## Deployment Options

### Option 1: AWS Amplify (Recommended for Beginners)

AWS Amplify is the easiest option with built-in CI/CD from your Git repository.

**Estimated Cost:** $0-15/month for low traffic sites

#### Steps:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)

3. Click "New app" → "Host web app"

4. Connect your Git repository and select the branch

5. Amplify will auto-detect Next.js. Use these build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

6. Click "Save and deploy"

7. Amplify will build and deploy your app. You'll get a `.amplifyapp.com` URL

8. (Optional) Add a custom domain in the Amplify console

### Option 2: S3 + CloudFront (Most Cost-Effective)

Best for static exports. Lowest cost for low-moderate traffic.

**Estimated Cost:** $1-5/month for most sites

#### Setup Steps:

1. **Export your Next.js app as static files:**

   Update `next.config.ts`:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

   Build the static export:
   ```bash
   npm run build
   ```

   This creates an `out/` directory with static files.

2. **Create an S3 bucket:**
   ```bash
   aws s3 mb s3://moderate-populist-website --region us-east-1
   ```

3. **Enable static website hosting:**
   ```bash
   aws s3 website s3://moderate-populist-website --index-document index.html --error-document 404.html
   ```

4. **Upload your built files:**
   ```bash
   aws s3 sync out/ s3://moderate-populist-website --delete
   ```

5. **Create a CloudFront distribution:**
   - Go to CloudFront in AWS Console
   - Create distribution
   - Origin domain: Your S3 bucket
   - Default root object: `index.html`
   - Price class: Choose based on your audience location
   - SSL certificate: Request free certificate via ACM for custom domain

6. **Set up automatic deployment (Optional):**
   - Use GitHub Actions (see `.github/workflows/deploy.yml` below)

### Option 3: AWS Lightsail (Budget VPS Option)

Simple virtual server option.

**Cost:** Starting at $3.50/month

1. Create a Lightsail instance with Node.js blueprint
2. SSH into the instance
3. Clone your repository
4. Install dependencies: `npm ci`
5. Build the app: `npm run build`
6. Start with PM2: `pm2 start npm --name "moderate-populist" -- start`
7. Set up nginx as reverse proxy (optional but recommended)

## GitHub Actions for Automated S3 Deployment

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to S3

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1

    - name: Deploy to S3
      run: |
        aws s3 sync out/ s3://moderate-populist-website --delete

    - name: Invalidate CloudFront cache
      run: |
        aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

Add these secrets to your GitHub repository settings:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

## Custom Domain Setup

### For Amplify:
1. Go to your app in Amplify Console
2. Click "Domain management"
3. Add your domain and follow DNS configuration steps

### For S3 + CloudFront:
1. Request SSL certificate in AWS Certificate Manager (us-east-1 region)
2. Validate domain ownership
3. In CloudFront distribution settings, add your domain as an alternate domain name
4. Update your DNS records to point to CloudFront distribution

## Cost Optimization Tips

1. **CloudFront:** Use appropriate price class (US/Europe/Asia vs Global)
2. **S3:** Enable S3 Intelligent-Tiering for infrequent access
3. **Caching:** Set proper cache headers to reduce origin requests
4. **Compression:** Enable gzip/brotli in CloudFront
5. **Monitoring:** Set up CloudWatch alerts for unexpected traffic spikes

## Recommended Setup for Low-Cost Launch

**Best option: AWS Amplify** ($0-15/month)
- Easiest to set up
- Automatic deployments from Git
- Built-in SSL certificate
- Good free tier
- Scales automatically

Start with Amplify, then migrate to S3+CloudFront if you need to optimize costs further.

## Support

For issues with:
- **AWS Amplify:** Check [Amplify Documentation](https://docs.amplify.aws/)
- **S3/CloudFront:** Check [AWS Static Website Hosting Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
