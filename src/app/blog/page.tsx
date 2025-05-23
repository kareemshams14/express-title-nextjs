import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts, BlogPost } from '@/data/blogPosts';

export default function BlogListPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-text-DEFAULT">
      <Navbar />

      {/* Page Header */}
      <header className="bg-primary-800 text-white py-10 md:py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Express Title Blog</h1>
          <p className="text-lg md:text-xl mt-2">
            Insights, tips, and updates on title loans and vehicle financing.
          </p>
        </div>
      </header>

      {/* Blog Post Listings */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post: BlogPost) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                  <div className="p-6 flex-grow">
                    <h2 className="text-2xl font-semibold text-primary-900 mb-3 hover:text-secondary-500 transition-colors duration-200">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                    <p className="text-text-light text-base mb-4 line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block text-secondary-500 hover:text-secondary-600 font-semibold transition-colors duration-200"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg">No blog posts available at the moment. Please check back soon!</p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
