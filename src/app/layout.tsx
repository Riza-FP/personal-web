import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agetha - Visual Designer Portfolio",
  description: "Portfolio of Agetha, a visual designer specializing in UI, Product Design, and Branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-[#111111] text-white`}>
        {children}
      </body>
    </html>
  );
}
