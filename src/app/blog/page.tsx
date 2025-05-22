import React from 'react';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blogPosts';

const BlogListPage = () => {
  return (
    <main className="container-custom py-8">
      {/* Updated h1 color */}
      <h1 className="text-4xl font-bold mb-8 text-primary-800 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post: BlogPost) => (
          <div key={post.slug} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
            <div className="p-6">
              {/* Updated h2 size, weight and hover color */}
              <h2 className="text-3xl font-bold mb-3 text-primary-800 hover:text-secondary-500 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-3">{post.date}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              {/* Updated link colors */}
              <Link href={`/blog/${post.slug}`} className="inline-block text-secondary-400 hover:text-secondary-500 font-medium transition-colors">
                Read More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
      {blogPosts.length === 0 && (
        <p className="text-center text-gray-600">No blog posts yet. Check back soon!</p>
      )}
    </main>
  );
};

export default BlogListPage;
