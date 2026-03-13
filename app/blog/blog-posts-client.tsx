"use client";

import Link from "next/link";
import { useState } from "react";

const POSTS_PER_PAGE = 5;

type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  labels: string[];
  formattedDate: string;
};

type Props = {
  posts: Post[];
  allLabels: string[];
};

export default function BlogPostsClient({ posts, allLabels }: Props) {
  const [activeLabels, setActiveLabels] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleLabel = (label: string) => {
    setActiveLabels((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
    setCurrentPage(1);
  };

  const filteredPosts =
    activeLabels.length === 0
      ? posts
      : posts.filter((post) =>
          activeLabels.every((label) => post.labels.includes(label)),
        );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section>
      {/* {allLabels.length > 0 && (
        <div className="mb-4">
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="text-sm px-2 py-1 rounded cursor-pointer transition-colors duration-150 text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          >
            {showFilters ? "Hide filters" : "Filters"}
            {!showFilters && activeLabels.length > 0 && (
              <span className="ml-1.5 text-neutral-400 dark:text-neutral-500">
                ({activeLabels.length})
              </span>
            )}
          </button>

          {showFilters && (
            <div className="flex flex-wrap gap-2 mt-3 items-center">
              {allLabels.map((label) => {
                const isActive = activeLabels.includes(label);
                return (
                  <button
                    key={label}
                    onClick={() => toggleLabel(label)}
                    className={`text-xs px-2 py-1 rounded cursor-pointer transition-colors duration-150
                      ${
                        isActive
                          ? "bg-neutral-800 text-white dark:bg-white dark:text-neutral-900"
                          : "text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                      }`}
                  >
                    {label}
                  </button>
                );
              })}
              {activeLabels.length > 0 && (
                <button
                  onClick={() => {
                    setActiveLabels([]);
                    setCurrentPage(1);
                  }}
                  className="text-xs px-2 py-1 rounded cursor-pointer transition-colors duration-150 text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 hover:bg-red-100 dark:hover:bg-red-950 hover:text-red-500 dark:hover:text-red-400"
                >
                  Clear ✕
                </button>
              )}
            </div>
          )}
        </div>
      )} */}

      <div>
        {paginatedPosts.length === 0 ? (
          <p className="text-neutral-500 dark:text-neutral-400 text-sm py-4">
            No posts match the selected filters.
          </p>
        ) : (
          paginatedPosts.map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col mb-3 transition-opacity duration-200 hover:opacity-80 hover:bg-neutral-100 dark:hover:bg-neutral-900 p-2 rounded-md"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h2 className="text-black dark:text-white">{post.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {post.formattedDate}
                </p>
              </div>
              <div>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-xs sm:max-w-[80%] my-1">
                  {post.summary}
                </p>
                {post.labels.map((label, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded mr-1 ${
                      activeLabels.includes(label)
                        ? "bg-neutral-800 text-white dark:bg-white dark:text-neutral-900"
                        : "text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </Link>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 mt-6">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-xs px-1 py-1 rounded cursor-pointer transition-colors duration-150 text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`text-xs px-2 py-1 rounded cursor-pointer transition-colors duration-150 ${
                page === currentPage
                  ? "bg-neutral-800 text-white dark:bg-white dark:text-neutral-900"
                  : "text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-xs px-1 py-1 rounded cursor-pointer transition-colors duration-150 text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
