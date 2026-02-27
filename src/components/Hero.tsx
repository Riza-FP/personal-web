import { ArrowRight, Code2, Database, Layout, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="w-full relative overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 -z-10 animate-pulse" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />

            <div className="container max-w-6xl mx-auto px-8 md:px-16 py-24 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16">

                {/* Text Content */}
                <div className="flex-1 max-w-xl space-y-6 md:space-y-8 z-10 relative">
                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-surface/80 border border-surface-light backdrop-blur-sm shadow-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-lg md:text-xl font-bold tracking-wide text-white">Hello, I'm Riza Fauzan Pratama!</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-text-main leading-[1.1]">
                            FullStack <br />
                            <span className="bg-gradient-to-r from-primary via-red-400 to-orange-500 bg-clip-text text-transparent">
                                Developer
                            </span>
                        </h1>
                        <p className="text-text-muted max-w-lg leading-relaxed text-lg pt-2 border-l-2 border-primary/50 pl-4">
                            Bridging the gap between pixel-perfect design and robust server-side architecture to build seamless digital experiences.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Link href="#about" className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-sm font-bold tracking-widest uppercase transition-all hover:-translate-y-1 shadow-lg shadow-primary/25 flex items-center gap-3">
                            About Me
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="https://github.com/Riza-FP" target="_blank" className="group bg-surface hover:bg-surface-light border border-surface-light hover:border-text-muted/30 text-text-main px-8 py-4 rounded-lg text-sm font-bold tracking-widest uppercase transition-all hover:-translate-y-1 flex items-center gap-3">
                            <Terminal className="w-4 h-4 text-text-muted group-hover:text-text-main transition-colors" />
                            GitHub
                        </Link>
                    </div>
                </div>

                {/* Image & Floating Icons */}
                <div className="flex-1 w-full max-w-md relative flex items-center justify-center mt-12 md:mt-0 z-10">
                    {/* Floating Badges */}
                    <div className="absolute -top-6 -left-6 md:-left-12 bg-surface/80 backdrop-blur-md border border-surface-light p-4 rounded-2xl shadow-2xl animate-bounce z-20" style={{ animationDuration: '3s' }}>
                        <Layout className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 md:-right-12 bg-surface/80 backdrop-blur-md border border-surface-light p-4 rounded-2xl shadow-2xl animate-bounce z-20" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                        <Database className="w-8 h-8 text-orange-500" />
                    </div>

                    {/* Main Image Container */}
                    <div className="w-full aspect-[3/4] bg-surface rounded-3xl overflow-hidden relative shadow-2xl border border-surface-light/50 group flex items-center justify-center p-8 md:p-12 transition-all duration-500 hover:shadow-primary/20 hover:border-primary/30">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-60" />
                        <img
                            src="/Riza%20Fauzan%20Pratama.jpg"
                            alt="Riza Fauzan Pratama"
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
