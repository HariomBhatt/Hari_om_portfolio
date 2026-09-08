"use client";

import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  github: string;
  image: string;
  technologies: string[];
  liveDemo?: string;
};

export default function ProjectCard({
  title,
  description,
  github,
  image,
  technologies,
  liveDemo,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
      {/* Project Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="mb-5 min-h-[84px] text-sm leading-6 text-gray-600 dark:text-gray-300">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            <Code2  size={17} />
            GitHub
          </a>

          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}