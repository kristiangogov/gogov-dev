import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Kristian Gogov Projects",
};

export default function Projects() {
  return (
    <section>
      <div>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <div className="flex items-center gap-2">
                <h2 className="text-black dark:text-white">{project.title}</h2>
                {project.featured && (
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}