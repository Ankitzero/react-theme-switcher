import { useContext, useState, useEffect } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ThemeContext } from '../contexts/ThemeContext';
import ProductLayout from '../components/ProductLayout';
import NoItemsFound from '../components/NoItemsFound';
import Loader from '../components/Loader';
import type { LayoutType, Product } from '../types';

const Home = () => {
  const { products, loading } = useProducts();
  const { theme } = useContext(ThemeContext);
  const [isAnimating, setIsAnimating] = useState(false);

  // Simple animation trigger when theme changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [theme]);

  const getLayoutType = (theme: string): LayoutType => {
    switch (theme) {
      case 'theme1': return 'list';
      case 'theme2': return 'sidebar';
      case 'theme3': return 'grid';
      default: return 'list';
    }
  };

  const handleProductClick = (product: Product) => {
    console.log('Product clicked:', product);
  };

  const handleCategorySelect = (category: string) => {
    console.log('Category selected:', category);
  };

  const handleRefresh = () => {
    window.location.reload();

  };

  const layoutType = getLayoutType(theme);

  return (
    <div>
      {loading && <Loader />}

      {/* Check for no products after loading is complete */}
      {!loading && products.length === 0 ? (
        <div
          className={`transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        >
          <NoItemsFound
            title="No Products Available"
            message="We're currently out of products. Please check back later or try refreshing the page."
            onRefresh={handleRefresh}
          />
        </div>
      ) : (
        /* Normal product display with animation */
        <div
          className={`transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        >
          <ProductLayout
            products={products}
            layoutType={layoutType}
            onProductClick={handleProductClick}
            onCategorySelect={handleCategorySelect}
            categories={['All Products', 'Electronics', 'Clothing', 'Jewelry']}
          />
        </div>
      )}
    </div>
  );
};

export default Home;