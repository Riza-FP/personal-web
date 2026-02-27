import Link from 'next/link';

export function Navbar() {
    return (
        <nav className="w-full flex items-center justify-end py-8 px-8 md:px-16 container mx-auto">
            <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase">
                <Link href="#about" className="hover:text-primary transition-colors text-text-muted">ABOUT</Link>
                <Link href="#projects" className="hover:text-primary transition-colors text-text-muted">PROJECTS</Link>
                <Link href="#techstack" className="hover:text-primary transition-colors text-text-muted">TECH STACK</Link>
                <Link href="#experience" className="hover:text-primary transition-colors text-text-muted">EXPERIENCE</Link>
                <Link href="#contact" className="hover:text-primary transition-colors text-text-muted">CONTACT</Link>
            </div>
        </nav>
    );
}
