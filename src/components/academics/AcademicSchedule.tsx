"use client";

import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

type scheduleTypes = {
  time: string;
  label: string;
};

const schedule: scheduleTypes[] = [
  {
    time: "বাদ ফজর — সকাল ৯:০০",
    label: "সকালের শিক্ষা কার্যক্রম",
  },
  {
    time: "দুপুর ১২:৩০ — আছর",
    label: "দুপুরের শিক্ষা কার্যক্রম",
  },
  {
    time: "বাদ মাগরিব — রাত ৯:১৫",
    label: "সন্ধ্যার শিক্ষা কার্যক্রম",
  },
];

const guidelines = [
  "শিক্ষার্থীদের নির্ধারিত সময়ে উপস্থিত হতে হবে।",
  "মাদরাসায় উপস্থিতির সময় নির্ধারিত পোশাক ও আইডি সঙ্গে রাখতে হবে।",
  "ক্লাস চলাকালে অভিভাবকদের শ্রেণিকক্ষে প্রবেশ বা শিক্ষার্থীর সঙ্গে সাক্ষাৎ করা যাবে না।",
  "ছুটির ক্ষেত্রে মাদরাসার নির্ধারিত ছুটিবিধি অনুসরণ করতে হবে।",
];

export default function AcademicSchedule() {
  return (
    <section id="class-schedule" className=" py-16 sm:py-20">
      <Container>
        <div className="academic-schedule-header max-w-2xl">
          <SectionHeader
            label="ক্লাস ও সময়সূচী"
            headingLine1="সময়ের শৃঙ্খলায়"
            headingLine2="শিক্ষার ধারাবাহিকতা"
          />

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            নির্ধারিত সময়ে নিয়মিত ক্লাস ও শিক্ষাকার্যক্রমে অংশগ্রহণ
            শিক্ষার্থীদের একাডেমিক জীবনের গুরুত্বপূর্ণ অংশ।
          </p>
        </div>

        <div className="academic-schedule-content mt-10 grid border-y border-border lg:grid-cols-[1.2fr_0.8fr]">
          <div className="lg:border-r lg:border-border lg:pr-10">
            <div className="border-b border-border py-4">
              <p className=" font-medium text-primary">
                মক্তব ও নূরানী বিভাগের সময়সূচী
              </p>
            </div>

            <div>
              {schedule.map((item, index) => (
                <div
                  key={item.time}
                  className="grid grid-cols-[32px_1fr] gap-4 border-b border-border py-5 last:border-b-0 sm:grid-cols-[40px_1fr]"
                >
                  <span className="pt-1 text-xs font-medium text-primary">
                    ০{index + 1}
                  </span>

                  <div>
                    <p className="text-base font-semibold text-[var(--foreground)] sm:text-lg">
                      {item.time}
                    </p>

                    <p className="mt-1 text-sm text-muted">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-6 lg:pl-10">
            <p className="text-xs font-medium text-primary">
              গুরুত্বপূর্ণ নির্দেশনা
            </p>

            <ul className="mt-5 space-y-4">
              {guidelines.map((guideline) => (
                <li
                  key={guideline}
                  className="flex items-start gap-3 text-sm leading-6 text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />

                  <span>{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
