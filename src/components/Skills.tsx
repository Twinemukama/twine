import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Cloud, GitBranch, FlaskConical, Layers3 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    description: "The foundations I use to shape product behaviour and application logic.",
    icon: Code2,
    skills: ["JavaScript", "Python", "Go"],
  },
  {
    number: "02",
    title: "Frameworks & UI",
    description: "Tools for building useful, responsive interfaces and robust applications.",
    icon: Layers3,
    skills: ["React", "Vue", "Django", "Flask", "Angular"],
  },
  {
    number: "03",
    title: "Data & databases",
    description: "Working with relational data and the systems that keep it organised.",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    number: "04",
    title: "DevOps & collaboration",
    description: "Version control and container tooling for dependable team workflows.",
    icon: GitBranch,
    skills: ["Git", "GitLab", "GitHub", "Docker"],
  },
  {
    number: "05",
    title: "Cloud platforms",
    description: "Deploying and working with applications across cloud environments.",
    icon: Cloud,
    skills: ["AWS", "Heroku", "Vercel", "Crane Cloud", "Render", "Azure"],
  },
  {
    number: "06",
    title: "Testing",
    description: "Testing tools I use to improve confidence and catch regressions.",
    icon: FlaskConical,
    skills: ["Vitest", "Jest", "Pytest"],
  },
];

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="portfolio-section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-container">
        <div className="section-heading-row">
          <div>
            <SectionHeader text="WHAT I WORK WITH" />
            <h2 id="skills-title" className="section-display-title">
              A practical <span>toolkit.</span>
            </h2>
          </div>
          <p className="section-heading-note">
            A selection of technologies I use to design, build, test and ship digital products.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.number}
                className="skill-card"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : index * 0.07 }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
              >
                <div className="skill-card-topline">
                  <span className="skill-card-number">/{group.number}</span>
                  <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{group.title}</h3>
                <p className="skill-card-description">{group.description}</p>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>{skill}</span>
                  ))}
                </div>
                <div className="skill-card-bottom">
                  <span>{String(group.skills.length).padStart(2, "0")} TOOLS</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
