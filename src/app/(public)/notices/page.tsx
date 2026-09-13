import Container from "@/src/components/layout/Container";
import NoticeList from "@/src/components/notices/NoticeList";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { siteConfig } from "@/src/config/site";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `আমাদের সম্পর্কে | ${siteConfig.name}`,
  description:
    "দারুল হুদা মাদরাসা সম্পর্কে জানুন। কুরআন-সুন্নাহভিত্তিক শিক্ষা, নৈতিকতা, আদব-আখলাক ও জ্ঞানচর্চার মাধ্যমে শিক্ষার্থীদের আদর্শ মানুষ হিসেবে গড়ে তোলাই আমাদের লক্ষ্য।",
  keywords: [
    "দারুল হুদা মাদরাসা",
    "আমাদের সম্পর্কে",
    "ইসলামী শিক্ষা",
    "কুরআন শিক্ষা",
    "হিফজুল কুরআন",
    "মাদরাসা বিভাগসমূহ",
  ],
  openGraph: {
    title: `আমাদের সম্পর্কে | ${siteConfig.name}`,
    description:
      "দারুল হুদা মাদরাসার শিক্ষা, আদর্শ, বিভাগসমূহ ও পরিচালনা সম্পর্কে জানুন।",
    type: "website",
    locale: "bn_BD",
    siteName: siteConfig.name,
  },
};

export default function NoticePage() {
  return (
    <main className="w-full  py-12 md:py-14 bg-background text-foreground">
      <Container>
        <SectionHeader
          label="ঘোষণা ও নোটিশ"
          headingLine1="সর্বশেষ গুরুত্বপূর্ণ"
          headingLine2="নোটিশ ও ঘোষণা"
          className="flex flex-col items-center justify-center mx-auto w-full text-center"
        />
        <NoticeList />
      </Container>
    </main>
  );
}
