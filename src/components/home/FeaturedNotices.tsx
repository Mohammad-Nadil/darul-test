"use client";

import Link from "next/link";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";


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

  const featuredNotice = notices[0];
  const secondaryNotices = notices.slice(1);

  return (
    <section
      className="bg-background py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            label="ঘোষণা ও নোটিশ"
            headingLine1="সর্বশেষ গুরুত্বপূর্ণ"
            headingLine2="নোটিশ ও ঘোষণা"
          />

          <p className="max-w-sm text-sm leading-7 text-foreground/55 sm:text-base">
            মাদরাসার ভর্তি, একাডেমিক কার্যক্রম ও গুরুত্বপূর্ণ
            বিষয়সমূহের সর্বশেষ তথ্য।
          </p>
        </div>

        <div className="mt-14 border-t border-border lg:mt-16">
          <div className="flex flex-col lg:flex-row">
            {/* Featured */}
            <Link
              href={`/notices/${featuredNotice.id}`}
              className="notice-item group flex w-full flex-col py-8 sm:py-10 lg:w-[55%] lg:border-r lg:pr-14 lg:py-12"
            >
              <div className="flex items-center gap-3 text-xs sm:text-sm">
                <span className="font-semibold text-accent">
                  {featuredNotice.category}
                </span>

                <span className="h-px w-5 bg-border" />

                <span className="flex items-center gap-2 text-foreground/40">
                  <FiCalendar className="h-3.5 w-3.5" />
                  {featuredNotice.date}
                </span>
              </div>

              <h3 className="mt-6 max-w-2xl font-serif text-2xl font-semibold leading-[1.3] tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-3xl lg:text-[2.6rem]">
                {featuredNotice.title}
              </h3>

              {featuredNotice.description && (
                <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/50 sm:text-base">
                  {featuredNotice.description}
                </p>
              )}

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
                বিস্তারিত দেখুন
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>

            {/* Secondary */}
            <div className="flex w-full flex-col lg:w-[45%] lg:pl-14">
              {secondaryNotices.map((notice, index) => (
                <Link
                  key={notice.id}
                  href={`/notices/${notice.id}`}
                  className={`notice-item group flex flex-col py-8 sm:py-9 lg:py-10 ${
                    index === 0 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs sm:text-sm">
                    <span className="font-semibold text-accent">
                      {notice.category}
                    </span>

                    <span className="h-px w-4 bg-border" />

                    <span className="text-foreground/40">
                      {notice.date}
                    </span>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-5">
                    <h4 className="max-w-lg font-serif text-xl font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                      {notice.title}
                    </h4>

                    <FiArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-foreground/25 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                  </div>

                  {notice.description && (
                    <p className="mt-3 max-w-lg text-sm leading-6 text-foreground/45">
                      {notice.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t border-border pt-6">
          <Link
            href="/notices"
            className="group flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-accent"
          >
            সকল নোটিশ
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}