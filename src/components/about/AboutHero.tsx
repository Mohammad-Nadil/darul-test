"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

import Container from "../layout/Container";
import { JSX } from "react/jsx-runtime";

type cleanDataType = {
  header: string;
  title: JSX.Element;
  description: string;
  features: string[];
};

const cleanData: cleanDataType = {
  header: "আমাদের পরিচিতি",

  title: (
    <>
      জ্ঞান, আদর্শ ও
      <br className="hidden md:block" />
      <span className="font-sans font-normal italic text-primary">নৈতিকতার  </span>
       সমন্বয়ে
      <br />
      আলোকিত প্রজন্ম।
    </>
  ),

  description:
    "মাদরাসা-ই-দারুল হুদা একটি আদর্শ ইসলামী শিক্ষা প্রতিষ্ঠান। কুরআন ও সুন্নাহর আলোকে শিক্ষার্থীদের জ্ঞান, আমল ও আখলাক গঠনের পাশাপাশি প্রয়োজনীয় আধুনিক জ্ঞান ও দক্ষতায় সমৃদ্ধ করে তোলাই আমাদের লক্ষ্য।",

  features: [
    "কুরআন ও সুন্নাহভিত্তিক শিক্ষা",
    "চরিত্র ও নৈতিকতার বিকাশ",
    "দ্বীনি ও আধুনিক শিক্ষার সমন্বয়",
  ],
};

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative w-full overflow-hidden bg-background py-10 lg:py-18 "
    >
      <Container>
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-16">
          {/* Content */}
          <div className="w-full lg:w-[52%]">
            <div className="flex w-fit items-center gap-3">
              <span className="h-px w-9 bg-primary" />

              <span className="text-xs font-bold text-primary sm:text-sm">
                {cleanData.header}
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {cleanData.title}
            </h1>

            <p className="mt-7 max-w-xl border-l border-border pl-5 text-sm leading-7 text-foreground/55 sm:text-base sm:leading-8">
              {cleanData.description}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row justify-between gap-4 border-y border-border py-5">
              {cleanData.features.map((feature, index) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="font-serif text-sm font-semibold w-2 aspect-square rounded-full bg-primary text-background grid place-items-center"></span>
                  <span className="text-sm font-medium text-foreground/70">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="#our-story"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary"
              >
                আমাদের গল্প
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-background">
                  <FiArrowDown className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/50 transition-colors duration-300 hover:text-primary"
              >
                যোগাযোগ করুন
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="w-full lg:w-[48%]">
            <div className="relative mx-auto max-w-xl">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/about/about3.jpg"
                    alt="দারুল হুদা মাদরাসা"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Logo card */}
              <div className="absolute -right-3 -top-7 flex h-28 w-28 items-center justify-center rounded-2xl border border-border bg-background p-3 shadow-xl sm:-right-5 sm:-top-8 sm:h-32 sm:w-32">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/about/logo.png"
                    alt="দারুল হুদা মাদরাসার লোগো"
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Information card */}
              <div className="absolute -bottom-8 left-5 max-w-[75%] rounded-2xl border border-border bg-background px-5 py-4 shadow-xl sm:left-8 sm:px-6 sm:py-5">
                <p className="text-xs font-semibold text-primary">
                  আমাদের অঙ্গীকার
                </p>

                <p className="mt-2 font-serif text-xs xs:text-base font-semibold leading-relaxed text-foreground sm:text-lg">
                  ইলম, আমল ও আখলাকে সমৃদ্ধ
                  <br className="hidden sm:block" />
                  একটি আদর্শ প্রজন্ম গড়ে তোলা।
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
