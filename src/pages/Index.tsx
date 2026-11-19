import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

const Index = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
  });
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const ambientY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 260]);
  const ambientX = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -90]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.35, 0.6] }
    );
    const handleScroll = () => setShowTop(window.scrollY > 720);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark");

  return (
    <div className="portfolio-shell min-h-screen bg-background text-foreground">
      <motion.div className="ambient-orb ambient-orb-one" style={{ y: ambientY, x: ambientX }} aria-hidden="true" />
      <motion.div className="ambient-orb ambient-orb-two" style={{ y: ambientY, x: ambientX }} aria-hidden="true" />
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link to="/" className="wordmark" onClick={closeMenu} aria-label="Twinemukama Innocent home">
            <span className="wordmark-mark">T</span>
            <span className="wordmark-name">WINEMUKAMA<br />INNOCENT</span>
          </Link>

          <div className="desktop-nav">
            {sections.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className={`nav-link ${active === id ? "is-active" : ""}`}>
                {label}
              </a>
            ))}
            <Link to="/story" className="nav-link">My story</Link>
          </div>

          <a className="nav-contact" href="mailto:twinemukamai@gmail.com">
            Let's talk <ArrowUpRight size={15} strokeWidth={1.8} />
          </a>

          <button className="theme-toggle desktop-theme-toggle" type="button" onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button className="mobile-menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div className="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
              {sections.map(({ id, label }) => (
                <a key={id} href={`#${id}`} onClick={closeMenu} className={active === id ? "is-active" : ""}>{label}</a>
              ))}
              <Link to="/story" onClick={closeMenu}>My story</Link>
              <a href="mailto:twinemukamai@gmail.com" onClick={closeMenu}>Get in touch <ArrowUpRight size={15} /></a>
              <button className="mobile-theme-toggle" type="button" onClick={toggleTheme}>
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                Switch to {theme === "dark" ? "light" : "dark"} mode
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <nav className="chapter-rail" aria-label="Page sections">
        {sections.map(({ id, label }, index) => (
          <a key={id} href={`#${id}`} className={active === id ? "chapter-dot is-active" : "chapter-dot"}
            aria-label={`Go to ${label}`} aria-current={active === id ? "location" : undefined}>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </a>
        ))}
      </nav>

      <main className="portfolio-main">
        <Hero />
        <div className="section-rule" />
        <Skills />
        <div className="section-rule" />
        <Experience />
        <div className="section-rule" />
        <Projects />
        <div className="section-rule" />
        <Education />
      </main>

      <AnimatePresence>
        {showTop && (
          <motion.button className="back-to-top" type="button" aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
            initial={{ opacity: 0, y: 14, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.9 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>
            ↑ <span>TOP</span>
          </motion.button>
        )}
      </AnimatePresence>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner">
          <span className="contact-kicker">HAVE A GOOD IDEA?</span>
          <h2 id="contact-title">Let's build something <span>useful.</span></h2>
          <p>I'm always open to thoughtful collaborations, product conversations and ambitious problems worth solving.</p>
          <a className="contact-link" href="mailto:twinemukamai@gmail.com">
            Start a conversation <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Twinemukama Innocent</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
