"use client";
import React, { useRef, useState } from "react";

interface VideoWithOverlayProps {
  src: string;
  poster?: string;
  className?: string;
  [key: string]: any;
}

const VideoWithOverlay: React.FC<VideoWithOverlayProps> = ({ src, poster = "", className = "", ...props }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleUnmute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      setShowOverlay(false);
    }
  };

  const handleVolumeChange = () => {
    if (videoRef.current) {
      setIsMuted(videoRef.current.muted);
      setShowOverlay(videoRef.current.muted);
    }
  };

  return (
    <div className={`relative ${className}`} style={{ cursor: "pointer" }}>
      <video
        ref={videoRef}
        className="w-full h-auto rounded-lg"
        controls
        preload="metadata"
        poster={poster}
        autoPlay
        muted
        onVolumeChange={handleVolumeChange}
        {...props}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

export default VideoWithOverlay; 