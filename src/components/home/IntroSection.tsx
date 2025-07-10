import React from 'react';

export default function IntroSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Welcome to <span className="text-emerald-600">The EOP Experience</span>
          </h2>
          
          {/* Main Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            At Emerald Owl Productions, we deliver interactive, high-energy entertainment that 
            transforms any gathering into a lasting memory. Whether you&apos;re looking to re-energize 
            an existing event or create something entirely new, <strong>THE EOP EXPERIENCE</strong> is 
            fully customizable to match your vision, goals, and budget.
          </p>
          
          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* All Ages */}
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">All Ages Welcome</h3>
              <p className="text-gray-600">
                Our experiences are designed for elementary, middle, and high school students, 
                21+ crowds, senior communities, and often all of the above together!
              </p>
            </div>
            
            {/* Any Weather */}
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Any Weather, Any Venue</h3>
              <p className="text-gray-600">
                We produce events indoors or outdoors, in summer sunshine, rain, or even winter snow. 
                Your venue, your weather, your perfect event.
              </p>
            </div>
            
            {/* Mobile Service */}
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We Come to You</h3>
              <p className="text-gray-600">
                Based on the Crystal Coast in Emerald Isle, NC, we&apos;ve produced events from 
                North Carolina to Pittsburgh to Palo Alto, California. Wherever you are, we&apos;ll bring the show!
              </p>
            </div>
          </div>
          
          {/* Experience Examples */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Creating Unforgettable Memories</h3>
            <p className="text-gray-700 leading-relaxed">
              Whether you&apos;re dancing to your favorite 80s hits at <strong>Neon Nights</strong>, 
              enjoying a holiday laser show from your car, diving into a foam-filled water battle, 
              or getting splashed (or even drenched) in color with our <strong>Dripping in Confidence</strong> initiative, 
              your guests will go home with a positive memory that lasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}