'use client';

import { Star, ExternalLink, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const ProductShowcase = () => {
  const products = [
    {
      category: 'Seeds',
      name: 'Premium Sunflower Microgreen Seeds',
      rating: 4.8,
      reviews: 1247,
      price: '$12.99',
      originalPrice: '$16.99',
      image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Organic certified', 'High germination rate', '1lb package'],
      vendor: 'GreenThumb Seeds',
      trending: true,
    },
    {
      category: 'Equipment',
      name: 'LED Growing Light Panel',
      rating: 4.7,
      reviews: 892,
      price: '$89.99',
      originalPrice: '$119.99',
      image: 'https://images.pexels.com/photos/4750271/pexels-photo-4750271.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Full spectrum', 'Energy efficient', '2-year warranty'],
      vendor: 'GrowTech Pro',
      trending: false,
    },
    {
      category: 'Supplies',
      name: 'Microgreen Growing Trays Set',
      rating: 4.9,
      reviews: 2156,
      price: '$24.99',
      originalPrice: '$34.99',
      image: 'https://images.pexels.com/photos/4750272/pexels-photo-4750272.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['BPA-free plastic', 'Drainage holes', 'Set of 10'],
      vendor: 'MicroGrow Supply',
      trending: true,
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Top-Rated{' '}
            <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the highest-rated microgreen supplies, curated from thousands 
            of reviews across trusted vendors and our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.trending && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-medium text-gray-700">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    {product.price}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>
                
                <ul className="space-y-1 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-sm text-gray-500 mb-4">
                  Sold by {product.vendor}
                </div>
                
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                  View Best Deals
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/reviews" className="btn-primary">
            View All Product Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;