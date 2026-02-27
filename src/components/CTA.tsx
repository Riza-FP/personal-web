"use client";

import { useState } from 'react';
import { Mail, MessageCircle, Check } from 'lucide-react';

export function CTA() {
    const [copied, setCopied] = useState(false);

    // Replace these placeholders with your actual details
    const email = "rizafp1319@gmail.com";
    const whatsappNumber = "+628997327112"; // Include country code, omit + (e.g., 62 for Indonesia)

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="w-full container mx-auto px-8 md:px-16 py-24" id="contact">
            <div className="relative bg-surface rounded-2xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden group border border-white/5 shadow-2xl">

                {/* Background decorative glows */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>

                {/* Glow effects - using absolute positioning */}
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#25D366]/10 rounded-full blur-[80px] -z-10 group-hover:bg-[#25D366]/20 transition-all duration-700 pointer-events-none"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[80px] -z-10 group-hover:bg-primary/30 transition-all duration-700 pointer-events-none"></div>

                <div className="flex-1 max-w-2xl text-center lg:text-left z-10">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Let's build something <span className="text-primary italic">extraordinary</span> together.
                    </h2>
                    <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Whether you have a project in mind, need a skilled developer, or just want to say hi—I'm always open to discussing new opportunities.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 shrink-0 z-10 w-full lg:w-auto mt-8 lg:mt-0">
                    {/* Email Button */}
                    <button
                        onClick={handleCopyEmail}
                        className="relative flex items-center justify-center gap-3 bg-[var(--color-surface-light)] border border-white/10 hover:border-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(229,57,53,0.3)] overflow-hidden w-full sm:w-auto group/email"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover/email:opacity-100 transition-opacity duration-300" />

                        {copied ? (
                            <Check size={20} className="text-green-400 group-hover/email:scale-110 transition-transform" />
                        ) : (
                            <Mail size={20} className="text-[var(--color-primary)] group-hover/email:scale-110 transition-transform" />
                        )}
                        <span className="relative z-10">
                            {copied ? 'Copied to Clipboard!' : 'Drop an Email'}
                        </span>
                    </button>

                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#25D366]/40 overflow-hidden w-full sm:w-auto group/wa"
                    >
                        <MessageCircle size={20} className="group-hover/wa:animate-pulse" />
                        <span className="relative z-10 drop-shadow-md">Chat on WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
