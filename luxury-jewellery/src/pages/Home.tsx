import { HeroScene } from '../components/HeroScene/HeroScene';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroScene />

      <section className="py-20 bg-luxury-charcoal/20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-pearl mb-4">
              Featured Collections
            </h2>
            <p className="text-luxury-cream/80 text-lg">
              Handpicked pieces that define elegance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Bridal Elegance', 'Royal Heritage', 'Modern Minimalist'].map((collection, index) => (
              <motion.div
                key={collection}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-96 bg-gradient-to-br from-luxury-gold/20 to-luxury-darkGold/40 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-luxury-gold/30 animate-pulse-glow"></div>
                  </div>
                  <div className="absolute inset-0 bg-luxury-deepBlack/0 group-hover:bg-luxury-deepBlack/30 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-serif text-luxury-pearl mt-4 group-hover:text-luxury-gold transition-colors">
                  {collection}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
