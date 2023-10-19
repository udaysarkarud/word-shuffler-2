'use client';
/* import Link from 'next/link';
import SignInButton from '../SignInButton/SignInButton'; */

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-end">
      <div className="flex-none gap-5">
        <div className="form-control">
          <p>USerName</p>
          <p>01/10/2023</p>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://www.pngkit.com/png/full/508-5084521_download-female-profile-icon-png-clipart-computer-icons.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/* 
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

*/
