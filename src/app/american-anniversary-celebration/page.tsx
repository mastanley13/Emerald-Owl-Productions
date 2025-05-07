"use client";

import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getAmericanAnniversaryData } from '@/services/contentService';
import HeroBanner from './components/HeroBanner';
import VideoSection from './components/VideoSection';
import ContentSection from './components/ContentSection';
import GallerySection from './components/GallerySection';
import CtaSection from './components/CtaSection';

/**
 * Generate metadata for SEO
 */
export async function generateMetadata(): Promise<Metadata> {
  const americanAnniversaryData = await getAmericanAnniversaryData();
  
  return {
    title: americanAnniversaryData.meta.title,
    description: americanAnniversaryData.meta.description,
    keywords: americanAnniversaryData.meta.keywords,
  };
}

/**
 * American Anniversary Celebration Page
 */
export default async function AmericanAnniversaryPage() {
  const americanAnniversaryData = await getAmericanAnniversaryData();
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Banner */}
      <HeroBanner 
        title={americanAnniversaryData.hero.title}
        backgroundImage={americanAnniversaryData.hero.backgroundImage} 
      />
      
      {/* Video Section */}
      {americanAnniversaryData.videoContent && (
        <VideoSection
          videoUrl={americanAnniversaryData.videoContent.videoUrl}
          thumbnailUrl={americanAnniversaryData.videoContent.thumbnailUrl}
          title={americanAnniversaryData.videoContent.title || ''}
          note={americanAnniversaryData.videoContent.note || ''}
        />
      )}
      
      {/* Content Section */}
      <ContentSection 
        title={americanAnniversaryData.contentSection.title}
        description={americanAnniversaryData.contentSection.description}
        features={americanAnniversaryData.contentSection.features || []}
      />
      
      {/* Gallery Section */}
      <GallerySection 
        galleryItems={americanAnniversaryData.gallery}
      />
      
      {/* CTA Section */}
      <CtaSection 
        text={americanAnniversaryData.cta.text}
        url={americanAnniversaryData.cta.url}
        backgroundColor={americanAnniversaryData.cta.backgroundColor}
      />
    </main>
  );
}
