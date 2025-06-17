import { Calendar, User, ArrowRight, Clock, Search, Tag } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const categories = ['All', 'Beginner Tips', 'Problem Solving', 'Equipment', 'Advanced Tips', 'Seasonal'];
  
  const featuredPost = {
    title: 'Complete Guide to Preventing Damping Off Disease',
    excerpt: 'Learn how to identify, prevent, and treat the most common disease affecting microgreen seedlings. This comprehensive guide covers everything from proper ventilation to fungicide treatments.',
    author: 'Dr. Sarah Green',
    date: '2024-01-15',
    readTime: '12 min read',
    category: 'Problem Solving',
    image: 'https://images.pexels.com/photos/4750273/pexels-photo-4750273.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Disease Prevention', 'Troubleshooting', 'Plant Health'],
  };

  const posts = [
    {
      title: 'Best LED Lighting Setup for Winter Growing',
      excerpt: 'Optimize your LED lighting configuration for consistent microgreen production during darker months.',
      author: 'Mike Chen',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Equipment',
      image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['LED Lights', 'Winter Growing', 'Equipment'],
    },
    {
      title: 'Maximizing Yield: Advanced Seeding Techniques',
      excerpt: 'Professional tips for achieving higher yields and better quality microgreens through proper seeding.',
      author: 'Lisa Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Advanced Tips',
      image: 'https://images.pexels.com/photos/4750275/pexels-photo-4750275.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Yield Optimization', 'Seeding', 'Professional Tips'],
    },
    {
      title: 'Troubleshooting Common Germination Problems',
      excerpt: 'Identify and solve the most frequent issues that prevent seeds from germinating properly.',
      author: 'Tom Wilson',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Problem Solving',
      image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Germination', 'Troubleshooting', 'Seeds'],
    },
    {
      title: 'Seasonal Growing: Spring Setup Tips',
      excerpt: 'Prepare your microgreen setup for spring growing with these essential tips and adjustments.',
      author: 'Emma Davis',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Seasonal',
      image: 'https://images.pexels.com/photos/4750271/pexels-photo-4750271.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Spring Growing', 'Seasonal Tips', 'Setup'],
    },
    {
      title: 'Beginner\'s Guide to Watering Schedules',
      excerpt: 'Master the fundamentals of proper watering to ensure healthy microgreen growth.',
      author: 'Alex Johnson',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Beginner Tips',
      image: 'https://images.pexels.com/photos/4750272/pexels-photo-4750272.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Watering', 'Beginner Guide', 'Plant Care'],
    },
    {
      title: 'Choosing the Right Growing Medium',
      excerpt: 'Compare different growing mediums and find the best option for your microgreen varieties.',
      author: 'Rachel Green',
      date: '2024-01-01',
      readTime: '9 min read',
      category: 'Equipment',
      image: 'https://images.pexels.com/photos/4750273/pexels-photo-4750273.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Growing Medium', 'Comparison', 'Materials'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tips & Tricks <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert articles, troubleshooting guides, and advanced techniques from 
              experienced growers and agricultural specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Featured Article</h2>
          </div>
          
          <article className="card overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    Featured
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-6">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center mr-6">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Recent Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="card overflow-hidden group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}