import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About Me",
  description:
    "Cloud Operations Engineer with a background in process automation, team leadership, and hands-on troubleshooting across telecom and production systems.",
};

export default async function About() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <p className="text-neutral-500 dark:text-neutral-400 mb-8">
        I love automating stuff, because life's too short to click buttons and
        repeat steps. If you'll excuse me, I'll go get coffee now! ☕
      </p>

      <h3 className="text-sm font-medium uppercase tracking-wider ">
        anyway...
      </h3>
      <section className="space-y-8 ">
        <p className="text-neutral-500 dark:text-neutral-400">
          I'm a{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            DevOps Engineer at ROITI Ltd
          </span>
          , working in the{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            ETRM (Energy Trading and Risk Management)
          </span>{" "}
          sector. My current focus is{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            Kubernetes cluster migrations
          </span>
          , more specifically moving{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            AKS clusters
          </span>{" "}
          from the old kubenet networking to a proper{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            CNI overlay with Cilium
          </span>
          .
        </p>

        <p className="text-neutral-500 dark:text-neutral-400">
          On the side, I'm a pretty active{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            homelab tinkerer
          </span>
          . I run a multi-node{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            K3s cluster with FluxCD, Terraform, Ansible, Cilium, and all the
            usual toys
          </span>
          . Lately I've also added{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            TrueNAS
          </span>{" "}
          into the mix and started playing with some cloud services, so things
          are getting more interesting (and slightly chaotic).
        </p>
        <p className="text-neutral-500 dark:text-neutral-400">
          I also like to mess around with{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            JavaScript
          </span>{" "}
          and its ecosystem, along with{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            workflow automation
          </span>{" "}
            -  at this point my `.bashrc` has 5 sourced scripts and I'm running out
          of shortcut combos 😅.
        </p>

        {/* Footer links */}
        <p className="pt-6 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500">
          Read more on my{" "}
          <Link
            href="/blog"
            className="text-neutral-900 dark:text-neutral-100 underline underline-offset-4"
          >
            Blog
          </Link>
          , view my history on{" "}
          <Link
            href="https://www.linkedin.com/in/kristiangogov/"
            className="text-neutral-900 dark:text-neutral-100 underline underline-offset-4"
          >
            LinkedIn
          </Link>
          , or explore the lab on{" "}
          <Link
            href="https://github.com/kristiangogov"
            className="text-neutral-900 dark:text-neutral-100 underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
