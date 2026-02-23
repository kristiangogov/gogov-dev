import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "../lib/projects"
import { Project } from "../components/project";

export const metadata: Metadata = {
  title: "Projects",
  description: "Kristian Gogov Projects",
};

export default function Projects() {
  return (
    <section>
      <div className="flex flex-col gap-6">
        {projects
          .map((project, index) => (
            <Project project={project} key={index} />
          ))}
      </div>
    </section>
  );
}
