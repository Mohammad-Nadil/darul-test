"use client";

import Link from "next/link";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

export default function ContactCTA() {
  return (
    <section
      id="contact-cta"
      className="w-full bg-background  text-foreground "
    >
      <Container>
        <div className="contact-cta-content relative overflow-hidden rounded-2xl border border-border bg-subtle px-3 pt-12 sm:px-10 sm:pt-14 lg:px-16 lg:pt-16">
          {/* Subtle decorative accent */}
          <span className="pointer-events-none absolute -right-8 -top-10 font-serif text-[150px] leading-none text-primary/[0.025]">
            ۞
          </span>

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Content */}

            <div className="max-w-2xl">
              <SectionHeader
                label="যোগাযোগ করুন"
                headingLine1=" প্রয়োজনীয় তথ্যের জন্য"
                headingLine2="আমাদের সাথে কথা বলুন"
              />

              <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/60 sm:text-base">
                ভর্তি, বিভাগ, শিক্ষা কার্যক্রম কিংবা মাদরাসা সম্পর্কে যেকোনো
                তথ্য জানতে আমাদের সাথে যোগাযোগ করতে পারেন।
              </p>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="#contact-inquiry"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-background transition-colors duration-300 hover:bg-primary/90"
              >
                বার্তা পাঠান
                <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="tel:+8801XXXXXXXXX"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary/30 hover:text-primary"
              >
                <FiPhone className="h-4 w-4" />
                ফোন করুন
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
