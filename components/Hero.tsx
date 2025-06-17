'use client';

import { ArrowRight, Play, Star, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-50 section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 fill-current" />
                <span>Trusted by 50,000+ growers</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master the Art of{' '}
                <span className="text-gradient">Microgreen</span>{' '}
                Growing
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                From beginner guides to expert reviews, discover everything you need 
                to grow nutrient-dense microgreens at home. Join thousands of successful 
                growers in our community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/guides" className="btn-primary inline-flex items-center">
                Start Growing Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <button className="btn-secondary inline-flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-gray-600">Active Growers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">200+</div>
                <div className="text-sm text-gray-600">Expert Guides</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1000+</div>
                <div className="text-sm text-gray-600">Product Reviews</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-primary rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh microgreens growing"
                className="rounded-xl w-full h-96 object-cover"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Latest Guide</div>
                    <div className="text-xs text-gray-600">Sunflower Microgreens</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Community</div>
                    <div className="text-xs text-gray-600">Join 50K+ growers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;