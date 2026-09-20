import AcademicHero from "@/src/components/academics/AcademicHero";
import AcademicOverview from "@/src/components/academics/AcademicOverview";
import AcademicScope from "@/src/components/academics/AcademicScope";
import AcademicSchedule from "@/src/components/academics/AcademicSchedule";
import AcademicRules from "@/src/components/academics/AcademicRules";
import AcademicGuardianGuidelines from "@/src/components/academics/AcademicGuardianGuidelines";
import AcademicEvaluation from "@/src/components/academics/AcademicEvaluation";
import AcademicPledge from "@/src/components/academics/AcademicPledge";

export default function page() {
  return (
    <div>
      <AcademicHero />
      <AcademicOverview />
      <AcademicScope />
      <AcademicSchedule />
      <AcademicRules />
      <AcademicGuardianGuidelines />
      <AcademicEvaluation />
      <AcademicPledge />
    </div>
  );
}

// Hero → 
// শিক্ষা কার্যক্রমের ধারাবাহিকতা / overview → 
// শাখা ও একাডেমিক পরিধি / scope→ 
// ক্লাস ও সময়সূচী / schedule → 
// একাডেমিক নিয়মাবলি / rules → 
// অভিভাবকদের নির্দেশনা grudian guideline→ 
// পরীক্ষা ও মূল্যায়ন / academic evaluation → 
// অঙ্গীকার/গুরুত্বপূর্ণ নির্দেশনা
