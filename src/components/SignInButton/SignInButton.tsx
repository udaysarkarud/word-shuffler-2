'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
const SignInButton = () => {
  const { data: session } = useSession();
  console.log(session?.user);
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto place-items-center">
        <p>{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sing Out
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className="bg-slate-900 text-white px-6 py-2 rounded-md"
    >
      Sing In
    </button>
  );
};

export default SignInButton;
