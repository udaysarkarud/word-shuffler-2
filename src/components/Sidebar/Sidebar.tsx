'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Search', src: 'Search', navLocation: '/' },
    { title: 'Saved Words', src: 'Folder', navLocation: '/listofwords' },
    { title: 'Random Quiz', src: 'User', navLocation: '/' },
    { title: 'Setting', src: 'Setting', navLocation: '/' },
    { title: 'Analytics', src: 'Chart', navLocation: '/' },
  ];
  return (
    <div>
      <div className="flex">
        <div
          className={` ${
            open ? 'w-52' : 'w-20 '
          }  h-screen p-3  pt- relative duration-300`}
        >
          <div className="flex gap-x-4 items-center">
            <Image
              width={500}
              height={500}
              onClick={() => setOpen(!open)}
              src="/assets/logo.png"
              className={`cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
              alt="Logo"
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && 'scale-0'
              }`}
            >
              WordShuffler
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li key={index}>
                <Link
                  href={Menu.navLocation}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
                >
                  <img src={`./assets/${Menu.src}.png`} alt={Menu.title} />
                  <span
                    className={`${!open && 'hidden'} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
