import { PenTool, Layout, Box } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "UI Design",
            desc: "Lorem Ipsum is simply text of the printing type.",
            icon: <Layout className="w-8 h-8 mb-6" />,
            active: false,
        },
        {
            title: "Product Design",
            desc: "Lorem Ipsum is simply text of the printing type.",
            icon: <Box className="w-8 h-8 mb-6" />,
            active: true,
        },
        {
            title: "Branding",
            desc: "Lorem Ipsum is simply text of the printing type.",
            icon: <PenTool className="w-8 h-8 mb-6" />,
            active: false,
        }
    ];

    return (
        <section className="w-full container mx-auto px-8 md:px-16 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((s, i) => (
                    <div key={i} className={`p-10 transition-transform hover:-translate-y-2 cursor-pointer ${s.active ? 'bg-primary text-white' : 'bg-surface text-text-main hover:bg-surface-light'}`}>
                        <div className={s.active ? 'text-white' : 'text-primary'}>
                            {s.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                        <p className={`text-sm mb-12 leading-relaxed ${s.active ? 'text-white/90' : 'text-text-muted'}`}>
                            {s.desc}
                        </p>
                        <a href="#" className={`text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 ${s.active ? 'text-white' : 'text-primary'}`}>
                            KNOW MORE <span>→</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
