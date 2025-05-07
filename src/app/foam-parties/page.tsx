"use client";

import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { getFoamPartiesData } from '../../services/contentService';
import { parseFoamPartiesData } from '../../utils/foamPartiesParser';

// Hardcoded fallback data for critical error cases
const FALLBACK_DATA = parseFoamPartiesData({
  title: 'Foam Parties & Color Run | Emerald Owl Productions',
  meta: {
    description: 'Create high-energy, fun-filled foam parties and color run events for any occasion!',
    keywords: ''
  },
  resources: [
    {
      type: 'image',
      url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
      alt: 'Foam Parties',
      width: '',
      height: ''
    }
  ]
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    // Fetch the data
    const data = await getFoamPartiesData();
    
    return {
      title: data.meta.title,
      description: data.meta.description,
      keywords: data.meta.keywords,
    };
  } catch (error) {
    // Fallback metadata in case of error
    return {
      title: FALLBACK_DATA.meta.title,
      description: FALLBACK_DATA.meta.description,
      keywords: FALLBACK_DATA.meta.keywords,
    };
  }
}

export default async function FoamPartiesPage() {
  try {
    // Fetch the content data
    const data = await getFoamPartiesData();

    return (
      <>
        <Header />
        <main className="pt-16">
          {/* Hero Banner */}
          <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-emerald-900 via-emerald-800 to-blue-900 text-white">
            <div className="absolute inset-0 overflow-hidden">
              {data.hero.backgroundImage && (
                <Image 
                  src={data.hero.backgroundImage.url}
                  alt={data.hero.backgroundImage.alt}
                  fill
                  className="object-cover opacity-40"
                  sizes="100vw"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/70 to-blue-900/70 backdrop-blur-[2px]" />
              
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70 animate-pulse"></div>
              <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-white/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
            </div>
            
            <div className="container mx-auto px-6 z-10 relative py-16">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-emerald-400 relative drop-shadow-md">
                    {data.hero.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                  {data.contentSection.description.split('.')[0]}
                </p>
                <div className="flex flex-wrap gap-5">
                  <Link 
                    href={data.cta.url}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform"
                    style={{ backgroundColor: data.cta.backgroundColor || '#059669' }}
                  >
                    {data.cta.text}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                <span className="text-emerald-600">{data.contentSection.title}</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                <div>
                  <p className="text-gray-700 text-lg mb-6">
                    {data.contentSection.description}
                  </p>
                  
                  {data.contentSection.features && (
                    <ul className="space-y-3 mt-6">
                      {data.contentSection.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  {data.gallery[0] && (
                    <Image 
                      src={data.gallery[0].image.url}
                      alt={data.gallery[0].image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                </div>
              </div>
              
              {/* Foam Packages */}
              {data.foamPackages && data.foamPackages.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-center text-emerald-600 mb-8">Foam Party Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.foamPackages.map((pkg, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100">
                        <div className="relative h-64">
                          <Image 
                            src={pkg.image.url}
                            alt={pkg.image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-2xl font-bold text-emerald-600 mb-2">{pkg.title}</h4>
                          {pkg.price && (
                            <p className="text-lg font-semibold text-gray-700 mb-3">{pkg.price}</p>
                          )}
                          <p className="text-gray-700 mb-4">{pkg.description}</p>
                          {pkg.features && (
                            <ul className="space-y-2">
                              {pkg.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </span>
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Color Run */}
              {data.colorRun && (
                <div className="bg-blue-50 p-8 rounded-lg mb-16">
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">{data.colorRun.title}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <p className="text-gray-700 mb-6">{data.colorRun.description}</p>
                      {data.colorRun.benefits && (
                        <ul className="space-y-2">
                          {data.colorRun.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                      <Image 
                        src={data.colorRun.image.url}
                        alt={data.colorRun.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* FAQs */}
              {data.faqs && data.faqs.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-center text-emerald-600 mb-8">Frequently Asked Questions</h3>
                  <div className="space-y-6 max-w-4xl mx-auto">
                    {data.faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            
              {/* Gallery Section */}
              {data.gallery && data.gallery.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold text-center text-emerald-600 mb-8">Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {data.gallery.slice(0, 6).map((item, index) => (
                      <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <Image 
                          src={item.image.url}
                          alt={item.caption || item.image.alt}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {/* CTA Section */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Ready for Memorable, Bubbly Fun!</h3>
                <p className="text-gray-700 mb-8">Book your foam party experience today and make your next event unforgettable.</p>
                <Link 
                  href={data.cta.url}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform inline-block"
                  style={{ backgroundColor: data.cta.backgroundColor || '#059669' }}
                >
                  {data.cta.text}
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    // Fallback UI in case of error
    console.error('Error rendering Foam Parties page:', error);
    
    return (
      <>
        <Header />
        <main className="pt-16">
          {/* Hero Banner */}
          <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-emerald-900 via-emerald-800 to-blue-900 text-white">
            <div className="absolute inset-0 overflow-hidden">
              <Image 
                src={FALLBACK_DATA.hero.backgroundImage.url}
                alt={FALLBACK_DATA.hero.backgroundImage.alt}
                fill
                className="object-cover opacity-40"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/70 to-blue-900/70 backdrop-blur-[2px]" />
            </div>
            
            <div className="container mx-auto px-6 z-10 relative py-16">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-emerald-400 relative drop-shadow-md">
                    {FALLBACK_DATA.hero.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                  Transform your outdoor space into a giant bubble bath with our exciting foam party service
                </p>
                <div className="flex flex-wrap gap-5">
                  <Link 
                    href={FALLBACK_DATA.cta.url}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform"
                  >
                    {FALLBACK_DATA.cta.text}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Basic Content Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-6 text-center">
              <p className="text-gray-700">
                We're experiencing technical difficulties loading the full page content. 
                Please contact us directly for information about our foam party and color run experiences.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
