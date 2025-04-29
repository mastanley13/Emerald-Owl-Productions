
"use client";

import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function WaterGamesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-black via-black to-sky-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c312c15ee062538bfed37.jpeg"
              alt="Water Games"
              fill
              className="object-cover opacity-40"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-sky-950/60 backdrop-blur-[1px]" />
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-sky-400 relative drop-shadow-md">
                  Water Games
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                Splash into fun with our exciting water-based activities
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href="/contact-us" 
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-sky-300/60 hover:-translate-y-1 transform"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Water Wars Content */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-sky-600 mb-8">Water Wars</h2>
              
              <div className="mb-12">
                <p className="text-gray-700 mb-4">
                  Who does not love a great all out water war? This activity is fun for kids and adults!
                </p>
                <p className="text-gray-700 mb-4 font-bold">
                  If you are just wanting to get a little splashed, THIS IS NOT FOR YOU! Our water wars are TOTAL & COMPLETE DRENCHERS!
                </p>
                <p className="text-gray-700 mb-4">
                  We bring the water blasters, plastic buckets for dumping, and the containers your participants will use as filling stations. You just provide the running water. Call us to discuss the best way to create a super fun water war!
                </p>
                <p className="text-gray-700 mb-4">
                  Want to add a get messy dimension to this? Ask us about adding slime or paint for your war!!!
                </p>
                <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6">
                  <p className="text-gray-700 font-medium">
                    <span className="font-bold">IDEA:</span> Organize a high school vs elementary school water war in your community— there will be volunteer hours for the high school students and the elementary school students will LOVE soaking the big kids!
                  </p>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c35f2d88b411473f4fc7d.jpeg"
                    alt="Water Games"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c357b15ee062e43bff020.jpeg"
                    alt="Water Games"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c31ed17d9a926f3443657.jpeg"
                    alt="Water Games"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c315517d9a969d244352c.jpeg"
                    alt="Water Games"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c3110f980e18fd68293fa.jpeg"
                    alt="Water Games"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c318ad88b41a878f4f870.jpeg"
                    alt="Water Games"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Related Service */}
              <div className="bg-sky-50 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold text-sky-600 mb-4">Often Combined With</h3>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <Link 
                      href="/foam-parties" 
                      className="block relative h-64 w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <Image 
                        src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg"
                        alt="Foam Parties"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <h4 className="text-xl font-bold mb-2">Foam Parties</h4>
                          <p>The perfect complement to water activities</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <h4 className="text-xl font-bold text-sky-700 mb-3">Perfect Pairing</h4>
                    <p className="text-gray-700 mb-4">
                      Our Water Games events are often combined with our Foam Parties for an ultimate wet and wild experience. Many clients find that these two services complement each other perfectly for maximum fun!
                    </p>
                    <Link 
                      href="/foam-parties" 
                      className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                    >
                      Learn More About Foam Parties
                    </Link>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center my-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make a Splash?</h3>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss your Water Games event and create an unforgettable experience for your participants!
                </p>
                <Link 
                  href="/contact-us" 
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
                >
                  Contact Us for Details
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
