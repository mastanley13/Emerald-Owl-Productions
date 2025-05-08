import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Story | Emerald Owl Productions',
  description: 'Learn about the history, mission, and vision of Emerald Owl Productions',
};

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[300px] flex items-center bg-gradient-to-br from-emerald-800 to-emerald-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-emerald-950/70 backdrop-blur-[1px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-emerald-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
                <span className="text-emerald-300 relative drop-shadow-md">
                  Our Story
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-100 font-light max-w-2xl text-center md:text-left">
                How we became the region's premier event production company
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-emerald-700 mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  At Emerald Owl Productions, our mission is to create unforgettable, imaginative,
                  and inclusive event experiences that bring joy and inspiration to communities 
                  of all kinds. We believe that every person deserves access to high-quality entertainment
                  that sparks wonder, creativity, and connection.
                </p>
                <p className="text-gray-700 mb-6">
                  We are committed to delivering exceptional service with professionalism, integrity,
                  and a genuine passion for bringing people together through innovative and immersive
                  experiences. Through our diverse range of offerings—from sensory-friendly events to
                  high-energy productions—we strive to transform ordinary gatherings into extraordinary
                  memories.
                </p>
                
                <h2 className="text-3xl font-bold text-emerald-700 mb-6 mt-10">Our Vision</h2>
                <p className="text-gray-700">
                  We envision a world where communities are strengthened through shared experiences
                  of joy and wonder. Emerald Owl Productions aims to be recognized as the leading 
                  creator of inclusive, innovative, and memorable event experiences that not only 
                  entertain but also inspire positive change in how people connect with one another.
                </p>
              </div>
              
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-w-4 aspect-h-3 w-full">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div className="p-8 text-center">
                      <div className="mx-auto w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-700 mb-2">Our Values</h3>
                      <ul className="text-left space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>Inclusivity:</strong> Creating experiences accessible to all</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>Innovation:</strong> Constantly evolving our offerings</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>Quality:</strong> Delivering excellence in every detail</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>Community:</strong> Strengthening bonds through shared joy</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>Sustainability:</strong> Environmentally conscious practices</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-emerald-700 mb-12">
              Our Journey
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {/* 2016 - Foundation */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-emerald-200 bg-emerald-600 z-10"></div>
                  
                  <div className="relative pl-6 md:w-1/2 md:ml-auto md:pl-0 md:pr-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold mb-3">
                        2016
                      </span>
                      <h3 className="text-xl font-bold text-emerald-700 mb-2">
                        Foundation
                      </h3>
                      <p className="text-gray-700">
                        Emerald Owl Productions was founded with a vision to create innovative and 
                        inclusive event experiences. Starting with just three team members and a 
                        single foam machine, we hosted our first community event that brought 
                        together over 100 people.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 2018 - Growth */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-emerald-200 bg-emerald-600 z-10"></div>
                  
                  <div className="relative pr-6 md:w-1/2 md:ml-0 md:pl-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold mb-3">
                        2018
                      </span>
                      <h3 className="text-xl font-bold text-emerald-700 mb-2">
                        Expansion
                      </h3>
                      <p className="text-gray-700">
                        We expanded our offerings to include laser light shows and sensory-friendly 
                        experiences, growing our team to 10 dedicated members. This year marked our 
                        first large-scale event for over 500 attendees and the beginning of our 
                        partnerships with local schools and community centers.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 2020 - Innovation */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-emerald-200 bg-emerald-600 z-10"></div>
                  
                  <div className="relative pl-6 md:w-1/2 md:ml-auto md:pl-0 md:pr-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold mb-3">
                        2020
                      </span>
                      <h3 className="text-xl font-bold text-emerald-700 mb-2">
                        Pandemic Pivot
                      </h3>
                      <p className="text-gray-700">
                        Facing the challenges of the global pandemic, we pivoted to virtual and 
                        socially-distanced events. We developed innovative solutions like drive-in 
                        laser shows and outdoor foam parties that maintained safety while still 
                        delivering extraordinary experiences during difficult times.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 2022 - Today */}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-emerald-200 bg-emerald-600 z-10"></div>
                  
                  <div className="relative pr-6 md:w-1/2 md:ml-0 md:pl-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold mb-3">
                        2022 - Present
                      </span>
                      <h3 className="text-xl font-bold text-emerald-700 mb-2">
                        Current Chapter
                      </h3>
                      <p className="text-gray-700">
                        Today, Emerald Owl Productions has grown to become a regional leader in event 
                        production with a team of 25 professionals. We now offer a comprehensive range 
                        of experiences and continue to innovate with new technologies and event concepts. 
                        Our annual calendar includes over 200 events, reaching thousands of participants 
                        across multiple states.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Goals Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-emerald-700 mb-8">
                Looking to the Future
              </h2>
              <p className="text-gray-700 mb-10">
                As we continue to grow, our commitment to creating joyful, inclusive experiences remains 
                at the heart of everything we do. We're excited about expanding our reach, developing new 
                innovative experiences, and making a positive impact in more communities across the country.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-700 mb-2">
                    National Expansion
                  </h3>
                  <p className="text-gray-600">
                    Bringing our unique experiences to communities across all 50 states by 2026.
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-700 mb-2">
                    Innovation Hub
                  </h3>
                  <p className="text-gray-600">
                    Launching our dedicated R&D facility to develop next-generation event technologies.
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-700 mb-2">
                    Community Foundation
                  </h3>
                  <p className="text-gray-600">
                    Establishing a non-profit arm to bring our experiences to underserved communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 