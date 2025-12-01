import { Card } from "@/components/ui/card";
import { Target, Shield, Zap } from "lucide-react";

export function MissionSection() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Build reliable software that gives our clients faster insight, stronger security, and more efficient operations.",
    },
    {
      icon: Shield,
      title: "Long-Term Partnerships",
      description:
        "We focus on understanding our clients' mission, shipping solid products, and maintaining them so they keep working when it really matters.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description:
        "From data to decisions at mission speed. We deliver systems that assist field operations with real-time, high-quality data access.",
    },
  ];

  return (
    <section id="mission" className="min-h-screen flex items-center py-24 px-4 bg-secondary-background/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Building the future of mission-critical software systems for those
            who protect our nation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
