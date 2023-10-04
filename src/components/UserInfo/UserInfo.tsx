'use client';
import SignInButton from '../SignInButton/SignInButton';
import { useSession } from 'next-auth/react';

const UserInfo = () => {
  const { status, data: session } = useSession();

  if (status === 'authenticated') {
    return (
      <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200 ">
        <div>
          Name: <span>{session?.user?.name}</span>
        </div>
        <div>
          Email: <span>{session?.user?.email}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <SignInButton />
      </div>
    );
  }
};

export default UserInfo;
