"use client";

import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaTerminal } from "react-icons/fa";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem("theme") as "dark" | "light";
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        // Toggle class on html element
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyber-cyan/50 transition-all duration-300"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
    );
};

export default ThemeToggle;
