"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { finale } from "@/content/story";

gsap.registerPlugin(ScrollTrigger);

export default function Finale() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".finale-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 60%",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Finale"
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center text-center px-6 py-32 bg-ink overflow-hidden"
    >
      <div className="finale-reveal relative w-[86vw] max-w-2xl aspect-[4/5] rounded-sm overflow-hidden bloom mb-10">
        <Image
          src={finale.image}
          alt={finale.imageAlt}
          fill
          sizes="90vw"
          className="object-cover"
        />
        <div className="scene-vignette" />
      </div>

      <p className="finale-reveal text-[11px] tracking-widest2 uppercase text-gold/80 mb-4">
        {finale.eyebrow}
      </p>

      <h2 className="finale-reveal font-display italic text-4xl md:text-6xl text-champagne mb-8">
        {finale.title}
      </h2>

      <div className="finale-reveal max-w-lg space-y-4">
        {finale.message.map((line, i) => (
          <p key={i} className="text-cream/85 text-lg leading-relaxed font-light">
            {line}
          </p>
        ))}
      </div>

      <p className="finale-reveal mt-10 font-display italic text-gold text-xl">
        {finale.signOff}
      </p>
    </section>
  );
}
