"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Scene as SceneType } from "@/content/story";

gsap.registerPlugin(ScrollTrigger);

const alignment: Record<SceneType["align"], string> = {
  left: "md:justify-start md:text-left",
  right: "md:justify-end md:text-right",
  center: "md:justify-center md:text-center",
};

export default function Scene({
  scene,
  index,
}: {
  scene: SceneType;
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // slow parallax drift on the image as the scene passes through view
      gsap.fromTo(
        imageWrapRef.current,
        { yPercent: -8, scale: 1.12 },
        {
          yPercent: 8,
          scale: 1.02,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );

      // text rises in gently, narrative purpose only
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label={scene.title}
      data-ambience={scene.ambience ?? ""}
      className="relative z-0 min-h-[100svh] w-full flex items-center overflow-hidden py-24 isolate"
    >
      <div ref={imageWrapRef} className="absolute inset-0 z-0">
        <Image
          src={scene.image}
          alt={scene.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="scene-vignette" />
      </div>

      <div
        className={`relative z-10 flex w-full px-6 md:px-16 ${alignment[scene.align]}`}
      >
        <div
          ref={textRef}
          className="max-w-xl rounded-md px-6 py-6 md:px-8 md:py-8 bg-ink/55 backdrop-blur-[2px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <p className="text-[11px] tracking-widest2 uppercase text-gold/80 mb-4 font-body">
            {scene.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-cream mb-6">
            {scene.title}
          </h2>
          {scene.body.map((p, i) => (
            <p
              key={i}
              className="text-cream/85 text-base md:text-lg leading-relaxed font-light mb-3"
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* thin connecting thread between scenes, felt more than seen */}
      {index > 0 && (
        <div className="rule-thread absolute left-1/2 -translate-x-1/2 top-0 h-24" />
      )}
    </section>
  );
}
