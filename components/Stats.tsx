'use client';

import { TrendingUp, Award, Users, BookOpen } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Growers',
      description: 'Successful microgreen enthusiasts',
    },
    {
      icon: BookOpen,
      value: '200+',
      label: 'Expert Guides',
      description: 'Step-by-step tutorials',
    },
    {
      icon: Award,
      value: '1,000+',
      label: 'Product Reviews',
      description: 'Curated equipment ratings',
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Success Rate',
      description: 'Following our guides',
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;