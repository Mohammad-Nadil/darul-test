"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiBookOpen, FiEye, FiTarget } from "react-icons/fi";

import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "০১",
    title: "ইলম",
    icon: FiBookOpen,
    text: "কুরআন ও সুন্নাহর আলোকে সঠিক জ্ঞান অর্জন এবং জ্ঞানকে জীবনের পথনির্দেশ হিসেবে গ্রহণ করা।",
  },
  {
    number: "০২",
    title: "আমল",
    icon: FiTarget,
    text: "অর্জিত জ্ঞানকে বাস্তব জীবনে প্রয়োগের মাধ্যমে ইবাদত, দায়িত্ববোধ ও শৃঙ্খলার চর্চা করা।",
  },
  {
    number: "০৩",
    title: "আখলাক",
    icon: FiEye,
    text: "উত্তম চরিত্র, আদব, সততা ও মানবিক মূল্যবোধের মাধ্যমে একজন পরিপূর্ণ মানুষ হিসেবে গড়ে ওঠা।",
  },
];

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const revealItems = section.querySelectorAll(".story-reveal");
      const image = section.querySelector(".story-image");

      gsap.fromTo(
        revealItems,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        },
      );

      if (image) {
        gsap.fromTo(
          image,
          {
            scale: 1.06,
          },
          {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 88%",
              once: true,
            },
          },
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Header */}

        <SectionHeader
          label="আমাদের পথচলা"
          headingLine1="দ্বীনি শিক্ষার আলোকে"
          headingLine2="একটি আদর্শ প্রজন্ম গড়ার প্রত্যয়"
          className=" text-center w-full! mx-auto mb-10 flex flex-col items-center justify-center"
        />

        {/* Story + Image */}
        <div className="story-reveal flex flex-col gap-8 py-8 lg:flex-row lg:items-stretch lg:gap-10">
          <div className="relative w-full overflow-hidden rounded-2xl lg:w-[58%]">
            <div className="relative h-full min-h-[280px]">
              <Image
                src="/images/about/about5.jpg"
                alt="দারুল হুদা মাদরাসা"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="story-image object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="text-xs font-medium text-white/70">
                মাদরাসা-ই-দারুল হুদা
              </span>

              <p className="mt-1 font-serif text-xl font-semibold text-white sm:text-2xl">
                ইলম • আমল • আখলাক
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col justify-between lg:w-[42%]">
            <div>
              <span className="text-xs font-semibold text-accent">
                আমাদের বিশ্বাস
              </span>

              <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                শিক্ষা শুধু মেধা তৈরি করে না,
                <span className="block text-primary">মানুষও তৈরি করে।</span>
              </h3>

              <div className="mt-5 space-y-3 text-sm leading-7 text-foreground/55 sm:text-base">
                <p>
                  একজন শিক্ষার্থীর প্রকৃত সাফল্য শুধু পরীক্ষার ফলাফল দিয়ে পরিমাপ
                  করা যায় না। তার ঈমান, আচরণ, চিন্তা ও দায়িত্ববোধের মধ্যেও
                  শিক্ষার প্রতিফলন থাকা প্রয়োজন।
                </p>

                <p>
                  তাই দ্বীনি শিক্ষার দৃঢ় ভিত্তির সঙ্গে প্রয়োজনীয় আধুনিক জ্ঞান,
                  শৃঙ্খলা ও দক্ষতার সমন্বয়ে শিক্ষার্থীদের ভবিষ্যৎ জীবনের জন্য
                  প্রস্তুত করাই আমাদের অন্যতম লক্ষ্য।
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
              <span className="font-serif text-2xl text-accent">۞</span>

              <p className="text-sm font-medium text-foreground/65">
                জ্ঞান হোক আলোর পথ, চরিত্র হোক তার সৌন্দর্য।
              </p>
            </div>
          </div>
        </div>

        {/* Mission Vision */}
        <div className="story-reveal border-y border-border">
          <div className="flex flex-col lg:flex-row">
            {/* Mission */}
            <div className="flex-1 py-8 lg:pr-10">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <FiTarget className="h-5 w-5" />
                  </div>

                  <div>
                    <span className="text-[11px]  font-semibold tracking-widest text-accent">
                      MISSION
                    </span>

                    <h3 className=" font-serif text-2xl font-semibold text-foreground">
                      আমাদের মিশন
                    </h3>
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/55">
                কুরআন ও সুন্নাহর আলোকে শিক্ষার্থীদের জ্ঞান, ঈমান, নৈতিকতা ও
                চরিত্র গঠনের পাশাপাশি প্রয়োজনীয় আধুনিক জ্ঞান ও দক্ষতায় সমৃদ্ধ
                করা। একটি সুশৃঙ্খল ও যত্নশীল পরিবেশে তাদের দায়িত্বশীল,
                আত্মবিশ্বাসী ও কল্যাণমুখী মানুষ হিসেবে গড়ে তোলা।
              </p>
            </div>

            <div className="h-px w-full bg-border lg:h-auto lg:w-px" />

            {/* Vision */}
            <div className="flex-1 py-8 lg:pl-10">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <FiEye className="h-5 w-5" />
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold  text-accent">
                      VISION
                    </span>

                    <h3 className=" font-serif text-2xl font-semibold text-foreground">
                      আমাদের ভিশন
                    </h3>
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/55">
                ঈমান ও নৈতিকতায় দৃঢ়, জ্ঞানে সমৃদ্ধ, চিন্তায় দায়িত্বশীল এবং সমাজ
                ও দেশের জন্য কল্যাণকর একটি আদর্শ প্রজন্ম গড়ে তোলা— যারা ইসলামী
                মূল্যবোধ ধারণ করে আধুনিক বিশ্বের চ্যালেঞ্জ মোকাবিলায় সক্ষম হবে।
              </p>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="story-reveal mt-10">
          <div className="mb-6 flex items-end justify-between gap-5">
            <div>
              <span className="text-xs font-semibold text-accent sm:text-sm">
                আমাদের ভিত্তি
              </span>

              <h3 className="mt-1.5 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                শিক্ষার তিন মূল ভিত্তি
              </h3>
            </div>

            <span className="hidden text-2xl text-accent/40 sm:block">۞</span>
          </div>

          <div className="flex flex-col border-t border-border lg:flex-row">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`group flex-1 py-7 lg:px-7 ${
                    index !== 0
                      ? "border-t border-border lg:border-l lg:border-t-0"
                      : ""
                  }`}
                >
                  <div className="flex items-center  gap-5">
                    <Icon className="h-4 w-4 text-accent" />
                    <h4 className=" font-serif text-xl font-semibold text-foreground">
                      {item.title}
                    </h4>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-foreground/50">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
