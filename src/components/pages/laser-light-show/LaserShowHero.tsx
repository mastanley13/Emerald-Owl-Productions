
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LaserShowHero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[500px] flex items-center bg-black text-white py-20 md:py-28 overflow-hidden">
      {/* Background with light effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Laser beam effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 to-black/70" />
        
        {/* Animated laser beams */}
        <div className="absolute top-0 left-1/4 w-1 h-[200%] bg-emerald-500/30 rotate-[30deg] blur-sm animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-[200%] bg-emerald-400/40 -rotate-[20deg] blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-0 left-2/3 w-1 h-[200%] bg-emerald-600/20 rotate-[15deg] blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-emerald-400 drop-shadow-[0_2px_8px_rgba(0,255,150,0.5)]">Laser Light</span>
              <span className="text-white"> Shows</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl">
              Spectacular, breathtaking laser displays that transform any venue into an immersive wonderland of light and color.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact-us" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-500/30 transform hover:-translate-y-1"
              >
                Book Your Laser Show
              </Link>
              <a 
                href="#laser-show-types-section" 
                className="bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-900/30 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Explore Show Types
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
