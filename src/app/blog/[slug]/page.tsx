import React from 'react';
// Removed direct import of blogPosts, BlogPost type is still needed if used explicitly
// import { blogPosts, BlogPost } from '@/data/blogPosts'; 
import Link from 'next/link';
import { getPostBySlug } from '@/utils/blogUtils'; // Import the new utility function
import type { BlogPost } from '@/data/blogPosts'; // Import BlogPost type if needed

interface PostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage = ({ params }: PostPageProps) => {
  const post = getPostBySlug(params.slug); // Use the utility function

  if (!post) {
    return (
      <main className="container-custom py-8 text-center">
        {/* Updated h1 size and color */}
        <h1 className="text-4xl font-bold text-primary-800 mb-4">Post Not Found</h1>
        <p className="text-gray-700 mb-6">
          Sorry, we couldn&apos;t find the blog post you were looking for.
        </p>
        {/* Updated link colors */}
        <Link href="/blog" className="text-secondary-400 hover:text-secondary-500 font-medium transition-colors">
          &larr; Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="container-custom py-8">
      <article className="prose lg:prose-xl max-w-none mx-auto bg-white p-6 md:p-8 shadow-lg rounded-lg">
        <header className="mb-8 border-b pb-4">
          {/* Updated h1 color */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-3">{post.title}</h1>
          <p className="text-md text-gray-500">{post.date}</p>
        </header>
        
        {/* Using dangerouslySetInnerHTML for HTML content from blogPosts.ts */}
        {/* Ensure content is sanitized if it comes from user input in a real scenario */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12 pt-6 border-t">
          {/* Updated link colors */}
          <Link href="/blog" className="text-secondary-400 hover:text-secondary-500 font-medium transition-colors">
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogPostPage;

// Optional: Generate static paths if you know all slugs at build time
// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }
