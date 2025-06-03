"use client";

import React from 'react';
import Link from 'next/link'; // Keep Link if some CTAs might be links, or remove if all are buttons
import Image from 'next/image'; // If decorative images are part of this component

// Define a type for the props. Adjust based on what data.hero and sub-copy are.
// Assuming data.hero has title and subtitle, and cta is handled internally or passed.
interface ExperienceHeadlineProps {
  heroData: {
    title: string;
    subtitle?: string;
    // If CTA details come from data, include them here
    // ctaText?: string;
    // ctaUrl?: string; // Or an onClick handler
  };
  // Example of passing a sub-copy if it's dynamic and not part of heroData.subtitle
  // subCopy?: string; 
}

export default function ExperienceHeadline({ heroData }: ExperienceHeadlineProps) {
  // The CTA currently has a placeholder onClick. 
  // This can be made more dynamic if needed, e.g., by passing a prop.
  const handleCtaClick = () => {
    console.log('"Take the First Step" button clicked - placeholder action');
    // Potentially scroll to a specific section, or other actions.
    // Example: document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 md:py-24 flex items-center bg-gradient-to-b from-black via-black to-emerald-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-emerald-950/80 backdrop-blur-[2px]" />
        {/* Decorative elements - these could also be passed as props or be static */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70 animate-pulse"></div>
        <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-emerald-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-emerald-400 relative drop-shadow-md">
              {heroData.title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
            {heroData.subtitle || "Experience the extraordinary with us."}
          </p>
          {/* CTA Button */}
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={handleCtaClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform"
            >
              Take the First Step
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 