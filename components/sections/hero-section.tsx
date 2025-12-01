"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none 
                  bg-[linear-gradient(to_right,#d3d8de_1px,transparent_1px),linear-gradient(to_bottom,#d3d8de_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden="true"
      />

      <div className="container relative z-10 px-4 py-24 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          <div className="mb-4">
            {/* Mobile - smaller logo */}
            <Logo size="lg" color="primary" className="md:hidden" />
            {/* Desktop - larger logo */}
            <Logo size="xl" color="primary" className="hidden md:block" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-foreground font-medium">
              Enter the Dataverse
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            From data to decisions{" "}
            <span className="text-primary">at mission speed</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
            Dataverse Solutions designs and delivers custom software for data
            analytics, computer vision, and workflow automation in
            mission-critical environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="text-base gap-2 bg-secondary hover:bg-secondary/90 text-white"
              onClick={() => scrollToSection("mission")}
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent hover:text-foreground/90"
              onClick={() => scrollToSection("what-we-build")}
            >
              Our Capabilities
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
