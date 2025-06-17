import { Users, MessageSquare, Award, TrendingUp, Plus, Search, Filter } from 'lucide-react';

export default function CommunityPage() {
  const stats = [
    { label: 'Active Members', value: '50,000+', icon: Users },
    { label: 'Discussions', value: '12,500+', icon: MessageSquare },
    { label: 'Success Stories', value: '3,200+', icon: Award },
    { label: 'Daily Posts', value: '150+', icon: TrendingUp },
  ];

  const discussions = [
    {
      title: 'Best varieties for beginners?',
      author: 'GreenThumb22',
      replies: 24,
      views: 1250,
      lastActivity: '2 hours ago',
      category: 'Beginner Help',
      pinned: true,
    },
    {
      title: 'Dealing with mold issues in winter',
      author: 'MicroFarmer',
      replies: 18,
      views: 890,
      lastActivity: '4 hours ago',
      category: 'Problem Solving',
      pinned: false,
    },
    {
      title: 'LED light recommendations under $100',
      author: 'BudgetGrower',
      replies: 31,
      views: 2100,
      lastActivity: '6 hours ago',
      category: 'Equipment',
      pinned: false,
    },
    {
      title: 'My first successful harvest! (Photos)',
      author: 'NewGrower2024',
      replies: 45,
      views: 3200,
      lastActivity: '8 hours ago',
      category: 'Success Stories',
      pinned: false,
    },
  ];

  const categories = [
    { name: 'Beginner Help', count: 2450, color: 'bg-green-100 text-green-800' },
    { name: 'Problem Solving', count: 1890, color: 'bg-red-100 text-red-800' },
    { name: 'Equipment', count: 1650, color: 'bg-blue-100 text-blue-800' },
    { name: 'Success Stories', count: 3200, color: 'bg-purple-100 text-purple-800' },
    { name: 'Advanced Tips', count: 980, color: 'bg-orange-100 text-orange-800' },
    { name: 'Marketplace', count: 750, color: 'bg-yellow-100 text-yellow-800' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Growing <span className="text-gradient">Community</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with fellow microgreen enthusiasts, share experiences, get expert advice, 
              and celebrate your growing successes together.
            </p>
            <button className="btn-primary">
              <Plus className="mr-2 h-5 w-5" />
              Start a Discussion
            </button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="font-bold mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-gray-500">{category.count} posts</div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Discussions */}
            <div className="lg:col-span-3">
              {/* Search and Filter */}
              <div className="card p-6 mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </button>
                  <button className="btn-primary">
                    <Plus className="mr-2 h-4 w-4" />
                    New Post
                  </button>
                </div>
              </div>

              {/* Discussion List */}
              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <div key={index} className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {discussion.pinned && (
                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-2">
                              Pinned
                            </span>
                          )}
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {discussion.category}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-2 hover:text-green-600 transition-colors">
                          {discussion.title}
                        </h3>
                        
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <span>by {discussion.author}</span>
                          <span>•</span>
                          <span>{discussion.replies} replies</span>
                          <span>•</span>
                          <span>{discussion.views} views</span>
                          <span>•</span>
                          <span>{discussion.lastActivity}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {discussion.replies}
                        </div>
                        <div className="text-xs text-gray-500">replies</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <button className="btn-secondary">
                  Load More Discussions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Community Guidelines</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Be Respectful</h3>
                <p className="text-gray-600 text-sm">
                  Treat all community members with kindness and respect, regardless of experience level.
                </p>
              </div>
              <div className="p-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Stay On Topic</h3>
                <p className="text-gray-600 text-sm">
                  Keep discussions focused on microgreens and related growing topics.
                </p>
              </div>
              <div className="p-6">
                <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">Share Knowledge</h3>
                <p className="text-gray-600 text-sm">
                  Help others by sharing your experiences, tips, and successful growing methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}