"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function AmericaBanner() {
  return (
    <section className="relative bg-zinc-900 py-8 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(45deg, #bf0a30, #002868)',
          backgroundSize: '300% 300%',
          animation: 'gradientBG 10s ease infinite'
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              America's 250th Anniversary
            </h2>
            <p className="text-lg text-white/80 mb-4">
              Experience a Revolutionary Light Show Celebration!
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap justify-center">
            <Link 
              href="/american-anniversary-celebration"
              className="bg-white hover:bg-white/90 text-blue-800 font-bold py-2 px-6 rounded-full transition-colors inline-flex items-center"
            >
              <span>Discover More</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Custom animation for the gradient effect */}
      <style jsx global>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
} 