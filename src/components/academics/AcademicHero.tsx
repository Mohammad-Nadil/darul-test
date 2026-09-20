"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import Container from "../layout/Container";

export default function AcademicHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".academic-hero-content", {
        y: 35,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".academic-hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.45",
        )
        .from(
          ".academic-hero-topics",
          {
            x: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.55",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="overflow-hidden  ">
      <Container>
        <div className="grid min-h-125 py-10 lg:py-0 items-center gap-14  lg:grid-cols-[1.10fr_0.90fr] ">
          {/* Left */}
          <div className="academic-hero-content max-w-3xl">
            <SectionHeader
              label="একাডেমিকস"
              headingLine1="জ্ঞানার্জনের পাশাপাশি"
              headingLine2="আদর্শ ও শৃঙ্খলার বিকাশ"
            />
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              মাদরাসা-ই-দারুল হুদার একাডেমিক কার্যক্রমে দ্বীনি শিক্ষার পাশাপাশি
              নিয়মিত অধ্যয়ন, সময়ানুবর্তিতা, আদব-আখলাক ও দায়িত্ববোধের মাধ্যমে
              শিক্ষার্থীদের সুশৃঙ্খল শিক্ষাজীবনের জন্য প্রস্তুত করা হয়।
            </p>
            <div className="academic-hero-actions mt-9 flex flex-wrap items-center gap-4">
              <Button
                label="বিভাগসমূহ দেখুন"
                href="#departments"
                bgColor=""
                borderColor="var(--primary)"
                flairColor="var(--primary)"
                textColor="var(--primary)"
                textHoverColor="#ffffff"
              />

              <Link
                href="#academic-rules"
                className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
              >
                একাডেমিক নিয়মাবলি
                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="academic-hero-topics lg:justify-self-end">
            <div className="relative max-w-md border-l border-border pl-7 sm:pl-10">
              <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-primary" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Academic Focus
              </p>

              <div className="mt-7">
                <Link
                  href="#departments"
                  className="group flex items-center justify-between border-b border-border py-5"
                >
                  <span className="text-lg font-medium text-foreground">
                    বিভাগসমূহ
                  </span>

                  <span className="text-(--muted-foreground) transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                    →
                  </span>
                </Link>

                <Link
                  href="#class-schedule"
                  className="group flex items-center justify-between border-b border-border py-5"
                >
                  <span className="text-lg font-medium text-foreground">
                    ক্লাস ও সময়সূচী
                  </span>

                  <span className="text-(--muted-foreground) transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                    →
                  </span>
                </Link>

                <Link
                  href="#academic-rules"
                  className="group flex items-center justify-between border-b border-border py-5"
                >
                  <span className="text-lg font-medium text-foreground">
                    নিয়মাবলি
                  </span>

                  <span className="text-(--muted-foreground) transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                    →
                  </span>
                </Link>

                <Link
                  href="#evaluation"
                  className="group flex items-center justify-between py-5"
                >
                  <span className="text-lg font-medium text-foreground">
                    পরীক্ষা ও মূল্যায়ন
                  </span>

                  <span className="text-(--muted-foreground) transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                    →
                  </span>
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs text-(--muted-foreground)">
                <span className="text-lg text-primary">۞</span>
                <span>ইলম • আমল • আখলাক</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
