"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md w-full py-4 px-4 md:px-8 fixed top-0 shadow-lg z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png"
            alt="Emerald Owl Productions"
            width={150}
            height={50}
            style={{ height: 'auto' }}
            priority
          />
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
          className={`absolute left-0 top-full w-full bg-white/90 shadow-lg backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none transition-all duration-300 lg:shadow-none lg:overflow-visible lg:static lg:max-h-full lg:w-auto ${
            menuOpen ? 'max-h-[90vh] border-b border-emerald-600 overflow-y-auto' : 'max-h-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col lg:flex-row justify-end items-start lg:items-center gap-2 lg:gap-6 py-4 lg:py-0 px-4 lg:px-0">
            {/* HOME */}
            <li className="w-full lg:w-auto">
              <Link 
                href="/" 
                className="block py-2 px-3 lg:px-2 text-emerald-700 font-medium uppercase hover:text-emerald-900 hover:bg-emerald-50 lg:hover:bg-transparent rounded-md w-full lg:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            
            {/* OUR EXPERIENCES - Dropdown */}
            <li className="w-full lg:w-auto group relative">
              <Link 
                href="/our-experiences" 
                className="block py-2 px-3 lg:px-2 text-emerald-700 font-medium uppercase hover:text-emerald-900 hover:bg-emerald-50 lg:hover:bg-transparent rounded-md w-full lg:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Our Experiences
              </Link>
              <div className="hidden lg:group-hover:block absolute left-0 top-full backdrop-blur-md shadow-lg rounded-md min-w-[220px] z-50 lg:bg-white/90">
                <div className="py-2">
                  <Link 
                    href="/laser-light-show" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Laser Light Show
                  </Link>
                  <Link 
                    href="/neon-nights" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Neon Nights
                  </Link>
                  {/* Sub-menu for Neon Nights - Desktop */}
                  <div className="pl-4 border-l border-emerald-200 ml-2">
                    <Link 
                      href="/glow-foam-paint" 
                      className="block px-3 py-1.5 text-sm text-emerald-600 hover:bg-emerald-100 hover:text-emerald-800"
                      onClick={() => setMenuOpen(false)}
                    >
                      ↳ Glow Foam & Paint
                    </Link>
                    <Link 
                      href="/glow-sports" 
                      className="block px-3 py-1.5 text-sm text-emerald-600 hover:bg-emerald-100 hover:text-emerald-800"
                      onClick={() => setMenuOpen(false)}
                    >
                      ↳ Glow Sports
                    </Link>
                  </div>
                  <Link 
                    href="/foam-parties" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Foam Parties & Water Battles
                  </Link>
                  <Link 
                    href="/color-run" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Color Run Experience
                  </Link>
                  <Link 
                    href="/water-games" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Water Games
                  </Link>
                  <Link 
                    href="/dripping-in-confidence" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Dripping in Confidence
                  </Link>
                  <Link 
                    href="/gunge" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Gunge
                  </Link>
                  <Link 
                    href="/sensory-friendly-experiences" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sensory Friendly Experiences
                  </Link>
                </div>
              </div>
              
              {/* Mobile dropdown items */}
              <div className="lg:hidden pl-4 mt-1 space-y-1">
                {menuOpen && (
                  <React.Fragment>
                    <Link 
                      href="/laser-light-show" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Laser Light Show
                    </Link>
                    <Link 
                      href="/neon-nights" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Neon Nights
                    </Link>
                    {/* Sub-menu for Neon Nights - Mobile */}
                    <div className="pl-6">
                      <Link 
                        href="/glow-foam-paint" 
                        className="block py-1 text-sm text-emerald-600 hover:bg-emerald-100 rounded-md"
                        onClick={() => setMenuOpen(false)}
                      >
                        ↳ Glow Foam & Paint
                      </Link>
                      <Link 
                        href="/glow-sports" 
                        className="block py-1 text-sm text-emerald-600 hover:bg-emerald-100 rounded-md"
                        onClick={() => setMenuOpen(false)}
                      >
                        ↳ Glow Sports
                      </Link>
                    </div>
                    <Link 
                      href="/foam-parties" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Foam Parties & Water Battles
                    </Link>
                    <Link 
                      href="/color-run" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Color Run Experience
                    </Link>
                    <Link 
                      href="/water-games" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Water Games
                    </Link>
                    <Link 
                      href="/dripping-in-confidence" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Dripping in Confidence
                    </Link>
                    <Link 
                      href="/gunge" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Gunge
                    </Link>
                    <Link 
                      href="/sensory-friendly-experiences" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Sensory Friendly Experiences
                    </Link>
                  </React.Fragment>
                )}
              </div>
            </li>
            
            {/* OUR INITIATIVES */}
            <li className="w-full lg:w-auto">
              <Link 
                href="/our-initiatives" 
                className="block py-2 px-3 lg:px-2 text-emerald-700 font-medium uppercase hover:text-emerald-900 hover:bg-emerald-50 lg:hover:bg-transparent rounded-md w-full lg:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Our Initiatives
              </Link>
            </li>
            
            {/* SPECIAL OCCASIONS - Dropdown */}
            <li className="w-full lg:w-auto group relative">
              <Link 
                href="/special-occasions" 
                className="block py-2 px-3 lg:px-2 text-emerald-700 font-medium uppercase hover:text-emerald-900 hover:bg-emerald-50 lg:hover:bg-transparent rounded-md w-full lg:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Special Occasions
              </Link>
              <div className="hidden lg:group-hover:block absolute left-0 top-full backdrop-blur-md shadow-lg rounded-md min-w-[220px] z-50 lg:bg-white/90">
                <div className="py-2">
                  <Link 
                    href="/holiday-events" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Holiday Events
                  </Link>
                  <Link 
                    href="/american-anniversary-celebration" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    America&apos;s 250th Anniversary
                  </Link>
                  <Link 
                    href="/fundraisers" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Fundraisers
                  </Link>
                  <Link 
                    href="/emmy-the-owl" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Emmy The Owl
                  </Link>
                </div>
              </div>
              
              {/* Mobile dropdown items */}
              <div className="lg:hidden pl-4 mt-1 space-y-1">
                {menuOpen && (
                  <React.Fragment>
                    <Link 
                      href="/holiday-events" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Holiday Events
                    </Link>
                    <Link 
                      href="/american-anniversary-celebration" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      America&apos;s 250th Anniversary
                    </Link>
                    <Link 
                      href="/fundraisers" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Fundraisers
                    </Link>
                    <Link 
                      href="/emmy-the-owl" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Emmy The Owl
                    </Link>
                  </React.Fragment>
                )}
              </div>
            </li>
            
            {/* CONTACT US */}
            <li className="w-full lg:w-auto">
              <Link 
                href="/contact-us" 
                className="block py-2 px-3 lg:px-2 text-emerald-700 font-medium uppercase hover:text-emerald-900 hover:bg-emerald-50 lg:hover:bg-transparent rounded-md w-full lg:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            
            {/* MORE - Dropdown */}
            <li className="w-full lg:w-auto group relative">
              <Link 
                href="#" 
                className="block py-2 px-3 lg:px-2 text-emerald-700 font-medium uppercase hover:text-emerald-900 hover:bg-emerald-50 lg:hover:bg-transparent rounded-md w-full lg:w-auto"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setMenuOpen(menuOpen);
                }}
              >
                More...
              </Link>
              <div className="hidden lg:group-hover:block absolute right-0 top-full backdrop-blur-md shadow-lg rounded-md min-w-[180px] z-50 lg:bg-white/90">
                <div className="py-2">
                  <Link 
                    href="/our-story" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Our Story
                  </Link>
                  <Link 
                    href="/our-team" 
                    className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                </div>
              </div>
              
              {/* Mobile dropdown items */}
              <div className="lg:hidden pl-4 mt-1 space-y-1">
                {menuOpen && (
                  <React.Fragment>
                    <Link 
                      href="/our-story" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Our Story
                    </Link>
                    <Link 
                      href="/our-team" 
                      className="block py-1.5 px-3 text-emerald-700 hover:bg-emerald-50 rounded-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Our Team
                    </Link>
                  </React.Fragment>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 