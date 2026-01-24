import { NextRequest } from 'next/server';

/**
 * Get the client IP address from the request
 * Checks various headers in order of preference
 */
export function getClientIp(request: NextRequest): string | null {
  // Check X-Forwarded-For (most common for proxies/load balancers)
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    // X-Forwarded-For can contain multiple IPs, the first is the client
    return forwardedFor.split(',')[0].trim();
  }

  // Check X-Real-IP (used by some proxies)
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  // Check CF-Connecting-IP (Cloudflare)
  const cfIp = request.headers.get('cf-connecting-ip');
  if (cfIp) {
    return cfIp.trim();
  }

  // Fallback to connection remote address (rarely available in serverless)
  return null;
}

/**
 * Get country from IP address using a free geolocation API
 * Returns country name or 'Unknown' if unable to determine
 */
export async function getCountryFromIp(ip: string | null): Promise<string> {
  if (!ip) return 'Unknown';

  try {
    // Using ip-api.com (free, no API key required, 45 requests/minute)
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=country`, {
      signal: AbortSignal.timeout(3000), // 3 second timeout
    });

    if (!response.ok) {
      return 'Unknown';
    }

    const data = await response.json();
    return data.country || 'Unknown';
  } catch (error) {
    console.error('Failed to get country from IP:', error);
    return 'Unknown';
  }
}
