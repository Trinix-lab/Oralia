import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Suspense } from 'react';

const JewelModel: React.FC = () => {
  return (
    <mesh>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
    </mesh>
  );
};

interface ProductViewerProps {
  productName: string;
  price: number;
  description: string;
}

export const ProductViewer: React.FC<ProductViewerProps> = ({
  productName,
  price,
  description,
}) => {
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div className="min-h-screen bg-luxury-deepBlack pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[500px] lg:h-[700px] bg-luxury-charcoal/30 rounded-lg overflow-hidden">
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-luxury-gold"></div>
                </div>
              }
            >
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <JewelModel />
                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  autoRotate={isRotating}
                  autoRotateSpeed={2}
                />
                <Environment preset="sunset" />
              </Canvas>
            </Suspense>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={() => setIsRotating(!isRotating)}
                className="px-4 py-2 bg-luxury-gold/20 backdrop-blur-md text-luxury-gold border border-luxury-gold hover:bg-luxury-gold hover:text-luxury-deepBlack transition-all duration-300"
              >
                {isRotating ? 'Pause' : 'Rotate'}
              </button>
              <button className="px-4 py-2 bg-luxury-gold/20 backdrop-blur-md text-luxury-gold border border-luxury-gold hover:bg-luxury-gold hover:text-luxury-deepBlack transition-all duration-300">
                Try AR
              </button>
            </div>
          </div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-luxury-pearl mb-4">
              {productName}
            </h1>

            <motion.p
              className="text-3xl text-luxury-gold mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              ${price.toLocaleString()}
            </motion.p>

            <p className="text-luxury-cream/80 text-lg leading-relaxed mb-8">
              {description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-luxury-pearl">
                <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Handcrafted by master artisans</span>
              </div>
              <div className="flex items-center gap-3 text-luxury-pearl">
                <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certified authenticity guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-luxury-pearl">
                <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span>Complimentary luxury packaging</span>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.button
                className="flex-1 px-8 py-4 bg-luxury-gold text-luxury-deepBlack font-semibold tracking-wider hover:bg-luxury-darkGold transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Add to Cart
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-deepBlack transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Consultation
              </motion.button>
            </div>

            <button className="mt-6 flex items-center gap-2 text-luxury-gold hover:text-luxury-darkGold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Add to Wishlist
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-serif text-luxury-pearl mb-8 text-center">
            Complete Your Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="bg-luxury-charcoal/30 rounded-lg overflow-hidden cursor-pointer group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-64 bg-gradient-to-br from-luxury-gold/20 to-luxury-darkGold/40 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-luxury-gold/30 animate-pulse-glow"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-luxury-pearl mb-2">Matching Earrings</h3>
                  <p className="text-luxury-gold text-lg">$2,500</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
