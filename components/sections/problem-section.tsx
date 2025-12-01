import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="min-h-screen flex items-center py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-destructive/5 border-destructive/20">
            <div className="flex items-center gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <h3 className="text-2xl font-bold">The Challenge</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Border operations still depend heavily on manual workflows,
              fragmented systems, and limited access to real-time, high-quality
              data in the field. This creates inefficiencies, delays, and
              security gaps that impact mission-critical operations.
            </p>
          </Card>
          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Our Solution</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We deliver integrated systems that provide field personnel with
              instant access to comprehensive, real-time data. Our solutions
              automate workflows, consolidate fragmented systems, and ensure
              data quality when it matters most.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
