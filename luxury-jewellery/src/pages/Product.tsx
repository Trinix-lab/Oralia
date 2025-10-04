import { useParams } from 'react-router-dom';
import { ProductViewer } from '../components/ProductViewer/ProductViewer';

export const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const productData = {
    'featured-necklace': {
      productName: 'Celestial Diamond Necklace',
      price: 18500,
      description:
        'An extraordinary piece that captures the essence of celestial beauty. This necklace features a stunning array of ethically sourced diamonds, each carefully selected for its brilliance and clarity. The intricate design represents the journey of a woman through time—elegant, powerful, and timeless. Handcrafted by our master artisans using techniques passed down through generations, this piece is more than jewellery; it\'s a legacy.',
    },
    '1': {
      productName: 'Eternal Promise Ring',
      price: 3500,
      description:
        'A timeless symbol of eternal love, crafted with precision and adorned with the finest diamonds. This ring represents commitment, promise, and everlasting devotion.',
    },
    '2': {
      productName: 'Royal Sapphire Necklace',
      price: 12000,
      description:
        'An exquisite piece fit for royalty, featuring a rare sapphire centerpiece surrounded by diamonds. Each stone tells a story of luxury and heritage.',
    },
  };

  const product = productData[id as keyof typeof productData] || productData['featured-necklace'];

  return <ProductViewer {...product} />;
};
