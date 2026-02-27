import { Briefcase, GraduationCap } from "lucide-react";

export function ExperienceEducation() {
    const experiences = [
        {
            title: "Fullstack Developer",
            company: "PT DumbWays Indonesia Teknologi",
            period: "2025 - Present",
            description: ""
        },
        {
            title: "Video Editor",
            company: "TRANS TV",
            period: "Feb 2023 - July 2023",
            description: "In charge of editing videos based on humanism and social help distribution for the donation platform owned by TRANSMEDIA."
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
            description: "Major in Film Production"
        }
    ];

    return (
        <section className="w-full container mx-auto px-8 md:px-16 py-24" id="experience">
            <div className="flex flex-col md:flex-row gap-16 md:gap-8 lg:gap-16">

                {/* Experience Column */}
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary">
                            <Briefcase size={20} />
                        </div>
                        <h2 className="text-2xl font-black tracking-widest uppercase mb-0">Experience</h2>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-0 md:before:translate-x-0 before:h-full before:w-[2px] before:bg-surface">
                        {experiences.map((exp, i) => (
                            <div key={i} className="relative flex items-start group">
                                <div className="mt-1.5 flex flex-col items-center justify-center absolute left-0 shrink-0 z-10 group-hover:scale-125 transition-transform">
                                    <div className="w-4 h-4 rounded-full border-4 border-[#111111] bg-primary shadow-lg shadow-primary/30" />
                                </div>

                                <div className="bg-surface p-8 rounded-xl hover:-translate-y-1 transition-transform ml-10 shadow-lg w-full">
                                    <div className="text-primary text-[11px] font-bold tracking-widest uppercase mb-2">{exp.period}</div>
                                    <h3 className="text-xl font-bold text-text-main mb-1">{exp.title}</h3>
                                    <div className="text-sm font-medium text-text-muted mb-4">{exp.company}</div>
                                    <p className="text-sm text-text-muted leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary">
                            <GraduationCap size={20} />
                        </div>
                        <h2 className="text-2xl font-black tracking-widest uppercase mb-0">Education</h2>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-0 md:before:translate-x-0 before:h-full before:w-[2px] before:bg-surface">
                        {educations.map((edu, i) => (
                            <div key={i} className="relative flex items-start group">
                                <div className="mt-1.5 flex flex-col items-center justify-center absolute left-0 shrink-0 z-10 group-hover:scale-125 transition-transform">
                                    <div className="w-4 h-4 rounded-full border-4 border-[#111111] bg-primary shadow-lg shadow-primary/30" />
                                </div>

                                <div className="bg-surface p-8 rounded-xl hover:-translate-y-1 transition-transform ml-10 shadow-lg w-full">
                                    <div className="text-primary text-[11px] font-bold tracking-widest uppercase mb-2">{edu.period}</div>
                                    <h3 className="text-xl font-bold text-text-main mb-1">{edu.title}</h3>
                                    <div className="text-sm font-medium text-text-muted mb-4">{edu.institution}</div>
                                    <p className="text-sm text-text-muted leading-relaxed">{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
