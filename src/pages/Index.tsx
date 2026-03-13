import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono text-primary text-sm font-bold">TI.</span>
          <div className="flex gap-6">
            {["skills", "experience", "projects", "education"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors capitalize"
              >
                {s}
              </a>
            ))}
            <Link
              to="/story"
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Story
            </Link>
          </div>
        </div>
      </nav>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <footer className="py-12 px-6 border-t border-border">
        <p className="text-center text-muted-foreground text-sm font-mono">
          © 2025 Twinemukama Innocent. Built with passion.
        </p>
      </footer>
    </div>
  );
};

export default Index;
