"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { iconMap } from "@/lib/IconRegistry";
import { IconType } from "react-icons";
import { Skill } from "@/lib/types";

interface SkillsProgressProps {
    skills: Skill[];
}

const SkillsProgress = ({ skills }: SkillsProgressProps) => {
    // Display all skills provided via props
    const allSkills = skills || [];

    return (
        <Card variant="glass-dark" className="h-full">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-cyber-cyan mr-3 rounded-full shadow-[0_0_10px_#00f0ff]"></span>
                Technical Proficiency
            </h3>

            <div className="space-y-6">
                {allSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-300 font-medium flex items-center">
                                {skill.icon && iconMap[skill.icon] && React.createElement(iconMap[skill.icon], { className: "mr-2 text-cyber-cyan" })}
                                {skill.name}
                            </span>
                            <span className="text-cyber-cyan font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                                className="h-full bg-gradient-to-r from-cyber-blue to-cyber-cyan relative"
                            >
                                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_white]"></div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default SkillsProgress;
