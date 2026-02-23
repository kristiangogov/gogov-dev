import { projects } from "./lib/projects";
import { Project } from "./components/project";

export default function Page() {
  return (
    <section className="">
      <div className="flex flex-col my-4">
        <div className="mb-14 flex flex-col items-start">
          {/* HEADER */}
          <h1 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            Kristian Gogov
          </h1>
          {/* SUBHEADER */}
          <div className="mt-2 flex flex-col gap-1 text-sm text-neutral-500 dark:text-neutral-400">
            <p>DevOps / CloudOps Engineer at The Coca-Cola Company.</p>
            <p>
              Building tools for{" "}
              <span className="text-neutral-700 dark:text-neutral-300">
                automated workflows
              </span>{" "}
              and refining{" "}
              <span className="text-neutral-700 dark:text-neutral-300">
                GitOps patterns
              </span>{" "}
              in the lab.
            </p>
          </div>
          <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
            Here you'll find my projects, experiments, and some technical notes.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
             <Project project={project} key={index}/>
            ))}
        </div>
      </div>
    </section>
  );
}
