"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "@/src/components/layout/Container";
import SectionHeader from "../ui/SectionHeader";


const leaders = [
  {
    id: 1,
    name: "মাওলানা মোহাম্মদ আবদুল্লাহ",
    role: "মুহতামিম ও প্রতিষ্ঠাতা",
    education: "দ্বীনি শিক্ষায় অভিজ্ঞ আলেম ও শিক্ষাবিদ",
    image: "/images/about/userPlaceholder.jpg",
  },
  {
    id: 2,
    name: "মাওলানা আব্দুর রহমান",
    role: "অধ্যক্ষ",
    education: "অভিজ্ঞ শিক্ষক ও একাডেমিক পরিচালক",
    image: "/images/about/userPlaceholder.jpg",
  },
  {
    id: 3,
    name: "মাওলানা মুহাম্মদ হাসান",
    role: "শিক্ষা ও তারবিয়াহ পরিচালক",
    education: "কুরআন ও ইসলামী শিক্ষায় অভিজ্ঞ শিক্ষক",
    image: "/images/about/userPlaceholder.jpg",
  },
];

export default function LeadershipTeam() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const leaders = section.querySelectorAll(".leader-card");


      gsap.fromTo(
        leaders,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leaders[0],
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="leadership-team"
      className="overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Header */}
        <SectionHeader
          label="নেতৃত্ব ও শিক্ষকবৃন্দ"
          headingLine1="যাদের জ্ঞান ও নেতৃত্বে"
          headingLine2="এগিয়ে চলেছে দারুল হুদা"
          className=" text-center w-full! mx-auto mb-10 flex flex-col items-center justify-center"  
        />

        {/* Leaders */}
        <div className="mt-12 flex flex-col items-center justify-evenly gap-12 sm:mt-14 sm:flex-row sm:items-start sm:gap-6 ">
          {leaders.map((leader, index) => (
            <div
              key={leader.id}
              className="leader-card group w-full max-w-[280px] text-center sm:flex-1"
            >
              {/* Portrait */}
              <div className="relative mx-auto w-fit">
                <div className="relative h-44 w-44 overflow-hidden rounded-full border border-border bg-muted shadow-sm transition-all duration-700 group-hover:border-accent group-hover:shadow-lg sm:h-48 sm:w-48 lg:h-52 lg:w-52">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 1024px) 192px, 208px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Islamic ring */}
                <div className="pointer-events-none absolute -inset-2 rounded-full border border-transparent transition-all duration-700 group-hover:border-accent/30 group-hover:rotate-6" />
              </div>

              {/* Content */}
              <div className="mt-6">
                <span className="text-[11px] font-semibold tracking-wide text-accent">
                  {leader.role}
                </span>

                <h3 className="mt-2 font-serif text-xl font-semibold  text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                  {leader.name}
                </h3>

                <p className="mx-auto mt-2 max-w-[240px] text-xs text-foreground/45 sm:text-sm">
                  {leader.education}
                </p>

                <div className="mt-4 flex items-center justify-center">
                  <span className="h-px w-8 bg-border transition-all duration-500 group-hover:w-12 group-hover:bg-accent" />

                  <span className="mx-3 text-xs text-accent/50">۞</span>

                  <span className="h-px w-8 bg-border transition-all duration-500 group-hover:w-12 group-hover:bg-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-lg text-accent">۞</span>

            <p className="text-xs text-foreground/45 sm:text-sm">
              ইলম, আমল ও আখলাকের সমন্বয়ে শিক্ষার্থীদের গড়ে তোলাই আমাদের
              অঙ্গীকার।
            </p>
          </div>

          <a
            href="/contact"
            className="group flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-accent sm:text-sm"
          >
            যোগাযোগ করুন
            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </Container>
    </section>
  );
}
