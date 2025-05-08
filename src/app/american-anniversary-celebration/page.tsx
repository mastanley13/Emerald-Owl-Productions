import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';
import HeroBanner from './components/HeroBanner';
import VideoSection from './components/VideoSection';
import ContentSection from './components/ContentSection';
import GallerySection from './components/GallerySection';
import CtaSection from './components/CtaSection';

export const metadata: Metadata = {
  title: 'American Anniversary Celebration | Emerald Owl Productions',
  description: 'Join us in commemorating America\'s 250th Anniversary with special patriotic celebrations and events.',
};

export default function AmericanAnniversaryPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <VideoSection />
        <ContentSection />
        <GallerySection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
