'use client';

import React, { useState, useEffect } from 'react';
import SplashIntro from './SplashIntro';

interface SplashProviderProps {
  children: React.ReactNode;
}

const SplashProvider: React.FC<SplashProviderProps> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      console.log('SplashProvider: Setting showSplash to true');
      setShowSplash(true);
      setIsInitialized(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    console.log('SplashProvider: Splash completed, hiding splash');
    setShowSplash(false);
  };

  console.log('SplashProvider: isClient =', isClient, 'showSplash =', showSplash, 'isInitialized =', isInitialized);

  return (
    <>
      {isClient && isInitialized && showSplash && <SplashIntro onComplete={handleSplashComplete} />}
      {children}
    </>
  );
};

export default SplashProvider; 