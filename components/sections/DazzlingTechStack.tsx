"use client";

import React from "react";
import { motion } from "framer-motion";
import { iconMap } from "@/lib/IconRegistry";
import { Skill } from "@/lib/types";

// Brand-specific color mapping for tech icons
const techColors: Record<string, { color: string; glow: string }> = {
    SiReact: { color: "rgba(97, 218, 251, 1)", glow: "rgba(97, 218, 251, 0.4)" },
    SiNextdotjs: { color: "rgba(255, 255, 255, 1)", glow: "rgba(255, 255, 255, 0.2)" },
    SiLaravel: { color: "rgba(255, 45, 32, 1)", glow: "rgba(255, 45, 32, 0.4)" },
    SiPhp: { color: "rgba(119, 123, 180, 1)", glow: "rgba(119, 123, 180, 0.4)" },
    SiPython: { color: "rgba(55, 118, 171, 1)", glow: "rgba(55, 118, 171, 0.4)" },
    SiJavascript: { color: "rgba(247, 223, 30, 1)", glow: "rgba(247, 223, 30, 0.3)" },
    SiTypescript: { color: "rgba(49, 120, 198, 1)", glow: "rgba(49, 120, 198, 0.4)" },
    SiTailwindcss: { color: "rgba(56, 189, 248, 1)", glow: "rgba(56, 189, 248, 0.4)" },
    SiMysql: { color: "rgba(0, 117, 143, 1)", glow: "rgba(0, 117, 143, 0.3)" },
    SiPostgresql: { color: "rgba(51, 103, 145, 1)", glow: "rgba(51, 103, 145, 0.3)" },
    SiMongodb: { color: "rgba(71, 162, 72, 1)", glow: "rgba(71, 162, 72, 0.3)" },
    SiDocker: { color: "rgba(36, 150, 237, 1)", glow: "rgba(36, 150, 237, 0.3)" },
    SiLinux: { color: "rgba(255, 211, 62, 1)", glow: "rgba(255, 211, 62, 0.3)" },
    SiKalilinux: { color: "rgba(85, 127, 254, 1)", glow: "rgba(85, 127, 254, 0.3)" },
    SiUbuntu: { color: "rgba(233, 84, 32, 1)", glow: "rgba(233, 84, 32, 0.3)" },
    SiDebian: { color: "rgba(168, 9, 66, 1)", glow: "rgba(168, 9, 66, 0.3)" },
    RiShieldFlashLine: { color: "rgba(255, 0, 110, 1)", glow: "rgba(255, 0, 110, 0.5)" },
    SiWireshark: { color: "rgba(22, 126, 190, 1)", glow: "rgba(22, 126, 190, 0.4)" },
    SiMetasploit: { color: "rgba(255, 145, 0, 1)", glow: "rgba(255, 145, 0, 0.4)" },
    SiSplunk: { color: "rgba(235, 1, 106, 1)", glow: "rgba(235, 1, 106, 0.4)" },
    SiAmazon: { color: "rgba(255, 153, 0, 1)", glow: "rgba(255, 153, 0, 0.3)" },
    SiGooglecloud: { color: "rgba(66, 133, 244, 1)", glow: "rgba(66, 133, 244, 0.3)" },
    SiMicrosoftazure: { color: "rgba(0, 137, 214, 1)", glow: "rgba(0, 137, 214, 0.3)" },
    SiFirebase: { color: "rgba(255, 202, 40, 1)", glow: "rgba(255, 202, 40, 0.3)" },
    SiVuedotjs: { color: "rgba(66, 184, 131, 1)", glow: "rgba(66, 184, 131, 0.3)" },
};

interface DazzlingTechStackProps {
    skills: Skill[];
}

const DazzlingTechStack = ({ skills }: DazzlingTechStackProps) => {
    // Filter skills that have a valid icon in our registry
    const techSkills = skills.filter(skill => skill.icon && iconMap[skill.icon]);

    return (
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5">
            {techSkills.map((skill, index) => {
                const iconName = skill.icon as string;
                const Icon = iconMap[iconName];
                const aesthetic = techColors[iconName] || { color: "rgba(0, 240, 255, 1)", glow: "rgba(0, 240, 255, 0.3)" };

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.03,
                            type: "spring",
                            stiffness: 150
                        }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.15,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            className="relative group cursor-default"
                            style={{ willChange: 'transform' }}
                        >
                            {/* Outer Glow Halo - only on hover */}
                            <div
                                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-0 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle, ${aesthetic.color} 0%, transparent 70%)`,
                                    willChange: 'opacity'
                                }}
                            ></div>

                            <div className="relative z-10 p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-white/30">
                                <Icon
                                    size={28}
                                    className="relative z-10 transition-transform duration-500"
                                    style={{
                                        color: aesthetic.color,
                                        filter: `drop-shadow(0 0 8px ${aesthetic.glow})`,
                                        willChange: 'transform'
                                    }}
                                />

                                {/* Inner glow pulse */}
                                <div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                    style={{ backgroundColor: aesthetic.color }}
                                ></div>
                            </div>

                            {/* Tooltip */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/90 border border-white/10 text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                                {skill.name}
                            </div>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default DazzlingTechStack;
