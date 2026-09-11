"use client";
import React, {  useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
const faqs = [
  {
    id: 1,
    question: "মাদরাসায় কোন কোন বিভাগে শিক্ষা দেওয়া হয়?",
    answer:
      "মক্তব, নূরানী, নাজেরা, হিফজুল কুরআন, বিশেষ নাজেরা ও কিতাবসহ বিভিন্ন বিভাগে শিক্ষার ব্যবস্থা রয়েছে।",
  },
  {
    id: 2,
    question: "ভর্তির জন্য কীভাবে যোগাযোগ করব?",
    answer:
      "ভর্তি সংক্রান্ত তথ্যের জন্য আমাদের ফোন নম্বরে সরাসরি যোগাযোগ করতে পারেন অথবা এই পেজের যোগাযোগ ফর্মের মাধ্যমে আপনার প্রশ্ন পাঠাতে পারেন।",
  },
  {
    id: 3,
    question: "মাদরাসার অফিসে কখন যোগাযোগ করা যায়?",
    answer:
      "অফিস চলাকালীন সময়ে ফোন অথবা সরাসরি মাদরাসায় এসে যোগাযোগ করতে পারেন। সাপ্তাহিক ছুটির দিন ও নির্দিষ্ট সময়ের তথ্য উপরের যোগাযোগ অংশে দেওয়া থাকবে।",
  },
  {
    id: 4,
    question: "মাদরাসার অবস্থান কোথায়?",
    answer:
      "মাদরাসার সম্পূর্ণ ঠিকানা ও Google Maps-এর মাধ্যমে অবস্থান এই পেজের 'আমাদের অবস্থান' অংশে দেওয়া হয়েছে।",
  },
];
export default function ContactFAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  return (
    <section
      id="contact-faq"
      className="w-full overflow-hidden bg-subtle pt-20 text-foreground transition-colors duration-500 sm:pt-24 lg:py-t8"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Intro */}
          <SectionHeader
            label="সাধারণ জিজ্ঞাসা"
            headingLine1="আপনার প্রশ্নের"
            headingLine2="উত্তর খুঁজে নিন"
          />
          {/* FAQ list */}
          <div className="faq-reveal border-t border-border">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-5 py-5 text-left sm:py-6"
                  >
                    <span className=" text-primary">
                      ۞
                    </span>
                    <span className="flex-1 text-sm font-semibold text-foreground sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 ${isOpen ? "rotate-180 border-primary bg-primary text-background" : "text-foreground/45"}`}
                    >
                      <FiChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pl-9 pr-8 text-sm leading-7 text-foreground/50 sm:pl-10">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
