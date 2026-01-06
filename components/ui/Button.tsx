"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "cyber";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    glow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            isLoading,
            leftIcon,
            rightIcon,
            glow = false,
            children,
            ...props
        },
        ref
    ) => {
        const variants = {
            primary:
                "bg-cyber-blue text-white hover:bg-blue-600 border border-transparent",
            secondary:
                "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700",
            outline:
                "bg-transparent border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10",
            ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
            cyber:
                "bg-transparent border border-cyber-cyan text-cyber-cyan relative overflow-hidden group hover:text-black hover:bg-cyber-cyan transition-all duration-300",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-4 py-2 text-sm",
            lg: "h-12 px-6 text-base",
        };

        const glowClass = glow ? "shadow-[0_0_15px_rgba(0,240,255,0.5)]" : "";

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    glowClass,
                    className
                )}
                disabled={isLoading}
                {...(props as HTMLMotionProps<"button">)}
            >
                {isLoading && (
                    <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                )}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;
