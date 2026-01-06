import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Import Google fonts
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ClientLoader from "@/components/ui/ClientLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fouzi | Full Stack Developer & Cybersecurity Specialist",
  description: "Professional portfolio showcasing expertise in Laravel development, React, Next.js, and cybersecurity.",
  keywords: ["Full Stack Developer", "Laravel", "React", "Next.js", "Cybersecurity", "Web Development"],
  authors: [{ name: "Fouzi" }],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/icon.png',
  },
  openGraph: {
    title: "Fouzi | Full Stack & Security",
    description: "Expert Laravel Development & Security Hardening",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fouzi | Full Stack & Security",
    description: "Expert Laravel Development & Security Hardening",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground overflow-x-hidden selection:bg-cyber-cyan selection:text-black`}
      >
        <div className="fixed inset-0 z-[-1] bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <CustomCursor />
        <ClientLoader>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientLoader>
      </body>
    </html>
  );
}
