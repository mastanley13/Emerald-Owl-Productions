"use client";

import React, { useState } from 'react';
import { VideoHighlightData } from '../../types/homepage';

interface VideoHighlightProps {
  data: VideoHighlightData;
}

export default function VideoHighlight({ data }: VideoHighlightProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const startVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {data.title}
        </h2>
        
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl shadow-green-400/10">
          {!isPlaying ? (
            <div 
              className="relative cursor-pointer aspect-video"
              onClick={startVideo}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('${data.thumbnailUrl}')` 
                }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-emerald-600/90 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white ml-1">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold">
                <p>{data.note}</p>
              </div>
            </div>
          ) : (
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src={`${data.videoUrl}?autoplay=1`}
                allow="autoplay; encrypted-media"
                className="w-full h-full"
                title="Emerald Owl Productions Video"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
