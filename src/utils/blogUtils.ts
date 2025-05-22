import { blogPosts, BlogPost } from '@/data/blogPosts';

/**
 * Retrieves a blog post by its slug.
 * @param slug The slug of the blog post to retrieve.
 * @returns The BlogPost object if found, otherwise undefined.
 */
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  if (!slug) {
    return undefined;
  }
  return blogPosts.find((post) => post.slug === slug);
};
