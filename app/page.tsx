import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { WhoWeServeSection } from "@/components/sections/who-section";
import { WhatWeBuildSection } from "@/components/sections/what-section";
import { ProblemSolutionSection } from "@/components/sections/problem-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <WhoWeServeSection />
      <WhatWeBuildSection />
      <ProblemSolutionSection />
      <Footer />
    </main>
  );
}
