import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "@/assets/profile.jpg";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.03, duration: 0.4 },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
  <span className={className}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ whiteSpace: char === " " ? "pre" : undefined }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const Hero = () => (
  <section className="min-h-[80vh] flex items-center py-20 px-6">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse md:items-center gap-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex-shrink-0"
      >
        <img
          src={profileImg}
          alt="Twinemukama Innocent"
          className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border-2 border-primary/30 shadow-lg shadow-primary/10"
        />
      </motion.div>
      <div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-mono text-primary mb-4 text-sm tracking-wider"
      >
        Hello, I'm
      </motion.p>
      <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight font-display">
        <AnimatedText text="Twinemukama " />
        <AnimatedText text="Innocent" className="text-primary" />
      </h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
        className="h-0.5 bg-primary/30 mb-6 max-w-md"
      />
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="text-2xl md:text-3xl text-muted-foreground font-light mb-8"
      >
        Software Engineer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="text-secondary-foreground max-w-2xl text-lg leading-relaxed mb-6"
      >
        Full-stack Software Engineer with 3 years of experience building scalable web applications,
        microservices, and RESTful APIs. Skilled in Go, Python, JavaScript, React, Vue, Django, and Flask.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <Link
          to="/story"
          className="inline-flex items-center gap-2 font-mono text-sm text-primary border border-primary/30 px-5 py-2.5 rounded-lg hover:bg-primary/10 transition-colors mb-8"
        >
          Read my story →
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="flex flex-wrap gap-4 items-center"
      >
        <ContactLink href="mailto:twinemukamai@gmail.com" icon={<Mail size={18} />} label="twinemukamai@gmail.com" />
        <ContactLink href="tel:+256784043369" icon={<Phone size={18} />} label="+256 784043369" />
        <span className="flex items-center gap-2 text-muted-foreground text-sm">
          <MapPin size={18} /> Kampala, Uganda
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="flex gap-4 mt-6"
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:text-primary hover:bg-muted transition-colors">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:text-primary hover:bg-muted transition-colors">
          <Linkedin size={20} />
        </a>
      </motion.div>
      </div>
    </div>
  </section>
);

const ContactLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a href={href} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
    {icon} {label}
  </a>
);

export default Hero;
