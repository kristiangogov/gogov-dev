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
  {/* Sub-header: No italics, just clean metadata style */}
  <p className="text-neutral-500 dark:text-neutral-400 mb-8">
    I love automating stuff, because life's too short to click buttons and repeat steps. If you'll excuse me, I'll go get coffee now! ☕
  </p>

  <section className="space-y-8">
    <p>
      I’m a Cloud Operations Engineer at The Coca-Cola Company. I build tools 
      that translate complex infrastructure requirements into safe, repeatable, 
      and automated workflows, focusing on reducing operational risk and 
      replacing manual CLI friction with standardized platforms.
    </p>

    <div className="space-y-6">
      <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
        Current Focus
      </h3>
      {/* List with no indentation and no bullets */}
      <div className="space-y-4">
        <div className="flex flex-col">
          <span className="text-neutral-900 dark:text-neutral-100 font-medium">Production Automation</span>
          <span className="text-neutral-500">Developing an internal operations toolkit to standardize workflows for global teams.</span>
        </div>
        <div className="flex flex-col">
          <span className="text-neutral-900 dark:text-neutral-100 font-medium">The Lab</span>
          <span className="text-neutral-500">Managing a multi-stage Kubernetes environment to refine GitOps patterns with Terraform and FluxCD.</span>
        </div>
      </div>
    </div>

    {/* Footer links */}
    <p className="pt-6 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500">
      Read more on my <Link href="/blog" className="text-neutral-900 dark:text-neutral-100 underline underline-offset-4">blog</Link>, 
      view my history on <Link href="https://www.linkedin.com/in/kristiangogov/" className="text-neutral-900 dark:text-neutral-100 underline underline-offset-4">LinkedIn</Link>, 
      or explore the lab on <Link href="https://github.com/kristiangogov" className="text-neutral-900 dark:text-neutral-100 underline underline-offset-4">GitHub</Link>.
    </p>
  </section>
</article>
  );
}
