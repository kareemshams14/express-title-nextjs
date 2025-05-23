'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug, BlogPost } from '@/data/blogPosts'; // Ensure BlogPost is exported from blogPosts.ts

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
      const foundPost = getPostBySlug(slug);
      setPost(foundPost);
    }
    setLoading(false);
  }, [params?.slug]);

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col bg-gray-50 text-text-DEFAULT">
        <Navbar />
        <div className="container-custom py-12 flex-grow">
          <p className="text-center text-lg">Loading post...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen flex flex-col bg-gray-50 text-text-DEFAULT">
        <Navbar />
        <div className="container-custom py-12 text-center flex-grow">
          <h1 className="text-3xl font-bold text-primary-900 mb-6">Post Not Found</h1>
          <p className="text-lg mb-8">
            Sorry, we couldn't find the blog post you were looking for.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-secondary-400 hover:bg-secondary-500 text-primary-900 font-semibold py-3 px-6 rounded-md transition-colors duration-200"
          >
            &larr; Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-text-DEFAULT">
      <Navbar />

      {/* Page Header - Optional, could be simpler for individual posts */}
      <header className="bg-primary-800 text-white py-10">
        <div className="container-custom">
          <Link href="/blog" className="text-secondary-400 hover:text-secondary-300 transition-colors duration-200">
            &larr; Back to Blog
          </Link>
        </div>
      </header>
      
      {/* Blog Post Content */}
      <article className="bg-white py-12 md:py-16">
        <div className="container-custom max-w-3xl mx-auto"> {/* Constrain width for readability */}
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 mb-8">{post.date}</p>
          
          {/* Article content styles */}
          <div 
            className="prose prose-lg max-w-none text-text-DEFAULT prose-headings:text-primary-800 prose-a:text-secondary-500 hover:prose-a:text-secondary-600 prose-strong:text-primary-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-text-DEFAULT font-semibold py-3 px-6 rounded-md transition-colors duration-200"
            >
              &larr; Back to All Posts
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
