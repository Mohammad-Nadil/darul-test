"use client";

import { useRef } from "react";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

const academicStages = [
  {
    number: "০১",
    title: "মক্তব বিভাগ",
    description:
      "প্রাথমিক কুরআন শিক্ষা, প্রয়োজনীয় দোয়া, মাসআলা-মাসায়েল ও ইসলামী আদবের চর্চা।",
  },
  {
    number: "০২",
    title: "নূরানী বিভাগ",
    description:
      "নূরানী কায়দা, শুদ্ধ কুরআন পাঠ, তাজবীদের প্রাথমিক শিক্ষা ও প্রয়োজনীয় দ্বীনি জ্ঞান।",
  },
  {
    number: "০৩",
    title: "নাজেরা বিভাগ",
    description:
      "কুরআন মাজীদ সহীহ ও সাবলীলভাবে পড়ার জন্য নিয়মিত নাজেরা ও তিলাওয়াতের অনুশীলন।",
  },
  {
    number: "০৪",
    title: "হিফজুল কুরআন",
    description:
      "নিয়মিত সবক, আমুখতা ও দাওরের মাধ্যমে কুরআনুল কারীম হিফজের ধারাবাহিক কার্যক্রম।",
  },
  {
    number: "০৫",
    title: "বিশেষ নাজেরা",
    description:
      "নাজেরা ও তিলাওয়াত আরও সুদৃঢ় করার জন্য বিশেষভাবে পরিচালিত শিক্ষা কার্যক্রম।",
  },
  {
    number: "০৬",
    title: "কিতাব বিভাগ",
    description:
      "আরবি ভাষা, ফিকহ, হাদীসসহ বিভিন্ন ইসলামী বিষয়ে উচ্চতর জ্ঞানচর্চার সুযোগ।",
  },
];

export default function AcademicOverview() {
  return (
    <section id="academic-overview" className=" py-16 sm:py-20">
      <Container>
        <div className="academic-overview-header max-w-2xl">
          <SectionHeader
            label="শিক্ষা কার্যক্রম"
            headingLine1="শিক্ষার ধারাবাহিক"
            headingLine2="একটি কাঠামো"
          />

          <p className="mt-4 text-sm leading-7 text-(--muted-foreground) sm:text-base">
            প্রাথমিক কুরআন শিক্ষা থেকে উচ্চতর দ্বীনি শিক্ষার বিভিন্ন ধাপ
            ধারাবাহিকভাবে পরিচালিত হয়।
          </p>
        </div>

        <div
          id="departments"
          className="academic-stages mt-10 grid border-t border-border md:grid-cols-2 md:gap-x-10"
        >
          {academicStages.map((stage) => (
            <article
              key={stage.number}
              className="academic-stage flex  gap-3  border-b border-border py-3"
            >
              <span className="pt-1  font-medium text-primary">
                ۞
              </span>

              <div>
                <h3 className="text-lg font-semibold text-foreground ">
                  {stage.title}
                </h3>

                <p className="mt-1.5 max-w-xl text-sm leading-6 opacity-75">
                  {stage.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
