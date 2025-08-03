import { useState } from 'react';
import type { ProductImageProps } from "../../types";

const ProductImage = ({ src, alt, variant, className = '' }: ProductImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    small: 'w-16 h-16 sm:w-20 sm:h-20',
    medium: 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28',
    large: 'w-full max-w-24 sm:max-w-none h-24 sm:h-auto',
    responsive: 'w-full h-full'
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoaded(true);
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden rounded-md ${sizeClasses[variant]} ${className}`}>
      {/* Tailwind Skeleton Loader */}
      {!isLoaded && (
        <div className={`absolute inset-0 ${sizeClasses[variant]}`}>
          {/* Animated background */}
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          
          {/* Placeholder icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
        </div>
      )}

      {/* Error State */}
      {isLoaded && hasError && (
        <div className={`flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 text-gray-400 ${sizeClasses[variant]}`}>
          <svg 
            className="w-6 h-6 sm:w-8 sm:h-8 mb-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
          <span className="text-xs font-medium">Failed to load</span>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`
          object-contain transition-all duration-500 hover:scale-110 
          ${sizeClasses[variant]}
          ${isLoaded && !hasError ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
        loading="lazy"
      />
    </div>
  );
};

export default ProductImage;