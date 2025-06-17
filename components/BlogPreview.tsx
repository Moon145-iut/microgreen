'use client';

import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

const BlogPreview = () => {
  const posts = [
    {
      title: 'Preventing Damping Off: A Complete Guide',
      excerpt: 'Learn how to identify, prevent, and treat damping off disease that commonly affects microgreen seedlings.',
      author: 'Dr. Sarah Green',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Problem Solving',
      image: 'https://images.pexels.com/photos/4750273/pexels-photo-4750273.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
    },
    {
      title: 'Best Lighting Setup for Winter Growing',
      excerpt: 'Optimize your LED lighting configuration for consistent microgreen production during darker months.',
      author: 'Mike Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Equipment',
      image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
    {
      title: 'Maximizing Yield: Advanced Seeding Techniques',
      excerpt: 'Professional tips for achieving higher yields and better quality microgreens through proper seeding.',
      author: 'Lisa Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Advanced Tips',
      image: 'https://images.pexels.com/photos/4750275/pexels-photo-4750275.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Latest{' '}
            <span className="text-gradient">Tips & Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with expert advice, troubleshooting guides, and advanced 
            techniques from our community of experienced growers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <article className="card overflow-hidden group h-full">
              <div className="relative">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-700">
                  {posts[0].category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors">
                  {posts[0].title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {posts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(posts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {posts[0].readTime}
                    </div>
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${posts[0].title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          </div>

          {/* Recent Posts */}
          <div className="space-y-6">
            {posts.slice(1).map((post, index) => (
              <article key={index} className="card p-6 group">
                <div className="flex space-x-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="text-xs text-green-600 font-medium mb-2">
                      {post.category}
                    </div>
                    <h4 className="font-bold mb-2 group-hover:text-green-600 transition-colors leading-tight">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 space-x-3">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            
            <Link 
              href="/blog"
              className="block text-center py-4 text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View All Articles →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;