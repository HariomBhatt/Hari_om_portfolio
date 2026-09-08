"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-xl transition-colors duration-500 dark:border-gray-700/70 dark:bg-gray-950/80"
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                {/* Logo / Name */}
                <a
                    href="#home"
                    className="group flex items-center gap-3"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-xl font-extrabold text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        H
                    </span>

                    <h1 className="text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white">
                        Hariom{" "}
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Bhatt
                        </span>
                    </h1>
                </a>

                {/* Navigation Links */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
                    {["About", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="group relative rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-colors duration-300 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 sm:text-base"
                        >
                            {item}

                            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-4/5" />
                        </a>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={() =>
                            setTheme(theme === "light" ? "dark" : "light")
                        }
                        aria-label="Toggle theme"
                        className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:scale-105 hover:border-indigo-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    >
                        {theme === "light" ? (
                            <>
                                <FaMoon className="text-indigo-600" />
                                <span>Dark</span>
                            </>
                        ) : (
                            <>
                                <FaSun className="text-yellow-400" />
                                <span>Light</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}