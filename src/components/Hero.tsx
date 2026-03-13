import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => (
  <section className="min-h-[80vh] flex items-center py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-mono text-primary mb-4 text-sm tracking-wider"
      >
        Hello, I'm
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
      >
        Twinemukama{" "}
        <span className="text-primary">Innocent</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl text-muted-foreground font-light mb-8"
      >
        Software Engineer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-secondary-foreground max-w-2xl text-lg leading-relaxed mb-10"
      >
        Full-stack Software Engineer with 3 years of experience building scalable web applications,
        microservices, and RESTful APIs. Skilled in Go, Python, JavaScript, React, Vue, Django, and Flask.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
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
        transition={{ delay: 0.6 }}
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
  </section>
);

const ContactLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a href={href} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
    {icon} {label}
  </a>
);

export default Hero;
