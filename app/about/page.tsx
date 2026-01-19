import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About Me",
  description:
    "Cloud Operations Engineer with a background in process automation, team leadership, and hands-on troubleshooting across telecom and production systems.",
};

export default async function About() {
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert mt-[-1.25em]">
      <h2>From cable lines to cloud pipelines. 🚀</h2>
      <section>
        <p>
          I'm a{" "}
          <span className="font-bold">
            Cloud Operations Engineer at The Coca-Cola Company.{" "}
          </span>
          I build tools that translate complex infrastructure requirements into
          safe, repeatable, and automated workflows. My work is focused on
          reducing operational risk and replacing manual CLI friction with
          standardized platforms.
        </p>
        <p>
          What I'm doing right now:
          <ul>
            <li>
              <span className="font-bold">Production Automation: </span>
              Developing a cross-platform internal operations toolkit
              (Electron/React.js) that standardizes high-risk production
              workflows for globally distributed teams.
            </li>
            <li>
              <span className="font-bold">The Lab: </span>
              Operating a multi-stage Kubernetes environment across bare-metal
              and virtualization. I use this space to bridge the gap between "it
              works on my machine" and full GitOps automation - refining
              infrastructure-as-code patterns with Terraform, Ansible, and
              FluxCD.
            </li>
          </ul>
        </p>
        <p>
          You can read more about it in my <Link href="/blog">blog</Link>. If
          you're looking for further details, my professional history is on{" "}
          <Link href="https://www.linkedin.com/in/kristiangogov/">
            LinkedIn
          </Link>
          , and my active projects and lab configurations are on my{" "}
          <Link href="https://github.com/kristiangogov">GitHub</Link>.
        </p>
      </section>
    </article>
  );
}
