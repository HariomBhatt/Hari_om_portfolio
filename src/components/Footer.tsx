"use client";

import { motion } from "framer-motion";
import {
    FaGithub,
    FaEnvelope,
    FaPhone,
    FaLinkedinIn,
    FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
    const icons = [
        {
            href: "mailto:hariombhatt95@gmail.com",
            icon: <FaEnvelope size={22} />,
            label: "Email",
            color: "hover:bg-red-500",
        },
        {
            href: "tel:+918266967620",
            icon: <FaPhone size={22} />,
            label: "Phone",
            color: "hover:bg-green-600",
        },
        {
            href: "https://github.com/HariomBhatt",
            icon: <FaGithub size={22} />,
            label: "GitHub",
            color: "hover:bg-gray-800",
        },
        {
            href: "https://www.linkedin.com/",
            icon: <FaLinkedinIn size={22} />,
            label: "LinkedIn",
            color: "hover:bg-blue-600",
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="contact"
            className="relative overflow-hidden border-t border-gray-200 bg-gray-50 px-6 pb-6 pt-14 text-center text-gray-800 transition-colors dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
        >
            {/* Decorative Gradient Blurs */}
            <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
                        Let’s Connect
                    </p>

                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Let’s build something{" "}
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            amazing
                        </span>{" "}
                        together.
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
                        I’m always open to discussing AI, machine learning,
                        innovative projects, and exciting opportunities.
                    </p>
                </motion.div>

                {/* Social Icons */}
                <div className="mt-8 flex justify-center gap-4">
                    {icons.map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={
                                item.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            aria-label={item.label}
                            title={item.label}
                            whileHover={{ scale: 1.12, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className={`flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 ${item.color} hover:text-white hover:shadow-lg dark:bg-gray-800 dark:text-gray-200`}
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Divider */}
                <div className="mx-auto my-8 h-px max-w-2xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />

                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            Hariom Bhatt
                        </span>
                        . All rights reserved.
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Scroll to top"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white shadow-md transition-shadow hover:shadow-lg"
                    >
                        <FaArrowUp size={16} />
                    </motion.button>
                </div>
            </div>
        </motion.footer>
    );
}