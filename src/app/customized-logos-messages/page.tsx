import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

// This generates metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Customized Logos & Messages | Emerald Owl Productions",
    description: "Get maximum exposure for sponsors with customized laser logos and messages. Perfect for events, schools, and special occasions.",
    keywords: "customized logos, laser messages, sponsor exposure, laser advertising, event branding, personalized laser shows",
  };
}

export default async function CustomizedLogosMessagesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative min-h-[600px] flex items-center bg-gradient-to-b from-emerald-900 via-emerald-800 to-blue-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/70 to-blue-900/70 backdrop-blur-[2px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-white/10 opacity-60"></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-500/10 opacity-70"></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-emerald-400 relative drop-shadow-md">
                  Customized Logos & Messages
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                Put your brand in lights with our customized laser displays
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href="/contact-us"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Location Banner */}
        <section className="bg-emerald-600 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              NOW BASED IN EMERALD ISLE, NC & PITTSBURGH, PA
            </h2>
            <p className="text-lg font-semibold">(Yes, we do travel!)</p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              
              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-emerald-600 mb-8">CUSTOMIZED LOGOS & MESSAGES</h2>
                </div>

                {/* Questions Section */}
                <div className="grid md:grid-cols-1 gap-8 mb-12">
                  <div className="bg-emerald-50 p-8 rounded-lg border-l-4 border-emerald-600">
                    <h3 className="text-2xl font-bold text-emerald-700 mb-6">Do you want maximum exposure of a major sponsor's logo at your event?</h3>
                  </div>
                  
                  <div className="bg-sky-50 p-8 rounded-lg border-l-4 border-sky-600">
                    <h3 className="text-2xl font-bold text-sky-700 mb-6">Do you have an image you want your town, school, or customers to see at night?</h3>
                  </div>
                  
                  <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-600">
                    <h3 className="text-2xl font-bold text-purple-700 mb-6">Would anyone at your event want to see their names in lights for birthdays, marriage proposals, or other messages?</h3>
                  </div>
                </div>

                {/* Solution Section */}
                <div className="bg-gradient-to-r from-emerald-600 to-sky-600 text-white p-8 rounded-lg mb-12">
                  <h3 className="text-2xl font-bold mb-4">All we need is a flat surface!</h3>
                  <p className="text-lg leading-relaxed">
                    Such as the side of a building, water tower, or even a thick set of trees! Our lasers can put customized names and messages in lights on the spot. With advance notice, we can even create customized logos.
                  </p>
                </div>

                {/* Sponsorship Opportunity */}
                <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-600 mb-12">
                  <h3 className="text-2xl font-bold text-amber-800 mb-4">Looking for sponsors for your event?</h3>
                  <p className="text-lg text-amber-900 mb-4">
                    This is a <strong>HIGH VALUE</strong> opportunity to perhaps land one or two of those major sponsorships to take your event to the next level. Imagine when you tell that sponsor they will have their name or logo in lights for all to see!
                  </p>
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <p className="text-amber-800 font-semibold text-center">
                      (SPONSOR PHOTOS)
                    </p>
                  </div>
                </div>

                                 {/* Package Information */}
                 <div className="bg-gray-50 p-8 rounded-lg mb-12">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Package Includes</h3>
                   <p className="text-lg text-gray-700 mb-6">
                     We also include an array of laser images with this package that are sure to attract attention. This is a great introduction to lasers if you have a smaller budget. There is no music or synchronization of lasers needed with this package.
                   </p>
                   <div className="text-center">
                     <Link 
                       href="/contact-us"
                       className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-300/40"
                     >
                       Get a Quote Today
                     </Link>
                   </div>
                 </div>

                 {/* Sponsor Photos Gallery */}
                 <div className="mb-12">
                   <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sponsor Photos</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                       <Image 
                         src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688b036008dbc372f42533ae.jpeg"
                         alt="Sponsor laser display example"
                         fill
                         className="object-cover hover:scale-105 transition-transform duration-300"
                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                       />
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                       <Image 
                         src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688b036005df82048b9aadaf.jpeg"
                         alt="Customized logo laser projection"
                         fill
                         className="object-cover hover:scale-105 transition-transform duration-300"
                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                       />
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                       <Image 
                         src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688b036005df826cbf9aadb3.jpeg"
                         alt="Laser message display example"
                         fill
                         className="object-cover hover:scale-105 transition-transform duration-300"
                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                       />
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                       <Image 
                         src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688b036008dbc34db52533af.jpeg"
                         alt="Sponsor branding laser show"
                         fill
                         className="object-cover hover:scale-105 transition-transform duration-300"
                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                       />
                     </div>
                     <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                       <Image 
                         src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688b0360ba7d0477e12e07c3.jpeg"
                         alt="Customized laser display showcase"
                         fill
                         className="object-cover hover:scale-105 transition-transform duration-300"
                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                       />
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-700 py-16 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Put Your Brand in Lights?</h2>
            <Link 
              href="/contact-us"
              className="inline-block px-8 py-4 bg-white text-emerald-700 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-transform"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 