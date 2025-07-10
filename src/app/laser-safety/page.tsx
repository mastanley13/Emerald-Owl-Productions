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
              <h1 className="text-5xl font-bold mb-6">LASER SHOWS</h1>
              <p className="text-3xl text-emerald-100 mb-8">
                The Safest Experience in the Sky
              </p>
              <p className="text-xl text-emerald-200">
                Why are Laser Shows The Safest Option for Entertainment
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Section - Clickable Safety Points */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                8 Reasons Why Laser Shows Are The Safest Entertainment Option
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-16">
                <a
                  href="#point-1"
                  className="bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-300 rounded-xl p-6 transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-xl font-semibold text-emerald-800 group-hover:text-emerald-900">
                    1) No Explosives or Pyrotechnics
                  </h3>
                  <p className="text-gray-600 mt-2">Click to learn more about our explosive-free technology</p>
                </a>
                
                <a
                  href="#point-2"
                  className="bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-300 rounded-xl p-6 transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-xl font-semibold text-emerald-800 group-hover:text-emerald-900">
                    2) No Falling Debris or Objects
                  </h3>
                  <p className="text-gray-600 mt-2">Discover why only light beams are projected</p>
                </a>
                
                <a
                  href="#point-3"
                  className="bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-300 rounded-xl p-6 transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-xl font-semibold text-emerald-800 group-hover:text-emerald-900">
                    3) No Loud Explosions & Environment Friendly
                  </h3>
                  <p className="text-gray-600 mt-2">Learn about our quiet, eco-friendly approach</p>
                </a>
                
                <a
                  href="#point-4"
                  className="bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-300 rounded-xl p-6 transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-xl font-semibold text-emerald-800 group-hover:text-emerald-900">
                    4) Reliable in Various Weather Conditions
                  </h3>
                  <p className="text-gray-600 mt-2">See how weather enhances the experience</p>
                </a>
                
                <a
                  href="#point-5"
                  className="bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-300 rounded-xl p-6 transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-xl font-semibold text-emerald-800 group-hover:text-emerald-900">
                    5) Enhanced Audience & Worker Safety
                  </h3>
                  <p className="text-gray-600 mt-2">Understand our immersive yet safe approach</p>
                </a>
                
                <a
                  href="#point-6"
                  className="bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-300 rounded-xl p-6 transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-xl font-semibold text-emerald-800 group-hover:text-emerald-900">
                    6) FAA Coordination for Outdoor Laser Shows
                  </h3>
                  <p className="text-gray-600 mt-2">Learn about our aviation safety protocols</p>
                </a>
                
                <a
                  href="#point-7"
                  className="bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-300 rounded-xl p-6 transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-xl font-semibold text-emerald-800 group-hover:text-emerald-900">
                    7) Proactively Addressing Potential Risks
                  </h3>
                  <p className="text-gray-600 mt-2">See how we ensure inclusive experiences</p>
                </a>
                
                <a
                  href="#point-8"
                  className="bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-300 rounded-xl p-6 transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-xl font-semibold text-emerald-800 group-hover:text-emerald-900">
                    8) Safe and Responsible Usage
                  </h3>
                  <p className="text-gray-600 mt-2">Discover our ILDA compliance and safety standards</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Point 1 */}
              <div id="point-1" className="bg-white rounded-xl p-8 shadow-lg scroll-mt-20">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">1) No Explosives or Pyrotechnics</h3>
                <p className="text-gray-700 mb-4">
                  Lasers create stunning visuals without using any combustible materials.
                </p>
                <p className="text-gray-700">
                  In the rare instance that there are flammable materials nearby (ex: curtains), we zone the lasers to avoid those objects — just for added safety!
                </p>
              </div>

              {/* Point 2 */}
              <div id="point-2" className="bg-white rounded-xl p-8 shadow-lg scroll-mt-20">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">2) No Falling Debris or Objects</h3>
                <p className="text-gray-700 mb-4">
                  Only beams of light are projected into the sky. No physical objects are launched into the air.
                </p>
                <p className="text-gray-700">
                  There is zero risk of falling debris or equipment, misfires, or collisions.
                </p>
              </div>

              {/* Point 3 */}
              <div id="point-3" className="bg-white rounded-xl p-8 shadow-lg scroll-mt-20">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">3) No Loud Explosions & Environment Friendly</h3>
                <p className="text-gray-700 mb-4">
                  Lasers operate silently. Music volume is adjustable to meet your needs and satisfy noise ordinances.
                </p>
                <p className="text-gray-700 mb-4">
                  A drive-in experience can use an FM transmitter only meaning there is no outside noise whatsoever.
                </p>
                <p className="text-gray-700">
                  Lasers will not disrupt pets, wildlife, or individuals sensitive to loud noises.
                </p>
              </div>

              {/* Point 4 */}
              <div id="point-4" className="bg-white rounded-xl p-8 shadow-lg scroll-mt-20">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">4) Reliable in Various Weather Conditions</h3>
                <p className="text-gray-700 mb-4">
                  Lasers operate in moderate winds, fog, rain, and even snow!
                </p>
                <p className="text-gray-700 mb-4">
                  A foggy, rainy, or snowy evening actually ENHANCES your laser show experience by reflecting lasers off thousands of water droplets in the air!
                </p>
                <p className="text-gray-700">
                  Laser shows present no fire risk in dry conditions.
                </p>
              </div>

              {/* Point 5 */}
              <div id="point-5" className="bg-white rounded-xl p-8 shadow-lg scroll-mt-20">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">5) Enhanced Audience & Worker Safety</h3>
                <p className="text-gray-700 mb-4">
                  Lasers are positioned closer to audiences than fireworks and drone shows, offering an immersive experience without physical danger.
                </p>
                <p className="text-gray-700 mb-4">
                  All entertainment involving technology can experience technical glitches or human error. In these rare instances, the lasers simply turn off. No object can hit a person or property.
                </p>
                <p className="text-gray-700">
                  Since there are no explosives or high installations involved, laser shows are the safest option for workers as well.
                </p>
              </div>

              {/* Point 6 */}
              <div id="point-6" className="bg-white rounded-xl p-8 shadow-lg scroll-mt-20">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">6) FAA Coordination for Outdoor Laser Shows</h3>
                <p className="text-gray-700 mb-4">
                  EOP files a report in advance with the FAA in advance of outdoor laser shows. We remain in regular communication with the closest air traffic control.
                </p>
                <p className="text-gray-700">
                  We can briefly pause the show, if needed, for aircraft safety.
                </p>
              </div>

              {/* Point 7 */}
              <div id="point-7" className="bg-white rounded-xl p-8 shadow-lg scroll-mt-20">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">7) Proactively Addressing Potential Risks</h3>
                <p className="text-gray-700 mb-4">
                  While laser shows are safe for all audiences, individuals with photosensitive epilepsy may be sensitive to fast-moving light beams. Though we have not encountered any issues at our events of which we are aware, we prioritize transparency and safety by informing attendees of this potential risk.
                </p>
                <p className="text-gray-700 mb-4">
                  To ensure everyone can enjoy the experience, clear signage and notices will be provided, allowing individuals to make an informed decision.
                </p>
                <p className="text-gray-700 mb-4">
                  Customizable programming enables us to adjust laser speeds to accommodate different audiences. Sensory-friendly experiences are available, designed by Emerald Owl Productions to be accessible to all.
                </p>
                <p className="text-gray-700">
                  Our goal is to create a safe, inclusive, and unforgettable laser show for every guest.
                </p>
              </div>

              {/* Point 8 */}
              <div id="point-8" className="bg-white rounded-xl p-8 shadow-lg scroll-mt-20">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">8) Safe and Responsible Usage Virtually Eliminates Risk of Serious Injury</h3>
                <p className="text-gray-700 mb-4">
                  Emerald Owl Productions adheres to safety guidelines set by The International Laser Display Association (ILDA).
                </p>
                <p className="text-gray-700 mb-4">
                  Laser beams are pre-zoned to avoid crowd exposure.
                </p>
                <p className="text-gray-700 mb-4">
                  An emergency stop button (&ldquo;E STOP&rdquo;) is always within reach of our laser technician.
                </p>
                <p className="text-gray-700 mb-4">
                  There are no known reports of a serious injury to an audience member at a U.S. laser show when International Laser Display Association (ILDA) safety guidelines were followed.
                </p>
                <p className="text-gray-700 mb-4">
                  The ILDA and federal regulations (such as those from the FDA&apos;s Center for Devices and Radiological Health - CDRH) strictly control the use of laser displays to ensure public safety.
                </p>
                <p className="text-gray-700 mb-4">
                  While there have been isolated incidents globally, they typically occur in countries with less stringent regulations or from misuse of lasers outside of professional shows.
                </p>
                <p className="text-gray-700">
                  Laser shows provide thrilling, immersive entertainment with zero fire risk, no falling debris, and complete audience safety, making them the best alternative to fireworks and drone displays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-emerald-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Safest Entertainment Option?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your event and learn more about our comprehensive safety protocols and procedures.
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