"use client";

import { FormEvent, useState } from "react";

type ResultSearchProps = {
  onSearch: (roll: string, examType: string) => void;
};

const exams = [
  {
    value: "1st Monthly Test",
    label: "১ম মাসিক পরীক্ষা",
  },
  {
    value: "Half Yearly Examination",
    label: "অর্ধ-বার্ষিক পরীক্ষা",
  },
  {
    value: "Pre-Test Examination",
    label: "প্রি-টেস্ট পরীক্ষা",
  },
  {
    value: "Final Examination",
    label: "বার্ষিক পরীক্ষা",
  },
];

export default function ResultSearch({
  onSearch,
}: ResultSearchProps) {
  const [roll, setRoll] = useState("");
  const [exam, setExam] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!roll || !exam) return;

    onSearch(roll, exam);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-3 rounded-2xl border border-border bg-background p-3 shadow-sm sm:p-4 md:grid-cols-3"
    >
      {/* Roll */}
      <div>
        <label
          htmlFor="result-roll"
          className="sr-only"
        >
          রোল নম্বর
        </label>

        <input
          id="result-roll"
          type="number"
          inputMode="numeric"
          min="1"
          value={roll}
          onChange={(event) => setRoll(event.target.value)}
          placeholder="রোল নম্বর লিখুন"
          className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
          required
        />
      </div>

      {/* Exam */}
      <div>
        <label
          htmlFor="result-exam"
          className="sr-only"
        >
          পরীক্ষা নির্বাচন করুন
        </label>

        <select
          id="result-exam"
          value={exam}
          onChange={(event) => setExam(event.target.value)}
          className="h-12 w-full cursor-pointer rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
          required
        >
          <option value="" disabled>
            পরীক্ষা নির্বাচন করুন
          </option>

          {exams.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="group h-12 rounded-xl bg-primary px-5 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98]"
      >
        ফলাফল খুঁজুন
      </button>
    </form>
  );
}