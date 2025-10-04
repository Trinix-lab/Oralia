import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-luxury-deepBlack/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif text-luxury-gold tracking-wider">
          LUMIÈRE
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/catalogue"
            className="text-luxury-pearl hover:text-luxury-gold transition-colors duration-300"
          >
            Collections
          </Link>
          <Link
            to="/journey"
            className="text-luxury-pearl hover:text-luxury-gold transition-colors duration-300"
          >
            Our Story
          </Link>
          <button className="px-6 py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-deepBlack transition-all duration-300">
            Book Consultation
          </button>
        </nav>

        <button className="md:hidden text-luxury-gold">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};
