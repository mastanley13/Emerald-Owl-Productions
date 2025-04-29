
import React from 'react';
import Link from 'next/link';

export default function LaserShowPricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-emerald-950/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            <span className="text-emerald-400">Laser Show</span> Pricing
          </h2>
          
          <div className="bg-black/40 border border-emerald-900/30 rounded-2xl p-8 md:p-10 text-left shadow-lg">
            <p className="text-gray-300 mb-6">
              Laser shows are unique entertainment options where specific details help us provide an accurate quote. Our shows can be tailored to accommodate different needs and budgets, scaling the spectacle up or down.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-emerald-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">To Get Your Custom Quote, We'll Discuss:</h3>
                <ul className="space-y-2 text-gray-300 list-disc pl-5">
                  <li>Your event objectives and desired show type (beam, graphic, or combination)</li>
                  <li>Venue specifics and anticipated audience size</li>
                  <li>Sound and power requirements</li>
                  <li>Location and logistical considerations</li>
                  <li>Music preferences and customization needs</li>
                  <li>Budget parameters</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Multi-Night Value</h3>
                <p className="text-gray-300">
                  Our package deals for multi-night events can significantly reduce the cost per night. Multiple shows on the same night have minimal impact on pricing, making laser shows extremely cost-effective for extended events.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                href="/contact-us" 
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1"
              >
                Contact Us for Pricing
              </Link>
              <p className="text-gray-400 mt-4">
                Call us at <a href="tel:252-764-7628" className="text-emerald-400 hover:underline">252-764-7628</a> for a no-pressure consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
