
"use client";

import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function DrippingInConfidencePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-black via-black to-pink-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-pink-950/80 backdrop-blur-[2px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-orange-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-pink-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-pink-400 relative drop-shadow-md">
                  Dripping in Confidence
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                Fun and messy experiences that build confidence and create lasting memories
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href="/contact-us" 
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-pink-300/60 hover:-translate-y-1 transform"
                >
                  Book Now
                </Link>
                <Link 
                  href="/gunge" 
                  className="bg-transparent border-2 border-pink-600 hover:bg-pink-600/10 text-white font-bold py-4 px-10 rounded-full transition-all duration-300"
                >
                  Learn About Gunge
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-pink-600">Introducing "Gunge" to the USA</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Crave that nostalgic rush of glee from the golden era of TV pranks? Feel the urge to be at the receiving end of that gloriously gooey sliming? Or perhaps, you're itching to drench your pals in goo? Slime's resurgence isn't just a fad – it's a stretchy, squishy sensation sweeping across the globe!
              </p>
              <p className="text-lg text-gray-700">
                Enter the world of GUNGE – the ultimate blast of fun, designed for splashing, sploshing, and dunk tank shenanigans! Fancy something outlandishly outrageous? Try our edible gunge recipe, whipped up from simple flour, instant pudding, and water, ensuring every drip and dollop is delightfully non-toxic. Why settle for sliming when you can take your prankster game up a notch with a GUNGING! Unleash the high-jinks the British way – get GUNGED!
              </p>
            </div>
          </div>
        </section>

        {/* Why Dripping in Confidence */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-pink-600">Why "Dripping in Confidence"?</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  How often do we sacrifice the thrill of unforgettable moments by yielding to insecurities or fretting over our looks? In a society fixated on outer beauty, "DRIPPING IN CONFIDENCE" stands as a bold metaphor. Brimming with self-assuredness is key to embracing the slather of slime.
                </p>
                <p className="text-lg text-gray-700">
                  This zesty challenge is a vibrant way to declare to friends, admirers, or anyone in your circle that you're all about embracing joy, spreading love, and truly living! "DRIPPING IN CONFIDENCE" is the ultimate vibe for that epic photo-op with your squad, to celebrate a grad's milestone, to jazz up wedding frocks in a Trash The Dress moment, or to spice up any event on the hunt for giggles!
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab94d979284b777a6a7660.jpeg"
                    alt="Dripping in Confidence experience"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Ideas */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              <span className="text-pink-600">Popular Gunge Experiences</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Event 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671fadd92b10693813eb15b7.jpeg"
                    alt="Graduation Gunge"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-pink-600 mb-3">Graduation Gunge</h3>
                  <p className="text-gray-700">
                    Celebrate graduation with an unforgettable twist—a slime celebration! Picture your grads standing together, ready for a joyous, colorful send-off. As vibrant slime rains down, laughter and cheers erupt, transforming their caps and gowns into bright, messy works of art.
                  </p>
                </div>
              </div>
              
              {/* Event 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671faa98c2739a9314268f74.jpeg"
                    alt="Trash The Wedding Dress"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-pink-600 mb-3">Trash The Wedding Dress</h3>
                  <p className="text-gray-700">
                    Picture a playful wedding moment: the bride, in a washable white dress, stands on stage with family and friends cheering her on. Suddenly, colorful slime—soft pinks, greens, and blues—gently drizzles down, covering her gown as she laughs and raises her arms in delight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              <span className="text-pink-600">Gunge Gallery</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab94803afbd43168aeb9af.jpeg"
                  alt="Gunge experience 1"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab94a872d42b2f42ab0fe8.png"
                  alt="Gunge experience 2"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab969e06eacdc27472e012.jpeg"
                  alt="Gunge experience 3"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab94d979284b777a6a7660.jpeg"
                  alt="Gunge experience 4"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-pink-50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-pink-600">Dripping in Confidence Pricing</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Gunge events offer adaptable entertainment for various budgets, ranging from affordable fun to more elaborate setups. Reach out to us for a hassle-free discussion about your gunge event dreams, including event type, venue size, materials, power needs, audience size, and budgetary constraints.
              </p>
              <p className="text-lg text-gray-700 mb-10">
                At Emerald Owl Productions, we create immersive gunge experiences with exciting, custom-designed themes and provide discounts for multi-day bookings. We also offer affordable solutions for one-off events.
              </p>
              <Link 
                href="/contact-us" 
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-pink-300/60 hover:-translate-y-1 transform inline-block"
              >
                Contact Us for Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
