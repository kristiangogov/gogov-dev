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
            Cloud Operations Engineer at The Coca-Cola Company
          </span>
          , currently focused on SRE and Platform Engineering. I build tools
          that make infrastructure safer, more observable, and easier to manage.
        </p>
        <p>
          What I'm doing right now:
          <ul>
            <li>
              <span className="font-bold">Platform Engineering: </span>
              Maintaining internal automation toolkit (Electron/React.js) used
              by global teams.
            </li>
            <li>
              <span className="font-bold">Bare-metal Kubernetes Lab: </span>
              Operating a bare-metal k3s environment using FluxCD to implement
              full GitOps workflows and automated reconciliation.
            </li>
          </ul>
        </p>
        <p>
          You can read more about it in my <Link href="/blog">blog</Link>. If
          you're looking for further details, my professional history is on{" "}
          <Link href="https://www.linkedin.com/in/kristiangogov/">
            LinkedIn
          </Link>,{" "}
          and my active projects and lab configurations are on my{" "}
          <Link href="https://github.com/kristiangogov">GitHub</Link>.
        </p>
      </section>
    </article>
  );
}
