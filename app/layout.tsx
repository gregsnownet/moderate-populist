import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logo from "@/components/Logo";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { UserMenu } from "@/components/auth/UserMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Moderate Populist - Seeking knowledge, furthering understanding",
  description: "Beyond the political Divide - Seeking knowledge, furthering understanding. Explore evidence-based perspectives that put people over partisanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <div className="flex flex-col min-h-screen">
          {/* Political Spectrum Bar */}
          <div className="political-spectrum"></div>

          {/* Header */}
          <header className="bg-white border-b sticky top-0 z-50 shadow-sm stars-subtle">
            <nav className="max-w-7xl mx-auto px-4 py-5">
              <div className="flex items-center justify-between">
                {/* Logo/Brand */}
                <Link href="/" className="group">
                  <div className="transform group-hover:scale-105 transition-transform duration-200">
                    <Logo size="medium" showTagline={false} />
                  </div>
                </Link>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-900 font-medium transition-colors relative group"
                  >
                    Issues
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all"></span>
                  </Link>
                  <Link
                    href="/solutions"
                    className="text-gray-700 hover:text-blue-900 font-medium transition-colors relative group"
                  >
                    Solutions
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all"></span>
                  </Link>
                  <Link
                    href="/talking-points"
                    className="text-gray-700 hover:text-blue-900 font-medium transition-colors relative group"
                  >
                    Talking Points
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all"></span>
                  </Link>
                  <Link
                    href="/resources"
                    className="text-gray-700 hover:text-blue-900 font-medium transition-colors relative group"
                  >
                    Resources
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all"></span>
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-blue-900 font-medium transition-colors relative group"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all"></span>
                  </Link>
                </div>

                {/* User Menu */}
                <div className="hidden md:block">
                  <UserMenu />
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-gray-600 hover:text-blue-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </nav>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="gradient-navy text-white py-12 px-4 stars-background">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">The Moderate Populist</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Seeking knowledge, furthering understanding - Beyond the political Divide.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Navigate</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/" className="text-purple-100 hover:text-white transition-colors">Issues</Link></li>
                    <li><Link href="/solutions" className="text-purple-100 hover:text-white transition-colors">Solutions</Link></li>
                    <li><Link href="/resources" className="text-purple-100 hover:text-white transition-colors">Resources</Link></li>
                    <li><Link href="/about" className="text-purple-100 hover:text-white transition-colors">About</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Our Commitment</h4>
                  <div className="flex items-start gap-2 text-sm text-purple-100">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Non-partisan, evidence-based content from reputable sources</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-purple-400 pt-6 text-center text-sm text-purple-100">
                <p>&copy; {new Date().getFullYear()} The Moderate Populist. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
        </AuthProvider>
      </body>
    </html>
  );
}
