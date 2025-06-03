import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fundraisers | Emerald Owl Productions',
  description: 'Revolutionary fundraising program launching soon. Be the first to know when our game-changing event fundraising solutions are available.',
};

export default function FundraisersPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-[calc(100vh-160px)]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full mb-8">
                <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-emerald-700 text-sm font-semibold tracking-wide">COMING SOON</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Revolutionary
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
                  Fundraising Program
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-6 max-w-3xl mx-auto">
                We&apos;re developing an innovative fundraising solution that will transform how organizations raise money through unforgettable events.
              </p>

              <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
                Be among the first to access our game-changing program that combines spectacular entertainment with powerful fundraising results.
              </p>

              {/* CTA Button */}
              <Link 
                href="/contact-us" 
                className="group inline-flex items-center justify-center px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12h0z" />
                </svg>
                Get Alert When Ready!
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Preview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  What to Expect
                </h2>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="text-center p-8 bg-slate-50 rounded-2xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">High-Impact Events</h3>
                  <p className="text-slate-600">
                    Spectacular entertainment experiences that create memorable moments and inspire generous giving
                  </p>
                </div>

                <div className="text-center p-8 bg-slate-50 rounded-2xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Proven Results</h3>
                  <p className="text-slate-600">
                    Data-driven strategies and engaging formats that consistently exceed fundraising targets
                  </p>
                </div>

                <div className="text-center p-8 bg-slate-50 rounded-2xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Complete Support</h3>
                  <p className="text-slate-600">
                    Full-service planning, execution, and follow-up to ensure your fundraising success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notification CTA Section */}
        <section className="py-20 bg-emerald-600">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Be First in Line
              </h2>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Join our priority notification list and be among the first organizations to access our revolutionary fundraising program when it launches.
              </p>
              <Link 
                href="/contact-us" 
                className="group inline-flex items-center justify-center px-12 py-5 bg-white text-emerald-600 font-bold text-lg rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12h0z" />
                </svg>
                Get Alert When Ready!
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 