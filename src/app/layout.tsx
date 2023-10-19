'use client';
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';

import { Inter } from 'next/font/google';
import { NextAuthProvider } from './Providers';
import Sidebar from '@/components/Sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="">
            <div className="flex">
              <Sidebar />

              <div className="flex-1">
                <Navbar />
                <div className="p-4">{children}</div>
              </div>
            </div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
