import { motion } from "framer-motion";

const experiences = [
  {
    title: "R&D Full Stack Developer",
    company: "Auri Energy",
    location: "Kampala, Uganda",
    period: "07/2025 - Present",
    bullets: [
      "Developed core Device Management features in Node.js, React, and GraphQL for seamless device onboarding and monitoring.",
      "Implemented Power Quality and Metering Data modules with Angular/React dashboards for real-time grid insights.",
      "Customized FUXA for SCADA-style visualizations, enhancing operational visibility for grid operators.",
      "Built and maintained Azure DevOps CI/CD pipelines, improving deployment speed and reliability.",
    ],
  },
  {
    title: "Software Developer",
    company: "Cranecloud",
    location: "Kampala, Uganda",
    period: "06/2024 - Present",
    bullets: [
      "Utilized TanStack Query for efficient API data fetching and caching, participated in major UI refactors.",
      "Reduced API response time by 30% through rigorous code reviews, testing, and bug fixes.",
      "Developed scalable RESTful APIs using Flask and FastAPI.",
      "Led deployment of production-ready applications with robust CI/CD pipelines.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Crownzcom Technologies",
    location: "Kampala, Uganda",
    period: "01/2025 - 06/2025",
    bullets: [
      "Designed and developed interactive virtual science labs using Adobe Animate.",
      "Improved students' understanding and retention with educational animations aligned to national curriculum.",
      "Translated complex scientific concepts into visually intuitive learning modules.",
      "Contributed to a digital learning platform increasing access to quality STEM education.",
    ],
  },
];

const Experience = () => (
  <section className="py-20 px-6" id="experience">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-primary text-sm mb-12 tracking-wider"
      >
        // EXPERIENCE
      </motion.h2>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
          >
            <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <span className="font-mono text-primary text-xs">{exp.period}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              {exp.company} · {exp.location}
            </p>
            <ul className="space-y-2">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-secondary-foreground text-sm leading-relaxed flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
