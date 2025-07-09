import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Link from 'next/link';

export default function LaserSafetyPage() {
  return (
    <>
      <Header />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Laser Safety Standards</h1>
              <p className="text-xl text-emerald-100 mb-8">
                Your safety is our top priority. Learn about our comprehensive laser safety protocols 
                and discover why laser shows are among the safest entertainment options.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Overview */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                ILDA Safety Standards
              </h2>
              
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
                  International Laser Display Association (ILDA) Compliance
                </h3>
                <p className="text-gray-700 mb-4">
                  All of our laser shows are operated under strict ILDA (International Laser Display Association) 
                  safety standards, ensuring peace of mind for both organizers and attendees.
                </p>
                <p className="text-gray-700">
                  ILDA is the world&apos;s leading organization for laser entertainment, setting the global 
                  standards for laser safety and professional operations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">No Explosives</h3>
                  <p className="text-gray-700">
                    Unlike fireworks, laser shows involve no explosives or combustible materials, 
                    eliminating fire hazards and debris risks.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">No Flying Objects</h3>
                  <p className="text-gray-700">
                    Laser shows have no projectiles or flying debris, making them safe for 
                    audiences of all ages and indoor/outdoor venues.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Weather Independent</h3>
                  <p className="text-gray-700">
                    Laser shows can be performed safely in various weather conditions, 
                    including rain and snow, without safety concerns.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Operation</h3>
                  <p className="text-gray-700">
                    All shows are operated by ILDA-certified laser safety officers with 
                    extensive training and experience.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Safety First Approach</h3>
                <p className="text-gray-300 mb-4">
                  Our commitment to safety includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Pre-show safety assessments and site surveys</li>
                  <li>Proper laser classification and audience scanning protocols</li>
                  <li>Emergency procedures and equipment on-site</li>
                  <li>Coordination with local authorities and venue security</li>
                  <li>Comprehensive insurance coverage</li>
                  <li>Regular equipment maintenance and calibration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-emerald-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Safe Laser Show?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your event and learn more about our safety protocols and procedures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact-us"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/laser-show-benefits"
                className="bg-white hover:bg-gray-100 text-emerald-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                View Benefits
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}