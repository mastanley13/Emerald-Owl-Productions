import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Special Occasions | Emerald Owl Productions',
  description: 'Create unforgettable special occasions with our unique event experiences',
};

export default function SpecialOccasionsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-300 mb-4">Special Occasions</h1>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Turn any celebration into an extraordinary experience with our custom event productions
            </p>
          </div>
        </section>

        {/* Special Occasions Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4">
                Celebrate In Style
              </h2>
              <p className="text-gray-700">
                From private parties to corporate celebrations, our team transforms ordinary occasions 
                into extraordinary memories. We customize each experience to match your vision, themes, 
                and goals to create truly unique events.
              </p>
            </div>

            {/* Occasion Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Private Celebrations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Birthday Parties</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Graduation Celebrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Family Reunions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Anniversary Parties</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Community Events</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>School Functions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Fundraising Events</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Holiday Celebrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Seasonal Festivals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Special Events */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
                Featured Special Events
              </h2>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">
                  <Link href="/holiday-events" className="hover:text-emerald-600 transition-colors">
                    Holiday Events
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4">
                  Celebrate the seasons with our themed holiday productions. From haunted Halloween 
                  experiences to winter wonderlands, we create immersive events that capture the magic 
                  of every holiday.
                </p>
                <Link 
                  href="/holiday-events" 
                  className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">
                  <Link href="/american-anniversary-celebration" className="hover:text-emerald-600 transition-colors">
                    America&apos;s 250th Anniversary
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4">
                  Join us in celebrating America&apos;s 250th anniversary with special patriotic productions 
                  designed for communities, schools, and organizations. Our commemorative events honor 
                  American history and culture through immersive experiences.
                </p>
                <Link 
                  href="/american-anniversary-celebration" 
                  className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">
                  <Link href="/fundraisers" className="hover:text-emerald-600 transition-colors">
                    Fundraisers
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4">
                  Turn your fundraising event into an unforgettable experience that maximizes donations 
                  while providing value and entertainment for attendees. Our team specializes in creating 
                  engaging events that support your cause.
                </p>
                <Link 
                  href="/fundraisers" 
                  className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">
                  <Link href="/upcoming-events" className="hover:text-emerald-600 transition-colors">
                    Upcoming Events
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4">
                  Discover our calendar of upcoming public events that you can attend or participate in. 
                  From community festivals to special productions, there&apos;s always something exciting on 
                  the horizon with Emerald Owl Productions.
                </p>
                <Link 
                  href="/upcoming-events" 
                  className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors flex items-center"
                >
                  View calendar
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-emerald-50">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              Ready to Plan Your Special Occasion?
            </h2>
            <p className="text-gray-700 mb-8">
              Contact us to discuss how we can make your next celebration truly extraordinary. 
              Our team will work with you to create a custom experience that meets your needs and budget.
            </p>
            <a 
              href="/contact-us" 
              className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 