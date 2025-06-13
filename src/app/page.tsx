import React from 'react';
import { Metadata } from 'next';
import Header from '../components/shared/Layout/Header';
import HeroBanner from '../components/home/HeroBanner';
import AmericaBanner from '../components/home/AmericaBanner';
import VideoHighlight from '../components/home/VideoHighlight';
import Newsletter from '../components/shared/UI/Newsletter';
import Footer from '../components/shared/Layout/Footer';
import Memorial from '../components/home/Memorial';
import { getHomepageData } from '../services/contentService';
import { getExperiencesData } from '../services/contentService';
import ExperienceMenu from '../components/home/ExperienceMenu';
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
    const experiencesData = await getExperiencesData();
    
    return (
      <React.Fragment>
        <Header />
        <main>
          <HeroBanner data={homepageData.hero} />
          <VideoHighlight data={homepageData.videoHighlight} />
          <AmericaBanner data={homepageData.americaBanner} />
          <ExperienceMenu experiences={experiencesData} />
          <Memorial />
        </main>
        <Footer />
      </React.Fragment>
    );
  } catch (error) {
    // Fallback UI in case of error
    console.error('Error rendering homepage:', error);
    // Fetch fallback experiences data for error case
    const experiencesData = await getExperiencesData();
    return (
      <React.Fragment>
        <Header />
        <main>
          <HeroBanner data={FALLBACK_DATA.hero} />
          <ExperienceMenu experiences={experiencesData} />
          <Memorial />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
