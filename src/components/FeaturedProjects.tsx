"use client";

import { Github, ExternalLink } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

export function FeaturedProjects() {
    const projects = [
        {
            title: "Circle",
            id: 1,
            description: "A social media platfrom built with realtime features, enhancing user interaction experience online.",
            techs: ["React.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redux Toolkit", "Socket.io", "Prisma"],
            github: "https://github.com/Riza-FP/circle-app-project",
            demo: "https://circle-app-project.vercel.app/"
        },
        {
            title: "Pathfinder",
            id: 2,
            description: "Intelligent travel companion that helps you design the perfect getaway in seconds.",
            techs: ["Next.js", "TypeScript", "Google Gemini", "Tailwind CSS", "Supabase"],
            github: "https://github.com/Riza-FP/travel-itinerary-planner-app",
            demo: "https://pathfinder-seven-tau.vercel.app/"
        },
        {
            title: "DevCircuit",
            id: 3,
            description: "A state-of-the-art e-commerce application built for developers and tech enthusiasts.",
            techs: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Midtrans", "Zustand"],
            github: "https://github.com/Riza-FP/devcircuit",
            demo: "https://devcircuit.vercel.app/"
        },
        {
            title: "Taskify",
            id: 4,
            description: "Kanban-based task management application designed to help individuals and small teams organize their work visually.",
            techs: ["Next.js", "TypeScript", "Express.js", "Redux Toolkit", "Supabase", "Tailwind CSS"],
            github: "https://github.com/Riza-FP/taskify",
            demo: "https://taskify-frontend-lilac.vercel.app/"
        }
    ];

    return (
        <section className="w-full container mx-auto px-8 md:px-16 py-24" id="projects">
            <FadeIn direction="up">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-2xl font-black tracking-widest uppercase mb-2">FEATURED PROJECTS</h2>
                        <p className="text-sm text-text-muted">Recent works and contributions</p>
                    </div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {projects.map((p, i) => (
                    <FadeIn key={i} direction="up" delay={i * 0.15}>
                        <div className="group border border-transparent hover:border-surface-light rounded-xl p-4 transition-all duration-300 hover:bg-surface/30 hover:-translate-y-2">
                            <div className="w-full aspect-[4/3] bg-surface rounded-xl mb-6 overflow-hidden relative cursor-pointer flex items-center justify-center p-6 md:p-8">
                                <img
                                    src={`/${p.title}.png`}
                                    alt={p.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-text-main group-hover:text-primary transition-colors">{p.title}</h3>
                            <p className="text-sm text-text-muted mb-4 line-clamp-2">{p.description}</p>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {p.techs.map((tech, j) => (
                                    <span key={j} className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <a
                                    href={p.github}
                                    className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase bg-surface hover:bg-surface-light text-text-main py-2.5 px-4 rounded transition-colors"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Github size={16} /> GitHub
                                </a>
                                <a
                                    href={p.demo}
                                    className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase bg-primary hover:bg-primary-hover text-white py-2.5 px-4 rounded transition-colors"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
