"use client";

import React, { useState } from 'react';
import { VideoHighlightData } from '../../types/homepage';

interface VideoHighlightProps {
  data: VideoHighlightData;
}

export default function VideoHighlight({ data }: VideoHighlightProps) {
  // Removed isPlaying state, video will autoplay on load
  // const [isPlaying, setIsPlaying] = useState(false);

  // Removed startVideo function
  // const startVideo = () => {
  //   setIsPlaying(true);
  // };

  // Construct the video URL with autoplay and mute parameters correctly
  let videoSrc = data.videoUrl;
  try {
    const url = new URL(data.videoUrl);
    url.searchParams.set('autoplay', '1');
    
    // Platform-specific mute parameter
    if (url.hostname.includes('vimeo.com')) {
      url.searchParams.set('muted', '1'); // Vimeo uses 'muted'
      url.searchParams.delete('mute');    // Remove 'mute' if it was mistakenly there
    } else {
      url.searchParams.set('mute', '1');   // YouTube and others use 'mute'
      url.searchParams.delete('muted'); // Remove 'muted' if it was mistakenly there
    }
    videoSrc = url.toString();
  } catch (e) {
    // Fallback for invalid URLs or if URL constructor is not available (should not happen in CSR)
    console.error("Error constructing video URL:", e);
    const separator = data.videoUrl.includes('?') ? '&' : '?';
    // Basic check for Vimeo in fallback
    if (data.videoUrl.includes('vimeo.com')) {
      videoSrc = `${data.videoUrl}${separator}autoplay=1&muted=1`;
    } else {
      videoSrc = `${data.videoUrl}${separator}autoplay=1&mute=1`;
    }
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {data.title}
        </h2>
        
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl shadow-green-400/10">
          {/* Always render the iframe for autoplay */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src={videoSrc} // Use the correctly constructed videoSrc
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title={data.title || "Emerald Owl Productions Video"} // Use data.title for iframe title
              />
            </div>
          {/* Removed the thumbnail display block */}
        </div>
      </div>
    </section>
  );
}
