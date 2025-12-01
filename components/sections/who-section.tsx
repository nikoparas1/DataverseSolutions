import { Card } from "@/components/ui/card";
import { Building2, Users, Network } from "lucide-react";

export function WhoWeServeSection() {
  return (
    <section id="who-we-serve" className="min-h-screen flex items-center py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dataverse Solutions currently focuses on a single,
              mission-critical customer:
              <span className="text-foreground font-semibold">
                {" "}
                U.S. Customs and Border Protection (CBP)
              </span>
            </p>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-start gap-4">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="font-semibold mb-2">
                  U.S. Customs and Border Protection (CBP)
                </h3>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-start gap-4">
                <Network className="w-5 h-5 text-primary" />
                <h3 className="font-semibold mb-2">
                  Targeting Analysis Systems Project Directorate (TASPD)
                </h3>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="font-semibold mb-2">
                  Subcontractor Partnership
                </h3>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
