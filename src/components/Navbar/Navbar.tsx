'use client';
import Link from 'next/link';
import SignInButton from '../SignInButton/SignInButton';

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center shadow-md">
      <div>
        <Link className="p-2 transition-colors hover:text-blue-500" href={'/'}>
          Home Page
        </Link>
        <Link
          className="p-2 transition-colors hover:text-blue-500"
          href={'/userpost'}
        >
          User Post Page
        </Link>
      </div>
      <SignInButton />
    </div>
  );
};

export default Navbar;
