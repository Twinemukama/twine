import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = {
  Languages: ["JavaScript", "Python", "Go"],
  Frameworks: ["React", "Vue", "Django", "Flask", "Angular"],
  "Data & DB": ["PostgreSQL", "MySQL", "SQLite"],
  DevOps: ["Git", "GitLab", "GitHub", "Docker"],
  Cloud: ["AWS", "Heroku", "Vercel", "Crane Cloud", "Render", "Azure"],
  Testing: ["Vitest", "Jest", "Pytest"],
};

const Skills = () => (
  <section className="py-20 px-6" id="skills">
    <div className="max-w-4xl mx-auto">
      <SectionHeader text="SKILLS" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="bg-card p-5 rounded-xl border border-border hover:border-primary/30 transition-colors"
          >
            <h3 className="text-primary font-mono text-xs mb-3 uppercase tracking-wider">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="text-sm text-secondary-foreground bg-secondary px-2.5 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
