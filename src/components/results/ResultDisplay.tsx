"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import { siteConfig } from "@/src/config/site";

type SubjectResult = {
  subject: string;
  marks: number;
  fullMarks: number;
  grade: string;
};

type ResultData = {
  name: string;
  class: string;
  roll: number;
  examType: string;
  gpa: number;
  subjects: SubjectResult[];
};

type ResultDisplayProps = {
  data: ResultData;
};

export default function ResultDisplay({ data }: ResultDisplayProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const celebratedRef = useRef(false);


  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
      },
    );

    if (data.gpa >= 3.5 && !celebratedRef.current) {
      celebratedRef.current = true;

      const defaults: confetti.Options = {
        spread: 65,
        ticks: 55,
        gravity: 0.9,
        decay: 0.94,
        startVelocity: 25,
        particleCount: 55,
        colors: ["#017a54", "#d4a72c", "#ffffff"],
      };

      confetti({
        ...defaults,
        origin: {
          x: 0.05,
          y: 0.9,
        },
        angle: 55,
      });

      confetti({
        ...defaults,
        origin: {
          x: 0.95,
          y: 0.9,
        },
        angle: 125,
      });
    }
  }, [data]);

  return (
    <div
      ref={cardRef}
      className="mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-2xl sm:border border-border bg-background shadow-xl shadow-black/4"
    >
      {/* Header */}
      <div className="border-b border-border  py-6 sm:px-7 sm:py-7 md:px-8">
        <div className="flex  gap-6  items-center justify-between">
          <div>
            <span className="inline-flex rounded-full bg-primary/[0.07] px-3 py-1 text-[10px] font-semibold tracking-wide text-primary">
              {data.examType}
            </span>

            <h2 className="mt-4 font-serif text-xl font-bold tracking-tight text-foreground sm:text-3xl">
              {data.name}
            </h2>

            <p className="mt-2 text-sm text-foreground/45">
              শ্রেণি: {data.class}
              <span className="mx-2 text-foreground/20">•</span>
              রোল: {data.roll}
            </p>
          </div>

          {/* GPA */}
          <div className="flex w-fit items-center gap-4 rounded-xl border border-primary/10 bg-primary/[0.035] px-5 py-3 sm:min-w-32 flex-col sm:gap-0 sm:px-6 sm:py-4 sm:text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/35">
              GPA
            </p>

            <p className="font-serif text-3xl font-bold leading-none text-primary sm:mt-1 sm:text-4xl">
              {data.gpa.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Result table */}
      <div className="overflow-x-auto">
        <table className="w-full  border-collapse">
          <thead>
            <tr className="border-b border-border bg-muted/30 text-left">
              <th className="px-5 py-4 text-xs font-semibold text-foreground/45 sm:px-7">
                বিষয়
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-foreground/45 sm:px-7">
                প্রাপ্ত নম্বর
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold text-foreground/45 sm:px-7">
                গ্রেড
              </th>
            </tr>
          </thead>

          <tbody>
            {data.subjects.map((subject, index) => (
              <tr
                key={`${subject.subject}-${index}`}
                className="group border-b border-border last:border-b-0"
              >
                <td className="px-2 py-4 text-sm font-medium text-foreground/75 transition-colors duration-300 group-hover:text-primary sm:px-7">
                  {subject.subject}
                </td>

                <td className=" py-4 text-sm text-foreground/50 sm:px-7 text-center sm:text-start">
                  {subject.marks}
                  <div className="hidden sm:inline">
                    <span className="mx-1 text-foreground/20">/</span>
                    {subject.fullMarks}
                  </div>
                </td>

                <td className="px-5 py-4 text-right text-sm font-bold text-primary sm:px-7">
                  {subject.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
