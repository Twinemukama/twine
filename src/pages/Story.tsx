import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const chapters = [
  {
    title: "The Beginning",
    date: "2021",
    content:
      "My journey into tech started at Makerere University, where I pursued a BSc in Information Systems and Technology. What began as curiosity about how software works quickly turned into a deep passion for building things that solve real problems. Late nights debugging code, collaborating with peers on projects, and exploring open-source communities shaped my early developer identity.",
  },
  {
    title: "Finding My Craft",
    date: "2023",
    content:
      "After university, I dove headfirst into the world of full-stack development. I picked up Python and Django, then expanded into JavaScript frameworks like React and Vue. Each project taught me something new — from database design to API architecture. I earned my CCNA certification along the way, deepening my understanding of the infrastructure that powers the web.",
  },
  {
    title: "Building at Cranecloud",
    date: "2024",
    content:
      "Joining Cranecloud was a turning point. Working on a cloud platform taught me the importance of scalable architecture and developer experience. I optimized API response times by 30%, contributed to major UI refactors, and learned the art of writing code that other developers actually enjoy working with. Flask, FastAPI, and TanStack Query became trusted tools in my belt.",
  },
  {
    title: "Engineering Education at Crownzcom",
    date: "2025",
    content:
      "At Crownzcom Technologies, I discovered the intersection of technology and education. Building interactive virtual science labs with Adobe Animate taught me that great software isn't just functional — it's transformative. Watching students engage with complex science concepts through intuitive animations reinforced my belief that technology should empower people.",
  },
  {
    title: "R&D at Auri Energy",
    date: "Present",
    content:
      "Today, I'm building the future of energy at Auri Energy. Working with Node.js, React, Angular, and GraphQL, I develop device management systems and real-time grid monitoring dashboards. Customizing SCADA visualizations and maintaining Azure DevOps pipelines has pushed me into the deep end of production-grade engineering — and I love every challenge.",
  },
  {
    title: "What's Next",
    date: "Future",
    content:
      "I'm driven by the idea that software can change lives. Whether it's making energy grids smarter, education more accessible, or cloud platforms more developer-friendly — I want to be at the forefront of that change. I'm always learning, always building, and always looking for the next problem worth solving.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Story = () => (
  <div className="min-h-screen bg-background">
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} /> Back
        </Link>
        <span className="font-mono text-primary text-sm font-bold">My Story</span>
      </div>
    </nav>

    <main className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-wider mb-4">// MY STORY</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            From Curiosity to{" "}
            <span className="text-primary">Code</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Every developer has a story. Here's mine — a journey of late-night debugging,
            breakthrough moments, and the relentless pursuit of building software that matters.
          </p>
        </motion.div>

        <div className="space-y-16">
          {chapters.map((chapter, i) => (
            <motion.article
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors group"
            >
              <div className="absolute left-[-7px] top-2 w-3 h-3 rounded-full bg-secondary border-2 border-primary group-hover:bg-primary transition-colors" />
              <div className="flex items-center gap-3 mb-3">
                <Calendar size={14} className="text-primary" />
                <span className="font-mono text-primary text-xs tracking-wider">{chapter.date}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {chapter.title}
              </h2>
              <p className="text-secondary-foreground leading-relaxed text-base">
                {chapter.content}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 p-8 bg-card rounded-xl border border-border text-center"
        >
          <p className="text-muted-foreground text-sm font-mono mb-4">Want to work together?</p>
          <a
            href="mailto:twinemukamai@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-sm text-primary border border-primary/30 px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
          >
            Get in touch →
          </a>
        </motion.div>
      </div>
    </main>

    <footer className="py-12 px-6 border-t border-border">
      <p className="text-center text-muted-foreground text-sm font-mono">
        © 2025 Twinemukama Innocent. Built with passion.
      </p>
    </footer>
  </div>
);

export default Story;
