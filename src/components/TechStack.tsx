import { Terminal, HardDrive, Database, Layout } from "lucide-react";

export function TechStack() {
    const stacks = [
        {
            category: "Frontend",
            icon: <Layout className="w-6 h-6 mb-4 text-primary" />,
            skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5", "CSS3"]
        },
        {
            category: "Backend",
            icon: <Database className="w-6 h-6 mb-4 text-primary" />,
            skills: ["Node.js", "Express.js", "RESTful API"]
        },
        {
            category: "Database & Storage",
            icon: <HardDrive className="w-6 h-6 mb-4 text-primary" />,
            skills: ["PostgreSQL", "Redis", "Supabase"]
        },
        {
            category: "Tools",
            icon: <Terminal className="w-6 h-6 mb-4 text-primary" />,
            skills: ["Git", "GitHub", "Postman", "VS Code"]
        }
    ];

    return (
        <section className="w-full container mx-auto px-8 md:px-16 py-24" id="techstack">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="text-2xl font-black tracking-widest uppercase mb-2">TECH STACK</h2>
                    <p className="text-sm text-text-muted">Tools and technologies I use to build digital products</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stacks.map((stack, i) => (
                    <div key={i} className="bg-surface p-8 rounded-xl hover:-translate-y-2 transition-transform shadow-lg group">
                        <div className="group-hover:scale-110 transition-transform origin-left">
                            {stack.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-6 text-text-main">{stack.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {stack.skills.map((skill, j) => (
                                <span
                                    key={j}
                                    className="bg-background text-text-muted text-[11px] font-bold px-3 py-1.5 rounded border border-surface-light group-hover:border-primary/30 transition-colors uppercase tracking-wider"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
