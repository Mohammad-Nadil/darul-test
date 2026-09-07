"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowUpRight,
  FiCalendar,
  FiFileText,
} from "react-icons/fi";

import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

type Notice = {
  id: number;
  category: string;
  date: string;
  title: string;
  description?: string;
};

const notices: Notice[] = [
  {
    id: 1,
    category: "ভর্তি",
    date: "১৫ সেপ্টেম্বর ২০২৬",
    title: "২০২৬ শিক্ষাবর্ষে ভর্তি কার্যক্রম চলছে",
    description:
      "নতুন শিক্ষাবর্ষে বিভিন্ন বিভাগে ভর্তি সংক্রান্ত বিস্তারিত তথ্য ও আবেদন প্রক্রিয়া জেনে নিন।",
  },
  {
    id: 2,
    category: "একাডেমিক",
    date: "১০ সেপ্টেম্বর ২০২৬",
    title: "নতুন শিক্ষাবর্ষের ক্লাস রুটিন প্রকাশ",
    description:
      "নতুন শিক্ষাবর্ষের ক্লাসের সময়সূচি ও প্রয়োজনীয় নির্দেশনা প্রকাশ করা হয়েছে।",
  },
  {
    id: 3,
    category: "নোটিশ",
    date: "০৫ সেপ্টেম্বর ২০২৬",
    title: "শিক্ষার্থীদের জন্য গুরুত্বপূর্ণ নির্দেশনা",
    description:
      "শিক্ষার্থীদের নিয়মিত উপস্থিতি, পড়াশোনা ও মাদরাসার শৃঙ্খলা সংক্রান্ত গুরুত্বপূর্ণ নির্দেশনা।",
  },
];

export default function FeaturedNotice() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const items = section.querySelectorAll(".notice-item");

      gsap.set(items, {
        opacity: 0,
        y: 24,
      });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const featuredNotice = notices[0];
  const secondaryNotices = notices.slice(1);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            label="ঘোষণা ও নোটিশ"
            headingLine1="সর্বশেষ গুরুত্বপূর্ণ"
            headingLine2="নোটিশ ও ঘোষণা"
          />

          <p className="max-w-md text-sm leading-7 text-foreground/60 sm:text-base">
            মাদরাসার ভর্তি, একাডেমিক কার্যক্রম এবং অন্যান্য গুরুত্বপূর্ণ
            বিষয়ে সর্বশেষ তথ্য ও ঘোষণা এখানে প্রকাশ করা হয়।
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <Link
            href={`/notices/${featuredNotice.id}`}
            className="notice-item group block rounded-2xl border border-border p-7 transition-all duration-300 hover:border-accent hover:bg-accent/[0.03] sm:p-9 lg:p-10"
          >
            <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-sm font-semibold text-accent">
                    {featuredNotice.category}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-border" />

                  <span className="flex items-center gap-2 text-sm text-foreground/45">
                    <FiCalendar className="h-3.5 w-3.5" />
                    {featuredNotice.date}
                  </span>
                </div>

                <h3 className="mt-5 max-w-4xl font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-3xl lg:text-[2.5rem]">
                  {featuredNotice.title}
                </h3>

                {featuredNotice.description && (
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/55 sm:text-base">
                    {featuredNotice.description}
                  </p>
                )}
              </div>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background lg:mt-1">
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          <div className="mt-5 flex flex-col gap-5 md:flex-row">
            {secondaryNotices.map((notice) => (
              <Link
                key={notice.id}
                href={`/notices/${notice.id}`}
                className="notice-item group flex min-w-0 flex-1 flex-col rounded-2xl border border-border p-6 transition-all duration-300 hover:border-accent hover:bg-accent/[0.03] sm:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-xs text-foreground/45 sm:text-sm">
                    <FiCalendar className="h-3.5 w-3.5 text-accent" />
                    {notice.date}
                  </span>

                  <FiFileText className="h-4 w-4 text-foreground/25 transition-colors duration-300 group-hover:text-accent" />
                </div>

                <span className="mt-6 text-xs font-semibold text-accent">
                  {notice.category}
                </span>

                <h4 className="mt-2 font-serif text-lg font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                  {notice.title}
                </h4>

                {notice.description && (
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-foreground/50">
                    {notice.description}
                  </p>
                )}

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary">
                  বিস্তারিত দেখুন
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>

          <div className="notice-item mt-8 flex justify-end">
            <Link
              href="/notices"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors duration-300 hover:text-accent"
            >
              সকল নোটিশ দেখুন

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}