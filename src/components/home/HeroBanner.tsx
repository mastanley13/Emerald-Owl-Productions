"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeroBannerData } from '../../types/homepage';

interface HeroBannerProps {
  data: HeroBannerData;
}

export default function HeroBanner({ data }: HeroBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToExperiences = () => {
    const experiencesSection = document.getElementById('our-experiences');
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperienceMenu = () => {
    const experienceMenuSection = document.getElementById('experience-menu');
    if (experienceMenuSection) {
      experienceMenuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[650px] lg:min-h-[700px] flex items-center bg-gradient-to-b from-white via-white to-emerald-50 text-gray-900 pt-36 md:pt-28 lg:pt-32 overflow-hidden">
      {/* Background with darker overlay for better text contrast */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Darker overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-emerald-50/80 backdrop-blur-[2px]" />
        
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-100/40 opacity-70 animate-pulse"></div>
        <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-emerald-200/30 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-100/40 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
        
        {/* Animated logo */}
        <div className="relative h-full w-full flex items-center justify-center">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-15 scale-100' : 'opacity-0 scale-90'}`}>
            <Image 
              src={data.logo.url}
              alt={data.logo.alt}
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
            <div className="relative inline-block mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold relative">
                <span className="text-emerald-600 relative drop-shadow-md">
                  {data.title.main}
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-600 transform scale-x-0 origin-left transition-transform duration-1000 ease-out" style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
                </span>
                <span className="block mt-2 text-gray-800 md:mt-0 md:ml-2 md:inline drop-shadow-md">{data.title.secondary}</span>
              </h1>
              {/* Enhanced background glow for heading */}
              <div className="absolute -inset-4 bg-white/70 blur-xl -z-10 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-gray-700 font-light max-w-2xl relative">
              {data.subtitle}
            </p>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <Link 
                href={data.ctaButtons.primary.url} 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform relative overflow-hidden group"
              >
                <span className="relative z-10">{data.ctaButtons.primary.text}</span>
                {/* Subtle shimmer effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-45 transform -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-full"></span>
              </Link>
              <button
                onClick={scrollToExperienceMenu}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-amber-300/60 hover:-translate-y-1 transform relative overflow-hidden group"
              >
                <span className="relative z-10">Plan Your Event</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-45 transform -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-full"></span>
              </button>
              <button
                onClick={scrollToExperiences}
                className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-2 border-emerald-600 py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="relative z-10 text-emerald-600 group-hover:text-white transition-colors duration-300 font-bold">{data.ctaButtons.secondary.text}</span>
                <span className="absolute inset-0 bg-emerald-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm">
              {data.trustIndicators.map((indicator, index) => (
                <span key={index} className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{indicator}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
