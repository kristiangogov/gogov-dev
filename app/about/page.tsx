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
        anyway...{" "}
        <span className="lowercase text-neutral-500 dark:text-neutral-400">
          *sips coffee*.
        </span>
      </h3>
      <section className="space-y-8 ">
        <p className="text-neutral-500 dark:text-neutral-400">
          I'm a{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            DevOps Engineer at Dataciders ROITI
          </span>
          , working in the{" "}
          <span className="text-neutral-700 dark:text-neutral-300">
            Energy Trading and Risk Management
          </span>{" "}
          sector. Most of the work I do is around the infrastructure behind AI
          services and quantitative models, with Kubernetes, observability, and
          the usual day to day problems that come with running production
          systems. A big part of that is owning the Airflow platform end to end,
          from the Helm charts and pipelines to troubleshooting, monitoring, and
          moving it between clusters. There is also a mix of work around
          alerting, Linux systems and an internal AI setup.
        </p>

        <p className="text-neutral-500 dark:text-neutral-400">
          <span className="text-neutral-700 dark:text-neutral-300">
            On the side
          </span>
          , I'm an active homelab and self-hosting enthusiast. These days that
          means a small fleet of mini and SFF PCs, a custom-built NAS, VLANs,
          and a pile of self-hosted services running across Proxmox, k3s and
          Docker Compose. Everything from personal wikis like Docmost and Kaneo,
          to Frigate and Home Assistant for handling my cameras, and
          my own local AI setup with Open WebUI, Ollama and Open Terminal. Most
          of it is managed as code because obviously manually configuring the
          thing I built specifically to avoid manual configuration would be
          unacceptable.
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
          - at this point my `.bashrc` has 5 sourced scripts and I'm running out
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
