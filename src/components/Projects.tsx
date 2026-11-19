import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import projectScreenshot from "@/assets/lucys-beauty-screenshot.png";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    number: "01",
    name: "Lucy's Beauty Parlour",
    category: "BUSINESS WEB APPLICATION",
    description:
      "A modern web application for a beauty parlour business, featuring service listings, appointment booking, and booking management through a polished client-facing experience.",
    tags: ["TypeScript", "React", "Go", "PostgreSQL", "Render"],
    url: "https://www.lucysbeautyparlour.com/",
    highlights: ["Service catalogue", "Online appointments", "Booking management"],
  },

];

function ProjectVisual() {
  return (
    <div className="project-preview project-preview-beauty" aria-hidden="true">
      <div className="preview-browser-bar"><span /><span /><span /><i>lucysbeautyparlour.com</i></div>
      <img className="project-screenshot" src={projectScreenshot} alt="" />
      <span className="preview-caption">CLIENT BOOKING EXPERIENCE</span>
    </div>
  );
}

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="portfolio-section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-container">
        <div className="section-heading-row projects-heading-row">
          <div>
            <SectionHeader text="SELECTED WORK / 2026" />
            <h2 id="projects-title" className="section-display-title">Things I've <span>built.</span></h2>
          </div>
          <p className="section-heading-note">A closer look at products I've designed and developed, from the first interaction to the working application.</p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              className="project-feature project-feature-beauty"
              key={project.number}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : index * 0.12 }}
            >
              <a className="project-visual-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`}>
                <ProjectVisual />
                <span className="project-visual-open"><ArrowUpRight size={19} /></span>
              </a>

              <div className="project-details">
                <div className="project-meta-row"><span className="project-number">/{project.number}</span><span className="project-category">{project.category}</span></div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => <li key={highlight}><span />{highlight}</li>)}
                </ul>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="project-live-link" href={project.url} target="_blank" rel="noopener noreferrer">
                  Explore live project <ExternalLink size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="projects-endnote"><Layers3 size={16} /><span>DESIGNED TO SOLVE REAL PROBLEMS. BUILT TO WORK IN THE REAL WORLD.</span></div>
      </div>
    </section>
  );
};

export default Projects;
