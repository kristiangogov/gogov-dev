import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="">
      <div className="flex flex-col my-10">
        {/* Header Section */}
        <div className="mb-14 flex flex-col items-start">
          {/* Name: Clean and balanced */}
          <h1 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            Kristian Gogov
          </h1>

          {/* The "Here is what I do" section */}
          <div className="mt-2 flex flex-col gap-1 text-sm text-neutral-500 dark:text-neutral-400">
            <p>Cloud Operations Engineer at The Coca-Cola Company.</p>
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

          {/* Subtle prompt to explore */}
          <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
            Here you'll find my projects, experiments, and some technical notes.
          </p>
        </div>
        {/* Featured Project Card */}
        <div className="w-full max-w-2xl p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
          <div className="flex items-start justify-between mb-3">
            <h3 className="flex items-center text-lg font-semibold gap-1">
              <Image
                src="/promo-plus-toolkit/icon.png"
                alt="logo"
                width={25}
                height={25}
                priority
                className="self-center"
              />
              Promo+ Toolkit
            </h3>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
              Featured
            </span>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Cross-platform desktop app for AWS operations automation. Used daily
            by multiple teams to manage configurations, merge data, and interact
            with S3/DynamoDB without touching the AWS console or the terminal.
          </p>

          <div className="flex flex-wrap gap-2 mb-4 text-xs text-neutral-500 dark:text-neutral-400">
            <span>Electron.js</span>
            <span>•</span>
            <span>React.js</span>
            <span>•</span>
            <span>AWS SDK</span>
            <span>•</span>
            <span>Node.js</span>
          </div>

          <Link
            href="/blog/promo-toolkit"
            className="text-sm text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors inline-flex items-center gap-1"
          >
            Read more <span className="text-xs">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
