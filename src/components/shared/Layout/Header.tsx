"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md w-full py-4 px-8 fixed top-0 shadow-lg z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png"
            alt="Emerald Owl Productions"
            width={150}
            height={50}
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="block lg:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Navigation */}
        <nav
          className={`absolute left-0 top-full w-full bg-white/90 backdrop-blur-md overflow-hidden transition-[max-height] duration-500 lg:overflow-visible lg:static lg:max-h-full ${
            menuOpen ? 'max-h-[90vh]' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col lg:flex-row justify-end items-start lg:items-center gap-6 py-4 lg:py-0">
            <li>
              <Link href="/" className="text-emerald-600 uppercase hover:text-emerald-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/laser-light-show" className="text-emerald-600 uppercase hover:text-emerald-700">
                Laser Light Show
              </Link>
            </li>
            <li>
              <Link href="/neon-nights" className="text-emerald-600 uppercase hover:text-emerald-700">
                Neon Nights
              </Link>
            </li>
            <li>
              <Link href="/foam-parties" className="text-emerald-600 uppercase hover:text-emerald-700">
                Foam Parties
              </Link>
            </li>
            <li>
              <Link href="/water-games" className="text-emerald-600 uppercase hover:text-emerald-700">
                Water Games
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-emerald-600 uppercase hover:text-emerald-700">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 