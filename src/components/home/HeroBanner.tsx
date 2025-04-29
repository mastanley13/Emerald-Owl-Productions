
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[650px] lg:min-h-[700px] flex items-center bg-gradient-to-b from-white via-white to-emerald-50 text-gray-900 pt-24 md:pt-28 lg:pt-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-50/30" />
        
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-100/40 opacity-70"></div>
        <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-emerald-200/30 opacity-60"></div>
        <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-100/40 opacity-70"></div>
        
        {/* Animated logo */}
        <div className="relative h-full w-full flex items-center justify-center">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-15 scale-100' : 'opacity-0 scale-90'}`}>
            <Image 
              src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png"
              alt="Emerald Owl Productions Background"
              width={1000}
              height={600}
              className="object-contain"
              sizes="100vw"
              priority
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto md:mx-0">
          <div className={`text-center md:text-left transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative inline-block">
              <span className="text-emerald-600 relative">
                Emerald Owl
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-600 transform scale-x-0 origin-left transition-transform duration-1000 ease-out" style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
              </span>
              <span className="text-gray-800 ml-2">Productions</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-gray-700 font-light max-w-2xl">
              Creating <span className="text-emerald-600 font-medium">unforgettable experiences</span> for your most important events
            </p>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <Link 
                href="/contact-us" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/40 hover:-translate-y-1 transform"
              >
                Book Now
              </Link>
              <Link 
                href="/our-experiences" 
                className="group relative overflow-hidden bg-white border-2 border-emerald-600 py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="relative z-10 text-emerald-600 group-hover:text-white transition-colors duration-300 font-bold">View Our Experiences</span>
                <span className="absolute inset-0 bg-emerald-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>5-Star Rated</span>
              </span>
              <span className="h-4 w-px bg-gray-300 mx-2"></span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Nationwide Service</span>
              </span>
              <span className="h-4 w-px bg-gray-300 mx-2"></span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Premium Experience</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 mb-2">Discover More</span>
        <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
