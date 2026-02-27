export function Stats() {
    const stats = [
        { value: "60+", label: "Clients" },
        { value: "08", label: "Years Experience" },
        { value: "122+", label: "Completed Projects" },
        { value: "10", label: "Achievements" }
    ];

    return (
        <section className="w-full container mx-auto px-8 md:px-16 py-12 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-8">
                <div className="text-8xl md:text-[10rem] font-black text-primary mb-2 tracking-tighter leading-none">12</div>
                <div className="text-xl font-bold text-text-main pb-2">Years Experience</div>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                    <div key={i} className="bg-surface py-12 px-6 flex flex-col items-center justify-center text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{s.value}</div>
                        <div className="text-xs text-text-muted">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
