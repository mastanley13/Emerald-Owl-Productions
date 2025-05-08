import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Emerald Owl Productions',
  description: 'Meet our team at Emerald Owl Productions',
};

export default function OurTeamPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-emerald-800 text-white py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Our Team</h1>
          </div>
        </section>
        
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-gray-700 text-center mb-8">
              Our talented team brings together professionals from event management, 
              production, and entertainment to create extraordinary experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-emerald-700">Emma Mitchell</h3>
                <p className="text-sm text-gray-600">Founder & CEO</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-emerald-700">James Chen</h3>
                <p className="text-sm text-gray-600">Operations Director</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-emerald-700">Sofia Rodriguez</h3>
                <p className="text-sm text-gray-600">Creative Director</p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <a 
                href="/careers" 
                className="inline-block px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 