"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiShieldFlashLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Timeline", href: "#timeline" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -30% 0px',
            threshold: 0.1
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        navLinks.forEach(link => {
            const sectionId = link.href.replace("#", "");
            const element = document.getElementById(sectionId);
            if (element) observer.observe(element);
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/" className="text-2xl font-bold font-mono group flex items-center gap-2">
                        <div className="relative">
                            <motion.div
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-cyber-cyan p-1.5 rounded-lg bg-cyber-cyan/5 border border-cyber-cyan/20 group-hover:text-cyber-pink group-hover:border-cyber-pink/80 group-hover:shadow-[0_0_20px_rgba(255,0,229,0.5),0_0_40px_rgba(255,0,229,0.2)] group-hover:scale-110 transition-all duration-300"
                            >
                                <RiShieldFlashLine size={24} />
                            </motion.div>
                            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-pink opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-pink"></span>
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-cyber-cyan">&lt;</span>
                            <span className="group-hover:text-cyber-blue transition-colors">Fouzi</span>
                            <span className="text-cyber-cyan">/&gt;</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");
                            return (
                                <li key={link.name}>
                                    <motion.div
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-sm font-medium transition-all duration-300 relative group pb-1 block",
                                                isActive
                                                    ? "text-white [text-shadow:0_0_15px_#ff00e5,0_0_30px_#ff00e5]"
                                                    : "text-gray-400 hover:text-white hover:[text-shadow:0_0_10px_#ff00e5]"
                                            )}
                                        >
                                            {link.name}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="activeUnderline"
                                                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff00e5] shadow-[0_0_10px_#ff00e5]"
                                                    initial={false}
                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.8))]"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#0077B5] transition-all duration-300 hover:scale-110 hover:[filter:drop-shadow(0_0_8px_rgba(0,119,181,0.8))]"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                </button>
            </Container>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <Container className="py-6 flex flex-col space-y-4">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.replace("#", "");
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "text-lg font-medium transition-all duration-300 block",
                                            isActive
                                                ? "text-white [text-shadow:0_0_15px_#ff00e5]"
                                                : "text-gray-300"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="flex space-x-6 pt-4 border-t border-white/10">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#0077B5] transition-all duration-300"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
