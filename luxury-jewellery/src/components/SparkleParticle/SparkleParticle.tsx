import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SparkleProps {
  x?: number;
  y?: number;
}

export const SparkleParticle: React.FC<SparkleProps> = ({ x = 0, y = 0 }) => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 30,
      y: y + (Math.random() - 0.5) * 30,
    }));
    setSparkles(newSparkles);

    const timer = setTimeout(() => setSparkles([]), 1500);
    return () => clearTimeout(timer);
  }, [x, y]);

  return (
    <>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-luxury-gold rounded-full pointer-events-none"
          initial={{ opacity: 1, scale: 0, x: sparkle.x, y: sparkle.y }}
          animate={{
            opacity: 0,
            scale: [0, 1.5, 0],
            y: sparkle.y - 20,
          }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      ))}
    </>
  );
};

export const SparkleHover: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isHovered && <SparkleParticle x={position.x} y={position.y} />}
    </div>
  );
};
