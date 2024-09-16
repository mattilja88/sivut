'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useMenu } from '../context/MenuContext';

const HamburgerMenu = () => {
    const { isOpen, toggleMenu } = useMenu();

  return (
    <div className="relative">
      <button
        className="flex flex-col items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        <div className={`w-6 h-0.5 bg-white mb-1 transition-transform ${isOpen ? ' rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? ' -rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>
      <nav className={`fixed left-1/2 transform -translate-x-1/2 top-16 w-48 bg-white shadow-lg rounded-lg ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center p-4">
          <li className="py-2"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="py-2"><Link href="/hinnasto" className="hover:underline">Soitonopetus</Link></li>
          <li className="py-2"><Link href="/keikat" className="hover:underline">Esiintyjäksi</Link></li>
          <li className="py-2"><Link href="/yhteystiedot" className="hover:underline">Yhteystiedot</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
