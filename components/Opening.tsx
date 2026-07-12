"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { opening } from "@/content/story";

/**
 * The first sixty seconds. Everything here is timed, not clicked.
 * Black -> heartbeat -> breathing dust -> eyes -> first line of text
 * -> a quiet invitation to scroll. No buttons, no chrome.
 */
export default function Opening() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 900), // heartbeat begins
      setTimeout(() => setStage(2), 2600), // eyes emerge
      setTimeout(() => setStage(3), 4600), // first line
      setTimeout(() => setStage(4), 6600), // second line
      setTimeout(() => setStage(5), 8200), // scroll invitation
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      aria-label="Opening"
      className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* floating dust particles */}
      <div className="absolute inset-0 opacity-0 animate-[fadein_3s_ease_forwards]">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-champagne/30"
            style={{
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: `drift ${14 + (i % 6)}s ease-in-out ${i * 0.3}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* heartbeat pulse ring */}
      {stage >= 1 && stage < 3 && (
        <motion.div
          className="absolute w-40 h-40 rounded-full border border-gold/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.15, 1], opacity: [0, 0.5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* eyes emerging from darkness */}
      <motion.div
        className="relative w-[70vw] max-w-[520px] aspect-[16/6] rounded-sm overflow-hidden bloom"
        initial={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
        animate={
          stage >= 2
            ? { opacity: 1, scale: 1, filter: "blur(0px)" }
            : { opacity: 0, scale: 1.08, filter: "blur(14px)" }
        }
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={opening.image}
          alt={opening.imageAlt}
          fill
          priority
          className="object-cover grayscale-[15%]"
        />
        <div className="scene-vignette" />
      </motion.div>

      {/* first lines of text */}
      <div className="absolute bottom-[18%] px-6 text-center max-w-lg">
        <motion.p
          className="font-display italic text-xl md:text-2xl text-cream/90"
          initial={{ opacity: 0, y: 12 }}
          animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          {opening.line1}
        </motion.p>
        <motion.p
          className="mt-3 font-display italic text-xl md:text-2xl text-gold"
          initial={{ opacity: 0, y: 12 }}
          animate={stage >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          {opening.line2}
        </motion.p>
      </div>

      {/* quiet scroll invitation, never a boxed button */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2 text-cream/50"
        initial={{ opacity: 0 }}
        animate={stage >= 5 ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <span className="text-[11px] tracking-widest2 uppercase font-body">
          {opening.enterLabel}
        </span>
        <motion.span
          className="block w-px h-8 bg-gold/60"
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <style jsx>{`
        @keyframes fadein {
          to {
            opacity: 1;
          }
        }
        @keyframes drift {
          from {
            transform: translateY(0) translateX(0);
          }
          to {
            transform: translateY(-24px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
}
