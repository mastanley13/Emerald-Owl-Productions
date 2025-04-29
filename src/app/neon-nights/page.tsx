
"use client";

import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function NeonNightsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-black via-black to-purple-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-purple-950/80 backdrop-blur-[2px]" />
            
            {/* Decorative neon elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-pink-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-blue-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-purple-400 relative drop-shadow-md">
                  Neon Nights
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                Glow in the dark party experiences that transform any venue into a vibrant wonderland
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href="/contact-us" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-purple-300/60 hover:-translate-y-1 transform"
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
              <span className="text-purple-600">Full Page Coming Soon</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-12">
              We're currently updating this page with detailed information about our Neon Nights experiences.
              Please check back soon or contact us directly for information about booking a Neon Nights event.
            </p>
            <Link 
              href="/contact-us" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
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
