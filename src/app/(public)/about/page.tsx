import AboutHero from "@/src/components/about/AboutHero";
import Branches from "@/src/components/about/Branches";
import Departments from "@/src/components/about/Departments";
import LeadershipTeam from "@/src/components/about/LeadershipTeam";
import OurStory from "@/src/components/about/OurStory";
import StatsMetric from "@/src/components/about/StatsMetric";
import { siteConfig } from "@/src/config/site";
import React from "react";
// import { siteConfig } from "@/config/site";
// import AboutHero from "@/components/layout/about/AboutHero";
// import CorePillars from "@/components/layout/about/CorePillars";
// import LeadershipTeam from "@/components/layout/about/LeadershipTeam";
// import CampusFacilities from "@/components/layout/about/CampusFacilities";
// import StatsMetric from "@/components/layout/about/StatsMetric";
// import OurStory from "@/components/layout/about/OurStory";
// import MissionVision from "@/components/layout/about/MissionVision";

export const metadata = {
  title: `  | ${siteConfig.name}`,
  description: `${siteConfig.slogan}. .`,
  keywords: [],
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: siteConfig.slogan,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
};

export default function AboutPage() {
  return (
    <main className="w-full  bg-background text-foreground ">
      <AboutHero />
      <OurStory />
      <LeadershipTeam />
      <Departments />
      <Branches />
      <StatsMetric />
    </main>
  );
}
