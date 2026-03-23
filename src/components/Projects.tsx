import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
	{
		name: "Lucy's Beauty Parlour",
		description:
			"A modern web application for a beauty parlour business, featuring service listings, booking management, and a polished client-facing interface.",
		tags: ["React", "Go", "PostgreSQL", "Render", "Cranecloud", "Web App"],
		url: "https://www.lucysbeautyparlour.com/",
	},
	{
		name: "Inventory Manager",
		description:
			"A full-stack inventory management system for tracking products, stock levels, and supply chain operations with real-time updates.",
		tags: ["Vue", "Go", "PostgreSQL", "Render", "Heroku", "Full Stack", "CRUD"],
		url: "https://inventory-manager-frontend-u13j.onrender.com",
	},
];

const Projects = () => (
	<section className="py-20 px-6" id="projects">
		<div className="max-w-4xl mx-auto">
			<SectionHeader text="PROJECTS" />
			<div className="grid md:grid-cols-3 gap-6">
				{projects.map((project, i) => {
					const card = (
						<motion.div
							initial={{ opacity: 0, y: 30, rotateX: 10 }}
							whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.12, duration: 0.5 }}
							whileHover={{ y: -6, transition: { duration: 0.2 } }}
							className="group bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all"
						>
							<div className="flex justify-between items-start mb-4">
								<h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
									{project.name}
								</h3>
								{project.url && (
									<ExternalLink
										size={16}
										className="text-muted-foreground group-hover:text-primary transition-colors"
									/>
								)}
							</div>
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded"
									>
										{tag}
									</span>
								))}
							</div>
						</motion.div>
					);

					return project.url ? (
						<a
							key={project.name}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="block"
						>
							{card}
						</a>
					) : (
						<div key={project.name}>{card}</div>
					);
				})}
			</div>
		</div>
	</section>
);

export default Projects;
