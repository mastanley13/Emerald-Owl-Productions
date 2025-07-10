import React from 'react';
import { Metadata } from 'next';
import Header from '../components/shared/Layout/Header';
import HeroBanner from '../components/home/HeroBanner';
import IntroSection from '../components/home/IntroSection';
import AmericaBanner from '../components/home/AmericaBanner';
import VideoHighlight from '../components/home/VideoHighlight';
import Footer from '../components/shared/Layout/Footer';
import Memorial from '../components/home/Memorial';
import { getHomepageData, getExperiencesData } from '../services/contentService';
import ExperienceMenu from '../components/home/ExperienceMenu';
import { parseHomepageData } from '../utils/homepageDataParser';
import { ExperiencesData } from '../types/experiences';

// Comprehensive fallback data that matches the expected structure
const FALLBACK_HOMEPAGE_DATA = parseHomepageData({
  title: 'Emerald Owl Productions Home',
  meta: {
    description: 'Creating unforgettable experiences and magical moments for events of all kinds.',
    keywords: 'Emerald Owl Productions, event services, laser light shows, neon nights, foam parties, water games, entertainment'
  },
  resources: [
    {
      type: 'image',
      url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png',
      alt: 'Emerald Owl Productions',
      width: '200',
      height: '200'
    }
  ]
});

const FALLBACK_EXPERIENCES_DATA: ExperiencesData = {
  mainCourses: [
    {
      id: 'laser-light-show',
      title: 'Laser Light Shows',
      hook: 'Spectacular laser displays for any event',
      visual: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/678fb2d6141a590c80b64c99.jpeg',
      link: '/laser-light-show'
    },
    {
      id: 'neon-nights',
      title: 'Neon Nights',
      hook: 'Glow in the dark party experiences',
      visual: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4558baa4eed1400f75c3a.jpeg',
      link: '/neon-nights'
    },
    {
      id: 'foam-parties',
      title: 'Foam Parties',
      hook: 'Fun foam-filled water battles',
      visual: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
      link: '/foam-parties'
    }
  ],
  appetizers: [
    {
      id: 'water-games',
      title: 'Water Games',
      hook: 'Exciting water-based activities',
      visual: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
      link: '/water-games'
    }
  ],
  desserts: [
    {
      id: 'sensory-friendly',
      title: 'Sensory Friendly Experiences',
      hook: 'Inclusive experiences for all',
      visual: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab91924dcedf6404738967.png',
      link: '/sensory-friendly-experiences'
    }
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const homepageData = await getHomepageData();
    
    return {
      title: homepageData.meta.title || FALLBACK_HOMEPAGE_DATA.meta.title,
      description: homepageData.meta.description || FALLBACK_HOMEPAGE_DATA.meta.description,
      keywords: homepageData.meta.keywords || FALLBACK_HOMEPAGE_DATA.meta.keywords,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: FALLBACK_HOMEPAGE_DATA.meta.title,
      description: FALLBACK_HOMEPAGE_DATA.meta.description,
      keywords: FALLBACK_HOMEPAGE_DATA.meta.keywords,
    };
  }
}

export default async function Home() {
  let homepageData = FALLBACK_HOMEPAGE_DATA;
  let experiencesData = FALLBACK_EXPERIENCES_DATA;

  try {
    // Try to fetch homepage data
    homepageData = await getHomepageData();
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    // homepageData already set to fallback
  }

  try {
    // Try to fetch experiences data
    experiencesData = await getExperiencesData();
  } catch (error) {
    console.error('Error fetching experiences data:', error);
    // experiencesData already set to fallback
  }

  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroBanner data={homepageData.hero} />
        <IntroSection />
        <VideoHighlight data={homepageData.videoHighlight} />
        <AmericaBanner data={homepageData.americaBanner} />
        <ExperienceMenu experiences={experiencesData} />
        <Memorial />
      </main>
      <Footer />
    </React.Fragment>
  );
}
