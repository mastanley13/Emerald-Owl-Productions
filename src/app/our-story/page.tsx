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
              <p className="text-lg md:text-xl mb-6 text-gray-100 font-light max-w-3xl text-center md:text-left">
                The journey of Emerald Owl Productions: From a student initiative to epic event experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-emerald-700 mb-8">The Beginning</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The concept of Emerald Owl Productions, Inc. was formed by students at Cedar Creek Middle School 
                in Youngsville, North Carolina who wanted to know how they could help in the days just after <strong>9/11/2001</strong>.
              </p>
              <p className="text-gray-700 mb-5 font-medium">
                The students had three ideas that all proved to be true:
              </p>
              <ul className="list-disc list-outside space-y-3 mb-8 pl-6 text-gray-700 leading-relaxed">
                <li>Students need more fun, safe, interactive experiences to keep out of trouble.</li>
                <li>If students are provided a meaningful way to get involved and feel they matter, they will respond.</li>
                <li>These experiences create positive memories, teach valuable lessons, and can be fantastic fundraisers.</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These ideas led to the creation of a Dance Marathon at Cedar Creek, which stemmed from the <strong className="text-emerald-600">Penn State University THON</strong>, 
                the largest student-run charity event in the world!
              </p>
              
              <div className="my-10 border-t border-emerald-200"></div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Since the <strong className="text-emerald-600">Penn State Dance Marathon</strong> began in 1973, dance marathons have started at universities, high schools, 
                and middle schools throughout the country. The Dance Marathon model is results oriented, an opportunity to give back, and fun.
              </p>
              <p className="text-gray-700 mb-8 italic leading-relaxed">
                From our nation&apos;s largest tragedy was born adolescents wanting to make a positive difference, give back to others, 
                and find purpose in their own lives.
              </p>
              
              <div className="my-10 border-t border-emerald-200"></div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Over a span of 13 years, middle school students raised <strong className="text-emerald-700 text-lg">$151,199.72 PROFIT</strong> for various charities. 
                Students and staff learned that an event can be more fulfilling than selling products.
              </p>
              <p className="text-gray-700 mb-10 leading-relaxed">
                <strong>Emerald Owl Productions</strong> was founded in <strong>2015</strong> to replicate the success of the Dance Marathon and to keep the vision of the youth alive 
                by sharing the gift of service and memories via epic events to others.
              </p>

              <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">Our Mission</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed text-center">
                  Our mission is to help our partners build connections with their customers by creating life long memories through epic events.
                </p>
                
                <h2 className="text-3xl font-bold text-emerald-700 mb-6 mt-10 text-center">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                  Our vision is to create unique, interactive, and memorable experiences that unite people of all ages and backgrounds. 
                  If we focus on giving participants the best experience possible, our partner&apos;s fundraising goals will take care of themselves.
                </p>
              </div>

              <div className="mt-16">
                <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center">Our Goals</h2>
                <ul className="space-y-5 text-gray-700">
                  <li className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-emerald-100 transition-shadow duration-300">
                    <svg className="w-7 h-7 text-emerald-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="leading-relaxed"><strong className="text-emerald-600">Create positive memories</strong> for our partners and their participants.</span>
                  </li>
                  <li className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-emerald-100 transition-shadow duration-300">
                    <svg className="w-7 h-7 text-emerald-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="leading-relaxed"><strong className="text-emerald-600">Create a superior experience</strong> that is interactive, family friendly, and fun for all ages.</span>
                  </li>
                  <li className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-emerald-100 transition-shadow duration-300">
                    <svg className="w-7 h-7 text-emerald-500 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                    <span className="leading-relaxed"><strong className="text-emerald-600">Help organizations raise money</strong> by building a self sustaining event -- We do this by adding incredible value to events, which leads to increased future participation profits.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 