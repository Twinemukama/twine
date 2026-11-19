import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

type ExperienceEntry = {
  number: string;
  title: string;
  company: string;
  location: string;
  period: string;
  url?: string;
  bullets: string[];
};

const experiences: ExperienceEntry[] = [
  {
    number: "01",
    title: "Software Engineer",
    company: "Stede Technologies",
    location: "Kampala, Uganda",
    period: "09/2026 - Present",
    url: "https://learnlito.com/",
    bullets: [
      "Engineered end-to-end user onboarding and authentication flows, integrating frontend interfaces with backend APIs to provide a seamless and secure account experience.",
      "Built and optimized responsive marketing website experiences using modern frontend practices, reusable components, and responsive design principles to strengthen the company’s digital presence.",
      "Contributed to the frontend architecture and product development workflow, collaborating with the engineering and product teams to translate requirements into maintainable, production-ready features.",
    ],
  },
  {
    number: "02",
    title: "R&D Full Stack Developer",
    company: "Auri Energy",
    location: "Kampala, Uganda",
    period: "07/2025 - Present",
    url: "https://aurienergy.com/",
    bullets: [
      "Developed core Device Management features in Node.js, React, and GraphQL for seamless device onboarding and monitoring.",
      "Implemented Power Quality and Metering Data modules with Angular/React dashboards for real-time grid insights.",
      "Customized FUXA for SCADA-style visualizations, enhancing operational visibility for grid operators.",
      "Built and maintained Azure DevOps CI/CD pipelines, improving deployment speed and reliability.",
    ],
  },
  {
    number: "03",
    title: "Software Developer",
    company: "Cranecloud",
    location: "Kampala, Uganda",
    period: "06/2024 - 05/2026",
    url: "https://cranecloud.io/",
    bullets: [
      "Utilized TanStack Query for efficient API data fetching and caching, participated in major UI refactors.",
      "Reduced API response time by 30% through rigorous code reviews, testing, and bug fixes.",
      "Developed scalable RESTful APIs using Flask and FastAPI.",
      "Led deployment of production-ready applications with robust CI/CD pipelines.",
    ],
  },
  {
    number: "04",
    title: "Software Engineer",
    company: "Crownzcom Technologies",
    location: "Kampala, Uganda",
    period: "01/2025 - 06/2025",
    url: "https://crownzcom.tech/",
    bullets: [
      "Designed and developed interactive virtual science labs using Adobe Animate.",
      "Improved students' understanding and retention with educational animations aligned to national curriculum.",
      "Translated complex scientific concepts into visually intuitive learning modules.",
      "Contributed to a digital learning platform increasing access to quality STEM education.",
    ],
  },
];

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="portfolio-section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-container">
        <div className="section-heading-row experience-heading-row">
          <div>
            <SectionHeader text="WHERE I'VE MADE AN IMPACT" />
            <h2 id="experience-title" className="section-display-title">
              The work <span>so far.</span>
            </h2>
          </div>
          <p className="section-heading-note">
            A selection of roles, teams and problems that have shaped the way I approach software engineering.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-item"
              key={`${experience.company}-${experience.number}`}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : index * 0.08 }}
            >
              <div className="experience-index-column">
                <span className="experience-index">/{experience.number}</span>
                <span className="experience-rail" aria-hidden="true" />
              </div>

              <div className="experience-content">
                <div className="experience-topline">
                  <div>
                    <p className="experience-company">{experience.company}</p>
                    <h3>{experience.title}</h3>
                  </div>
                  <span className="experience-period">{experience.period}</span>
                </div>

                <p className="experience-location"><MapPin size={14} /> {experience.location}</p>

                <ul className="experience-achievements">
                  {experience.bullets.map((bullet, bulletIndex) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: reduceMotion ? 0 : 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.08 + bulletIndex * 0.045 }}
                    >
                      <span className="achievement-marker" aria-hidden="true" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                {experience.url && (
                  <a className="experience-company-link" href={experience.url} target="_blank" rel="noopener noreferrer">
                    Visit {experience.company} <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
