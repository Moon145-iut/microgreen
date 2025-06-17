import { Star, ExternalLink, TrendingUp, Filter, Search } from 'lucide-react';

export default function ReviewsPage() {
  const categories = ['All', 'Seeds', 'Equipment', 'Growing Medium', 'Accessories'];
  
  const products = [
    {
      category: 'Seeds',
      name: 'Premium Sunflower Microgreen Seeds',
      rating: 4.8,
      reviews: 1247,
      price: '$12.99',
      originalPrice: '$16.99',
      image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Organic certified', 'High germination rate', '1lb package', 'Non-GMO'],
      vendor: 'GreenThumb Seeds',
      trending: true,
      pros: ['Excellent germination rate', 'Great flavor', 'Fast shipping'],
      cons: ['Slightly expensive', 'Limited packaging sizes'],
    },
    {
      category: 'Equipment',
      name: 'LED Growing Light Panel - Full Spectrum',
      rating: 4.7,
      reviews: 892,
      price: '$89.99',
      originalPrice: '$119.99',
      image: 'https://images.pexels.com/photos/4750271/pexels-photo-4750271.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Full spectrum', 'Energy efficient', '2-year warranty', 'Adjustable height'],
      vendor: 'GrowTech Pro',
      trending: false,
      pros: ['Great light coverage', 'Energy efficient', 'Sturdy build'],
      cons: ['No timer included', 'Gets warm during use'],
    },
    {
      category: 'Growing Medium',
      name: 'Coconut Coir Growing Mats',
      rating: 4.6,
      reviews: 654,
      price: '$19.99',
      originalPrice: '$24.99',
      image: 'https://images.pexels.com/photos/4750272/pexels-photo-4750272.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['100% natural', 'Perfect drainage', 'Reusable', 'Pack of 20'],
      vendor: 'EcoGrow Supply',
      trending: true,
      pros: ['Natural material', 'Good water retention', 'Easy to use'],
      cons: ['Can be messy', 'Needs pre-soaking'],
    },
    {
      category: 'Equipment',
      name: 'Microgreen Growing Trays Set',
      rating: 4.9,
      reviews: 2156,
      price: '$24.99',
      originalPrice: '$34.99',
      image: 'https://images.pexels.com/photos/4750273/pexels-photo-4750273.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['BPA-free plastic', 'Drainage holes', 'Set of 10', 'Stackable design'],
      vendor: 'MicroGrow Supply',
      trending: true,
      pros: ['Perfect size', 'Durable material', 'Great value'],
      cons: ['Could use better drainage', 'Stacking can be unstable'],
    },
    {
      category: 'Seeds',
      name: 'Organic Broccoli Microgreen Seeds',
      rating: 4.5,
      reviews: 789,
      price: '$8.99',
      originalPrice: '$11.99',
      image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['USDA Organic', 'High nutrition', '8oz package', 'Easy to grow'],
      vendor: 'Organic Seeds Co',
      trending: false,
      pros: ['Great taste', 'Reliable germination', 'Good price'],
      cons: ['Smaller seeds', 'Takes longer to grow'],
    },
    {
      category: 'Accessories',
      name: 'Spray Bottle for Misting',
      rating: 4.4,
      reviews: 432,
      price: '$7.99',
      originalPrice: '$9.99',
      image: 'https://images.pexels.com/photos/4750275/pexels-photo-4750275.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Fine mist nozzle', '16oz capacity', 'Ergonomic design', 'Chemical resistant'],
      vendor: 'Garden Tools Plus',
      trending: false,
      pros: ['Fine mist', 'Comfortable grip', 'Good capacity'],
      cons: ['Nozzle can clog', 'Not the most durable'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Product <span className="text-gradient">Reviews</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive reviews of the best microgreen supplies, equipment, and seeds. 
              Make informed decisions with our expert analysis and community ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
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
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-600 mb-1">Pros:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-start">
                            <span className="text-green-500 mr-2">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-600 mb-1">Cons:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-start">
                            <span className="text-red-500 mr-2">-</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
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
        </div>
      </section>
    </div>
  );
}