"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Container from "../layout/Container";
import { siteConfig } from "@/src/config/site";
import SectionHeader from "../ui/SectionHeader";

const contactInfo = [
  {
    icon: FiPhone,
    label: "ফোন",
    value: siteConfig.contact.phoneFormatted,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FiMail,
    label: "ই-মেইল",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: FiMapPin,
    label: "ঠিকানা",
    value: siteConfig.contact.address,
    href: "#location",
  },
  {
    icon: FiClock,
    label: "অফিস সময়",
    value: "রবি - বৃহঃ: ৮টা - ৪টা",
    href: "#office-hours",
  },
];

export default function ContactInfo() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = sectionRef.current?.querySelectorAll(".contact-reveal");

      if (!items?.length) return;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
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
      id="contact-inquiry"
      className="relative w-full overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      <Container className="flex flex-col gap-10">
        {/* Header */}
        <div>
          <SectionHeader
            label="যোগাযোগ"
            headingLine1="আমাদের সাথে"
            headingLine2="যোগাযোগ করুন"
            className="mx-auto flex w-full flex-col items-center justify-center text-center"
          />

          <p className="mx-auto mt-5 max-w-md text-center text-sm leading-7 text-foreground/55 sm:text-base">
            ভর্তি, বিভাগ, একাডেমিক কার্যক্রম অথবা মাদরাসা সম্পর্কে যেকোনো
            তথ্যের জন্য আমাদের সাথে যোগাযোগ করতে পারেন।
          </p>
        </div>

        {/* Contact content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* LEFT — Contact information */}
          <div className="contact-reveal flex w-full flex-col gap-3 lg:w-[42%]">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-xl border border-border/80 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/2.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.07] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium text-foreground/40">
                      {item.label}
                    </span>

                    <span className="mt-0.5 block truncate text-sm font-medium text-foreground/80">
                      {item.value}
                    </span>
                  </span>

                  <FiArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-foreground/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </Link>
              );
            })}

            {siteConfig.contact.googleMapsLink && (
              <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-sm transition-all duration-500 hover:shadow-md">
                <iframe
                  src={siteConfig.contact.googleMapsLink}
                  title="দারুল হুদা মাদরাসার অবস্থান"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="h-full w-full border-0 transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />
              </div>
            )}
          </div>

          {/* RIGHT — Form */}
          <div className="contact-reveal w-full rounded-2xl border border-border bg-subtle/30 p-5 sm:p-7 lg:w-[58%] lg:p-8">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                আপনার বার্তা
              </p>

              <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
                কীভাবে সাহায্য করতে পারি?
              </h3>
            </div>

            <form className="flex flex-col gap-5">
              {/* Name + Phone */}
              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium text-foreground/60"
                  >
                    আপনার নাম
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="নাম লিখুন"
                    className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-foreground/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-medium text-foreground/60"
                  >
                    ফোন নম্বর
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-foreground/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium text-foreground/60"
                >
                  বিষয়
                </label>

                <select
                  id="subject"
                  defaultValue=""
                  className="h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground/70 outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                >
                  <option value="" disabled>
                    একটি বিষয় নির্বাচন করুন
                  </option>
                  <option value="admission">ভর্তি সংক্রান্ত</option>
                  <option value="academic">একাডেমিক তথ্য</option>
                  <option value="department">বিভাগ সংক্রান্ত</option>
                  <option value="general">সাধারণ জিজ্ঞাসা</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-foreground/60"
                >
                  আপনার বার্তা
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="আপনার প্রশ্ন বা বার্তা লিখুন..."
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm leading-6 text-foreground outline-none transition-all placeholder:text-foreground/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/10"
              >
                বার্তা পাঠান

                <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
