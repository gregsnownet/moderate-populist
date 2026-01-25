import RegisterForm from '@/components/auth/RegisterForm';
import Link from 'next/link';

export const metadata = {
  title: 'Register - Moderate Populist',
  description: 'Create an account to join the conversation at Moderate Populist.',
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Moderate Populist
            </h1>
          </Link>
          <p className="text-zinc-600 mt-2">Join the conversation</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-zinc-800 mb-6 text-center">
            Create Your Account
          </h2>
          <RegisterForm />
        </div>

        <p className="text-center text-sm text-zinc-500 mt-6">
          By registering, you agree to engage respectfully and constructively.
        </p>
      </div>
    </main>
  );
}
