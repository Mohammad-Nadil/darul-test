"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  label: string;
  headingLine1: string;
  headingLine2: string;
  className?: string;
};

export default function SectionHeader({
  label,
  headingLine1,
  headingLine2,
  className = "",
}: Props) {
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const header = headerRef.current;

      if (!header) return;

      const line = header.querySelector(".section-line");
      const label = header.querySelector(".section-label");
      const heading = header.querySelector(".section-heading");

      if (!line || !label || !heading) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: header,
          start: "top 85%",
          once: true,
        },
      });

      gsap.set(line, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set([label, heading], {
        opacity: 0,
        y: 16,
      });

      tl.to(line, {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          label,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .to(
          heading,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25",
        );
    },
    { scope: headerRef },
  );

  return (
    <div ref={headerRef} className={`max-w-3xl  ${className}`}>
      <div className="mb-5 flex items-center gap-3">
        <span className="section-line h-px w-8 bg-accent" />

        <span className="section-label text-sm font-semibold text-accent">
          {label}
        </span>
      </div>

      <h2 className="section-heading font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {headingLine1}
        <span className="block text-primary">{headingLine2}</span>
      </h2>
    </div>
  );
}
