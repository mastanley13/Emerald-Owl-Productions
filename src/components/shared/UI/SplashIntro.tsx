'use client';

import React, { useEffect, useState } from 'react';

interface SplashIntroProps {
  onComplete: () => void;
}

const SplashIntro: React.FC<SplashIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Auto-hide splash after 7 seconds (or immediately if video fails)
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1000); // Wait for fade out animation
    }, 7000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    // If video fails, still show splash for a few seconds
    setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1000);
    }, 3000);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      id="splash"
      className={`fixed top-0 left-0 w-screen h-screen bg-black z-50 flex justify-center items-center m-0 transition-opacity duration-1000 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Fallback loading screen */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* Fallback for video error */}
      {videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-white text-center">
            <h1 className="text-2xl font-bold mb-4">Emerald Owl Productions</h1>
            <p>Creating unforgettable experiences and magical moments</p>
          </div>
        </div>
      )}

      <video 
        id="desktop-video" 
        autoPlay 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover m-0 hidden md:block"
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
      >
        <source 
          src="https://storage.googleapis.com/msgsndr/8lQAYS7QatKYV3ENYdl1/media/66fd612f6ee2a817d4bfbfa2.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      <video 
        id="mobile-video" 
        autoPlay 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-contain md:hidden"
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
      >
        <source 
          src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/672cea8fcab6114f4c34fefd.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashIntro; 