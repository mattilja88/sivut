"use client"

import localFont from "next/font/local";
import "./globals.css";
import HamburgerMenu from './menu/menu';
import Link from 'next/link';
import { MenuProvider } from './context/MenuContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-serif">
        <MenuProvider>
          <header className="w-full flex flex-row md:flex-row justify-center py-4 bg-gray-800">
            <div className="flex justify-center items-center md:hidden">
              <HamburgerMenu />
            </div>
            <nav className="hidden md:flex text-white">
              <ul className="flex flex-row gap-8 justify-center">
                <li><Link href="/" className="hover:underline">Taiteilija</Link></li>
                <li><Link href="/hinnasto" className="hover:underline">Soitonopetus</Link></li>
                <li><Link href="/keikat" className="hover:underline">Esiintyjäksi</Link></li>
                <li><Link href="/yhteystiedot" className="hover:underline">Yhteystiedot</Link></li>
              </ul>
            </nav>
          </header>
          <div>
            <img
              src="/pics/kitaraseina.png"
              alt="kuvia kitarasta"
              className="w-full h-[25vh] object-cover"
            />
          </div>
          <main className="flex-1">{children}</main>
          <footer className="w-full flex flex-row justify-center py-4 bg-gray-800 gap-8">
            <p className="text-white flex gap-4">Taiteilija</p>
            <p className="text-white flex gap-4">040-123 4567</p>
            <p className="text-white flex gap-4">taiteilija@mail.com</p>
            <img src="/pics/Instagram_GLyph_Gradient.png" alt="instagram-logo" className = "w-[29px]"></img>
          </footer>
        </MenuProvider>
      </body>
    </html>
  );
}
