import Link from 'next/link';
import { Twitter, Youtube, Heart, Facebook, Linkedin, Github, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full py-16 px-8 md:px-16 container mx-auto">


            <div className="flex items-center justify-between border-t border-surface pt-8">
                <div className="flex items-center justify-start gap-6 text-text-muted flex-1">
                    <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                </div>

                <div className="flex items-center justify-end flex-1 gap-2 text-text-muted text-[13px] font-medium">
                    <Heart className="w-4 h-4 text-primary fill-primary" /> Created by RizaFP
                </div>
            </div>
        </footer>
    );
}
