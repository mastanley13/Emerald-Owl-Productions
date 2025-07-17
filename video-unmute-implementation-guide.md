# Video Click-to-Unmute Implementation Guide

## Overview

This guide provides exact instructions for implementing the click-to-unmute feature across all video features on the Emerald Owl Productions website. The implementation is based on the existing `VideoWithOverlay` component that's currently used on the Neon Nights page.

## Current Implementation Analysis

### How VideoWithOverlay Works

The `VideoWithOverlay` component (`src/components/VideoWithOverlay.tsx`) implements the click-to-unmute feature with the following key elements:

1. **State Management**: Uses `useState` to track overlay visibility and mute status
2. **Video Reference**: Uses `useRef` to directly control the video element
3. **Event Handlers**: 
   - `handleUnmute`: Unmutes video and hides overlay on click
   - `handleVolumeChange`: Syncs state with video's actual mute status
4. **Overlay Button**: Animated button that appears over muted videos
5. **Video Attributes**: Sets `autoPlay`, `muted`, and `controls` attributes

### Current Video Implementations

1. **Neon Nights Page**: ✅ Uses `VideoWithOverlay` component (properly implemented)
2. **Homepage Hero Banner**: ❌ Uses iframe with URL parameters (needs conversion)
3. **American Anniversary Page**: ❌ Uses basic HTML5 video (needs conversion)
4. **VideoHighlight Component**: ❌ Uses iframe with URL parameters (needs conversion)
5. **Other Experience Pages**: ❌ Use iframe implementations (need conversion)

## Implementation Instructions

### Step 1: Identify All Video Locations

Based on the codebase analysis, here are all the locations that need the click-to-unmute feature:

#### Primary Video Features:
1. **Homepage Hero Banner** (`src/components/home/HeroBanner.tsx` - lines 108-140)
2. **American Anniversary Hero Banner** (`src/app/american-anniversary-celebration/components/HeroBanner.tsx` - lines 52-70)
3. **VideoHighlight Component** (`src/components/home/VideoHighlight.tsx` - lines 45-60)
4. **Neon Nights Videos** (`src/app/neon-nights/page.tsx` - lines 77, 158, 162) ✅ Already implemented

#### Secondary Video Features:
5. **Laser Light Show Page** (`src/app/laser-light-show/page.tsx` - lines 35-45)
6. **Dripping in Confidence Page** (`src/app/dripping-in-confidence/page.tsx` - lines 125-135)
7. **Other experience pages with video content**

### Step 2: Implementation Strategy

#### For Direct Video Files (MP4, etc.):
Replace the current video implementation with the `VideoWithOverlay` component.

#### For iframe Videos (YouTube, Vimeo):
Create a new component called `IframeVideoWithOverlay` that handles iframe-based videos.

### Step 3: Detailed Implementation Steps

#### A. For Direct Video Files (MP4)

**Example: American Anniversary Hero Banner**

**Current Implementation:**
```tsx
<div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
  <video
    className="w-full h-full object-cover"
    controls
    autoPlay
    muted
    playsInline
    style={{ background: 'black' }}
  >
    <source
      src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c32fe15ee06bf5fbfeed7.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>
```

**New Implementation:**
```tsx
<div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
  <VideoWithOverlay
    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c32fe15ee06bf5fbfeed7.mp4"
    className="w-full h-full object-cover"
  />
</div>
```

#### B. For iframe Videos (YouTube, Vimeo)

**Create new component: `src/components/IframeVideoWithOverlay.tsx`**

```tsx
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
```

**Example: Homepage Hero Banner**

**Current Implementation:**
```tsx
<iframe
  src={(() => {
    try {
      const url = new URL(video.videoUrl);
      url.searchParams.set('autoplay', '1');
      if (url.hostname.includes('vimeo.com')) {
        url.searchParams.set('muted', '1');
        url.searchParams.delete('mute');
      } else {
        url.searchParams.set('mute', '1');
        url.searchParams.delete('muted');
      }
      return url.toString();
    } catch (e) {
      const sep = video.videoUrl.includes('?') ? '&' : '?';
      if (video.videoUrl.includes('vimeo.com')) {
        return `${video.videoUrl}${sep}autoplay=1&muted=1`;
      } else {
        return `${video.videoUrl}${sep}autoplay=1&mute=1`;
      }
    }
  })()}
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
  className="w-full h-full rounded-lg"
  title={video.title || 'Emerald Owl Productions Video'}
  style={{ background: '#000' }}
/>
```

**New Implementation:**
```tsx
<IframeVideoWithOverlay
  src={video.videoUrl}
  className="w-full h-full rounded-lg"
  title={video.title || 'Emerald Owl Productions Video'}
  style={{ background: '#000' }}
/>
```

### Step 4: Specific File Changes

#### 1. Update Homepage Hero Banner (`src/components/home/HeroBanner.tsx`)

**Add import:**
```tsx
import IframeVideoWithOverlay from '../IframeVideoWithOverlay';
```

