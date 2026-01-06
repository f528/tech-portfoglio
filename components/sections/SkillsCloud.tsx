"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTag } from "react-icons/fa";
import Card from "@/components/ui/Card";
import { Skill } from "@/lib/types";

interface SkillsCloudProps {
    skills: Skill[];
}

const SkillsCloud = ({ skills }: SkillsCloudProps) => {
    // Use all skills for the cloud
    const allSkills = skills.map(s => s.name);

    return (
        <section id="skills-cloud" className="py-20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-blue/5 rounded-full blur-[100px] -z-10"></div>

            <div className="text-center mb-16 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Tech <span className="text-cyber-cyan">_Stack</span>
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    My arsenal of languages, frameworks, and cybersecurity tools deployed across the full stack.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {allSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.02,
                                type: "spring",
                                stiffness: 100
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-gray-300 hover:text-white hover:bg-cyber-blue/20 hover:border-cyber-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default flex items-center gap-2 group">
                                <FaTag className="text-cyber-cyan/50 group-hover:text-cyber-cyan transition-colors text-xs" />
                                {skill}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsCloud;
