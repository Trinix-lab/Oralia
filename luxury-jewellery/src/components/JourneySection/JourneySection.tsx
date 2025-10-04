import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface JourneyPanelProps {
  title: string;
  content: string;
  imageUrl?: string;
  reverse?: boolean;
}

const JourneyPanel: React.FC<JourneyPanelProps> = ({ title, content, imageUrl, reverse }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`${reverse ? 'lg:order-2' : ''}`}>
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-luxury-pearl mb-6"
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="text-luxury-cream/80 text-lg leading-relaxed space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>
      </div>

      <motion.div
        className={`relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg ${
          reverse ? 'lg:order-1' : ''
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/30 to-luxury-charcoal/50">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="w-48 h-48 rounded-full bg-luxury-gold/20 animate-pulse-glow"></div>
            </div>
          )}
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-luxury-deepBlack/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export const JourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.journey-title', {
        scrollTrigger: {
          trigger: '.journey-title',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 100,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const journeyData = [
    {
      title: 'The Beginning',
      content:
        'Every masterpiece begins with a vision. In the heart of ancient traditions and modern elegance, our story unfolds—a tale of passion, precision, and timeless beauty.\n\nOur founders dreamed of creating jewellery that would transcend generations, pieces that would carry stories and memories through time.',
    },
    {
      title: 'The Artisans',
      content:
        'Behind every piece lies the dedication of master craftsmen, whose hands have been trained through generations. Each gemstone is selected with care, each setting perfected with patience.\n\nOur artisans bring decades of expertise, combining traditional techniques with contemporary innovation to create pieces that are both timeless and modern.',
      reverse: true,
    },
    {
      title: 'The Promise',
      content:
        'We promise not just jewellery, but heirlooms. Not just adornments, but symbols of love, celebration, and legacy. Every piece we create carries our commitment to excellence and your dreams.\n\nFrom the moment you choose us, you become part of our extended family—a community that values beauty, craftsmanship, and meaningful connections.',
      reverse: false,
    },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-luxury-deepBlack py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="journey-title text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-luxury-pearl mb-6">
            Our Journey
          </h1>
          <p className="text-xl text-luxury-cream/80 max-w-2xl mx-auto">
            A legacy of elegance, crafted with passion and perfected through time
          </p>
        </motion.div>

        {journeyData.map((panel, index) => (
          <JourneyPanel key={index} {...panel} />
        ))}

        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto">
            <motion.p
              className="text-2xl md:text-3xl font-serif text-luxury-gold italic leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              "Like stars in the night sky, each piece we create shines with its own unique light,
              waiting to illuminate the moments that matter most."
            </motion.p>
            <p className="mt-6 text-luxury-cream/60 text-lg">— Master Artisan, Lumière</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
