import React from "react";

import Hero from "@/src/components/home/Hero";
import OurFacilities from "@/src/components/home/OurFacilities";
import WelcomeMessage from "@/src/components/home/WelcomeMessage";
import FeaturedNotices from "@/src/components/home/FeaturedNotices";


export default function Homepage() {
  return (
    <main className="w-full  bg-background text-foreground ">
      <Hero />
      <WelcomeMessage />
      <OurFacilities />
      <FeaturedNotices />
      {/* <HifzHighlights /> */}
    </main>
  );
}