**Replace video section (lines 108-140):**
```tsx
{/* Right: Video with caption */}
{video && video.videoUrl && (
  <div className="flex flex-col items-center md:items-end w-full h-full">
    <div className="mb-4 text-lg font-semibold text-emerald-700 text-center md:text-right tracking-wide drop-shadow-sm">
      See Our Experiences In Action
    </div>
    <div className="w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/80 bg-black p-2 md:p-0">
      <IframeVideoWithOverlay
        src={video.videoUrl}
        className="w-full h-full rounded-lg"
        title={video.title || 'Emerald Owl Productions Video'}
        style={{ background: '#000' }}
      />
    </div>
  </div>
)}
```

#### 2. Update American Anniversary Hero Banner (`src/app/american-anniversary-celebration/components/HeroBanner.tsx`)

**Add import:**
```tsx
import VideoWithOverlay from '../../../components/VideoWithOverlay';
```

**Replace video section (lines 52-70):**
```tsx
{/* Video Section - Integrated and Responsive */}
<div className="flex flex-col items-center w-full max-w-2xl mx-auto mb-8">
  <span className="text-yellow-300 font-semibold text-sm mb-2 tracking-wide drop-shadow">
    PLEASE UNMUTE TO HEAR INFORMATION
  </span>
  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
    <VideoWithOverlay
      src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c32fe15ee06bf5fbfeed7.mp4"
      className="w-full h-full object-cover"
    />
  </div>
</div>
```

#### 3. Update VideoHighlight Component (`src/components/home/VideoHighlight.tsx`)

**Add import:**
```tsx
import IframeVideoWithOverlay from '../IframeVideoWithOverlay';
```

**Replace video section (lines 45-60):**
```tsx
<div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl shadow-green-400/10">
  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
    <IframeVideoWithOverlay 
      src={data.videoUrl}
      className="w-full h-full"
      title={data.title || "Emerald Owl Productions Video"}
    />
  </div>
</div>
```

#### 4. Update Laser Light Show Page (`src/app/laser-light-show/page.tsx`)

**Add import:**
```tsx
import VideoWithOverlay from '../../components/VideoWithOverlay';
```

**Replace video section (lines 35-45):**
```tsx
<div className="relative aspect-video w-full">
  {/* Small YouTube Icon Overlay - Debug Version */}
  <a
    href="https://www.youtube.com/@emeraldowlproductions9615"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-2 right-2 z-50 opacity-90 hover:opacity-100 transition-opacity border-2 border-yellow-400 rounded-full shadow-lg"
    aria-label="Visit our YouTube Channel"
    style={{ pointerEvents: 'auto', background: 'rgba(0,0,0,0.3)' }}
  >
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 drop-shadow-md">
      <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 00.502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 002.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  </a>
  <VideoWithOverlay
    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c32fe15ee06bf5fbfeed7.mp4"
    className="absolute inset-0"
  />
</div>
```

#### 5. Update Dripping in Confidence Page (`src/app/dripping-in-confidence/page.tsx`)

**Add import:**
```tsx
import IframeVideoWithOverlay from '../../components/IframeVideoWithOverlay';
```

**Replace video section (lines 125-135):**
```tsx
<div className="relative aspect-video max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl">
  <IframeVideoWithOverlay
    src={data.videoContent.videoUrl}
    className="absolute top-0 left-0 w-full h-full"
    title="Dripping in Confidence Video"
  />
</div>
```

### Step 5: Testing Checklist

After implementing the changes, test the following:

1. **Video Autoplay**: Videos should autoplay when the page loads
2. **Mute State**: Videos should start muted
3. **Overlay Display**: "Click to unmute" button should appear over muted videos
4. **Unmute Functionality**: Clicking the button should unmute the video and hide the overlay
5. **Cross-browser Compatibility**: Test in Chrome, Firefox, Safari, and Edge
6. **Mobile Responsiveness**: Test on mobile devices
7. **Accessibility**: Ensure screen readers can access the unmute button

### Step 6: Additional Considerations

#### Customization Options

You can customize the overlay button by modifying the `VideoWithOverlay` component:

**Button Styling:**
```tsx
// Custom button colors
className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black/70 text-white text-lg md:text-xl font-bold px-8 py-4 rounded-full border-2 border-emerald-400 shadow-lg animate-pulse focus:outline-none focus:ring-4 focus:ring-emerald-400"
```

**Button Text:**
```tsx
// Custom button text
Click to unmute
// or
Unmute Video
// or
🔊 Click to hear audio
```

#### Performance Optimization

1. **Lazy Loading**: Consider implementing lazy loading for videos below the fold
2. **Preload Strategy**: Use `preload="metadata"` for better performance
3. **Error Handling**: Add error handling for failed video loads

#### Accessibility Enhancements

1. **ARIA Labels**: Ensure proper ARIA labels for screen readers
2. **Keyboard Navigation**: Ensure the unmute button is keyboard accessible
3. **Focus Management**: Proper focus management when overlay is hidden

## Summary

This implementation guide provides a comprehensive approach to adding the click-to-unmute feature across all video features on the website. The key is to:

1. Use `VideoWithOverlay` for direct video files (MP4, etc.)
2. Use `IframeVideoWithOverlay` for iframe-based videos (YouTube, Vimeo)
3. Maintain consistent user experience across all video features
4. Ensure proper accessibility and cross-browser compatibility

The implementation follows the existing pattern established in the Neon Nights page and provides a seamless user experience for all video content on the website. 