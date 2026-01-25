import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';

export const metadata = {
  title: 'Login - Moderate Populist',
  description: 'Sign in to your Moderate Populist account.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Moderate Populist
            </h1>
          </Link>
          <p className="text-zinc-600 mt-2">Welcome back</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-6 text-center">
            Sign In
          </h2>
          <LoginForm />
          <div className="mt-6 pt-6 border-t border-zinc-200 text-center">
            <p className="text-sm text-zinc-600">
              Didn&apos;t receive your verification email?{' '}
              <Link href="/resend-verification" className="text-blue-600 hover:text-blue-700 font-medium">
                Resend it
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
