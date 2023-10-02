'use client';
import { signIn } from 'next-auth/react';
const SignInButton = () => {
  return (
    <button
      onClick={() => signIn('google')}
      className="bg-red-600 text-white hover:bg-red-700 py-2 px-4 rounded-lg inline-flex items-center"
    >
      Sign in with Google
    </button>
  );
};

export default SignInButton;
