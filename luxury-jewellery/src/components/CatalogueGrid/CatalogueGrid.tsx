import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SparkleHover } from '../SparkleParticle/SparkleParticle';

type Category = 'all' | 'bridal' | 'royal' | 'minimalist' | 'daily-glamour';

interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  imageUrl?: string;
}

const mockProducts: Product[] = [
  { id: '1', name: 'Eternal Promise Ring', price: 3500, category: 'bridal' },
  { id: '2', name: 'Royal Sapphire Necklace', price: 12000, category: 'royal' },
  { id: '3', name: 'Minimalist Gold Band', price: 850, category: 'minimalist' },
  { id: '4', name: 'Diamond Stud Earrings', price: 2200, category: 'daily-glamour' },
  { id: '5', name: 'Bridal Tiara', price: 8500, category: 'bridal' },
  { id: '6', name: 'Heritage Ruby Pendant', price: 15000, category: 'royal' },
  { id: '7', name: 'Simple Elegance Bracelet', price: 1200, category: 'minimalist' },
  { id: '8', name: 'Pearl Drop Earrings', price: 1800, category: 'daily-glamour' },
  { id: '9', name: 'Vintage Engagement Ring', price: 5500, category: 'bridal' },
];

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Collections' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'royal', label: 'Royal' },
  { id: 'minimalist', label: 'Minimalist' },
  { id: 'daily-glamour', label: 'Daily Glamour' },
];

export const CatalogueGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="min-h-screen bg-luxury-deepBlack pt-20 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-luxury-pearl mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-luxury-cream/80">
            Discover pieces that tell your unique story
          </p>
        </motion.div>

        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <motion.div
            className="relative w-full md:w-96"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <input
              type="text"
              placeholder="Search collections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 bg-luxury-charcoal/50 border border-luxury-gold/30 text-luxury-pearl placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold transition-colors"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-luxury-gold text-luxury-deepBlack'
                    : 'border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <SparkleHover>
                <motion.div
                  className="bg-luxury-charcoal/30 rounded-lg overflow-hidden cursor-pointer group"
                  whileHover={{ y: -10, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="relative h-80 bg-gradient-to-br from-luxury-gold/20 to-luxury-darkGold/40 flex items-center justify-center overflow-hidden">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <motion.div
                        className="w-40 h-40 rounded-full bg-luxury-gold/30"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-luxury-deepBlack/0 group-hover:bg-luxury-deepBlack/30 transition-all duration-300 flex items-center justify-center">
                      <motion.span
                        className="text-luxury-pearl font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        VIEW DETAILS
                      </motion.span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif text-luxury-pearl mb-2 group-hover:text-luxury-gold transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-luxury-gold text-lg font-semibold">
                        ${product.price.toLocaleString()}
                      </p>
                      <motion.button
                        className="text-luxury-cream/60 hover:text-luxury-gold transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </motion.button>
                    </div>
                    <p className="text-luxury-cream/50 text-sm mt-2 capitalize">
                      {product.category.replace('-', ' ')}
                    </p>
                  </div>
                </motion.div>
              </SparkleHover>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-luxury-cream/60 text-xl">
              No products found matching your criteria
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
