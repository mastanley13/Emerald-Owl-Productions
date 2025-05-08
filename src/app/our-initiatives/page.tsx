import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Initiatives | Emerald Owl Productions',
  description: 'Discover our community and social impact initiatives',
};

export default function OurInitiativesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-300 mb-4">Our Initiatives</h1>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Making a positive impact in our communities through innovative programs
            </p>
          </div>
        </section>

        {/* Initiatives Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4">
                Community-Focused Programs
              </h2>
              <p className="text-gray-700">
                At Emerald Owl Productions, we believe in using our creativity and resources to make 
                a positive difference. Our initiatives focus on accessibility, education, and community building.
              </p>
            </div>

            {/* Initiatives */}
            <div className="space-y-12">
              {/* Initiative 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Inclusive Events Program</h3>
                <p className="text-gray-700 mb-4">
                  We partner with schools and community centers to provide sensory-friendly experiences 
                  at reduced or no cost, making joy and entertainment accessible to everyone.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>12 community partners</span>
                </div>
              </div>

              {/* Initiative 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Youth Mentorship Program</h3>
                <p className="text-gray-700 mb-4">
                  Our team mentors high school and college students interested in event production, 
                  providing hands-on experience, internships, and career guidance.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>35+ students mentored annually</span>
                </div>
              </div>

              {/* Initiative 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Green Events Initiative</h3>
                <p className="text-gray-700 mb-4">
                  We're committed to reducing the environmental impact of our events through sustainable 
                  practices, equipment choices, and waste reduction strategies.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>40% reduction in environmental impact achieved</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-12 bg-emerald-50">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              Get Involved
            </h2>
            <p className="text-gray-700 mb-8">
              Want to support our initiatives or collaborate on a community project? 
              We welcome partners who share our vision for creating positive impact.
            </p>
            <a 
              href="/contact-us" 
              className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 