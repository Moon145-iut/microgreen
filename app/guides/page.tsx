import { BookOpen, Clock, Users, CheckCircle, ArrowRight, Lightbulb, Droplets, Scissors } from 'lucide-react';
import Link from 'next/link';

export default function GuidesPage() {
  const guides = [
    {
      title: 'Complete Beginner Setup Guide',
      description: 'Everything you need to know to start growing microgreens from scratch.',
      duration: '15 min read',
      difficulty: 'Beginner',
      steps: 8,
      image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: ['Equipment setup', 'Seed selection', 'Growing medium', 'First harvest'],
    },
    {
      title: 'Watering Techniques & Schedules',
      description: 'Master the art of proper watering to prevent common issues like damping off.',
      duration: '10 min read',
      difficulty: 'Beginner',
      steps: 5,
      image: 'https://images.pexels.com/photos/4750271/pexels-photo-4750271.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: ['Bottom watering', 'Misting techniques', 'Drainage setup', 'Water quality'],
    },
    {
      title: 'Harvesting & Storage Guide',
      description: 'Learn when and how to harvest for maximum nutrition and shelf life.',
      duration: '8 min read',
      difficulty: 'Beginner',
      steps: 4,
      image: 'https://images.pexels.com/photos/4750272/pexels-photo-4750272.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: ['Harvest timing', 'Cutting techniques', 'Washing methods', 'Storage tips'],
    },
    {
      title: 'Advanced Growing Techniques',
      description: 'Take your microgreen production to the next level with professional methods.',
      duration: '20 min read',
      difficulty: 'Advanced',
      steps: 12,
      image: 'https://images.pexels.com/photos/4750273/pexels-photo-4750273.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: ['Stacking method', 'Weight application', 'Light optimization', 'Yield maximization'],
    },
  ];

  const quickTips = [
    {
      icon: Lightbulb,
      title: 'Lighting Setup',
      tip: 'Use LED grow lights 12-18 inches above trays for 12-16 hours daily.',
    },
    {
      icon: Droplets,
      title: 'Watering Schedule',
      tip: 'Water from bottom once daily, mist lightly if surface looks dry.',
    },
    {
      icon: Scissors,
      title: 'Harvest Timing',
      tip: 'Cut when first true leaves appear, usually 7-14 days after planting.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Complete <span className="text-gradient">Growing Guides</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Step-by-step tutorials to help you grow healthy, nutritious microgreens 
              from setup to harvest. Perfect for beginners and experienced growers alike.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                200+ Guides
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                50K+ Students
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                95% Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-center mb-12">Quick Tips to Get Started</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {quickTips.map((tip, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <tip.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Guides */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Guides</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tutorials covering everything from basic setup to advanced techniques.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <article key={index} className="card overflow-hidden group">
                <div className="relative">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium">
                    {guide.difficulty}
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {guide.steps} Steps
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {guide.duration}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {guide.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
                  >
                    Start Guide
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Growing?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful growers who have mastered microgreen cultivation 
            with our comprehensive guides.
          </p>
          <Link href="/guides/complete-beginner-setup-guide" className="btn-secondary">
            Start Your First Guide
          </Link>
        </div>
      </section>
    </div>
  );
}