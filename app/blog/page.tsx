import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Personal Blog containing mostly technical articles.",
};

function parseLabels(str: string): string[] {
  return str.replace(/^\[|\]$/g, "").split(",").map((s) => s.trim()).filter(Boolean);
}

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col mb-3 transition-opacity duration-200 hover:opacity-80 hover:bg-neutral-100 dark:hover:bg-neutral-900 p-2 rounded-md"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h2 className="text-black dark:text-white">
                  {post.metadata.title}
                </h2>

                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
              <div className="">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-xs sm:max-w-[80%] my-1">
                  {post.metadata.summary}
                </p>
                {parseLabels(post.metadata.label).map((label, index) => (
                <span key={index} className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded mr-1">
                  {label}
                </span>
                ))}

              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
