import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Newsletter from '../../components/shared/UI/Newsletter';
import Image from 'next/image';
import Link from 'next/link';
// import { getGlowSportsData } from '../../services/contentService'; // TODO: Create this service
import { Metadata } from 'next';

// TODO: Create and import actual data type
interface GlowSportsData {
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
const glowSportsData: GlowSportsData = {
  meta: {
    title: 'Glow in the Dark Sports | Emerald Owl Productions',
    description: 'Elevate your game with Glow in the Dark Sports! We turn classic sports into an electrifying neon experience.',
    keywords: ['glow sports', 'neon sports', 'glow dodgeball', 'glow basketball', 'glow kickball', 'blacklight sports', 'Emerald Owl Productions'],
  },
  hero: {
    title: 'Glow in the Dark Sports',
    description: 'Experience your favorite sports like never before – under the vibrant glow of blacklights! Perfect for parties, team building, and unique events.',
    backgroundImage: { // Example image - replace with actual
      url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/687933d002da474708446fa5.png', // Updated image
      alt: 'Glow in the dark sports action',
    },
  },
  cta: {
    text: 'Light Up Your Game!',
    url: '/contact-us',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  // const data = await getGlowSportsData(); // TODO
  const data = glowSportsData; // Using placeholder
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

export default async function GlowSportsPage() {
  // const data = await getGlowSportsData(); // TODO
  const data = glowSportsData; // Using placeholder

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[800px] flex items-center bg-gradient-to-b from-black via-black to-teal-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-teal-950/80 backdrop-blur-[2px]" />
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-purple-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            {data.hero.backgroundImage && (
              <div
                className="absolute inset-0 w-full h-full z-0 bg-no-repeat bg-center bg-fixed"
                style={{
                  backgroundImage: `url('${data.hero.backgroundImage.url}')`,
                  backgroundAttachment: 'fixed',
                  backgroundSize: 'cover', // Use cover for seamless look
                  backgroundPosition: 'center',
                  backgroundColor: '#0f172a',
                  opacity: 0.35,
                }}
                aria-label={data.hero.backgroundImage.alt || data.hero.title}
              />
            )}
          </div>
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-teal-400 relative drop-shadow-md">
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
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-teal-300/30"
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
              <h2 className="text-3xl font-bold mb-8 text-teal-400">
                Classic Sports, Neon Twist!
              </h2>
              <p>
                We take any fun activity and elevate it to a new, electrifying level by making it <strong className="text-teal-400">glow in the dark!</strong> Imagine the thrill of your favorite sports played under the mesmerizing ambiance of blacklights with glowing equipment and markers.
              </p>
              <p>
                Some of our most popular Glow in the Dark Sports include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                <li><strong className="text-teal-400">Glow in the Dark Dodgeball:</strong> Duck, dip, dive, and dodge glowing balls in an epic battle!</li>
                <li><strong className="text-teal-400">Glow in the Dark Basketball:</strong> Shoot hoops with glowing basketballs and light-up nets.</li>
                <li><strong className="text-teal-400">Glow in the Dark Kickball:</strong> A playground classic reimagined with a luminous twist.</li>
                <li><strong className="text-teal-400">And many more!</strong> We can adapt various sports like volleyball, soccer, and tag to a glow-in-the-dark format.</li>
              </ul>
              <p>
                Glow in the Dark Sports are perfect for <strong className="text-teal-400">birthday parties, corporate team-building events, school functions, fundraisers, or any gathering</strong> looking for a unique and active entertainment option. It&apos;s an engaging experience for all ages and skill levels.
              </p>
              {/* Add more content specific to Glow Sports here */}
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