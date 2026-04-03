"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface AutoPlayVideoProps {
  src: string;
  poster: string;
  className?: string;
}

export default function AutoPlayVideo({ src, poster, className = "" }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tryPlay();
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(video);

    // Small delay to let mobile browsers settle
    const timeout = setTimeout(tryPlay, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  const handleTap = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full" onClick={handleTap}>
      {/* Poster image as actual fallback — always visible until video plays */}
      <Image
        src={poster}
        alt=""
        fill
        className={`object-cover transition-opacity duration-500 ${isPlaying ? "opacity-0" : "opacity-100"}`}
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={95}
        aria-hidden="true"
      />

      {/* Video on top */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover ${isPlaying ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Mute/unmute button */}
      <button
        onClick={(e) => { e.stopPropagation(); toggleMute(); }}
        className="absolute bottom-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-charcoal/50 backdrop-blur-sm text-white hover:bg-charcoal/70 transition-colors duration-200 cursor-pointer"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>

      {/* Play button if not playing */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-[5]">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-charcoal ml-1">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
