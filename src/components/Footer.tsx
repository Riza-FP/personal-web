"use client";

import Link from 'next/link';
import { Twitter, Youtube, Heart, Facebook, Linkedin, Github, Instagram } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

export function Footer() {
    return (
        <footer className="w-full py-16 px-8 md:px-16 container mx-auto">
            <FadeIn direction="none" delay={0.2}>
                <div className="flex items-center justify-between border-t border-surface pt-8">
                    <div className="flex items-center justify-start gap-6 text-text-muted flex-1">
                        <a href="https://www.linkedin.com/in/riza-fauzan-pratama-8a9b83262/" className="hover:text-primary transition-colors hover:scale-110 transform duration-300"><Linkedin className="w-5 h-5" /></a>
                        <a href="https://www.instagram.com/rizafauzanpratama/" className="hover:text-primary transition-colors hover:scale-110 transform duration-300"><Instagram className="w-5 h-5" /></a>
                        <a href="https://github.com/Riza-FP" className="hover:text-primary transition-colors hover:scale-110 transform duration-300"><Github className="w-5 h-5" /></a>
                    </div>

                    <div className="flex items-center justify-end flex-1 gap-2 text-text-muted text-[13px] font-medium">
                        <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> Created by RizaFP
                    </div>
                </div>
            </FadeIn>
        </footer>
    );
}
