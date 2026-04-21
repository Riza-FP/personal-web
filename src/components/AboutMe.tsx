"use client";

import { Code, Server, Layout } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

export function AboutMe() {
    return (
        <section className="w-full container mx-auto px-8 md:px-16 py-24" id="about">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <FadeIn direction="right" className="flex-1 w-full">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black tracking-widest uppercase mb-4 text-text-main">ABOUT ME</h2>
                        <p className="text-text-muted leading-relaxed text-[15px]">
                            I am a Full-Stack Developer passionate about building functional and intuitive web applications.
                            I work across both frontend and backend technologies, focusing on writing clean, maintainable code and creating seamless user experiences.
                        </p>
                        <p className="text-text-muted leading-relaxed text-[15px]">
                            My journey began with a deep curiosity for how the web works, which quickly evolved into a dedicated career path.
                            I aim to develop applications that are efficient, reliable, and thoughtfully crafted from end to end.
                        </p>
                        <div className="pt-4">
                            <a 
                                href="/Final CV ATS Riza Fauzan Pratama - Full Stack Dev.pdf" 
                                download="Riza_Fauzan_Pratama_CV.pdf"
                                className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded text-[11px] font-bold tracking-widest uppercase transition-colors shadow-lg shadow-primary/20 hover:-translate-y-1 transform duration-300"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </FadeIn>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    <FadeIn direction="left" delay={0.2} className="h-full w-full">
                        <div className="h-full bg-surface p-6 rounded-xl border border-surface-light group hover:border-primary/50 transition-colors hover:-translate-y-1 transform duration-300">
                            <Layout className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-text-main mb-2">Frontend Excellence</h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                Crafting pixel-perfect, responsive, and accessible user interfaces that engage and delight users.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left" delay={0.4} className="h-full w-full">
                        <div className="h-full bg-surface p-6 rounded-xl border border-surface-light group hover:border-primary/50 transition-colors hover:-translate-y-1 transform duration-300">
                            <Server className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-text-main mb-2">Backend Architecture</h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                Designing robust APIs and database structures that handle scale, security, and complex logic.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left" delay={0.6} className="h-full w-full sm:col-span-2">
                        <div className="h-full bg-surface p-6 rounded-xl border border-surface-light group hover:border-primary/50 transition-colors hover:-translate-y-1 transform duration-300">
                            <Code className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-text-main mb-2">Clean Code & Best Practices</h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                Writing modular, testable, and documented code that stands the test of time and accelerates team collaboration.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
