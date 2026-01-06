"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const TerminalNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([
        "Initial system... OK",
        "Loading cyber interface... OK",
        "Type 'help' for available commands.",
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const endRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Toggle on Ctrl+`
            if (e.ctrlKey && e.key === "`") {
                setIsOpen((prev) => !prev);
            }
            // Close on Escape
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, `> ${cmd}`];

        switch (cleanCmd) {
            case "help":
                newHistory.push(
                    "Available commands:",
                    "  about    - View profile info",
                    "  skills   - List technical skills",
                    "  projects - View projects",
                    "  contact  - Get contact info",
                    "  clear    - Clear terminal",
                    "  admin    - Access system mainframe",
                    "  exit     - Close terminal"
                );
                break;
            case "about":
                newHistory.push("Navigating to About section...");
                router.push("#about");
                setIsOpen(false);
                break;
            case "skills":
                newHistory.push("Navigating to Skills section...");
                router.push("#skills");
                setIsOpen(false);
                break;
            case "projects":
                newHistory.push("Listing projects...");
                router.push("#projects");
                setIsOpen(false);
                break;
            case "contact":
                newHistory.push("Opening communication channels...");
                router.push("#contact");
                setIsOpen(false);
                break;
            case "clear":
                setHistory([]);
                setInput("");
                return;
            case "exit":
                setIsOpen(false);
                break;
            case "":
                break;
            case "admin":
                newHistory.push("Initiating secure connection to mainframe...");
                setHistory([...history, ...newHistory]); // Update history immediately before redirect
                setIsOpen(false);
                window.open("http://127.0.0.1:8000/admin", "_blank");
                break;
            case "sudo":
                newHistory.push("Nice try. Access denied.");
                break;
            default:
                newHistory.push(`Command not found: ${cleanCmd}. Type 'help' for instructions.`);
        }

        setHistory(newHistory);
        setInput("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-black/80 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan hover:text-black flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 backdrop-blur-md"
                title="Open Terminal (Ctrl + `)"
            >
                <FaTerminal size={20} />
            </button>

            {/* Terminal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-2xl bg-black/95 border border-white/20 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden font-mono text-sm"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-2 text-gray-400 text-xs">fouzi@cyber-portfolio:~</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-500 hover:text-white"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="h-80 overflow-y-auto p-4 space-y-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                                {history.map((line, i) => (
                                    <div key={i} className={`${line.startsWith(">") ? "text-cyber-cyan" : "text-gray-300"}`}>
                                        {line}
                                    </div>
                                ))}
                                <div ref={endRef}></div>
                            </div>

                            {/* Input */}
                            <form onSubmit={handleSubmit} className="px-4 py-3 bg-white/5 border-t border-white/10 flex items-center">
                                <span className="text-cyber-cyan mr-2">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-grow bg-transparent border-none outline-none text-white placeholder-gray-600"
                                    placeholder="Type command..."
                                    autoFocus
                                />
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TerminalNav;
