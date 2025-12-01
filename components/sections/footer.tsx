import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4 bg-secondary-background/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo size="md" color="primary" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dataverse Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
