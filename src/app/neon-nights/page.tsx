import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Newsletter from '../../components/shared/UI/Newsletter';
import Image from 'next/image';
import Link from 'next/link';
import { getNeonNightsData } from '../../services/contentService';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // Fetch data
  const data = await getNeonNightsData();
  
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

export default async function NeonNightsPage() {
  // Fetch data
  const data = await getNeonNightsData();
  
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-black via-black to-purple-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-purple-950/80 backdrop-blur-[2px]" />
            
            {/* Decorative neon elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-pink-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-blue-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
            
            {/* Background Image (if available) */}
            {data.hero.backgroundImage && (
              <Image 
                src={data.hero.backgroundImage.url} 
                alt={data.hero.backgroundImage.alt || "Neon Nights"} 
                fill
                priority
                className="object-cover opacity-30"
              />
            )}
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto">
              {/* Left: Text Content */}
              <div className="flex-1 min-w-0">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-purple-400 relative drop-shadow-md">
                    {data.hero.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                  {data.hero.description || "Glow in the dark party experiences that transform any venue into a vibrant wonderland"}
                </p>
                <div className="flex flex-wrap gap-5">
                  <Link 
                    href={data.cta.url} 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-purple-300/30"
                  >
                    Take the Next Step
                  </Link>
                </div>
              </div>
              {/* Right: Video */}
              <div className="flex-1 min-w-0 w-full max-w-xl md:max-w-md lg:max-w-lg xl:max-w-xl mt-10 md:mt-0 rounded-lg overflow-hidden shadow-2xl shadow-purple-500/30">
                <video 
                  className="w-full h-auto rounded-lg"
                  controls
                  preload="metadata"
                  poster=""
                  style={{ background: 'black' }}
                >
                  <source 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/687943025d37ba9d7c588426.mp4" 
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Neon Nights Overview */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-purple-400 text-center">
                Neon Nights: (Formerly Laser Light Glow Party)<br />
                <span className="text-2xl text-pink-400">Using Technology to Bring People Together Again</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 prose prose-invert lg:prose-xl max-w-none">
                <p>
                  If you are looking for something truly different or your event is in need of a major energy boost, you have found your answer! This is our specialty experience that unites people of all backgrounds and ages! It will truly be one of the most memorable and unique events you ever host. Neon Nights include professional lasers, moving lights, LED UV lighting, sound, haze machines, DJ, and event coordinator.
                </p>
                
                <div className="bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-400">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Here is the short summary of Neon Nights:</h3>
                  <p className="mb-4">
                    You may often see your guests recording a fireworks display, band, or laser show. What is the likelihood they will watch it ten years from now? Virtually none.
                  </p>
                  <p className="mb-4">
                    Now imagine your guests recording their kids glowing in the dark doing the Cha-Cha Slide with grandma in a pit of foam with laser lights flying overhead?
                  </p>
                  <p className="text-pink-400 font-bold text-xl">
                    What have we just created together? A FOREVER MEMORY! This is a video that will likely be saved and enjoyed by that family forever, even when the kids are adults and grandma is not with us anymore.
                  </p>
                </div>

                <p>
                  Neon Nights are high energy and very interactive. This is not a passive activity where your participants sit in a lawn chair. They are encouraged to be up and moving, which is how we create memories with this epic event! But don&apos;t worry, while our events are active, the activity level is suitable for mostly everyone. And yes, some people enjoy watching the fun which is fine too.
                </p>
                
                <p>
                  Neon Nights gives you the most &quot;bang for your buck.&quot; These parties usually last a few hours, often at a price that is less or comparable to a 30 minute fireworks show. Perhaps the best part is we handle all the entertainment related to our party so you can actually take time to enjoy and even participate in your event!
                </p>

                <div className="bg-gray-900/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Common add-on experiences include:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Short laser shows throughout the evening
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Video projection
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Live Dancers to Keep The Crowd Entertained
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Glow in the Dark Splash Zone in warm weather (foam, water, and even glow gunge/slime)
                    </li>
                  </ul>
                </div>

                <p>
                  This experience is a bit easier to scale up or down to fit a variety of budgets. Rates are based on your vision for the event, the size of your venue, the size of your crowd, time of year, and if it is outdoor or indoor. Call us at <a href="tel:252-764-7628" className="text-purple-400 font-bold">(252) 764-7628</a> to discuss ways to make it happen!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Videos */}
        <section className="bg-gradient-to-b from-black to-purple-950/20 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">
              See Neon Nights in Action
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Experience the energy and excitement of our Neon Nights events. Watch real moments of joy, laughter, and unforgettable memories being created!
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Video 1 */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-purple-500/20">
                <video 
                  className="w-full h-auto rounded-lg"
                  controls
                  preload="metadata"
                  poster=""
                >
                  <source 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/686f19b69a51b826a4149f52.mp4" 
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Video 2 */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-purple-500/20">
                <video 
                  className="w-full h-auto rounded-lg"
                  controls
                  preload="metadata"
                  poster=""
                >
                  <source 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/686f19b6677990e6fb4458b9.mp4" 
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-400 text-sm mb-4">
                These videos showcase real Neon Nights events - creating those &quot;Forever Memories&quot; we talked about!
              </p>
              <Link 
                href="/contact-us" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-purple-300/30"
              >
                Start Planning Your Event
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-400">
                  {data.contentSection.title}
                </h2>
                <p className="mb-4">
                  {data.contentSection.description}
                </p>
                {data.contentSection.features && data.contentSection.features.length > 0 && (
                  <ul className="mt-6 space-y-2">
                    {data.contentSection.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-900 text-purple-400 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl shadow-purple-500/20">
                {data.hero.backgroundImage ? (
                  <Image 
                    src={data.hero.backgroundImage.url}
                    alt={data.hero.backgroundImage.alt || "Neon Nights Experience"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4558baa4eed1400f75c3a.jpeg"
                    alt="Neon Nights Experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Video Section (if available) */}
        {data.videoContent && (
          <section className="bg-black py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">
                Watch Neon Nights in Action
              </h2>
              <div className="max-w-4xl mx-auto aspect-video relative">
                <iframe 
                  className="w-full h-full rounded-lg shadow-xl"
                  src={data.videoContent.videoUrl} 
                  title="Neon Nights Experience"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-white mt-6">
                FUN MUSIC INCLUDED! DON&apos;T FORGET TO UNMUTE!
              </p>
            </div>
          </section>
        )}

        {/* Neon Nights Activities */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">
              Glow in the Dark Activities
            </h2>

            {/* CTAs for Sub-Experiences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              
              <Link href="/glow-sports" className="block bg-black/50 p-8 rounded-lg shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-teal-400">Glow in the Dark Sports</h3>
                <p className="mb-4 text-gray-300">
                  Experience your favorite sports like never before – under the vibrant glow of blacklights! Perfect for parties, team building, and unique events.
                </p>
                <span className="text-teal-400 font-semibold hover:underline">Explore Glow Sports &rarr;</span>
              </Link>
            </div>
            
            {/* Gallery Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/686f277ee9ff4c7f27b0a5cf.png"
                  alt="Neon Nights Gallery 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/686f277eeb2c4f41af1ec11f.jpeg"
                  alt="Neon Nights Gallery 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/686f277e9f20bf603e82b0f4.jpeg"
                  alt="Neon Nights Gallery 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/686f277ee9ff4c306cb0a5ce.jpeg"
                  alt="Neon Nights Gallery 4"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/686f277e6e4a646872c434ed.jpeg"
                  alt="Neon Nights Gallery 5"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/686f277eeb2c4f61821ec120.jpeg"
                  alt="Neon Nights Gallery 6"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/686f277e6e4a646940c434ee.jpeg"
                  alt="Neon Nights Gallery 7"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/686f277ee9ff4c0eb3b0a5d0.jpeg"
                  alt="Neon Nights Gallery 8"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="bg-black text-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">
                Frequently Asked Questions
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing & Booking */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-purple-400">
                Ready to Glow?
              </h2>
              <p className="mb-6 text-lg">
                Neon Nights are priced uniquely based on your specific needs. Different needs and budgets can be accommodated, scaling the spectacle up or down to meet your requirements.
              </p>
              <p className="mb-8 text-lg">
                To discuss Neon Nights for your event, call us at <a href="tel:252-764-7628" className="text-purple-400 font-bold">252-764-7628</a> or click the button below to send us a message. We&apos;re here to help without any sales pressure!
              </p>
              <Link
                href={data.cta.url}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 inline-block"
              >
                {data.cta.text || "Contact Us for a Quote"}
              </Link>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
