"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative min-h-[600px] flex items-center bg-white text-gray-900 pt-24">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png"
          alt="Emerald Owl Productions Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* White overlay for readability */}
      <div className="absolute inset-0 bg-white/70" />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center md:text-left">
            <span className="text-emerald-600">Emerald Owl</span> Productions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-left">
            Unforgettable experiences for your events
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact-us" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Book Now
            </Link>
            <Link 
              href="/our-experiences" 
              className="bg-transparent hover:bg-emerald-50 text-emerald-600 border-2 border-emerald-600 py-3 px-8 rounded-full transition-colors"
            >
              View Our Experiences
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 