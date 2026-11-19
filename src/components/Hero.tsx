import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const reveal: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.11,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid-glow" aria-hidden="true" />
      <div className="hero-container">
        <motion.div
          className="hero-copy"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={reveal} className="hero-kicker">
            <span className="hero-kicker-line" />
            <span>SOFTWARE ENGINEER</span>
            <span className="hero-kicker-location">BASED IN KAMPALA, UGANDA</span>
          </motion.div>

          <motion.p variants={reveal} className="hero-intro">
            Hello, I'm
          </motion.p>

          <motion.h1 variants={reveal} id="hero-title" className="hero-title">
            Twine
          </motion.h1>

          <motion.div variants={reveal} className="hero-role-row">
            <span className="hero-role-marker" />
            <h2>Full-stack Software Engineer</h2>
          </motion.div>

          <motion.p variants={reveal} className="hero-description">
            I turn complex ideas into useful digital experiences — from thoughtful
            interfaces to dependable back-end systems. I enjoy building products
            that solve real problems and make the web work better for people.
          </motion.p>

          <motion.div variants={reveal} className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">
              Explore my work <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
            <Link to="/story" className="hero-button hero-button-secondary">
              More about me <ArrowUpRight size={16} strokeWidth={1.8} />
            </Link>
          </motion.div>

          <motion.div variants={reveal} className="hero-meta">
            <a href="mailto:twinemukamai@gmail.com" className="hero-meta-link">
              <Mail size={15} />
              <span>twinemukamai@gmail.com</span>
            </a>
            <span className="hero-meta-location">
              <MapPin size={15} /> Kampala, Uganda
            </span>
          </motion.div>

          <motion.div variants={reveal} className="hero-socials" aria-label="Social links">
            <span className="hero-socials-label">FIND ME ON</span>
            <a
              href="https://github.com/Twinemukama"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/twinemukama-innocent-b39137216/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24, scale: reduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="hero-image-backdrop" />
          <div className="hero-image-frame">
            <img
              src={profileImg}
              alt="Portrait of Twinemukama Innocent"
              className="hero-profile-image"
              fetchPriority="high"
            />
            <div className="hero-image-shade" />
          </div>
          <div className="hero-image-index">01 <span>/</span> 04</div>
          <div className="hero-image-caption">
            <span className="hero-caption-dot" />
            <span>BUILDING WITH PURPOSE</span>
          </div>
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="hero-side-note" aria-hidden="true">IDEAS INTO INTERFACES</div>
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        className="hero-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.1, duration: 0.5 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
};

export default Hero;
