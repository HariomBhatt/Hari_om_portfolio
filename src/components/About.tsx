"use client";

import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import {
    SiCplusplus,
    SiNumpy,
    SiPandas,
    SiScikitlearn,
    SiTensorflow,
    SiPytorch,
    SiStreamlit,
    SiFastapi,
} from "react-icons/si";

import {
    Database,
    GitBranch,
    Code2,
    Container,
    Cloud,
    GraduationCap,
    Brain,
} from "lucide-react";

const education = [
    {
        level: "B.Tech in Computer Science & Engineering",
        institution: "Graphic Era University",
        location: "Dehradun, India",
        year: "2022 - 2026",
        major: "Major: Computer Science",
    },
    {
        level: "Class 12th",
        institution: "Bhagirathi Vidhyalaya",
        location: "Haridwar, Uttarakhand, India",
        year: "2022",
        major: "Major: PCM with Computer Science",
    },
    {
        level: "Class 10th",
        institution: "Bhagirathi Vidhyalaya",
        location: "Haridwar, Uttarakhand, India",
        year: "2020",
        major: "Major: General Studies",
    },
];

const techStack = [
    {
        name: "Python",
        icon: <FaPython className="text-5xl text-blue-500" />,
    },
    {
        name: "C++",
        icon: <SiCplusplus className="text-5xl text-indigo-600" />,
    },
    {
        name: "SQL",
        icon: <Database size={48} className="text-blue-500" />,
    },
    {
        name: "NumPy",
        icon: <SiNumpy className="text-5xl text-blue-500" />,
    },
    {
        name: "Pandas",
        icon: <SiPandas className="text-5xl text-purple-500" />,
    },
    {
        name: "Scikit-learn",
        icon: <SiScikitlearn className="text-5xl text-orange-500" />,
    },
    {
        name: "TensorFlow",
        icon: <SiTensorflow className="text-5xl text-orange-500" />,
    },
    {
        name: "PyTorch",
        icon: <SiPytorch className="text-5xl text-red-600" />,
    },
    {
        name: "Streamlit",
        icon: <SiStreamlit className="text-5xl text-red-500" />,
    },
    {
        name: "FastAPI",
        icon: <SiFastapi className="text-5xl text-teal-500" />,
    },
    {
        name: "Git",
        icon: <GitBranch size={48} className="text-orange-600" />,
    },
    {
        name: "GitHub",
        icon: <Code2 size={48} className="text-gray-800 dark:text-white" />,
    },
    {
        name: "Docker",
        icon: <Container size={48} className="text-blue-500" />,
    },
    {
        name: "Azure",
        icon: <Cloud size={48} className="text-blue-600" />,
    },
    {
        name: "AWS",
        icon: <Cloud size={48} className="text-orange-500" />,
    },
];

export default function About() {
    return (
            <section
                id="about"
                className="relative overflow-hidden bg-gray-50 px-6 py-20 transition-colors duration-500 dark:bg-gray-900"
            >
            {/* Background Decorations */}
            <div className="absolute left-0 top-20 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

            {/* About Me Introduction */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative mx-auto mb-14 max-w-3xl text-center"
            >
                <div className="mb-4 flex justify-center">
                    <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-3 text-white shadow-lg">
                        <Brain size={28} />
                    </span>
                </div>

                <h2 className="mb-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent">
                    About Me
                </h2>


            </motion.div>

            <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-6 flex items-center gap-3">
                        <span className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-2 text-white shadow-md">
                            <GraduationCap size={24} />
                        </span>

                        <h3 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent">
                            Education
                        </h3>
                    </div>

                    <div className="space-y-5">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.level}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ scale: 1.03, y: -4 }}
                                className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-md transition-all duration-300 hover:border-blue-400 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                            >
                                {/* Card Gradient Line */}
                                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600" />

                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {edu.level}
                                </h4>

                                <p className="mt-2 font-medium text-blue-600 dark:text-blue-400">
                                    {edu.institution}
                                </p>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    {edu.location} • {edu.year}
                                </p>

                                <p className="mt-3 inline-block rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1 text-sm font-semibold text-indigo-600 dark:from-blue-950 dark:to-purple-950 dark:text-indigo-300">
                                    {edu.major}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical Skills Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-3 flex items-center gap-3">
                        <span className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 p-2 text-white shadow-md">
                            <Code2 size={24} />
                        </span>

                        <h3 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
                            Technical Skills
                        </h3>
                    </div>

                    <p className="mb-6 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        Technologies and tools I use to build AI, machine
                        learning, data science, and backend applications.
                    </p>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.04,
                                }}
                                whileHover={{ scale: 1.06, y: -5 }}
                                className="group flex min-h-[125px] flex-col items-center justify-center rounded-2xl border border-purple-100 bg-white p-4 shadow-md transition-all duration-300 hover:border-purple-400 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                            >
                                <div className="transition-transform duration-300 group-hover:scale-110">
                                    {tech.icon}
                                </div>

                                <span className="mt-3 text-center text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}