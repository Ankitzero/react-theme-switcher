import type { ProductLayoutProps } from "../../types";
import ProductCard from "../ProductCard";
import Sidebar from "../Sidebar";

const ProductLayout = ({ 
  products, 
  layoutType, 
  onProductClick, 
  onCategorySelect,
  categories 
}: ProductLayoutProps) => {
  const containerClasses = "px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto";

  // List Layout (Theme 1)
  if (layoutType === 'list') {
    return (
      <div className={containerClasses}>
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant="horizontal"
              onProductClick={onProductClick}
            />
          ))}
        </div>
      </div>
    );
  }

  // Sidebar Layout (Theme 2)
  if (layoutType === 'sidebar') {
    return (
      <div className={containerClasses}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          <Sidebar 
            categories={categories}
            onCategorySelect={onCategorySelect}
          />
          
          <section className="lg:col-span-9 xl:col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  variant="compact"
                  onProductClick={onProductClick}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Grid Layout (Theme 3)
  return (
    <div className={containerClasses}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="vertical"
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductLayout;