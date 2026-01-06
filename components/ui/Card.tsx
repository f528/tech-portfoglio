"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "glass" | "glass-dark" | "outline";
    glowing?: boolean;
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    (
        {
            children,
            className,
            variant = "glass-dark",
            glowing = false,
            hoverEffect = false,
            ...props
        },
        ref
    ) => {
        const variants = {
            default: "bg-gray-900 border border-gray-800",
            glass: "glass bg-white/5 border-white/10",
            "glass-dark": "glass-dark bg-black/40 border-cyber-cyan/20",
            outline: "bg-transparent border border-cyber-cyan/30",
        };

        const glowClass = glowing
            ? "shadow-[0_0_20px_rgba(0,240,255,0.15)] border-cyber-cyan/50"
            : "";

        const hoverClasses = hoverEffect
            ? "hover:border-cyber-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all duration-300"
            : "";

        return (
            <motion.div
                ref={ref}
                className={cn(
                    "rounded-xl p-6 overflow-hidden relative backdrop-blur-md",
                    variants[variant],
                    glowClass,
                    hoverClasses,
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";

export default Card;
