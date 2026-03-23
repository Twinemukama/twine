import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const chapters = [
	{
		title: "The Beginning",
		date: "2021",
		content: `My journey into tech formally began at Makerere University, where I pursued a BSc in Information Systems and Technology.

What started as curiosity quickly turned into obsession. I found myself deep in code late at night, debugging stubborn errors, collaborating with classmates, and slowly beginning to think like a developer.

Those early days weren’t easy — but they built my foundation:

- Learning how to break down problems
- Writing my first real applications
- Discovering the power of building solutions that actually help people
Along the way, I earned my CCNA certification, which gave me a deeper understanding of how the internet actually works beneath the surface — something that continues to influence how I design systems today.`,
	},
	{
		title: "Finding My Craft",
		date: "2023",
		content: `After university, I made a decision: go all in.

I immersed myself in full-stack development:

- Backend with Python and Django
- Frontend with React and Vue
- Building APIs, designing databases, and connecting systems end-to-end

Each project stretched me. Each bug taught me patience. Each success reinforced that I was on the right path.`,
	},
	{
		title: "Building at Cranecloud",
		date: "2024",
		// added external URL
		url: "https://cranecloud.io/",
		content: `Joining Crane Cloud was a turning point.

For the first time, I wasn’t just building projects — I was contributing to a real platform used by others. That changed everything.

I learned:

- How to think about scalability, not just functionality
- Why developer experience matters just as much as performance
- How to write code that others can read, use, and build upon

Some highlights from this phase:

- Improving API response times by 30%
- Contributing to major frontend refactors
- Working with tools like Flask, FastAPI, and TanStack Query

This is where I started to mature as an engineer.`,
	},
	{
		title: "Engineering Education at Crownzcom",
		date: "2025",
		// added external URL
		url: "https://crownzcom.tech/",
		content: `At Crownzcom Technologies, I discovered something new — the power of technology in education.

I worked on interactive virtual science labs, helping turn complex scientific concepts into engaging, visual experiences using Adobe Animate.

This experience shifted my perspective:

Great software isn’t just efficient — it’s impactful.

Seeing students interact with what we built reminded me why I started in the first place:
to create things that make a real difference.`,
	},
	{
		title: "Present — Building at Auri Energy",
		date: "Present",
		// added external URL
		url: "https://aurienergy.com/",
		content: `Today, I’m working at Auri Energy, building systems that operate in the real world — not just on screens.

My work involves:

- Developing device management systems
- Building real-time monitoring dashboards
- Customizing SCADA visualizations
- Maintaining Azure DevOps pipelines

My stack includes:

- Node.js, React, Angular, GraphQL

This phase has pushed me into production-grade engineering — where performance, reliability, and scalability are non-negotiable.

And honestly — this is where I thrive.`,
	},
	{
		title: "What's Next",
		date: "Future",
		content:
			"Writing more code..."	},
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
					<p className="font-mono text-primary text-sm tracking-wider mb-4">MY STORY</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
						From Curiosity to{" "}
						<span className="text-primary">Code</span>
					</h1>
					<p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
						Every developer has a story. Here's mine — a journey of late-night debugging,
						breakthrough moments, and the relentless pursuit of building software that matters.
					</p>
				</motion.div>

				{/* Early curiosity section added */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 p-6 bg-card rounded-lg border border-border"
				>
					<h3 className="text-xl font-semibold mb-3">Early Curiosity — Where It All Started</h3>
					<p className="text-muted-foreground leading-relaxed">
						Long before I wrote my first line of code, I was already fascinated by technology. I remember
						spending hours playing games on those small Nokia button phones — simple games like Snake, yet
						somehow endlessly captivating. At the time, I didn’t understand how they worked, but one question
						kept coming back: “How is this even made?” That curiosity stuck with me. It wasn’t just about
						playing anymore — I wanted to understand, to build, to create.
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
