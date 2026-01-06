"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        // Throttle mousemove for performance
        let rafId: number | null = null;
        let lastX = 0;
        let lastY = 0;

        // Move cursor with mouse (throttled with requestAnimationFrame)
        const moveCursor = (e: MouseEvent) => {
            lastX = e.clientX;
            lastY = e.clientY;

            if (rafId === null) {
                rafId = requestAnimationFrame(() => {
                    gsap.to(cursor, {
                        x: lastX,
                        y: lastY,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                    gsap.to(cursorDot, {
                        x: lastX,
                        y: lastY,
                        duration: 0.1,
                        ease: "none"
                    });
                    rafId = null;
                });
            }
        };

        // Hover detection (throttled)
        let hoverTimeout: NodeJS.Timeout | null = null;
        const handleHover = (e: MouseEvent) => {
            if (hoverTimeout) return;

            hoverTimeout = setTimeout(() => {
                const target = e.target as HTMLElement;
                const isSelectable =
                    target.closest("button") ||
                    target.closest("a") ||
                    target.closest(".group") ||
                    window.getComputedStyle(target).cursor === "pointer";

                setIsHovering(!!isSelectable);
                hoverTimeout = null;
            }, 50);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleHover);
            if (rafId !== null) cancelAnimationFrame(rafId);
            if (hoverTimeout) clearTimeout(hoverTimeout);
        };
    }, []);

    return (
        <div className="hidden lg:block">
            {/* Outer Ring */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-cyber-cyan/50 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-300 ease-out"
                style={{
                    transform: isHovering ? "scale(2)" : "scale(1)",
                    borderColor: isHovering ? "rgba(0, 240, 255, 0.8)" : "rgba(0, 240, 255, 0.4)",
                    backgroundColor: isHovering ? "rgba(0, 240, 255, 0.1)" : "transparent"
                }}
            >
                {/* Aim Reticle Lines */}
                <div className={`absolute top-0 left-1/2 w-[1px] h-2 bg-cyber-cyan/40 -translate-x-1/2 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute bottom-0 left-1/2 w-[1px] h-2 bg-cyber-cyan/40 -translate-x-1/2 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute left-0 top-1/2 h-[1px] w-2 bg-cyber-cyan/40 -translate-y-1/2 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute right-0 top-1/2 h-[1px] w-2 bg-cyber-cyan/40 -translate-y-1/2 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>

            {/* Inner Dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-1 h-1 -ml-0.5 -mt-0.5 bg-cyber-cyan rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#00f0ff]"
                style={{
                    transform: isHovering ? "scale(0)" : "scale(1)"
                }}
            ></div>
        </div>
    );
};

export default CustomCursor;
