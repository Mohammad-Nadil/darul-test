"use client";

import { useState } from "react";

import ApplyAcademicInformation from "./ApplyAcademicInformation";
import ApplyDeclaration from "./ApplyDeclaration";
import ApplyDocuments from "./ApplyDocuments";
import ApplyGuardianInformation from "./ApplyGuardianInformation";
import ApplyStudentInformation from "./ApplyStudentInformation";
import Button from "../ui/Button";

type FormData = Record<string, string | boolean | File | null>;

export default function ApplyForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState("");

  const updateFormData = (
    field: string,
    value: string | boolean | File | null,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (formData.declaration !== true) {
      return;
    }

    const randomNumber = Math.floor(10000 + Math.random() * 90000);

    const generatedApplicationNumber = `DH-${new Date().getFullYear()}-${randomNumber}`;

    setApplicationNumber(generatedApplicationNumber);
    setIsSubmitted(true);

    console.log("Application Data:", formData);
    console.log("Application Number:", generatedApplicationNumber);
  };

  if (isSubmitted) {
    return (
      <section className="py-10">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          {/* Success icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 text-2xl text-primary">
            ✓
          </div>

          <p className="mt-6 text-xs font-medium tracking-[0.18em] text-primary">
            APPLICATION SUBMITTED
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            আবেদন সফলভাবে জমা হয়েছে
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            আপনার ভর্তি আবেদনটি সফলভাবে গ্রহণ করা হয়েছে। নিচের আবেদন নম্বরটি
            সংরক্ষণ করে রাখুন। পরবর্তী সময়ে আবেদন সংক্রান্ত তথ্য জানতে এটি
            প্রয়োজন হতে পারে।
          </p>

          {/* Application number */}
          <div className="mt-8 w-full border-y border-border py-6">
            <p className="text-xs text-muted-foreground">আবেদন নম্বর</p>

            <p className="mt-2 text-xl font-semibold tracking-wide text-foreground sm:text-2xl">
              {applicationNumber}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              label="হোমে ফিরে যান"
              href="/"
              bgColor="var(--primary)"
              borderColor="var(--primary)"
              flairColor="#ffffff"
              textColor="#ffffff"
              textHoverColor="var(--primary)"
              className="py-1"
            />

            <Button
              label="যোগাযোগ করুন"
              href="/contact"
              bgColor="transparent"
              borderColor="var(--border)"
              flairColor="var(--primary)"
              textColor="var(--foreground)"
              textHoverColor="#ffffff"
              className="py-1"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <h1 className="section-heading font-serif text-3xl font-semibold  text-primary-dark sm:text-4xl lg:text-5xl text-center">
        অনলাইন ভর্তি আবেদন ফর্ম
      </h1>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <ApplyStudentInformation
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        )}

        {currentStep === 2 && (
          <ApplyGuardianInformation
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={previousStep}
            onNext={nextStep}
          />
        )}

        {currentStep === 3 && (
          <ApplyAcademicInformation
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={previousStep}
            onNext={nextStep}
          />
        )}

        {currentStep === 4 && (
          <ApplyDocuments
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={previousStep}
            onNext={nextStep}
          />
        )}

        {currentStep === 5 && (
          <ApplyDeclaration
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={previousStep}
          />
        )}
      </form>
    </>
  );
}
