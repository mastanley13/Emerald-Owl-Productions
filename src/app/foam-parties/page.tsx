
"use client";

import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function FoamPartiesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-emerald-900 via-emerald-800 to-blue-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image 
              src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg"
              alt="Foam Party"
              fill
              className="object-cover opacity-40"
              sizes="100vw"
              priority
            />
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
                  Foam Party & Color Run
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                Transform your outdoor space into a giant bubble bath with our exciting foam party service
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href="/contact-us" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              <span className="text-emerald-600">Foam Party Experience</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
              <div>
                <p className="text-gray-700 text-lg mb-6">
                  Transform your outdoor space into a giant bubble bath with our exciting new foam party service! Perfect for warm weather and fun for all ages, this unique activity can be added to any of our event packages or booked on its own.
                </p>
                <p className="text-gray-700 text-lg mb-6">
                  It's a safe and entertaining way for guests to cool off, and it pairs perfectly with an epic water war for even more fun!
                </p>
                <p className="text-gray-700 text-lg mb-6">
                  Our foam is biodegradable, environmentally friendly, and will evaporate within a couple of hours. We recommend hosting the event on grass for the best experience, as it makes falls and slides more fun.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab922e4325e136bf663373.jpeg"
                  alt="Kids enjoying foam party"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-lg mb-16">
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">Important Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-3">
                <li>
                  <strong>Safety First:</strong> While the foam won't harm your grass, extended use may cause some wear, so it's best suited for areas where minor grass damage is acceptable—similar to playing on a wet field.
                </li>
                <li>
                  <strong>Please note:</strong> We never use tarps, as they create a slipping hazard, and we will never put foam in a swimming pool for safety reasons, as it would obscure visibility underwater.
                </li>
                <li>
                  <strong>Health considerations:</strong> The foam is non-toxic and safe for the environment, but as it is soap-based, participants should avoid swallowing it or opening their eyes beneath it.
                </li>
              </ul>
            </div>
            
            {/* Image Gallery */}
            <h3 className="text-2xl font-bold text-center text-emerald-600 mb-8">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg"
                  alt="Foam Party Image 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67111c341ff90225413256af.jpeg"
                  alt="Foam Party Image 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67111c39e1ff773380fff381.jpeg"
                  alt="Foam Party Image 3"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67111c3e601ea92a26d95092.jpeg"
                  alt="Foam Party Image 4"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67111c429663ed06310b88bf.jpeg"
                  alt="Foam Party Image 5"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67111c469cc6fcba61612ff1.jpeg"
                  alt="Foam Party Image 6"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            
            {/* Pricing Section */}
            <div className="bg-gray-50 p-8 rounded-lg mb-16">
              <h3 className="text-2xl font-bold text-center text-emerald-600 mb-6">Foam Party Pricing</h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
                Elevate your event with our fantastic foam from Emerald Owl Productions. We customize quotes to match your budget and vision, offering a variety of options without sales pressure. Call us at 252-764-7628 to discuss your event's needs, from volume of foam to venue and music.
              </p>
              <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
                While longer parties are more costly, partnerships or profit-sharing can make them more accessible. We aim to deliver a memorable foam party within your financial means, ensuring your event shines.
              </p>
              <div className="text-center">
                <Link 
                  href="/contact-us" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
                >
                  Contact Us for Pricing
                </Link>
              </div>
            </div>
            
            {/* Related Services */}
            <h3 className="text-2xl font-bold text-center text-emerald-600 mb-8">Often Paired With Our Water Games</h3>
            <div className="flex justify-center mb-16">
              <Link 
                href="/water-games" 
                className="relative h-64 w-full max-w-lg rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d18823290240bf390f2f.jpeg"
                  alt="Water Games"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Water Games</h4>
                    <p>Explore our exciting water activities</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Ready for Memorable, Bubbly Fun!</h3>
              <p className="text-gray-700 mb-8">Book your foam party experience today and make your next event unforgettable.</p>
              <Link 
                href="/contact-us" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform inline-block"
              >
                Book Your Foam Party
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
