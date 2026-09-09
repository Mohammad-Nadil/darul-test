"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";
import Container from "../layout/Container";
import Button from "../ui/Button";
const cleanData = {
  images: {
    even: "/images/hero/masjid3.jpg",
    odd: "/images/hero/masjid1.jpg",
  },
  slides: [
    {
      id: 1,
      tag: "দ্বীনি ও আধুনিক শিক্ষার সমন্বয়",
      titleLine1: "কুরআনের আলোয় গড়ে উঠুক,",
      titleLine2: "আদর্শ ভবিষ্যৎ প্রজন্ম",
      desc: "কুরআন ও সুন্নাহভিত্তিক দ্বীনি শিক্ষার পাশাপাশি প্রয়োজনীয় আধুনিক জ্ঞান ও দক্ষতার সমন্বয়ে শিক্ষার্থীদের জ্ঞান, চরিত্র ও নৈতিকতা বিকাশে আমরা প্রতিশ্রুতিবদ্ধ।",
    },
    {
      id: 2,
      tag: "ভর্তি চলছে",
      titleLine1: "শিক্ষার সাথে গড়ে উঠুক,",
      titleLine2: "আদর্শ ও সুন্দর জীবন",
      desc: "সুশৃঙ্খল পরিবেশ, অভিজ্ঞ শিক্ষকমণ্ডলী এবং যত্নশীল শিক্ষাদানের মাধ্যমে প্রতিটি শিক্ষার্থীর মেধা, মনন ও নৈতিক মূল্যবোধ বিকাশে আমাদের নিরন্তর প্রচেষ্টা।",
    },
    {
      id: 3,
      tag: "কুরআন ও সুন্নাহর শিক্ষা",
      titleLine1: "ইলম, আমল ও আখলাকে",
      titleLine2: "সমৃদ্ধ হোক প্রতিটি জীবন",
      desc: "কুরআন-সুন্নাহর জ্ঞান, ইসলামী আদর্শ ও নৈতিক শিক্ষার মাধ্যমে এমন একটি প্রজন্ম গড়ে তোলাই আমাদের লক্ষ্য, যারা জ্ঞানী, সৎ ও দায়িত্বশীল।",
    },
  ],
};

export default function Hero() {
  const containerRef: any = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cleanData.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".js-hero-content-anim",
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12 },
    );

    const activeBg = containerRef.current.querySelector(
      `.bg-slide-${currentSlide}`,
    );
    if (activeBg) {
      gsap.fromTo(
        activeBg,
        { opacity: 0, scale: 1.12 },
        { opacity: 1, scale: 1, duration: 2, ease: "power2.out" },
      );
    }
  }, [currentSlide]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 xs:py-20  flex items-center overflow-hidden "
    >
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {cleanData.slides.map((slide, index) => {
          const assignedImage =
            index % 2 === 0 ? cleanData.images.even : cleanData.images.odd;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            >
              <Image
                src={assignedImage}
                alt="মাদ্রাসা-ই-দারুল হুদা"
                fill
                priority={index === 0}
                sizes="100vw"
                className={`bg-slide-${index} object-cover object-center brightness-[0.65] blur-xs`}
              />
            </div>
          );
        })}

        <div className="absolute inset-0 z-20 bg-linear-to-r from-black/75 via-black/45 to-black/15" />

        <div className="absolute inset-0 z-20 bg-linear-to-t from-black/65 via-transparent to-black/10" />
      </div>

      <Container className="w-full relative z-30">
        <div className="text-left space-y-6 sm:space-y-8">
          <div className="js-hero-content-anim flex items-center gap-2 border-l-2 border-primary pl-3">
            <span className="text-primary text-xs font-bold uppercase tracking-widest font-sans">
              {cleanData.slides[currentSlide].tag}
            </span>
          </div>

          <h1 className="js-hero-content-anim text-2xl  sm:text-5xl md:text-6xl xl:text-8xl font-serif font-semibold text-white tracking-wide leading-[1.15]">
            <>
              {cleanData.slides[currentSlide].titleLine1}
              <br />
              {cleanData.slides[currentSlide].titleLine2}
            </>
          </h1>

          <p className="js-hero-content-anim max-w-xl text-xs sm:text-base text-white/70 font-light leading-relaxed font-sans">
            {cleanData.slides[currentSlide].desc}
          </p>

          <div className="js-hero-content-anim flex items-center justify-center sm:justify-start gap-4 pt-4 w-full sm:w-auto">
            <Button
              href="/admissions"
              label="আবেদনের তথ্য"
              borderColor="var(--color-primary)"
              flairColor="var(--color-primary)"
              textColor="#ffffff"
              textHoverColor="#ffffff"
              rightIcon={<FiArrowRight />}
            />
          </div>
        </div>
        <div className="absolute -bottom-10 right-1/2 translate-x-1/2 sm:translate-x-0 sm:bottom-6 sm:right-12 lg:right-24 z-30 flex items-center gap-2.5">
          {cleanData.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                index === currentSlide
                  ? "w-8 bg-accent"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-4 text-center">
          <div>
            <p className="text-2xl font-bold text-white sm:text-3xl">১০+</p>
            <p className="mt-1 text-xs text-white/55 sm:text-sm">
              অভিজ্ঞ শিক্ষক
            </p>
          </div>

          <div className="border-x border-white/10 px-4">
            <p className="text-2xl font-bold text-white sm:text-3xl">২০০+</p>
            <p className="mt-1 text-xs text-white/55 sm:text-sm">শিক্ষার্থী</p>
          </div>

          <div className="pl-2">
            <p className="text-2xl font-bold text-white sm:text-3xl">৫+</p>
            <p className="mt-1 text-xs text-white/55 sm:text-sm">
              শিক্ষা বিভাগ
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
