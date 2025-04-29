
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AmericanAnniversaryCelebration() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-black">
        {/* Hero Banner */}
        <section className="relative h-[70vh] md:h-[80vh] bg-black overflow-hidden">
          {/* Stars animation background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(white,rgba(255,255,255,.2)_2px,transparent_40px)] bg-[length:50px_50px]" 
                 style={{animation: 'twinkle 7s ease-in-out infinite alternate'}}></div>
          </div>
          
          {/* Flag Stripes Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-700/40 via-white/30 to-blue-700/40"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-4 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 drop-shadow-lg">
              America's <span className="text-red-600">250th</span> <span className="text-blue-600">Anniversary</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
              Celebrate with a spectacular laser light show experience designed for this historic milestone
            </p>
            <Link href="#contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 transform relative overflow-hidden group">
              <span className="relative z-10">Book This Event</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 via-white/10 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </div>
          
          {/* Bottom fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        {/* Main Features Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                A <span className="text-red-600">Revolutionary</span> Celebration
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Emerald Owl Production's America's 250th Anniversary celebration combines cutting-edge laser technology with patriotic themes to create an unforgettable experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Feature Card 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900/50 rounded-2xl p-8 transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center md:text-left">Spectacular Lasers</h3>
                <p className="text-white/70">
                  State-of-the-art laser technology creates breathtaking displays that illuminate the sky with patriotic imagery, animations, and colors.
                </p>
              </div>
              
              {/* Feature Card 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-red-900/50 rounded-2xl p-8 transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center md:text-left">Historic Narration</h3>
                <p className="text-white/70">
                  Professional narration guides audiences through America's journey, highlighting key historical moments and achievements over the past 250 years.
                </p>
              </div>
              
              {/* Feature Card 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-purple-900/50 rounded-2xl p-8 transform transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-.244l.614-.614c.43-.43.628-1.05.52-1.66A5.986 5.986 0 0016.5 4.5a5.986 5.986 0 00-2.769.684" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center md:text-left">Community Event</h3>
                <p className="text-white/70">
                  Designed to bring communities together in celebration of America's milestone anniversary, perfect for towns, cities, and organizations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Dynamic Gallery Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Gallery Preview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/678fb2f55c784c14e19cfdfb.jpeg",
                "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67b17f8970fcfe8794242cee.jpeg",
                "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d1ca9769a795ba5981de.jpeg",
                "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44608aa4eed6d00f735bd.jpeg",
                "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d18823290240bf390f2f.jpeg",
                "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6736eb74f164ea460a4a362c.jpeg"
              ].map((src, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg aspect-video">
                  <div className="relative w-full h-full">
                    <Image 
                      src={src}
                      alt={`America 250th Anniversary ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose This Experience */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-blue-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-950/80 to-red-950/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Why Choose This Experience</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <ul className="space-y-6">
                    {[
                      {
                        title: "Eco-Friendly Alternative",
                        description: "Unlike traditional fireworks, our laser shows produce no debris or pollution, making them environmentally responsible."
                      },
                      {
                        title: "Weather Resilient",
                        description: "Shows can operate in light to moderate rain, snow, or wind, ensuring your event goes on despite unpredictable weather."
                      },
                      {
                        title: "Custom Programming",
                        description: "Each show can be customized to include local historical elements and community stories alongside national themes."
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-white/70">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col">
                  <ul className="space-y-6">
                    {[
                      {
                        title: "Noise Considerate",
                        description: "The silent nature of laser shows makes them perfect for communities with noise ordinances or attendees sensitive to loud sounds."
                      },
                      {
                        title: "Budget Friendly Options",
                        description: "Flexible pricing for events outside peak dates and multi-night discounts make this celebration accessible for more communities."
                      },
                      {
                        title: "Comprehensive Package",
                        description: "Includes professional technicians, premium equipment, sound systems, and all necessary logistics for a stress-free experience."
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-white/70">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="contact" className="py-24 bg-gradient-to-b from-blue-900/30 to-black relative overflow-hidden">
          {/* Star field background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(white,rgba(255,255,255,.2)_2px,transparent_40px)] bg-[length:50px_50px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Book America's 250th Anniversary Celebration</h2>
              <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
                Whether you're planning a July 4th spectacle or exploring creative ways to celebrate America's milestone anniversary, we're here to make your vision a reality.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-5 px-8 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Contact Us
                </Link>
                
                <Link href="tel:+18887779999" className="bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-5 px-8 rounded-full transition-all shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Now
                </Link>
              </div>
              
              <p className="text-white/60 mt-10">
                Limited dates available for July 4th, 2026. Early booking is recommended.
              </p>
            </div>
          </div>
        </section>
        
        {/* Add custom animations */}
        <style jsx global>{`
          @keyframes twinkle {
            0%, 100% {
              opacity: 0.3;
              background-position: 0% 0%;
            }
            50% {
              opacity: 0.6;
              background-position: 100% 100%;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
