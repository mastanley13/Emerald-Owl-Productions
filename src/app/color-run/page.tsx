import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Newsletter from '../../components/shared/UI/Newsletter';
import Image from 'next/image';
import Link from 'next/link';
// import { getColorRunData } from '../../services/contentService'; // TODO: Create this service
import { Metadata } from 'next';

// TODO: Create and import actual data type for ColorRunData
interface ColorRunData {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    title: string;
    description?: string;
    backgroundImage?: {
      url: string;
      alt: string;
    };
  };
  contentSection: {
    title: string;
    description: string;
    benefits: string[];
    image?: {
        url: string;
        alt: string;
    }
  };
  cta: {
    text: string;
    url: string;
  };
  // Add other relevant data fields e.g., gallery, faqs
}

// Placeholder data - replace with actual data fetching
const colorRunData: ColorRunData = {
  meta: {
    title: 'Color Run Experience | Emerald Owl Productions',
    description: 'Join the most vibrant and fun Color Run events! Perfect for fundraisers, schools, and community celebrations. Shower yourself in color!',
    keywords: ['color run', 'fun run', 'charity run', '5k color run', 'school event', 'community event', 'Emerald Owl Productions'],
  },
  hero: {
    title: 'Color Run Experience',
    description: 'Experience the thrill of a Color Run! Run, walk, or dance your way through a shower of brilliant, safe, and washable colors.',
    backgroundImage: { 
      url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44ebc9b155f71d2702ccb.jpeg', // Updated Hero Image
      alt: 'Vibrant Color Run explosion of powders',
    },
  },
  contentSection: {
    title: 'Unleash a Rainbow of Fun!',
    description: "Our color run experiences bring vibrant energy to any event. Participants run, walk, or dance through stations where they are showered with brilliant, washable colored powder. It's perfect for school field days, fundraisers, or community celebrations, creating lasting memories and fantastic photo opportunities.",
    benefits: [
      'Non-toxic, easily washable color powder',
      'Custom course design to fit your venue',
      'Multiple color stations with different hues',
      'Energetic music and atmosphere',
      'Photography opportunities included',
      'Full setup and cleanup services'
    ],
    image: {
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44e965186f7196fdbf474.jpeg', // Updated Content Image
        alt: 'Participants covered in colorful powder at a color run station'
    }
  },
  cta: {
    text: 'Plan Your Color Run!',
    url: '/contact-us',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  // const data = await getColorRunData(); // TODO
  const data = colorRunData; // Using placeholder
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

export default async function ColorRunPage() {
  // const data = await getColorRunData(); // TODO
  const data = colorRunData; // Using placeholder

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-black via-black to-pink-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-pink-950/80 backdrop-blur-[2px]" />
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-purple-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            {data.hero.backgroundImage && (
              <Image
                src={data.hero.backgroundImage.url}
                alt={data.hero.backgroundImage.alt || data.hero.title}
                fill
                priority
                className="object-cover opacity-30"
              />
            )}
          </div>
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-pink-400 relative drop-shadow-md">
                  {data.hero.title}
                </span>
              </h1>
              {data.hero.description && (
                <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                  {data.hero.description}
                </p>
              )}
              <div className="flex flex-wrap gap-5">
                <Link
                  href={data.cta.url}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-pink-300/30"
                >
                  {data.cta.text}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="bg-gray-100 text-gray-800 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-pink-600 text-center">
                {data.contentSection.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="prose prose-lg max-w-none">
                  <p>{data.contentSection.description}</p>
                  <h3 className="text-2xl font-semibold mt-6 mb-3 text-pink-500">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {data.contentSection.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-pink-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {data.contentSection.image && (
                    <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl mt-8 md:mt-0">
                        <Image 
                            src={data.contentSection.image.url}
                            alt={data.contentSection.image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* TODO: Add Gallery Section */}
        {/* TODO: Add FAQ Section if applicable */}

        {/* Newsletter removed */}
      </main>
      <Footer />
    </>
  );
} 