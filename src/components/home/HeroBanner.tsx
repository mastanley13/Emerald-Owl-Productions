
"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex items-center bg-white text-gray-900 pt-24 md:pt-36 lg:pt-40">
      {/* Background image with proper sizing */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png"
          alt="Emerald Owl Productions Background"
          fill
          className="object-contain md:object-scale-down opacity-20 max-w-[60%] md:max-w-[50%] mx-auto"
          sizes="(max-width: 768px) 90vw, 50vw"
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
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
