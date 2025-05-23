import React from 'react';

// Placeholder for individual blog post type
// type Post = {
//   slug: string;
//   title: string;
//   excerpt: string;
//   date: string;
// };

// const placeholderPosts: Post[] = [
//   { slug: 'first-post', title: 'My First Blog Post', excerpt: 'This is a short summary of the first post...', date: '2024-05-24' },
//   { slug: 'second-post', title: 'Another Interesting Article', excerpt: 'Exploring more topics in this second article...', date: '2024-05-25' },
// ];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cvBlue mb-6">Blog</h1>
      <p className="text-cvTextDark mb-8">
        [Blog posts will be listed here. For now, this is a placeholder. User to provide content or integrate a blog system.]
      </p>
      {/* 
      <div className="space-y-8">
        {placeholderPosts.map((post) => (
          <article key={post.slug} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-cvBlue mb-2">
              <a href={`/blog/${post.slug}`} className="hover:underline">{post.title}</a>
            </h2>
            <p className="text-sm text-gray-500 mb-3">{post.date}</p>
            <p className="text-cvTextDark">{post.excerpt}</p>
            <a href={`/blog/${post.slug}`} className="text-cvBlue hover:underline mt-4 inline-block">Read more &rarr;</a>
          </article>
        ))}
      </div>
      */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-cvDarkBlue mb-2">Coming Soon!</h2>
        <p>Our blog is under construction. Check back later for insightful articles!</p>
      </div>
    </div>
  );
}
