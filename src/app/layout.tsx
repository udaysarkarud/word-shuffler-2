'use client';
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';

import { Inter } from 'next/font/google';
import { NextAuthProvider } from './Providers';

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
            <Navbar />
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
