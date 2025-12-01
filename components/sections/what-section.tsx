import { Card } from "@/components/ui/card";
import { Database, Eye, Workflow, Server } from "lucide-react";

export function WhatWeBuildSection() {
  const capabilities = [
    {
      icon: Database,
      title: "Data Analytics",
      description:
        "Advanced analytics systems that transform raw data into actionable intelligence for field operations.",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description:
        "Cutting-edge biometric and visual recognition systems for enhanced security and identification.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Streamlined processes that replace manual workflows with efficient, automated systems.",
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description:
        "Reliable cloud solutions that provide real-time access to high-quality data in the field.",
    },
  ];

  return (
    <section id="what-we-build" className="min-h-screen flex items-center py-24 px-4 bg-secondary-background/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            What We Build
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We build internal systems and applications that aid CBP field
            operations, replacing fragmented manual processes with integrated,
            real-time solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 hover:border-primary/30 transition-all group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
