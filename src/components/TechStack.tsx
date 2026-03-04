"use client";

import { Terminal, HardDrive, Database, Layout, Server, Code2, Layers, Cpu, Network, ShieldCheck } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss,
    SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiRedis, SiSupabase, SiPrisma,
    SiGit, SiGithub, SiPostman, SiVercel, SiLaravel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export function TechStack() {
    const stacks = [
        {
            category: "Frontend Development",
            description: "Building responsive, interactive, and accessible user interfaces with modern web technologies.",
            icon: <Layout className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />,
            color: "from-primary/20 via-primary/5 to-transparent",
            borderHover: "hover:border-primary/50",
            iconBg: "group-hover:bg-primary/20",
            skills: [
                { name: "React", icon: SiReact },
                { name: "Next.js", icon: SiNextdotjs },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "TypeScript", icon: SiTypescript },
                { name: "JavaScript", icon: SiJavascript },
                { name: "HTML5", icon: SiHtml5 },
                { name: "CSS3", icon: SiCss },
                { name: "Laravel", icon: SiLaravel }
            ]
        },
        {
            category: "Backend Architecture",
            description: "Architecting robust, scalable, and secure server-side applications and RESTful APIs.",
            icon: <Server className="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />,
            color: "from-blue-500/20 via-blue-500/5 to-transparent",
            borderHover: "hover:border-blue-500/50",
            iconBg: "group-hover:bg-blue-500/20",
            skills: [
                { name: "Node.js", icon: SiNodedotjs },
                { name: "Express.js", icon: SiExpress },
                { name: "RESTful API", icon: Network },
                { name: "Laravel", icon: SiLaravel }
            ]
        },
        {
            category: "Database & Storage",
            description: "Designing efficient data models and managing reliable storage solutions for optimal performance.",
            icon: <Database className="w-8 h-8 text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300" />,
            color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
            borderHover: "hover:border-emerald-500/50",
            iconBg: "group-hover:bg-emerald-500/20",
            skills: [
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "MySQL", icon: SiMysql },
                { name: "Redis", icon: SiRedis },
                { name: "Supabase", icon: SiSupabase },
                { name: "Prisma", icon: SiPrisma }
            ]
        },
        {
            category: "Tools",
            description: "Leveraging industry-standard tools for version control, testing, and seamless deployment workflows.",
            icon: <Terminal className="w-8 h-8 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />,
            color: "from-purple-500/20 via-purple-500/5 to-transparent",
            borderHover: "hover:border-purple-500/50",
            iconBg: "group-hover:bg-purple-500/20",
            skills: [
                { name: "Git", icon: SiGit },
                { name: "GitHub", icon: SiGithub },
                { name: "Postman", icon: SiPostman },
                { name: "VS Code", icon: VscVscode },
                { name: "Vercel", icon: SiVercel }
            ]
        }
    ];

    return (
        <section className="w-full container mx-auto px-8 md:px-16 py-24" id="techstack">
            <FadeIn direction="up">
                <div className="flex flex-col items-center justify-center mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                        My <span className="text-primary italic">Tech Stack</span>
                    </h2>
                    <p className="text-base md:text-lg text-text-muted leading-relaxed">
                        A carefully curated set of tools and technologies I use to build robust, scalable, and exceptional digital experiences from frontend to backend.
                    </p>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {stacks.map((stack, i) => (
                    <FadeIn key={i} direction="up" delay={i * 0.15} fullWidth className="h-full">
                        <div className={`relative h-full bg-surface p-8 md:p-10 rounded-2xl border border-surface-light ${stack.borderHover} transition-all duration-500 group overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 flex flex-col`}>

                            {/* Hover Expanding Radial Gradient */}
                            <div className={`absolute -inset-px bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10`}></div>
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${stack.color} rounded-full blur-[80px] -z-10 opacity-0 group-hover:opacity-60 transition-all duration-1000 translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0`}></div>

                            {/* Card Content Header */}
                            <div className="flex flex-col sm:flex-row items-start gap-6 mb-8 flex-1">
                                <div className={`p-4 rounded-xl bg-background border border-surface-light shadow-sm ${stack.iconBg} transition-colors duration-500 shrink-0`}>
                                    <div className="group-hover:scale-110 transition-transform duration-500 origin-center">
                                        {stack.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-text-main mb-3 group-hover:text-white transition-colors duration-300">{stack.category}</h3>
                                    <p className="text-sm text-text-muted leading-relaxed">{stack.description}</p>
                                </div>
                            </div>

                            {/* Skill Pills */}
                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                {stack.skills.map((skill, j) => (
                                    <span
                                        key={j}
                                        className="flex items-center gap-2 bg-background text-text-muted hover:text-white text-sm font-bold px-4 py-2.5 rounded-lg border border-surface-light hover:border-surface transition-all duration-300 cursor-default shadow-sm hover:shadow-md group/skill"
                                    >
                                        <skill.icon className="w-4 h-4 group-hover/skill:scale-125 group-hover/skill:text-white transition-all duration-300" />
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
