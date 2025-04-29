
import React from 'react';
import Header from '@/components/shared/Layout/Header';
import Footer from '@/components/shared/Layout/Footer';
import Newsletter from '@/components/shared/UI/Newsletter';
import LaserShowHero from '@/components/pages/laser-light-show/LaserShowHero';
import LaserShowTypes from '@/components/pages/laser-light-show/LaserShowTypes';
import LaserShowBenefits from '@/components/pages/laser-light-show/LaserShowBenefits';
import LaserShowSafety from '@/components/pages/laser-light-show/LaserShowSafety';
import LaserShowPricing from '@/components/pages/laser-light-show/LaserShowPricing';

export default function LaserLightShow() {
  return (
    <>
      <Header />
      <main>
        <LaserShowHero />
        <LaserShowTypes />
        <LaserShowBenefits />
        <LaserShowSafety />
        <LaserShowPricing />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
