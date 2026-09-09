"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const highlights: string[] = [
  "কুরআন ও সুন্নাহভিত্তিক শিক্ষা",
  "নৈতিকতা ও চরিত্র গঠনে গুরুত্ব",
  "দ্বীনি ও আধুনিক শিক্ষার সমন্বয়",
];

export default function WelcomeMessage() {
  useGSAP(() => {
    const section = document.querySelector(".welcome-section");

    if (!section) return;

    const imageWrapper = section.querySelector(".welcome-image");
    const secondImage = section.querySelector(".welcome-second-image");
    const label = section.querySelector(".welcome-label");
    const heading = section.querySelector(".welcome-heading");
    const paragraphs = section.querySelectorAll(".welcome-paragraph");
    const highlights = section.querySelectorAll(".welcome-highlight");
    const button = section.querySelector(".welcome-button");

    const imageItems = [imageWrapper, secondImage].filter(Boolean) as Element[];

    gsap.set(imageItems, {
      opacity: 0,
      y: 40,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        once: true,
      },
    });

    tl.to(imageWrapper, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
    })
      .to(
        secondImage,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.55",
      )
      .to(
        paragraphs,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .to(
        highlights,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
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
        "-=0.2",
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  return (
    <section className="welcome-section bg-background py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-20">
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="welcome-image relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[5/4]">
                <Image
                  src="/images/assets/banner1.jpg"
                  alt="মাদ্রাসা-ই-দারুল হুদা"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="welcome-second-image absolute -bottom-8 right-5 w-[58%] overflow-hidden rounded-2xl border-8 border-background shadow-xl sm:right-8">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/assets/banner2.jpg"
                    alt="মাদ্রাসা-ই-দারুল হুদার পরিবেশ"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="h-8 lg:hidden" />
          </div>

          <div className="welcome-content w-full lg:w-3/5 lg:pl-4">
            <SectionHeader
              label="আমাদের পরিচিতি"
              headingLine1="মাদরাসা-ই-দারুল হুদা"
              headingLine2="এবং আমাদের লক্ষ্য"
            />

            <div className="mt-7 max-w-2xl space-y-4 text-sm text-foreground/65 sm:text-base">
              <p className="welcome-paragraph">
                মাদরাসা-ই-দারুল হুদা একটি আদর্শ ইসলামী শিক্ষা প্রতিষ্ঠান। পবিত্র
                কুরআন ও সুন্নাহর আলোকে শিক্ষার্থীদের জ্ঞান, নৈতিকতা ও চরিত্র গঠন
                করাই আমাদের অন্যতম প্রধান লক্ষ্য।
              </p>

              <p className="welcome-paragraph">
                দ্বীনি শিক্ষার পাশাপাশি প্রয়োজনীয় আধুনিক জ্ঞানের সমন্বয়ে
                শিক্ষার্থীদের এমনভাবে গড়ে তোলাই আমাদের প্রত্যয়, যাতে তারা
                পরিবার, সমাজ ও দেশের জন্য কল্যাণকর ভূমিকা রাখতে পারে।
              </p>
            </div>

            <div className="mt-4 border-y border-border py-3">
              <div className="flex flex-col  gap-5 sm:flex-row sm:gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className="welcome-highlight flex flex-1 items-center gap-3"
                  >
                    <span className="shrink-0 font-serif text-lg font-semibold text-accent">
                      0{index + 1}
                    </span>

                    <p className="text-sm font-medium text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="welcome-button mt-8 flex items-center justify-center sm:justify-start ">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                মাদরাসা সম্পর্কে বিস্তারিত
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
