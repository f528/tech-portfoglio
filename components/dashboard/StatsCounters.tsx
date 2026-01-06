"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaBriefcase, FaCode, FaCertificate, FaShieldAlt } from "react-icons/fa";

import Card from "@/components/ui/Card";
import { Stat } from "@/lib/types";

// Icon mapping for dynamic icons
const iconMap: { [key: string]: React.ElementType } = {
    FaBriefcase: FaBriefcase,
    FaCode: FaCode,
    FaCertificate: FaCertificate,
    FaShieldAlt: FaShieldAlt,
};

interface StatsCountersProps {
    stats: Stat[];
}

const StatsCounters = ({ stats }: StatsCountersProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, index) => (
                <CounterCard key={index} stat={stat} index={index} />
            ))}
        </div>
    );
};

const CounterCard = ({ stat, index }: { stat: any; index: number }) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [inView, controls, stat.value]);

    const Icon = stat.icon ? iconMap[stat.icon] : null;

    return (
        <Card
            ref={ref}
            variant="glass-dark"
            className="flex flex-col items-center justify-center py-8 text-center"
            hoverEffect
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0, y: 10 }}
                animate={controls}
                variants={{
                    visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
                }}
                className="flex flex-col items-center"
            >
                {Icon && (
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            color: "#ff00e5", // cyber-pink
                            borderColor: "rgba(255, 0, 229, 0.5)",
                            boxShadow: "0 0 20px rgba(255, 0, 229, 0.4)",
                            backgroundColor: "rgba(255, 0, 229, 0.1)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="mb-4 p-3 rounded-full bg-cyber-blue/10 text-cyber-cyan border border-cyber-cyan/30 shadow-[0_0_15px_rgba(0,240,255,0.2)] cursor-pointer"
                    >
                        <Icon size={24} />
                    </motion.div>
                )}
                <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan to-cyber-blue font-mono mb-2">
                    {count}
                    {stat.suffix}
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
        </Card>
    );
};

export default StatsCounters;
