"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md w-full py-3 px-4 md:px-8 fixed top-0 shadow-lg z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative">
            <Image
              src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png"
              alt="Emerald Owl Productions"
              width={120}
              height={40}
              style={{ height: 'auto', width: 'auto', maxHeight: '40px' }}
              priority
              className="object-contain"
            />
          </div>
          <div className="hidden md:block">
            <h1 className="text-lg font-bold">
              <span className="text-emerald-600">Emerald Owl</span> Productions
            </h1>
            <p className="text-xs text-gray-600">Unforgettable experiences for your events</p>
          </div>
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="block lg:hidden p-2 rounded-md bg-emerald-600 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Navigation */}
        <nav
          className={`absolute left-0 top-full w-full bg-white/95 shadow-lg backdrop-blur-md overflow-hidden transition-all duration-300 lg:shadow-none lg:overflow-visible lg:static lg:max-h-full lg:w-auto ${
            menuOpen ? 'max-h-[90vh] border-b border-emerald-600' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col lg:flex-row justify-end items-start lg:items-center gap-2 lg:gap-4 py-4 lg:py-0 px-4 lg:px-0">
            <li className="w-full lg:w-auto">
              <Link 
                href="/" 
                className="block py-2 px-3 lg:px-2 text-emerald-700 text-sm font-medium uppercase hover:text-emerald-900 hover:bg-emerald-50 lg:hover:bg-transparent rounded-md w-full lg:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link 
                href="/laser-light-show" 
                className="block py-2 px-3 lg:px-2 text-emerald-700 text-sm font-medium uppercase hover:text-emerald-900 hover:bg-emerald-50 lg:hover:bg-transparent rounded-md w-full lg:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Laser Light Show
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link 
                href="/neon-nights" 
                className="block py-2 px-3 lg:px-2 text-emerald-700 text-sm font-medium uppercase hover:text-emerald-900 hover:bg-emerald-50 lg:hover:bg-transparent rounded-md w-full lg:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Neon Nights
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link 
                href="/foam-parties" 
                className="block py-2 px-3 lg:px-2 text-emerald-700 text-sm font-medium uppercase hover:text-emerald-900 hover:bg-emerald-50 lg:hover:bg-transparent rounded-md w-full lg:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Foam Parties
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link 
                href="/water-games" 
                className="block py-2 px-3 lg:px-2 text-emerald-700 text-sm font-medium uppercase hover:text-emerald-900 hover:bg-emerald-50 lg:hover:bg-transparent rounded-md w-full lg:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Water Games
              </Link>
            </li>
            <li className="w-full lg:w-auto mt-2 lg:mt-0">
              <Link 
                href="/contact-us" 
                className="block py-2 px-4 bg-emerald-600 text-white text-sm font-medium uppercase hover:bg-emerald-700 rounded-md w-full lg:w-auto text-center"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Title - Only visible on small screens */}
      <div className="text-center mt-1 lg:hidden">
        <h1 className="text-sm font-bold">
          <span className="text-emerald-600">Emerald Owl</span> Productions
        </h1>
        <p className="text-xs text-gray-600">Unforgettable experiences for your events</p>
      </div>
    </header>
  );
} 