"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center text-center h-[85vh] 
                        bg-white dark:bg-gray-900 transition-colors">
            {/* Name and Intro */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold 
                   bg-gradient-to-r from-blue-500 to-purple-600 
                   bg-clip-text text-transparent"
            >
                Hi, I'm HARIOM BHATT👋
            </motion.h1>

            {/* Professional Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="relative mt-6 text-xl font-semibold text-gray-800 dark:text-gray-200 md:text-2xl"
            >
                AI/ML Engineer & Generative AI Enthusiast
            </motion.h2>

            {/* Introduction */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg"
            >
                I build intelligent applications using{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Machine Learning
                </span>
                ,{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Deep Learning, NLP,
                </span>
                 and{" "}
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                    Generative AI
                </span>
                . I enjoy transforming data into practical solutions
                that solve real-world problems.
            </motion.p>

            

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
            >
                <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium 
                   hover:bg-blue-700 transition shadow-lg text-center"
                >
                    View My Work 🚀
                </motion.a>
                
            </motion.div>



            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex gap-6 mt-10"
            >
                <a
                    href="https://github.com/HariomBhatt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-3xl"
                >
                    <FaGithub />
                </a>
            </motion.div>
        </section>
    );
}





