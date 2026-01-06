"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { PersonalInfo } from "@/lib/types";
import dynamic from 'next/dynamic';
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const ParticleBackground = dynamic(() => import('@/components/effects/ParticleBackground'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-background" />
});

import { FaDownload, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { iconMap } from "@/lib/IconRegistry";
import { BACKEND_URL } from "@/lib/api";

interface HeroSectionProps {
    personalInfo: PersonalInfo;
    bio?: string;
}

const HeroSection = ({ personalInfo, bio }: HeroSectionProps) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!titleRef.current) return;

        const text = personalInfo.name;
        // Reset text immediately
        titleRef.current.textContent = "";

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Proxy object to animate
            const obj = { count: 0 };

            tl.to(obj, {
                count: text.length,
                duration: 1.5, // Total duration for typing
                ease: "steps(" + text.length + ")", // Stepped ease for typewriter feel
                onUpdate: () => {
                    if (titleRef.current) {
                        titleRef.current.textContent = text.substring(0, Math.ceil(obj.count));
                    }
                }
            });

            tl.from(subtitleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
            }, "-=0.5");
        });

        return () => ctx.revert();
    }, [personalInfo.name]);

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-start pt-20 md:pt-28 overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-radial from-cyber-blue/10 to-transparent opacity-20 z-0"></div>
            <ParticleBackground />

            <Container className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    className="mb-16 md:mb-20 relative"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full p-1 bg-gradient-to-tr from-cyber-cyan via-cyber-blue to-cyber-purple shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                        <div className="absolute inset-0 rounded-full bg-black m-[2px] z-0"></div>
                        <img
                            src={personalInfo.avatar}
                            alt={personalInfo.name}
                            className="w-full h-full object-cover rounded-full relative z-10 border-2 border-transparent"
                        />
                        {/* Spinning ring effect */}
                        <div className="absolute -inset-4 border border-cyber-cyan/30 rounded-full w-[calc(100%+2rem)] h-[calc(100%+2rem)] animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute -inset-4 border-t border-cyber-cyan rounded-full w-[calc(100%+2rem)] h-[calc(100%+2rem)] animate-[spin_3s_linear_infinite]"></div>
                    </div>

                    {/* Dazzling Tech Icons Row */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-20">
                        {[
                            { Icon: iconMap['SiReact'], color: "rgba(97, 218, 251, 1)", glow: "rgba(97, 218, 251, 0.5)", delay: 0.6 },
                            { Icon: iconMap['SiNextdotjs'], color: "rgba(255, 255, 255, 1)", glow: "rgba(255, 255, 255, 0.3)", delay: 0.7 },
                            { Icon: iconMap['SiLaravel'], color: "rgba(255, 45, 32, 1)", glow: "rgba(255, 45, 32, 0.5)", delay: 0.8 },
                            { Icon: iconMap['RiShieldFlashLine'], color: "rgba(255, 0, 110, 1)", glow: "rgba(255, 0, 110, 0.6)", isShield: true, delay: 0.9 },
                            { Icon: iconMap['SiPhp'], color: "rgba(119, 123, 180, 1)", glow: "rgba(119, 123, 180, 0.5)", delay: 1.0 },
                            { Icon: iconMap['SiJavascript'], color: "rgba(247, 223, 30, 1)", glow: "rgba(247, 223, 30, 0.4)", delay: 1.1 },
                            { Icon: iconMap['SiPython'], color: "rgba(55, 118, 171, 1)", glow: "rgba(55, 118, 171, 0.5)", delay: 1.2 },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10, scale: 0 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: item.delay, type: "spring", stiffness: 260, damping: 20 }}
                                whileHover={{
                                    scale: 1.35,
                                    filter: `drop-shadow(0 0 20px ${item.color})`,
                                    borderColor: item.color
                                }}
                                className={`
                                    p-2.5 rounded-xl bg-black/80 border border-white/10 backdrop-blur-xl
                                    flex items-center justify-center transition-colors duration-300
                                    ${item.isShield ? 'scale-125 border-cyber-pink/40 bg-cyber-pink/10 shadow-[0_0_20px_rgba(255,0,110,0.3)]' : 'hover:bg-white/5'}
                                `}
                                style={{
                                    boxShadow: item.isShield ? `0 0 25px ${item.glow}` : `0 0 15px ${item.glow}`,
                                    color: item.color
                                }}
                            >
                                <item.Icon size={item.isShield ? 30 : 22} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 inline-block rounded-full bg-cyber-blue/10 px-4 py-1.5 text-sm font-medium text-cyber-cyan border border-cyber-cyan/20"
                >
                    System Online
                </motion.div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        I&apos;m
                    </span>{" "}
                    <span ref={titleRef} className="text-cyber-cyan inline-block min-w-[20px]">
                        {/* GSAP will fill this */}
                    </span>
                    <span className="animate-pulse text-cyber-cyan">_</span>
                </h1>

                {bio && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="max-w-2xl mb-4 px-6 py-2.5 rounded-lg bg-black/40 border-l-4 border-cyber-cyan/50 backdrop-blur-sm relative overflow-hidden group"
                    >
                        {/* Scanning light effect */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent -translate-x-full group-hover:animate-[scan_2s_linear_infinite]"></div>
                        <p className="text-sm md:text-base text-gray-400 font-mono text-left leading-relaxed">
                            <span className="text-cyber-cyan opacity-50 mr-2">{'>'}</span>
                            {bio}
                        </p>
                    </motion.div>
                )}

                <p
                    ref={subtitleRef}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
                >
                    {personalInfo.title}
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Button
                        size="lg"
                        glow
                        rightIcon={<FaArrowRight />}
                        onClick={() => {
                            const projectsSection = document.getElementById('projects');
                            projectsSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        View Projects
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        leftIcon={<FaDownload />}
                        onClick={() => {
                            window.location.href = `${BACKEND_URL}/cv/download`;
                        }}
                    >
                        Download CV
                    </Button>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-cyber-cyan to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-slide-down"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
