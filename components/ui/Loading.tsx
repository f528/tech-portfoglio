"use client";

import React from "react";
import { motion } from "framer-motion";

interface LoadingProps {
    fullscreen?: boolean;
    message?: string;
}

const Loading = ({ fullscreen = true, message = "Loading Portfolio..." }: LoadingProps) => {
    return (
        <div className={`${fullscreen ? 'fixed inset-0' : 'w-full h-full'} bg-background flex items-center justify-center z-[9999]`}>
            <div className="flex flex-col items-center gap-6">
                {/* Cyber Spinner */}
                <div className="relative w-24 h-24">
                    {/* Outer Ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-4 border-cyber-cyan/20"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            borderTopColor: "rgba(0, 240, 255, 1)",
                            borderRightColor: "rgba(0, 240, 255, 0.6)",
                        }}
                    />

                    {/* Middle Ring */}
                    <motion.div
                        className="absolute inset-2 rounded-full border-4 border-cyber-blue/20"
                        animate={{
                            rotate: -360,
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            borderTopColor: "rgba(0, 102, 255, 1)",
                            borderLeftColor: "rgba(0, 102, 255, 0.6)",
                        }}
                    />

                    {/* Inner Ring */}
                    <motion.div
                        className="absolute inset-4 rounded-full border-4 border-cyber-purple/20"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            borderTopColor: "rgba(157, 78, 221, 1)",
                            borderBottomColor: "rgba(157, 78, 221, 0.6)",
                        }}
                    />

                    {/* Center Pulse */}
                    <motion.div
                        className="absolute inset-8 rounded-full bg-cyber-cyan"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            boxShadow: "0 0 20px rgba(0, 240, 255, 0.8)"
                        }}
                    />
                </div>

                {/* Loading Text */}
                <div className="flex flex-col items-center gap-2">
                    <motion.p
                        className="text-cyber-cyan font-mono text-sm font-bold tracking-wider"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {message}
                    </motion.p>

                    {/* Animated Dots */}
                    <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-cyber-cyan"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
