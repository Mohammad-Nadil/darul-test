"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

const departments = [
  {
    id: 1,
    title: "মক্তব বিভাগ",
    desc: "শিশুদের কুরআন শিক্ষা, প্রয়োজনীয় দোয়া, নামাজ, মাসআলা-মাসায়েল ও ইসলামী আদব-কায়দার প্রাথমিক শিক্ষা।",
    image: "/images/about/maktab1.jpg",
    tag: "মক্তব",
  },
  {
    id: 2,
    title: "নূরানী বিভাগ",
    desc: "আরবি হরফ, মাখরাজ ও তাজবিদের মৌলিক নিয়ম শেখানোর মাধ্যমে শুদ্ধ কুরআন তিলাওয়াতের শক্ত ভিত্তি তৈরি করা।",
    image: "/images/about/noorani1.jpg",
    tag: "নূরানী",
  },
  {
    id: 3,
    title: "নাজেরা বিভাগ",
    desc: "তাজবিদ ও মাখরাজের নিয়ম অনুসরণ করে পবিত্র কুরআন শুদ্ধ, সুন্দর ও সাবলীলভাবে পড়ার নিয়মিত অনুশীলন।",
    image: "/images/about/najera1.jpg",
    tag: "নাজেরা",
  },
  {
    id: 4,
    title: "হিফজুল কুরআন বিভাগ",
    desc: "অভিজ্ঞ উস্তাদের তত্ত্বাবধানে পরিকল্পিত সবক, আমুখতা ও দাওরের মাধ্যমে পবিত্র কুরআন হিফজের ব্যবস্থা।",
    image: "/images/about/hifz1.jpg",
    tag: "হিফজ",
  },
  {
    id: 5,
    title: "বিশেষ নাজেরা বিভাগ",
    desc: "যেসব শিক্ষার্থীর অতিরিক্ত অনুশীলন ও ব্যক্তিগত যত্ন প্রয়োজন, তাদের জন্য বিশেষভাবে পরিকল্পিত নাজেরা শিক্ষার ব্যবস্থা।",
    image: "/images/about/najeraSpecial1.jpg",
    tag: "বিশেষ নাজেরা",
  },
  {
    id: 6,
    title: "কিতাব বিভাগ",
    desc: "আরবি ভাষা, ফিকহ, আকাইদ, হাদিস ও ইসলামী জ্ঞানসহ বিভিন্ন কিতাবভিত্তিক দ্বীনি শিক্ষার ধারাবাহিক পাঠদান।",
    image: "/images/about/kitab1.jpg",
    tag: "কিতাব",
  },
];

export default function Departments() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const cards = section.querySelectorAll(".department-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 88%",
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
      id="departments"
      className="relative w-full overflow-hidden bg-subtle py-20 text-foreground transition-colors duration-500 md:py-28"
    >
      <Container>
        <SectionHeader
          label="আমাদের বিভাগসমূহ"
          headingLine1="দ্বীনি শিক্ষা"
          headingLine2=" বিভিন্ন ধাপে"
          className="mx-auto mb-10 flex w-full flex-col items-center text-center"
        />

        <div className="relative z-10 mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((item) => (
            <div
              key={item.id}
              className="department-card group relative aspect-video cursor-pointer overflow-hidden rounded  lg:rounded-xl border border-border shadow-sm transition-all duration-700 hover:shadow-2xl "
            >
              <div className="absolute inset-0 h-full w-full bg-muted transition-transform duration-1000 md:group-hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  className="object-cover contrast-[1.01] blur-0 transition-[filter] duration-1000 ease-in-out md:group-hover:blur-[3px]"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-black/15 transition-opacity duration-500 md:via-black/40 md:to-black/10 md:group-hover:opacity-95" />

              <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[9px] font-light  text-white backdrop-blur-md select-none sm:right-6 sm:top-6 sm:text-sm">
                {item.tag}
              </span>

              <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-3 transition-transform duration-500 md:group-hover:-translate-y-1 sm:p-4">
                <h3 className="font-serif text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 max-h-28 overflow-hidden text-xs font-light leading-relaxed text-white/80 transition-all duration-700 ease-in-out sm:mt-3 sm:text-sm md:max-h-0 md:text-white/70 md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>

              <div
                className="pointer-events-none absolute inset-0 z-20 rounded-xl bg-linear-to-br from-white/20 via-transparent to-transparent p-0.5 opacity-0 transition-opacity duration-700 md:group-hover:opacity-100 xl:rounded-4xl"
                style={{
                  WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
