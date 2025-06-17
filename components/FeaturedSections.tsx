'use client';

import { BookOpen, MessageSquare, ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';

const FeaturedSections = () => {
  const sections = [
    {
      icon: BookOpen,
      title: 'Beginner Guides',
      description: 'Step-by-step tutorials for setup, watering, and harvesting your first microgreens.',
      features: ['Setup tutorials', 'Watering schedules', 'Harvesting tips', 'Troubleshooting'],
      href: '/guides',
      color: 'green',
    },
    {
      icon: Star,
      title: 'Product Reviews',
      description: 'Curated reviews of top-rated seeds, equipment, and growing supplies.',
      features: ['Seed comparisons', 'Equipment ratings', 'Price tracking', 'Vendor links'],
      href: '/reviews',
      color: 'blue',
    },
    {
      icon: MessageSquare,
      title: 'Tips & Tricks Blog',
      description: 'Expert articles addressing common issues and advanced growing techniques.',
      features: ['Problem solving', 'Advanced techniques', 'Seasonal tips', 'Expert insights'],
      href: '/blog',
      color: 'purple',
    },
    {
      icon: ShoppingCart,
      title: 'Marketplace',
      description: 'Direct links to trusted suppliers with affiliate tracking and best deals.',
      features: ['Best deals', 'Trusted suppliers', 'Price alerts', 'Bulk discounts'],
      href: '/marketplace',
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner tutorials to expert product reviews, we provide comprehensive 
            resources for every stage of your microgreen growing journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="card p-8 group hover:scale-105 transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-colors duration-300 ${getColorClasses(section.color)}`}>
                <section.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors">
                {section.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {section.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {section.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={section.href}
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
              >
                Explore {section.title}
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSections;