import { formatDate, getBlogPosts } from "app/lib/posts";
import BlogPostsClient from "app/blog/blog-posts-client"

export const metadata = {
  title: "Blog",
  description: "Personal Blog containing mostly technical articles.",
};

function parseLabels(str: string): string[] {
  return str
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function BlogPosts() {
  const allBlogs = getBlogPosts();

  const posts = allBlogs
    .sort((a, b) =>
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
        ? -1
        : 1
    )
    .map((post) => ({
      slug: post.slug,
      title: post.metadata.title,
      publishedAt: post.metadata.publishedAt,
      summary: post.metadata.summary,
      labels: parseLabels(post.metadata.label),
      formattedDate: formatDate(post.metadata.publishedAt, false),
    }));

  const allLabels = Array.from(
    new Set(posts.flatMap((post) => post.labels))
  ).sort();

  return <BlogPostsClient posts={posts} allLabels={allLabels} />;
}
