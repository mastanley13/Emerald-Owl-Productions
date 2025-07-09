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
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-purple-400 relative drop-shadow-md">
                  {data.hero.title}
                </span>
              </h1>
              {data.hero.subtitle && (
                <p className="text-2xl md:text-3xl mb-4 text-purple-300 font-light">
                  {data.hero.subtitle}
                </p>
              )}
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                {data.hero.description}
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href={data.cta.url} 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-purple-300/30"
                >
                  {data.cta.text}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - A Truly Different Experience */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-400">
                  {data.contentSection.title}
                </h2>
                <p className="mb-6 text-lg">
                  {data.contentSection.description}
                </p>
                <p className="mb-6 text-gray-300">
                  {data.contentSection.includes}
                </p>
                {data.contentSection.features && data.contentSection.features.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {data.contentSection.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-900 text-purple-400 mr-3 mt-1">
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

        {/* Forever Memory Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-purple-400">
                Creating Forever Memories
              </h2>
              <div className="space-y-6 text-lg">
                <p className="text-gray-300">
                  {data.foreverMemory?.description}
                </p>
                <p className="text-xl font-semibold text-purple-200">
                  {data.foreverMemory?.comparison}
                </p>
                <p className="text-2xl font-bold text-pink-400 bg-black/30 p-6 rounded-lg">
                  {data.foreverMemory?.result}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Experience Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">
                High Energy & Interactive
              </h2>
              <div className="text-lg text-gray-300 leading-relaxed">
                <p>{data.interactiveExperience?.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="bg-purple-950/50 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-purple-400">
                Most "Bang for Your Buck"
              </h2>
              <div className="text-lg text-gray-300 leading-relaxed">
                <p>{data.valueProposition?.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Add-Ons Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">
                Common Add-On Experiences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.addOns?.list.map((addon, index) => (
                  <div key={index} className="bg-black/50 p-6 rounded-lg border border-purple-500/20">
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-purple-900 text-purple-400 mr-4 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-300 font-medium">{addon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Section (if available) */}
        {data.videoContent && (
          <section className="bg-black py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">
                {data.videoContent.title}
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
                {data.videoContent.note}
              </p>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        {data.testimonials && data.testimonials.length > 0 && (
          <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">
                What People Are Saying
              </h2>
              <div className="max-w-4xl mx-auto">
                {data.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-black/50 p-8 rounded-lg border border-purple-500/20">
                    <blockquote className="text-lg text-gray-300 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-purple-400 font-semibold">
                      {testimonial.author}
                      {testimonial.location && (
                        <span className="text-gray-400 font-normal"> - {testimonial.location}</span>
                      )}
                      {testimonial.event && (
                        <div className="text-sm text-gray-500 mt-1">{testimonial.event}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">
              Neon Nights in Action
            </h2>
            
            {/* Gallery Section (if available from data) */}
            {data.gallery && data.gallery.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.gallery.map((item, index) => (
                  <div key={index} className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                    <Image 
                      src={item.image.url}
                      alt={item.image.alt || `Neon Nights ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                        <p className="text-sm">{item.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67384380e921027610441d75.png"
                    alt="Neon Nights Interactive Experience"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67384328732b00e1df2b34e5.jpeg"
                    alt="Professional laser and lighting setup"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6738435ef5dd352ecc77c78b.jpeg"
                    alt="Multi-generational fun at Neon Nights"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            )}

            {/* CTAs for Sub-Experiences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
              <Link href="/glow-foam-paint" className="block bg-gray-900/50 p-8 rounded-lg shadow-lg hover:shadow-pink-500/30 transition-shadow duration-300 border border-pink-500/20">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Glow in the Dark Foam & Paint</h3>
                <p className="mb-4 text-gray-300">
                  Add a splash zone to your Neon Nights event! Dive into a vibrant world of glowing foam and paint for an unforgettable experience.
                </p>
                <span className="text-pink-400 font-semibold hover:underline">Add to Your Event &rarr;</span>
              </Link>
              
              <Link href="/glow-sports" className="block bg-gray-900/50 p-8 rounded-lg shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300 border border-teal-500/20">
                <h3 className="text-2xl font-bold mb-4 text-teal-400">Glow in the Dark Sports</h3>
                <p className="mb-4 text-gray-300">
                  Take your Neon Nights to the next level with glowing sports activities under blacklights!
                </p>
                <span className="text-teal-400 font-semibold hover:underline">Add to Your Event &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">
                Frequently Asked Questions
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="bg-black/50 p-6 rounded-lg shadow border border-purple-500/20">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing & Booking */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-purple-400">
                Ready to Transform Your Event?
              </h2>
              <div className="bg-gray-900/50 p-8 rounded-lg border border-purple-500/20 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">
                  {data.pricing?.title}
                </h3>
                <p className="mb-6 text-lg text-gray-300">
                  {data.pricing?.description}
                </p>
                <p className="text-lg font-semibold text-purple-200">
                  {data.pricing?.contactInfo}
                </p>
              </div>
              <Link
                href={data.cta.url}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 inline-block shadow-xl hover:shadow-purple-300/30"
              >
                {data.cta.text}
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
