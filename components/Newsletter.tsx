'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="bg-gradient-primary section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-8 flex items-center justify-center">
            <Mail className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay Updated with Growing Tips
          </h2>
          
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get weekly expert tips, product alerts, and exclusive guides delivered 
            straight to your inbox. Join 25,000+ successful growers.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                >
                  Subscribe Free
                </button>
              </div>
              <p className="text-green-100 text-sm mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center space-x-3">
                <CheckCircle className="h-6 w-6 text-white" />
                <span className="text-white font-semibold">
                  Successfully subscribed! Check your email.
                </span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Weekly</div>
              <div className="text-green-100">Expert growing tips</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Exclusive</div>
              <div className="text-green-100">Product deals & alerts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Free</div>
              <div className="text-green-100">Advanced guides</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;