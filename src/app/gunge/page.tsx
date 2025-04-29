
"use client";

import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function GungePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-black via-black to-green-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-green-950/80 backdrop-blur-[2px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-yellow-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-green-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <Link 
                href="/dripping-in-confidence"
                className="inline-flex items-center text-gray-300 hover:text-green-400 mb-4 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Dripping in Confidence
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-green-400 relative drop-shadow-md">
                  Gunge
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                Exciting and messy fun experiences with colorful slime
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href="/contact-us" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-green-300/60 hover:-translate-y-1 transform"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Message */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Full Page Coming Soon</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-12">
              We're currently updating this page with detailed information about our Gunge experiences.
              Please check back soon or contact us directly for information about booking a Gunge event.
            </p>
            <Link 
              href="/contact-us" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
            >
              Contact Us for Details
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
