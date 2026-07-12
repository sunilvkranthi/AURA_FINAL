"use client";

import { useRef, useState } from "react";
import { audio } from "@/content/story";

/**
 * A single, quiet control — muted by default per the brief. Music
 * only ever starts because the visitor chose it. Replace
 * /public/audio/theme.mp3 with a real track (see content/story.ts
 * for royalty-free suggestions) before deploying.
 */
export default function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
    } else {
      el.volume = 0.35;
      el.play().catch(() => {
        // Autoplay can still be blocked in some browsers even on
        // click in rare cases; fail silently, visitor can try again.
      });
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={audio.theme} loop preload="none" />
      <button
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Mute music" : "Play music"}
        className="w-11 h-11 rounded-full border border-gold/40 bg-ink/60 backdrop-blur flex items-center justify-center text-gold hover:border-gold/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        {playing ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
            <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
            <path
              d="M16.5 8.5a5 5 0 010 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
