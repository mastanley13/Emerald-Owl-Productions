import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { getLaserLightShowData } from '../../services/contentService';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // Fetch data
  const data = await getLaserLightShowData();
  
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

export default async function LaserLightShowPage() {
  // Fetch data
  const data = await getLaserLightShowData();
  
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-black via-black to-emerald-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-emerald-950/80 backdrop-blur-[2px]" />
            
            {/* Decorative laser beams */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-emerald-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-emerald-400 relative drop-shadow-md">
                  {data.hero.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                Spectacular laser displays for any event, creating unforgettable visual experiences
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href={data.cta.url}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform"
                >
                  {data.cta.text}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Standard In-Person Light Show Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              <span className="text-emerald-600">{data.contentSection.title}</span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 mb-6">
                {data.contentSection.description}
              </p>
              
              <p className="text-gray-700 font-medium mb-4">Other advantages of a laser show:</p>
              
              <ul className="list-disc pl-5 mb-8 space-y-2">
                {data.contentSection.features?.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why Lasers Section */}
        <section className="bg-emerald-950 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-emerald-400">Why Lasers?</span>
                </h2>
                {data.benefits && data.benefits.map((benefit, index) => (
                  <p key={index} className="text-gray-200 mb-6">
                    <strong>{benefit.title}:</strong> {benefit.description}
                  </p>
                ))}
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                {data.videoContent && (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={data.videoContent.videoUrl} 
                    title="Laser Show Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Types of Laser Shows Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-emerald-600">Types of Laser Shows</span>
            </h2>

            {data.packages && data.packages.map((pkg, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-16 ${index < data.packages!.length - 1 ? 'mb-16' : ''}`}>
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <div className="mb-8 rounded-lg overflow-hidden">
                        <Image 
                          src={pkg.image.url}
                          alt={pkg.image.alt || pkg.title}
                          width={600}
                          height={400}
                          className="w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-emerald-600 mb-4">{pkg.title}</h3>
                      <p className="text-gray-700">{pkg.description}</p>
                      {pkg.features && pkg.features.length > 0 && (
                        <ul className="mt-4 list-disc pl-5 space-y-1">
                          {pkg.features.map((feature, fidx) => (
                            <li key={fidx} className="text-gray-700">{feature}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col justify-center md:order-1 order-2">
                      <h3 className="text-2xl font-bold text-emerald-600 mb-4">{pkg.title}</h3>
                      <p className="text-gray-700">{pkg.description}</p>
                      {pkg.features && pkg.features.length > 0 && (
                        <ul className="mt-4 list-disc pl-5 space-y-1">
                          {pkg.features.map((feature, fidx) => (
                            <li key={fidx} className="text-gray-700">{feature}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="md:order-2 order-1 mb-8 md:mb-0">
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src={pkg.image.url}
                          alt={pkg.image.alt || pkg.title}
                          width={600}
                          height={400}
                          className="w-full object-cover"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Safety Section */}
        <section className="bg-gradient-to-b from-emerald-950 to-black text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-emerald-400">The Safest Experience in the Sky</span>
              </h2>
              <p className="text-gray-200">
                Our laser shows provide spectacular entertainment with complete safety
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {data.safetyFeatures && data.safetyFeatures.map((feature, index) => (
                <div key={index} className="bg-emerald-900/30 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 transition-all duration-300 hover:transform hover:scale-105">
                  <h3 className="text-xl font-bold text-emerald-400 mb-3">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/the-safest-experience-in-the-sky" 
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
              >
                Learn More About Laser Show Safety
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-emerald-600 mb-6">LASER SHOW PRICING</h2>
              <p className="text-gray-700 mb-8">
                Laser shows are unique entertainment options where you need details to get an accurate quote. Different needs and budgets can be accommodated, scaling the spectacle up or down. To discuss a laser show for your event, call us at 252-764-7628 without any sales pressure.
              </p>
              <p className="text-gray-700 mb-8">
                During the call, we'll discuss your objectives, desired show type (beam, graphic or combo), venue specifics, anticipated audience size, sound and power requirements, location, whether it\'s a solo event, customized music needs, and your budget. Our talented programmers design shows to music and offer package deals for multi-night events, reducing the cost per night significantly.
              </p>
              <p className="text-gray-700 mb-10">
                One-time shows are pricier due to fixed overheads, but shared packages or revenue-split events can make them more affordable. At Emerald Owl Productions, we aim to find the right balance for a memorable laser show experience within your budget—multiple nightly shows also hardly impact the price.
              </p>
              <Link 
                href={data.cta.url}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-300/40 hover:-translate-y-1 transform inline-block"
              >
                Contact Us for Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="bg-emerald-950 text-white py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">
                  <span className="text-emerald-400">Frequently Asked Questions</span>
                </h2>
                
                <div className="space-y-8">
                  {data.faqs.map((faq, index) => (
                    <div key={index} className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/10">
                      <h3 className="text-xl font-medium text-emerald-400 mb-3">{faq.question}</h3>
                      <p className="text-gray-200">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        {data.testimonials && data.testimonials.length > 0 && (
          <section className="bg-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-emerald-600">What Our Clients Say</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {data.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-100">
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      {testimonial.role && (
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="bg-emerald-950 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-emerald-400">Unique Benefits of Hosting a Laser Show</span>
              </h2>
              <p className="text-gray-200">
                Transform your event into an unforgettable experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Customizable & Scalable</h3>
                <p className="text-gray-200">Perfect for any scale - from intimate gatherings to major festivals. Fully tailored to your event's theme and goals.</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Cost-Effective</h3>
                <p className="text-gray-200">Add extra shows or nights at minimal cost. Perfect for fundraising events and multi-day festivals.</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Versatile Integration</h3>
                <p className="text-gray-200">Works perfectly as a standalone event or enhances existing performances with live music and entertainment.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/benefits-for-hosting-a-laser-show" 
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
              >
                Discover All Benefits
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
