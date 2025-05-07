import React from 'react';
import { Metadata } from 'next';
import Header from '../components/shared/Layout/Header';
import HeroBanner from '../components/home/HeroBanner';
import AmericaBanner from '../components/home/AmericaBanner';
import VideoHighlight from '../components/home/VideoHighlight';
import ServiceHighlights from '../components/home/ServiceHighlights';
import FeaturedSlider from '../components/home/FeaturedSlider';
import Newsletter from '../components/shared/UI/Newsletter';
import Footer from '../components/shared/Layout/Footer';
import { getHomepageData } from '../services/contentService';
import { parseHomepageData } from '../utils/homepageDataParser';

// Hardcoded fallback data for critical error cases
const FALLBACK_DATA = parseHomepageData({
  title: 'Emerald Owl Productions Home',
  meta: {
    description: 'Creating unforgettable experiences and magical moments for events of all kinds.',
    keywords: ''
  },
  resources: [
    {
      type: 'image',
      url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png',
      alt: 'Emerald Owl Productions',
      width: '',
      height: ''
    }
  ]
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    // Fetch the homepage data
    const homepageData = await getHomepageData();
    
    return {
      title: homepageData.meta.title,
      description: homepageData.meta.description,
      keywords: homepageData.meta.keywords,
    };
  } catch (error) {
    // Fallback metadata in case of error
    return {
      title: FALLBACK_DATA.meta.title,
      description: FALLBACK_DATA.meta.description,
      keywords: FALLBACK_DATA.meta.keywords,
    };
  }
}

export default async function Home() {
  try {
    // Fetch the homepage data
    const homepageData = await getHomepageData();
    
    return (
      <React.Fragment>
        <Header />
        <main>
          <HeroBanner data={homepageData.hero} />
          <AmericaBanner data={homepageData.americaBanner} />
          <VideoHighlight data={homepageData.videoHighlight} />
          <ServiceHighlights services={homepageData.services} />
          <FeaturedSlider data={homepageData.featuredContent} />
          <Newsletter />
        </main>
        <Footer />
      </React.Fragment>
    );
  } catch (error) {
    // Fallback UI in case of error
    console.error('Error rendering homepage:', error);
    return (
      <React.Fragment>
        <Header />
        <main>
          <HeroBanner data={FALLBACK_DATA.hero} />
          <ServiceHighlights services={FALLBACK_DATA.services} />
          <Newsletter />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
