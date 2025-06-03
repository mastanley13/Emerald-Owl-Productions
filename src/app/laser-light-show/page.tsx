import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { getLaserLightShowData } from '../../services/contentService';
import { Metadata } from 'next';
import ExperienceHeadline from '../../components/experiences/ExperienceHeadline';

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
  
  const VideoSection = () => (
    data.videoContent ? (
      <section className="bg-black">
        <div className="container mx-auto px-0">
          <div className="relative aspect-video w-full">
            <iframe 
              width="100%" 
              height="100%" 
              src={`${data.videoContent.videoUrl}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${data.videoContent.videoUrl.split('/').pop()}`}
              title={data.hero.title || "Experience Video"} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>
    ) : null
  );

  // Helper for Descriptive Content - MODIFIED
  const DescriptiveContentSection = () => (
    <>
      {/* "Standard In-Person Light Show Section" (data.contentSection) REMOVED */}
      
      {/* "Choosing the Right Format" section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Choosing the Right Format (In-Person vs Drive-In)
          </h2>
          <div className="max-w-3xl mx-auto prose lg:prose-lg text-gray-700">
            <p>
              Mike's explanatory copy will go here. It will discuss the differences between in-person and drive-in laser show formats, helping clients decide which is best for their event. 
              This section will cover aspects like audience experience, venue requirements, and logistical considerations for each format.
            </p>
          </div>
          {/* CTAs for Laser Safety and Benefits */}
          <div className="mt-10 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/laser-safety"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Learn About Laser Safety
            </Link>
            <Link 
              href="/laser-show-benefits"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Discover Laser Show Benefits
            </Link>
          </div>
        </div>
      </section>

      {/* "Why Lasers Section" (data.benefits) REMOVED - Content moving to a new page */}
      
      {/* Types of Laser Shows Section (simplified, no pricing focus) */}
      {/* This section will be updated once data source for Beam/Graphic shows is clear */}
      {data.packages && data.packages.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            {/* Title for this section might need to be dynamic if main headline changes */}
            <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Types of Laser Shows We Offer</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
              {data.packages
                .filter(pkg => !pkg.title.toLowerCase().includes("water effect")) // Filter out "Water Effects"
                // .filter(pkg => pkg.title.includes("Beam") || pkg.title.includes("Graphic")) // Keep this for later when data source is clear
                .map((pkg, index) => (
                <div key={index} className="flex flex-col bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  {pkg.image && (
                    <div className="relative h-64 w-full">
                      <Image 
                        src={pkg.image.url}
                        alt={pkg.image.alt || pkg.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-emerald-600 mb-3">{pkg.title}</h3>
                    <p className="text-gray-700 mb-4 text-base flex-grow">{pkg.description}</p>
                    {pkg.features && pkg.features.length > 0 && (
                      <>
                        <h4 className="text-md font-semibold text-gray-800 mt-3 mb-2">Includes:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                          {pkg.features.map((feature, fidx) => (
                            <li key={fidx}>{feature}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* "Safety Section" (data.safetyFeatures) REMOVED - Content moving to a new page */}
    </>
  );

  // Helper for Event Gallery - UPDATED with new images
  const EventGallerySection = () => {
    const galleryImages = [
      { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4432553f26ca0355ef06a.jpeg", alt: "Laser Show Image 1" },
      { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a443acaa4eeda623f7348f.jpeg", alt: "Laser Show Image 2" },
      { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a442f253f26c48535ef03f.jpeg", alt: "Laser Show Image 3" },
      { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a444175186f739a6dbd3f3.jpeg", alt: "Laser Show Image 4" },
      { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44260aa4eedb151f721ee.jpeg", alt: "Laser Show Image 5" },
      { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a441729b155f0a656fe6a2.jpeg", alt: "Laser Show Image 6" },
      { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a441209b155f3dfd6fe5e4.jpeg", alt: "Laser Show Image 7" },
      { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673caec4f788b0a03396f579.jpeg", alt: "Laser Show Image 8" },
      { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c349ed88b415815f4fb5b.jpeg", alt: "Laser Show Image 9" },
    ];
    const imagesToDisplay = galleryImages.map(img => ({ image: { url: img.url, alt: img.alt }, caption: null }));
    
    // Determine number of columns based on image count for better responsiveness
    let gridColsClass = "lg:grid-cols-3"; // Default for many images
    if (imagesToDisplay.length <= 4) {
      gridColsClass = "lg:grid-cols-4";
    } else if (imagesToDisplay.length === 5) {
        gridColsClass = "lg:grid-cols-5"; // Or keep 3/4 and let it wrap
    } else if (imagesToDisplay.length === 6) {
        gridColsClass = "lg:grid-cols-3"; // 2 rows of 3
    }

    return imagesToDisplay.length > 0 ? (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Event Gallery</h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-4 md:gap-6`}> {/* Adjusted gap and dynamic cols */}
            {imagesToDisplay.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <div className="relative aspect-[4/3] w-full">
                  {item.image && (
                    <Image 
                      src={item.image.url}
                      alt={item.image.alt || 'Laser Light Show Gallery Image'}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      // Adjusted sizes prop for potentially more images - might need fine-tuning
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ) : null;
  };

  const FaqSection = () => (
    data.faqs && data.faqs.length > 0 ? (
        <section className="bg-emerald-950 text-white py-16">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center"><span className="text-emerald-400">Frequently Asked Questions</span></h2>
            <div className="space-y-6">
                {data.faqs.map((faq, index) => (
                <details key={index} className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/10 group">
                    <summary className="flex justify-between items-center cursor-pointer text-xl font-medium text-emerald-300 group-hover:text-emerald-200">
                    {faq.question}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    </summary>
                    <p className="text-gray-300 mt-3 pt-3 border-t border-emerald-500/20">{faq.answer}</p>
                </details>
                ))}
            </div>
            </div>
        </div>
        </section>
    ) : null
  );

  const TestimonialsSection = () => (
    data.testimonials && data.testimonials.length > 0 ? (
        <section className="bg-white py-16">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {data.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col">
                <p className="text-gray-700 italic mb-4 flex-grow">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-auto">
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
    ) : null
  );

  return (
    <>
      <Header />
      <main className="pt-0">
        <VideoSection />
        <ExperienceHeadline heroData={data.hero} /> {/* Title here is still data.hero.title */}
        <DescriptiveContentSection />
        <EventGallerySection />
        <FaqSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
