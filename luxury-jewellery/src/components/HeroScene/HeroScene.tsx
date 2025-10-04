import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import gsap from 'gsap';

export const HeroScene: React.FC = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    gsap.to('.hero-video', {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [mousePosition]);

  const handleDiscoverClick = () => {
    gsap.to(window, {
      scrollTo: { y: window.innerHeight, autoKill: true },
      duration: 1,
      ease: 'power2.inOut',
    });
  };

  const handleNecklaceClick = () => {
    navigate('/product/featured-necklace');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="hero-video absolute inset-0 flex items-center justify-center"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="relative w-full h-full bg-gradient-to-b from-luxury-deepBlack via-luxury-charcoal to-luxury-deepBlack">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              onClick={handleNecklaceClick}
            >
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-luxury-gold/20 to-luxury-darkGold/40 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-luxury-gold/10 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#B8941E" />
                        </linearGradient>
                      </defs>
                      <circle cx="100" cy="100" r="40" fill="url(#goldGradient)" />
                      <ellipse cx="100" cy="60" rx="30" ry="8" fill="url(#goldGradient)" opacity="0.8" />
                      <path d="M 70 100 Q 70 140, 100 160 Q 130 140, 130 100" fill="url(#goldGradient)" />
                      <circle cx="100" cy="100" r="10" fill="#FAF9F6" opacity="0.9" />
                    </svg>
                  </motion.div>

                  <p className="text-luxury-gold text-sm md:text-base tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    CLICK TO EXPLORE
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-luxury-gold rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-luxury-pearl mb-6 text-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Her Story, Her Elegance
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-luxury-cream/80 mb-12 text-center px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          A journey through timeless beauty
        </motion.p>

        <motion.button
          className="pointer-events-auto px-8 py-4 bg-luxury-gold text-luxury-deepBlack font-semibold tracking-wider hover:bg-luxury-darkGold transition-colors duration-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          onClick={handleDiscoverClick}
        >
          Discover Her Story
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};
