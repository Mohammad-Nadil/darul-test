import AdmissionCTA from "@/src/components/admissions/AdmissionCTA";
import AdmissionDocuments from "@/src/components/admissions/AdmissionDocuments";
import AdmissionEligibility from "@/src/components/admissions/AdmissionEligibility";
import AdmissionFees from "@/src/components/admissions/AdmissionFees";
import AdmissionGuidelines from "@/src/components/admissions/AdmissionGuidelines";
import AdmissionHero from "@/src/components/admissions/AdmissionHero";
import AdmissionProcess from "@/src/components/admissions/AdmissionProcess";
import React from "react";

export default function page() {
  return (
    <div>
      <AdmissionHero />
      <AdmissionProcess />
      <AdmissionEligibility />
      <AdmissionDocuments />
      <AdmissionFees />
      <AdmissionGuidelines />
      <AdmissionCTA />
    </div>
  );
}

