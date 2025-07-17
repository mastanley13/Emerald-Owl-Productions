import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';
import { getExperiencesData } from '../../services/contentService'; // Import the data fetching function
import { Experience } from '../../types/experiences'; // Import the Experience type
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link'; // Keep Link for the CTA

export const metadata: Metadata = {
  title: 'Our Initiatives | Emerald Owl Productions',
  description: 'Discover our community and social impact initiatives: Dripping in Confidence, Do It Now, and Green Light Movement.',
};

// Helper function to find an initiative by title from the fetched data
const findInitiative = (initiatives: Experience[] | undefined, title: string): Experience | undefined => {
  return initiatives?.find(initiative => initiative.title.toLowerCase() === title.toLowerCase());
};

export default async function OurInitiativesPage() {
  let initiativesData: Experience[] = [];
  try {
    const experiences = await getExperiencesData();
    // The ExperienceMenu uses experiences.desserts for initiatives
    if (experiences && experiences.desserts) {
      initiativesData = experiences.desserts;
    }
  } catch (error) {
    console.error("Error fetching initiatives data:", error);
    // initiativesData will remain empty, and placeholders will be used
  }

  const targetInitiativeTitles = [
    "Dripping in Confidence",
    "Do It Now",
    "Green Light Movement"
  ];

  const displayedInitiatives = targetInitiativeTitles.map(title => {
    const found = findInitiative(initiativesData, title);
    return {
      id: found?.id || title.toLowerCase().replace(/\s+/g, '-'), // Generate an ID if not found
      title: found?.title || title,
      description: found?.hook || `Details about ${title} coming soon.`, // Use hook as description
      visual: title.toLowerCase() === "green light movement" 
                ? 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/687961aa02da47d0db454d31.jpeg' 
              : title.toLowerCase() === "dripping in confidence"
                ? 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6715c4feafc1d92163c3bdeb.png'
                : (found?.visual || '/images/placeholder.jpg') // Default placeholder image
    };
  });

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-300 mb-4">Our Initiatives</h1>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Making a positive impact in our communities through innovative programs.
            </p>
          </div>
        </section>

        {/* Initiatives Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4">
                Our Initiatives
              </h2>
              <p className="text-gray-700">
                At Emerald Owl Productions, we believe in using our creativity and resources to make 
                a positive difference. Our initiatives focus on accessibility, education, and community building.
              </p>
            </div>

            {/* Initiatives */}
            {displayedInitiatives.length > 0 ? (
              <div className="space-y-12">
                {displayedInitiatives.map((initiative) => (
                  <div key={initiative.id} className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-6">
                    <div className="relative w-full md:w-1/3 h-56 md:h-auto md:aspect-square rounded-lg overflow-hidden shadow-md bg-white">
                      <Image 
                        src={initiative.visual}
                        alt={initiative.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-emerald-700 mb-3">{initiative.title}</h3>
                      <p className="text-gray-700 mb-4">
                        {initiative.description}
                      </p>
                      {/* You can add more specific details or links here if available */}
                      {initiative.title.toLowerCase() === "dripping in confidence" && (
                        <Link 
                          href="https://www.drippinginconfidence.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block mt-2 px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-md hover:bg-emerald-700 transition-colors"
                        >
                          Learn More
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">Our initiatives are currently being updated. Please check back soon!</p>
            )}
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-12 bg-emerald-50">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              Get Involved
            </h2>
            <p className="text-gray-700 mb-8">
              Want to support our initiatives or collaborate on a community project? 
              We welcome partners who share our vision for creating positive impact.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 