"use client";
import React, { useState, useRef } from "react";

interface IframeVideoWithOverlayProps {
  src: string;
  className?: string;
  title?: string;
  [key: string]: any;
}

const IframeVideoWithOverlay: React.FC<IframeVideoWithOverlayProps> = ({ 
  src, 
  className = "", 
  title = "Video",
  ...props 
}) => {
  const [showOverlay, setShowOverlay] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Construct the video URL with autoplay and mute parameters
  const constructVideoUrl = (originalUrl: string) => {
    try {
      const url = new URL(originalUrl);
      url.searchParams.set('autoplay', '1');
      
      // Platform-specific mute parameter
      if (url.hostname.includes('vimeo.com')) {
        url.searchParams.set('muted', '1');
        url.searchParams.delete('mute');
      } else {
        url.searchParams.set('mute', '1');
        url.searchParams.delete('muted');
      }
      return url.toString();
    } catch (e) {
      const separator = originalUrl.includes('?') ? '&' : '?';
      if (originalUrl.includes('vimeo.com')) {
        return `${originalUrl}${separator}autoplay=1&muted=1`;
      } else {
        return `${originalUrl}${separator}autoplay=1&mute=1`;
      }
    }
  };

  const handleUnmute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    
    // For iframe videos, we need to reload with unmuted parameters
    if (iframeRef.current) {
      const currentSrc = iframeRef.current.src;
      const url = new URL(currentSrc);
      
      // Remove mute parameters
      url.searchParams.delete('mute');
      url.searchParams.delete('muted');
      
      // Reload iframe with unmuted URL
      iframeRef.current.src = url.toString();
      setShowOverlay(false);
    }
  };

  const videoSrc = constructVideoUrl(src);

  return (
    <div className={`relative ${className}`} style={{ cursor: "pointer" }}>
      <iframe
        ref={iframeRef}
        src={videoSrc}
        className="w-full h-full rounded-lg"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        title={title}
        {...props}
      />
      {showOverlay && (
        <button
          type="button"
          aria-label="Unmute video"
          onClick={handleUnmute}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black/70 text-white text-lg md:text-xl font-bold px-8 py-4 rounded-full border-2 border-purple-400 shadow-lg animate-pulse focus:outline-none focus:ring-4 focus:ring-purple-400"
          style={{ pointerEvents: 'auto' }}
        >
          Click to unmute
        </button>
      )}
    </div>
  );
};

export default IframeVideoWithOverlay; 