"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="w-10 h-10 rounded-full bg-surface border border-surface-light flex items-center justify-center opacity-50 cursor-not-allowed">
                <div className="w-4 h-4 rounded-full bg-surface-light animate-pulse" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-10 h-10 rounded-full bg-surface border border-surface-light flex items-center justify-center hover:border-primary/50 hover:shadow-[0_0_15px_rgba(229,57,53,0.3)] transition-all overflow-hidden group"
            aria-label="Toggle theme"
        >
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Sun Icon (Visible in dark mode, rotates away in light) */}
            <Sun
                className={`w-4 h-4 absolute text-yellow-400 transition-all duration-500 transform ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                    }`}
            />

            {/* Moon Icon (Visible in light mode, rotates away in dark) */}
            <Moon
                className={`w-4 h-4 absolute text-blue-500 transition-all duration-500 transform ${theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
                    }`}
            />
        </button>
    );
}
