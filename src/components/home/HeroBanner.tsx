
"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex items-center bg-white text-gray-900 pt-24 md:pt-28 lg:pt-32">
      {/* Background image with proper sizing */}
      <div className="absolute inset-0 overflow-hidden pt-16 md:pt-20">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image 
            src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png"
            alt="Emerald Owl Productions Background"
            width={600}
            height={360}
            className="opacity-20 object-contain"
            sizes="(max-width: 768px) 90vw, 70vw"
            priority
            style={{ width: 'auto', height: 'auto', maxWidth: '90%' }}
          />
        </div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-emerald-600">Emerald Owl</span> Productions
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-700">
              Unforgettable experiences for your events
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
      </div>
    </section>
  );
}
