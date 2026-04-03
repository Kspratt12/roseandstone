"use client";

import { useEffect, useRef } from "react";

interface AutoPlayVideoProps {
  src: string;
  poster: string;
  className?: string;
}

export default function AutoPlayVideo({ src, poster, className = "" }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force play when video enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // If autoplay still blocked, add tap-to-play
              video.addEventListener("touchstart", () => {
                video.play();
              }, { once: true });
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    // Also try playing immediately
    video.play().catch(() => {});

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      poster={poster}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
