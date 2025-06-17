'use client';

import Link from 'next/link';

export default function VerifyEmailPending() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Check your email</h2>
            <p className="text-gray-600 mb-6">
              We&apos;ve sent you a verification link. Please check your email and click the link to verify your account.
            </p>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                Can&apos;t find the email? Check your spam folder or{' '}
                <Link href="/register" className="text-green-600 hover:text-green-500">
                  try registering again
                </Link>
              </p>
              <p className="text-sm text-gray-500">
                Already verified?{' '}
                <Link href="/login" className="text-green-600 hover:text-green-500">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
