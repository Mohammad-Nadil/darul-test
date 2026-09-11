"use client";
import React, { useRef } from "react";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiFacebook,
  FiMessageCircle,
  FiYoutube,
} from "react-icons/fi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
const channels = [
  {
    id: "01",
    icon: FiFacebook,
    title: "Facebook",
    description: "মাদরাসার সর্বশেষ খবর ও কার্যক্রম",
    href: "#",
  },
  {
    id: "02",
    icon: FiYoutube,
    title: "YouTube",
    description: "বক্তৃতা ও শিক্ষা কার্যক্রম দেখুন",
    href: "#",
  },
  {
    id: "03",
    icon: FiMessageCircle,
    title: "WhatsApp",
    description: "দ্রুত যোগাযোগের জন্য সরাসরি বার্তা",
    href: "#",
  },
];
export default function ContactChannels() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const items = sectionRef.current?.querySelectorAll(".channel-item");
      if (!items?.length) return;
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
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
      id="contact-channels"
      className="w-full overflow-hidden bg-background pt-16 text-foreground transition-colors duration-500 sm:pt-20"
    >
      <Container>
        <div className="border-b border-border">
          <div className="flex flex-col gap-3 py-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              label="সর্বদা সংযুক্ত থাকুন"
              headingLine1="মাদরাসার সাথে"
              headingLine2="যুক্ত থাকার মাধ্যম"
            />

            <p className="max-w-sm  leading-6 text-foreground/45 sm:text-right">
              আমাদের নিয়মিত কার্যক্রম, সংবাদ ও বিভিন্ন আপডেট জানতে সামাজিক
              যোগাযোগমাধ্যমেও যুক্ত থাকতে পারেন।
            </p>
          </div>
          <div className="grid border-t border-border md:grid-cols-3">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <Link
                  key={channel.id}
                  href={channel.href}
                  className="channel-item group flex items-center gap-4 border-b border-border px-1 py-6 transition-colors duration-300 hover:bg-subtle md:border-b-0 md:px-6 md:py-7 md:first:pl-0 md:not-last:border-r md:not-last:border-border"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-background">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-foreground">
                      {channel.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-foreground/40">
                      {channel.description}
                    </span>
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center text-foreground/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                    <FiArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
