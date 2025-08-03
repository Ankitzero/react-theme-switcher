import type { ProductCardProps } from "../../types";
import ProductButton from "../ProductButton";
import ProductImage from "../ProductImage";

const ProductCard = ({ 
  product, 
  variant, 
  showDescription = true, 
  descriptionLength = 100,
  onProductClick 
}: ProductCardProps) => {
  const handleClick = () => {
    onProductClick?.(product);
  };

  // Horizontal layout (Theme 1 style)
  if (variant === 'horizontal') {
    return (
      <div className="p-3 sm:p-4 lg:p-6 border rounded shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-300 bg-[var(--color-primary)]">
        <div className="flex justify-center sm:justify-start">
          <ProductImage
            src={product.image}
            alt={product.title}
            variant="medium"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 line-clamp-2">
            {product.title}
          </h2>
          {showDescription && (
            <p className="text-xs sm:text-sm mb-3 line-clamp-2">
              {product.description.slice(0, descriptionLength)}...
            </p>
          )}
          <ProductButton
            price={product.price}
            variant="primary"
            onClick={handleClick}
          />
        </div>
      </div>
    );
  }

  // Vertical layout (Theme 3 style)
  if (variant === 'vertical') {
    return (
      <div className="rounded-xl p-3 sm:p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden bg-[var(--bg)] text-[var(--color-secondry)]">
        <div className="aspect-square mb-3 sm:mb-4 overflow-hidden rounded-lg">
          <ProductImage
            src={product.image}
            alt={product.title}
            variant="responsive"
          />
        </div>
        
        <div className="space-y-2 sm:space-y-3">
          <h3 className="font-bold text-sm sm:text-base lg:text-lg line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
            {product.title}
          </h3>
          
          {showDescription && (
            <p className="text-xs sm:text-sm text-opacity-80 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
              {product.description}
            </p>
          )}
          
          <div className="pt-2 sm:pt-3">
            <ProductButton
              price={product.price}
              variant="secondary"
              fullWidth={true}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    );
  }

  // Compact layout (Theme 2 style)
  return (
    <div className="group grid grid-cols-1 sm:grid-cols-12 gap-4 p-3 sm:p-4 border rounded hover:bg-[var(--color-primary)] hover:text-[var(--color-light)] shadow-sm transition-all duration-300">
      <div className="sm:col-span-4 md:col-span-3 flex justify-center">
        <ProductImage
          src={product.image}
          alt={product.title}
          variant="large"
        />
      </div>
      <div className="sm:col-span-8 md:col-span-9 text-center sm:text-left">
        <h2 className="text-base sm:text-lg font-bold mb-2 line-clamp-2">
          {product.title}
        </h2>
        {showDescription && (
          <p className="text-xs sm:text-sm mb-3 line-clamp-2 sm:line-clamp-3">
            {product.description.slice(0, descriptionLength)}...
          </p>
        )}
        <ProductButton
          price={product.price}
          variant="outline"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ProductCard;