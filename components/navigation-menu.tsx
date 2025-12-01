"use client";

import { Menu, ChevronsLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "mission", label: "Our Mission" },
  { id: "who-we-serve", label: "Who We Serve" },
  { id: "what-we-build", label: "What We Build" },
  { id: "problem-solution", label: "Solutions" },
] as const;

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <ChevronsLeft className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-50 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold">Table of Contents</h2>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={cn(
                      "w-full text-left px-4 py-2.5 rounded-md transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      activeSection === id
                        ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Dataverse Solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
