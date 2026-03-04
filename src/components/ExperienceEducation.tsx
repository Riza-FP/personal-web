"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

export function ExperienceEducation() {
    const experiences = [
        {
            title: "FullStack Developer",
            company: "PT DumbWays Indonesia Teknologi",
            period: "2025 - Present",
            description: "Hands-on experience building web applications using modern front-end and back-end technologies. Developing responsive user interfaces, creating RESTful APIs, managing databases, and collaborating in team environments using version control systems. Passionate about learning new technologies and improving software performance and user experience."
        },
        {
            title: "Video Editor",
            company: "TRANS TV",
            period: "Feb 2023 - July 2023",
            description: "Edited and produced human-interest and social impact content for TRANSMEDIA’s donation platform, strengthening my storytelling, attention to detail, workflow optimization, and cross-team collaboration skills while delivering structured, audience-focused content under tight production deadlines."
        }
    ];

    const educations = [
        {
            title: "High School",
            institution: "International Modern Arabic School",
            period: "2015 - 2018",
            description: "High School Diploma, Social Studies"
        },
        {
            title: "Bachelor of Arts",
            institution: "Binus University",
            period: "2020 - 2024",
            description: "Studied film production, visual communication, and project development, building strong skills in creative problem-solving, structured thinking, user-oriented storytelling, and end-to-end project execution through collaborative and deadline-driven productions."
        }
    ];

    return (
        <section className="w-full container mx-auto px-8 md:px-16 py-24" id="experience">
            <div className="flex flex-col md:flex-row gap-16 md:gap-8 lg:gap-16">

                {/* Experience Column */}
                <div className="flex-1">
                    <FadeIn direction="up">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary">
                                <Briefcase size={20} />
                            </div>
                            <h2 className="text-2xl font-black tracking-widest uppercase mb-0">Experience</h2>
                        </div>
                    </FadeIn>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-0 md:before:translate-x-0 before:h-full before:w-[2px] before:bg-surface border-l-2 border-surface">
                        {experiences.map((exp, i) => (
                            <FadeIn key={i} direction="up" delay={i * 0.2}>
                                <div className="relative flex items-start group">
                                    <div className="mt-1.5 flex flex-col items-center justify-center absolute -left-[11px] shrink-0 z-10 group-hover:scale-125 transition-transform">
                                        <div className="w-5 h-5 rounded-full border-4 border-[#111111] bg-primary shadow-lg shadow-primary/30" />
                                    </div>

                                    <div className="bg-surface p-8 rounded-xl hover:-translate-y-1 transition-transform ml-10 shadow-lg w-full border border-transparent hover:border-primary/20">
                                        <div className="text-primary text-[11px] font-bold tracking-widest uppercase mb-2">{exp.period}</div>
                                        <h3 className="text-xl font-bold text-text-main mb-1">{exp.title}</h3>
                                        <div className="text-sm font-medium text-text-muted mb-4">{exp.company}</div>
                                        <p className="text-sm text-text-muted leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div className="flex-1">
                    <FadeIn direction="up" delay={0.2}>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary">
                                <GraduationCap size={20} />
                            </div>
                            <h2 className="text-2xl font-black tracking-widest uppercase mb-0">Education</h2>
                        </div>
                    </FadeIn>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-0 md:before:translate-x-0 before:h-full before:w-[2px] before:bg-surface border-l-2 border-surface">
                        {educations.map((edu, i) => (
                            <FadeIn key={i} direction="up" delay={(i * 0.2) + 0.3}>
                                <div className="relative flex items-start group">
                                    <div className="mt-1.5 flex flex-col items-center justify-center absolute -left-[11px] shrink-0 z-10 group-hover:scale-125 transition-transform">
                                        <div className="w-5 h-5 rounded-full border-4 border-[#111111] bg-primary shadow-lg shadow-primary/30" />
                                    </div>

                                    <div className="bg-surface p-8 rounded-xl hover:-translate-y-1 transition-transform ml-10 shadow-lg w-full border border-transparent hover:border-primary/20">
                                        <div className="text-primary text-[11px] font-bold tracking-widest uppercase mb-2">{edu.period}</div>
                                        <h3 className="text-xl font-bold text-text-main mb-1">{edu.title}</h3>
                                        <div className="text-sm font-medium text-text-muted mb-4">{edu.institution}</div>
                                        <p className="text-sm text-text-muted leading-relaxed">{edu.description}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
