"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeroBannerData } from '../../types/homepage';
import SurveyModal from './SurveyModal';

interface HeroBannerProps {
  data: HeroBannerData;
  video?: import('../../types/homepage').VideoHighlightData;
}

export default function HeroBanner({ data, video }: HeroBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  
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
      {/* Main content */}
      <div className="mx-auto px-6 z-10 relative w-full max-w-7xl">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-20 items-center min-h-[400px] transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Left: Heading and Buttons */}
          <div className="flex flex-col items-center md:items-start justify-center w-full h-full">
            <div className="relative inline-block mb-10 md:mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold relative leading-tight">
                <span className="text-emerald-600 relative drop-shadow-md">
                  Creating memories and new traditions through epic events.
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-600 transform scale-x-0 origin-left transition-transform duration-1000 ease-out" style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
                </span>
              </h1>
              <div className="absolute -inset-4 bg-white/70 blur-xl -z-10 rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start mb-6 md:mb-0">
              <button 
                onClick={scrollToExperienceMenu} 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <span className="relative z-10">View Our Menu of Experiences</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-45 transform -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-full"></span>
              </button>
              <button
                onClick={() => setIsSurveyOpen(true)}
                className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-2 border-emerald-600 py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <span className="relative z-10 text-emerald-600 group-hover:text-white transition-colors duration-300 font-bold">
                  Take the First Step
                </span>
                <span className="absolute inset-0 bg-emerald-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
              </button>
              <Link
                href="/american-anniversary-celebration"
                className="relative overflow-hidden py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-bold border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{ display: 'inline-block' }}
              >
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-blue-500 to-blue-700 group-hover:from-red-700 group-hover:to-blue-800" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Celebrate America
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-white to-blue-600 opacity-10 pointer-events-none rounded-full transition-all duration-300 group-hover:opacity-20"></span>
              </Link>
            </div>
          </div>
          {/* Right: Video with caption */}
          {video && video.videoUrl && (
            <div className="flex flex-col items-center md:items-end w-full h-full">
              <div className="mb-4 text-lg font-semibold text-emerald-700 text-center md:text-right tracking-wide drop-shadow-sm">See Our Experiences In Action</div>
              <div className="w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/80 bg-black p-2 md:p-0">
                <iframe
                  src={(() => {
                    try {
                      const url = new URL(video.videoUrl);
                      url.searchParams.set('autoplay', '1');
                      if (url.hostname.includes('vimeo.com')) {
                        url.searchParams.set('muted', '1');
                        url.searchParams.delete('mute');
                      } else {
                        url.searchParams.set('mute', '1');
                        url.searchParams.delete('muted');
                      }
                      return url.toString();
                    } catch (e) {
                      const sep = video.videoUrl.includes('?') ? '&' : '?';
                      if (video.videoUrl.includes('vimeo.com')) {
                        return `${video.videoUrl}${sep}autoplay=1&muted=1`;
                      } else {
                        return `${video.videoUrl}${sep}autoplay=1&mute=1`;
                      }
                    }
                  })()}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                  title={video.title || 'Emerald Owl Productions Video'}
                  style={{ background: '#000' }}
                />
              </div>
            </div>
          )}
        </div>
            
            {/* Award badge strip */}
            <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4">
              {[ 
                { text: "2022 & 2025 NCAF&E Supporting Member of the Year", url: "#", img: "/images/NCAF&E.jpg" },
                { text: "2022 Best NC Downtown Event – Electric Light Fantasy", url: "#", img: "/images/Electric Light Fantasy.png" },
                { text: "Better Business Bureau A+ rating", url: "#", img: "/images/BBB A+ Rating.jpeg" }
                // Add fourth award once details are provided
              ].map((award, index) => (
                <a href={award.url} key={index} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center text-center transition-transform hover:scale-105">
                  {/* Badge image frame */}
                  <div className="w-20 h-20 bg-white rounded-full mb-2 flex items-center justify-center group-hover:shadow-lg border-2 border-gray-200 overflow-hidden">
                    <Image 
                      src={award.img} 
                      alt={award.text} 
                      width={60} 
                      height={60} 
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-emerald-600 max-w-[120px]">{award.text}</span>
                </a>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm">
              {data.trustIndicators
                .filter(indicator => indicator !== "Premium Experience")
                .map((indicator, index) => (
                  <span key={index} className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{indicator}</span>
                  </span>
                ))}
            </div>
          </div>
        {/* End main content container */}
      {/* Survey Modal */}
      <SurveyModal 
        isOpen={isSurveyOpen} 
        onClose={() => setIsSurveyOpen(false)} 
      />
    </section>
  );
}
