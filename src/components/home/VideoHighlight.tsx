"use client";

import React, { useState } from 'react';
import { VideoHighlightData } from '../../types/homepage';
import VideoWithOverlay from '../VideoWithOverlay';

interface VideoHighlightProps {
  data: VideoHighlightData;
}

export default function VideoHighlight({ data }: VideoHighlightProps) {

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {data.title}
        </h2>
        
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl shadow-green-400/10">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <VideoWithOverlay 
              src={data.videoUrl}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
