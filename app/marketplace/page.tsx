import { Star, ExternalLink, TrendingUp, Filter, Search, ShoppingCart, Heart } from 'lucide-react';

export default function MarketplacePage() {
  const categories = ['All', 'Seeds', 'Equipment', 'Growing Medium', 'Accessories', 'Starter Kits'];
  
  const products = [
    {
      category: 'Seeds',
      name: 'Premium Sunflower Microgreen Seeds',
      rating: 4.8,
      reviews: 1247,
      price: '$12.99',
      originalPrice: '$16.99',
      discount: '24% OFF',
      image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=400',
      vendor: 'GreenThumb Seeds',
      shipping: 'Free shipping',
      inStock: true,
      trending: true,
      affiliate: true,
    },
    {
      category: 'Equipment',
      name: 'LED Growing Light Panel - Full Spectrum',
      rating: 4.7,
      reviews: 892,
      price: '$89.99',
      originalPrice: '$119.99',
      discount: '25% OFF',
      image: 'https://images.pexels.com/photos/4750271/pexels-photo-4750271.jpeg?auto=compress&cs=tinysrgb&w=400',
      vendor: 'GrowTech Pro',
      shipping: 'Free shipping',
      inStock: true,
      trending: false,
      affiliate: true,
    },
    {
      category: 'Starter Kits',
      name: 'Complete Microgreen Growing Kit',
      rating: 4.9,
      reviews: 2156,
      price: '$49.99',
      originalPrice: '$69.99',
      discount: '29% OFF',
      image: 'https://images.pexels.com/photos/4750272/pexels-photo-4750272.jpeg?auto=compress&cs=tinysrgb&w=400',
      vendor: 'MicroGrow Supply',
      shipping: 'Free shipping',
      inStock: true,
      trending: true,
      affiliate: true,
    },
    {
      category: 'Growing Medium',
      name: 'Organic Coconut Coir Mats',
      rating: 4.6,
      reviews: 654,
      price: '$19.99',
      originalPrice: '$24.99',
      discount: '20% OFF',
      image: 'https://images.pexels.com/photos/4750273/pexels-photo-4750273.jpeg?auto=compress&cs=tinysrgb&w=400',
      vendor: 'EcoGrow Supply',
      shipping: '$4.99 shipping',
      inStock: true,
      trending: false,
      affiliate: true,
    },
    {
      category: 'Seeds',
      name: 'Organic Broccoli Microgreen Seeds',
      rating: 4.5,
      reviews: 789,
      price: '$8.99',
      originalPrice: '$11.99',
      discount: '25% OFF',
      image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=400',
      vendor: 'Organic Seeds Co',
      shipping: 'Free shipping',
      inStock: false,
      trending: false,
      affiliate: true,
    },
    {
      category: 'Accessories',
      name: 'Professional Spray Bottle Set',
      rating: 4.4,
      reviews: 432,
      price: '$15.99',
      originalPrice: '$19.99',
      discount: '20% OFF',
      image: 'https://images.pexels.com/photos/4750275/pexels-photo-4750275.jpeg?auto=compress&cs=tinysrgb&w=400',
      vendor: 'Garden Tools Plus',
      shipping: 'Free shipping',
      inStock: true,
      trending: false,
      affiliate: true,
    },
  ];

  const deals = [
    {
      title: 'Flash Sale: 30% Off All Starter Kits',
      description: 'Limited time offer on complete growing kits',
      timeLeft: '2 days left',
      color: 'bg-red-500',
    },
    {
      title: 'Free Shipping Weekend',
      description: 'Free shipping on orders over $25',
      timeLeft: '3 days left',
      color: 'bg-blue-500',
    },
    {
      title: 'Bundle Deal: Seeds + Equipment',
      description: 'Save 25% when you buy seeds and equipment together',
      timeLeft: '5 days left',
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Microgreen <span className="text-gradient">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the best deals on microgreen supplies from trusted vendors. 
              Compare prices, read reviews, and find everything you need to grow successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Special Deals Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid md:grid-cols-3 gap-4">
            {deals.map((deal, index) => (
              <div key={index} className={`${deal.color} text-white p-4 rounded-lg`}>
                <h3 className="font-bold mb-1">{deal.title}</h3>
                <p className="text-sm opacity-90 mb-2">{deal.description}</p>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">{deal.timeLeft}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
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
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card overflow-hidden group relative">
                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                </button>

                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {product.trending && (
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </div>
                    )}
                    {product.discount && (
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.discount}
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-medium text-gray-700">
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
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <span className="text-2xl font-bold text-green-600">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-2">
                    Sold by {product.vendor}
                  </div>
                  
                  <div className="text-sm text-green-600 mb-4">
                    {product.shipping}
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-2 h-2 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <button 
                      className={`w-full py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                        product.inStock 
                          ? 'bg-green-500 hover:bg-green-600 text-white' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {product.inStock ? 'Buy Now' : 'Out of Stock'}
                    </button>
                    
                    <button className="w-full bg-white border-2 border-green-500 text-green-600 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200 flex items-center justify-center">
                      Compare Prices
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                  
                  {product.affiliate && (
                    <p className="text-xs text-gray-500 mt-3 text-center">
                      * Affiliate link - we may earn a commission
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-primary section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss a Deal
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Get notified about flash sales, new product launches, and exclusive discounts 
            from our trusted vendor partners.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}