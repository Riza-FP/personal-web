import { Code, Server, Layout } from "lucide-react";

export function AboutMe() {
    return (
        <section className="w-full container mx-auto px-8 md:px-16 py-24" id="about">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="flex-1 space-y-6">
                    <h2 className="text-2xl font-black tracking-widest uppercase mb-4 text-text-main">ABOUT ME</h2>
                    <p className="text-text-muted leading-relaxed text-[15px]">
                        I am a passionate FullStack Developer who thrives on building scalable, efficient, and visually engaging digital experiences.
                        With a concrete foundation in both frontend and backend technologies, I bridge the gap between design and robust server-side architecture.
                    </p>
                    <p className="text-text-muted leading-relaxed text-[15px]">
                        My journey began with a deep curiosity for how the web works, which quickly evolved into a dedicated career path.
                        I specialize in creating seamless user interfaces while ensuring the foundational backend systems are secure, blazing fast, and easily maintainable.
                    </p>
                    <div className="pt-4">
                        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded text-[11px] font-bold tracking-widest uppercase transition-colors shadow-lg shadow-primary/20">
                            Download Resume
                        </button>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    <div className="bg-surface p-6 rounded-xl border border-surface-light group hover:border-primary/50 transition-colors">
                        <Layout className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-lg font-bold text-text-main mb-2">Frontend Excellence</h3>
                        <p className="text-sm text-text-muted leading-relaxed">
                            Crafting pixel-perfect, responsive, and accessible user interfaces that engage and delight users.
                        </p>
                    </div>

                    <div className="bg-surface p-6 rounded-xl border border-surface-light group hover:border-primary/50 transition-colors">
                        <Server className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-lg font-bold text-text-main mb-2">Backend Architecture</h3>
                        <p className="text-sm text-text-muted leading-relaxed">
                            Designing robust APIs and database structures that handle scale, security, and complex logic.
                        </p>
                    </div>

                    <div className="bg-surface p-6 rounded-xl border border-surface-light group hover:border-primary/50 transition-colors sm:col-span-2">
                        <Code className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-lg font-bold text-text-main mb-2">Clean Code & Best Practices</h3>
                        <p className="text-sm text-text-muted leading-relaxed">
                            Writing modular, testable, and documented code that stands the test of time and accelerates team collaboration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
