"use client";

import { useEffect, useRef } from "react";

/** Where the clip opens on first load. Loops afterwards play the full video. */
const FIRST_PLAY_START_SECONDS = 13;

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Seeking before playback has settled can leave the element paused, so restart it.
    const seekToStart = () => {
      video.currentTime = FIRST_PLAY_START_SECONDS;
      void video.play().catch(() => {});
    };

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      seekToStart();
      return;
    }

    video.addEventListener("loadedmetadata", seekToStart, { once: true });
    return () => video.removeEventListener("loadedmetadata", seekToStart);
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none"
      src="/video/hero.mp4"
      poster="/video/hero-poster.jpg"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
