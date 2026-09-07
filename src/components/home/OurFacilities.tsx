"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

type Facility = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const facilities: Facility[] = [
  {
    id: "01",
    title: "আধুনিক শ্রেণিকক্ষ",
    description:
      "শিক্ষার্থীদের মনোযোগ ও শেখার পরিবেশকে আরও কার্যকর করতে পরিচ্ছন্ন ও সুশৃঙ্খল শ্রেণিকক্ষ।",
    image: "/images/assets/banner1.jpg",
  },
  {
    id: "02",
    title: "হিফজুল কুরআন বিভাগ",
    description:
      "অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে পবিত্র কুরআন হিফজ ও শুদ্ধ তিলাওয়াতের জন্য বিশেষ ব্যবস্থা।",
    image: "/images/assets/banner2.jpg",
  },
  {
    id: "03",
    title: "লাইব্রেরি",
    description:
      "ইসলামী জ্ঞান, সাহিত্য ও প্রয়োজনীয় শিক্ষামূলক বইয়ের সমৃদ্ধ সংগ্রহ নিয়ে পাঠাভ্যাসের সুযোগ।",
    image: "/images/assets/banner1.jpg",
  },
  {
    id: "04",
    title: "কম্পিউটার ও প্রযুক্তি",
    description:
      "সময়ের প্রয়োজনীয় প্রযুক্তিগত জ্ঞান ও দক্ষতা অর্জনের জন্য আধুনিক কম্পিউটার শিক্ষার ব্যবস্থা।",
    image: "/images/assets/banner2.jpg",
  },
];

export default function OurFacilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const label = section.querySelector(".facilities-label");
      const heading = section.querySelector(".facilities-heading");
      const description = section.querySelector(".facilities-description");
      const cards = section.querySelectorAll(".facility-card");
      const button = section.querySelector(".facilities-button");

      if (!label || !heading || !description || !button || !cards.length) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      gsap.set([label, heading, description, button], {
        opacity: 0,
        y: 25,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 40,
      });

      tl.to(label, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          heading,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
          },
          "-=0.45",
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .to(
          button,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="facilities-section bg-primary/5 py-20 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            label="আমাদের সুবিধাসমূহ"
            headingLine1="শিক্ষার জন্য প্রয়োজনীয়"
            headingLine2="একটি সুন্দর পরিবেশ"
          />

          <p className="facilities-description max-w-md text-sm  text-foreground/65 sm:text-base">
            শিক্ষার্থীদের জ্ঞান, দক্ষতা ও চরিত্র বিকাশে সহায়ক একটি সুশৃঙ্খল
            শিক্ষার পরিবেশ গড়ে তুলতে আমরা প্রয়োজনীয় সুযোগ-সুবিধার প্রতি গুরুত্ব
            দিয়ে থাকি।
          </p>
        </div>

        <div className="mt-12 flex flex-wrap border-t border-border">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="facility-card group w-full border-b border-border py-8 sm:w-1/2 sm:px-5 lg:w-1/4 lg:px-3 "
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-xs font-semibold text-primary backdrop-blur-sm">
                  {facility.id}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm  text-foreground/60">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="facilities-button mt-8">
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            সকল সুবিধা দেখুন
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
