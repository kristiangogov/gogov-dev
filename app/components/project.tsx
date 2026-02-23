import Image from "next/image";
import Link from "next/link";

export function Project({ project }) {
  return (
    <div
      key={project.title}
      className="w-full max-w-2xl p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="flex items-center text-lg font-semibold gap-2">
          {project.image ? (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              priority
              className="self-center"
            />
          ) : null}

          {project.title}
        </h3>

        {project.featured && (
          <span className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4 text-xs text-neutral-500 dark:text-neutral-400">
        {project.stack.map((tech, index) => (
          <span key={tech}>
            {tech}
            {index < project.stack.length - 1 && " •"}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.links?.length > 0 && (
        <div className="flex gap-4">
          {project.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors inline-flex items-center gap-1"
            >
              {link.label} <span className="text-xs">→</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
