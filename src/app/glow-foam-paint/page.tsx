import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Newsletter from '../../components/shared/UI/Newsletter';
import Image from 'next/image';
import Link from 'next/link';
// import { getGlowFoamPaintData } from '../../services/contentService'; // TODO: Create this service
import { Metadata } from 'next';

// TODO: Create and import actual data type
interface GlowFoamPaintData {
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
  cta: {
    text: string;
    url: string;
  };
  // Add other relevant data fields here
}

// Placeholder data - replace with actual data fetching
const glowFoamPaintData: GlowFoamPaintData = {
  meta: {
    title: 'Glow in the Dark Foam & Paint Parties | Emerald Owl Productions',
    description: 'Experience the ultimate messy fun with our Glow in the Dark Foam and Paint parties! Perfect for all ages.',
    keywords: ['glow foam party', 'glow paint party', 'neon foam', 'uv paint', 'blacklight party', 'Emerald Owl Productions'],
  },
  hero: {
    title: 'Glow in the Dark Foam & Paint',
    description: 'Dive into a vibrant world of glowing foam and paint! An unforgettable experience that combines messy fun with dazzling neon colors under blacklights.',
    backgroundImage: { // Example image - replace with actual
      url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67104d556dbca5b137091876.jpeg', // Placeholder image
      alt: 'Colorful glow in the dark foam party',
    },
  },
  cta: {
    text: 'Book Your Glow Mess!',
    url: '/contact-us',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  // const data = await getGlowFoamPaintData(); // TODO
  const data = glowFoamPaintData; // Using placeholder
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

export default async function GlowFoamPaintPage() {
  // const data = await getGlowFoamPaintData(); // TODO
  const data = glowFoamPaintData; // Using placeholder

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
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto prose prose-invert lg:prose-xl text-gray-300">
              <h2 className="text-3xl font-bold mb-8 text-pink-400">
                Get Ready to Glow and Get Messy!
              </h2>
              <p>
                If you think our regular foam party looks fun, imagine it at night with <strong className="text-pink-400">glow-in-the-dark foam and paint!</strong> It&apos;s an electrifying experience that takes excitement to a whole new level.
              </p>
              <p>
                Bring a change of clothes and a towel for this one – because you&apos;re going to get wonderfully messy! The <strong className="text-pink-400">fun memories</strong> you&apos;ll leave with are going to last a long, long time. This isn&apos;t just a party; it&apos;s a vibrant, glowing adventure.
              </p>
              <p>
                Our Glow in the Dark Foam & Paint events can be tailored to your needs. They can be fantastic <strong className="text-pink-400">stand-alone smaller events</strong>, perfect for birthdays, private parties, or unique get-togethers.
              </p>
              <p>
                Alternatively, amp up your larger outdoor events by adding a <strong className="text-pink-400">&quot;SPLASH ZONE&quot;</strong> at your Neon Nights glow party or any other evening celebration. It&apos;s a surefire way to add an extra dimension of interactive, glowing fun that guests of all ages will love.
              </p>
              {/* Add more content specific to Glow Foam & Paint here */}
            </div>
          </div>
        </section>
        
        {/* TODO: Add Gallery Section */}
        {/* TODO: Add FAQ Section if applicable */}

        <Newsletter />
      </main>
      <Footer />
    </>
  );
} 