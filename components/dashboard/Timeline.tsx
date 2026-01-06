"use client";

import React from "react";
import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import Card from "@/components/ui/Card";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

import { TimelineEvent } from "@/lib/types";

interface TimelineProps {
    events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
    return (
        <div className="h-full">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-cyber-pink mr-3 rounded-full shadow-[0_0_10px_#ff006e]"></span>
                Experience Timeline
            </h3>

            <div className="relative pl-4 space-y-8">
                {/* Vertical Line */}
                <div className="absolute top-2 bottom-0 left-[27px] w-[2px] bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent opacity-30"></div>

                {events.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative flex items-start group"
                    >
                        <div className="absolute left-[18px] top-6 w-5 h-5 rounded-full bg-background border-2 border-cyber-cyan z-10 group-hover:scale-125 group-hover:bg-cyber-cyan group-hover:shadow-[0_0_15px_#00f0ff] transition-all duration-300"></div>

                        <Card
                            variant="glass"
                            className="ml-12 w-full p-5 hover:border-cyber-purple/50 transition-colors duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {item.type === "education" && <FaGraduationCap className="text-cyber-pink" />}
                                    {item.type === "work" && <FaBriefcase className="text-cyber-cyan" />}
                                    {item.type === "certification" && <FaCertificate className="text-cyber-purple" />}
                                    <h4 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">
                                        {item.title}
                                    </h4>
                                </div>
                                <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5 mt-2 md:mt-0 w-fit">
                                    {item.date}
                                </span>
                            </div>
                            <p className="text-cyber-blue text-sm mb-2">{item.organization}</p>
                            <p className="text-gray-400 text-sm leading-snug">
                                {item.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
