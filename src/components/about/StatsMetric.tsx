"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiBookOpen, FiHeart, FiShield, FiUserCheck } from "react-icons/fi";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const principles = [
  {
    id: "01",
    icon: FiBookOpen,
    title: "কুরআন ও সুন্নাহ",
    description:
      "পবিত্র কুরআন ও সুন্নাহর আলোকে প্রয়োজনীয় দ্বীনি জ্ঞান অর্জনের সুযোগ।",
  },
  {
    id: "02",
    icon: FiHeart,
    title: "আদব ও আখলাক",
    description:
      "ইলমের পাশাপাশি উত্তম চরিত্র, শিষ্টাচার ও ইসলামী মূল্যবোধের চর্চা।",
  },
  {
    id: "03",
    icon: FiUserCheck,
    title: "ব্যক্তিগত যত্ন",
    description:
      "প্রতিটি শিক্ষার্থীর শেখার অগ্রগতি ও প্রয়োজনের প্রতি আন্তরিক নজর।",
  },
  {
    id: "04",
    icon: FiShield,
    title: "সুশৃঙ্খল পরিবেশ",
    description: "শৃঙ্খলা, নিরাপত্তা ও ইসলামী পরিবেশে নিয়মিত শিক্ষা কার্যক্রম।",
  },
];
export default function EducationPrinciples() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;
      const heading = section.querySelector(".principles-heading");
      const statement = section.querySelector(".principles-statement");
      const items = section.querySelectorAll(".principle-item");
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: heading, start: "top 85%", once: true },
          },
        );
      }
      if (statement) {
        gsap.fromTo(
          statement,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: statement, start: "top 85%", once: true },
          },
        );
      }
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: items[0], start: "top 88%", once: true },
        },
      );
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      id="education-principles"
      className="relative w-full overflow-hidden bg-subtle py-20 text-foreground transition-colors duration-500 md:py-28 lg:py-32"
    >
      <Container>
        <div className="principles-heading">
          <SectionHeader
            label="আমাদের শিক্ষা দর্শন"
            headingLine1="ইলমের সঙ্গে"
            headingLine2="আদর্শের বিকাশ"
            className="mx-auto flex w-full flex-col items-center justify-center text-center"
          />
        </div>
        <div className="mx-auto mt-16 max-w-6xl ">
          <div className="principles-statement relative border-y border-border py-12 text-center ">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-subtle px-5 font-serif text-2xl text-primary/25">
              ۞
            </span>
            <p className="mx-auto max-w-4xl font-serif text-2xl font-semibold  tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              “শিক্ষার উদ্দেশ্য শুধু জ্ঞান অর্জন নয়,
              <span className="text-primary">জ্ঞানকে জীবনে ধারণ করাও।”</span>
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm  text-foreground/45 sm:text-base">
              কুরআন ও সুন্নাহর আলোকে এমন একটি প্রজন্ম গড়ে তোলাই আমাদের প্রত্যয়,
              যারা জ্ঞানে সমৃদ্ধ, আমলে সচেতন এবং চরিত্রে সুন্দর।
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`principle-item group relative px-5 py-5 sm:px-7 ${index < 2 ? "border-b border-border sm:border-b-0" : ""} ${index % 2 === 0 ? "sm:border-r sm:border-border lg:border-r" : ""} ${index !== principles.length - 1 ? "lg:border-r lg:border-border" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-background">
                      <Icon className="text-[17px]" />
                    </div>
                    <span className="font-serif text-[11px] font-semibold tracking-widest text-foreground/20 transition-colors duration-300 group-hover:text-primary/40">
                      {item.id}
                    </span>
                  </div>
                  <h3 className="mt-7 font-serif text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs  text-foreground/45 sm:text-sm ">
                    {item.description}
                  </p>
                  <div className="mt-7 h-px w-7 bg-accent transition-all duration-500 group-hover:w-12" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-1/2 h-px w-[82%] -translate-x-1/2 bg-linear-to-r from-transparent via-border/60 to-transparent" />
    </section>
  );
}
