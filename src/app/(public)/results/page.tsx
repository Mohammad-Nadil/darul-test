"use client";

import { useState } from "react";

import Container from "@/src/components/layout/Container";
import ResultDisplay from "@/src/components/results/ResultDisplay";
import ResultSearch from "@/src/components/results/ResultSearch";
import Button from "@/src/components/ui/Button";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { dummyResult } from "@/src/temp/dummyResults";

type Result = (typeof dummyResult)[number];

export default function ResultsPage() {
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (roll: string, examType: string) => {
    setLoading(true);
    setResult(null);
    setError("");

    setTimeout(() => {
      const found = dummyResult.find(
        (item) =>
          item.roll === Number(roll) &&
          item.examType === examType,
      );

      if (found) {
        setResult(found);
      } else {
        setError(
          "এই রোল নম্বর ও পরীক্ষার জন্য কোনো ফলাফল পাওয়া যায়নি।",
        );
      }

      setLoading(false);
    }, 700);
  };

  const handleReset = () => {
    setResult(null);
    setError("");
  };
  

  return (
    <main className="w-full overflow-hidden bg-background py-12 text-foreground md:py-16 min-h-[60dvh] ">
      <Container>
        <SectionHeader
          label="ফলাফল"
          headingLine2="ফলাফল খুঁজুন"
          headingLine1=""
          className="mx-auto flex w-full flex-col items-center justify-center text-center"
        />

        <div className="mt-10">
          {loading ? (
            <div className="flex min-h-75 w-full flex-col items-center justify-center">
              <div className="h-9 w-9 animate-spin rounded-full border-[3px] border-primary/20 border-t-primary" />

              <p className="mt-4 text-sm font-medium text-foreground/50">
                ফলাফল খোঁজা হচ্ছে...
              </p>
            </div>
          ) : result ? (
            <>
              <ResultDisplay data={result} />

              <div className="mt-7 flex justify-center">
                <Button
                  label="নতুন করে খুঁজুন"
                  onClick={handleReset}
                  bgColor="transparent"
                  textColor="#017a54"
                  borderColor="#017a54"
                  flairColor="#017a54"
                  size="md"
                  className="hover:text-white"
                />
              </div>
            </>
          ) : (
            <ResultSearch onSearch={handleSearch} />
          )}

          {error && !loading && (
            <div className="mx-auto mt-6 max-w-xl rounded-xl border border-red-500/15 bg-red-500/5 px-5 py-4 text-center">
              <p className="text-sm font-medium text-red-600">
                {error}
              </p>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}