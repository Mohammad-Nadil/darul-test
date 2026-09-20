"use client";

import { useRef } from "react";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

const branches = [
  {
    number: "০১",
    title: "পুরুষ শাখা",
    description:
      "নূরানী কিন্ডারগার্টেন, হিফজুল কুরআন এবং মাদানী নিসাবের ধারাবাহিক শিক্ষা কার্যক্রম।",
    levels: [
      "নূরানী কিন্ডারগার্টেন",
      "হিফজুল কুরআন",
      "মাদানী নিসাব — ৩য় বর্ষ পর্যন্ত",
    ],
  },
  {
    number: "০২",
    title: "মহিলা শাখা",
    description:
      "নূরানী কিন্ডারগার্টেন, হিফজুল কুরআন ও কিতাব বিভাগের মাধ্যমে ধারাবাহিক দ্বীনি শিক্ষার ব্যবস্থা।",
    levels: [
      "নূরানী কিন্ডারগার্টেন",
      "হিফজুল কুরআন",
      "কিতাব বিভাগ — তাইসির থেকে দাওরায়ে হাদীস",
    ],
  },
];

export default function AcademicScope() {
  return (
    <section id="academic-scope" className=" py-16 sm:py-20">
      <Container>
        <div className="academic-scope-header max-w-2xl">
          <SectionHeader
            label="একাডেমিক পরিধি"
            headingLine1="শিক্ষার পরিসর"
            headingLine2="শাখাভিত্তিক"
          />

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            মাদরাসার বিভিন্ন শাখায় শিক্ষার্থীদের বয়স, স্তর ও শিক্ষার প্রয়োজন
            অনুযায়ী ধারাবাহিক একাডেমিক কার্যক্রম পরিচালিত হয়।
          </p>
        </div>

        <div className="academic-branches mt-10 grid border-t border-border lg:grid-cols-2 lg:divide-x lg:divide-[var(--border)]">
          {branches.map((branch) => (
            <article
              key={branch.number}
              className="academic-branch py-6 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="flex items-start gap-4">
                <span className="pt-1 text-xs font-medium text-primary">
                  {branch.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-[var(--foreground)] sm:text-xl">
                    {branch.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {branch.description}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {branch.levels.map((level) => (
                      <div
                        key={level}
                        className="flex items-start gap-2 text-sm text-[var(--foreground)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span>{level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
