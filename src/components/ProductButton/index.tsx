import type { ProductButtonProps } from "../../types";

const ProductButton = ({ 
  price, 
  variant, 
  fullWidth = false, 
  className = '',
  onClick 
}: ProductButtonProps) => {
  const baseClasses = 'px-3 sm:px-4 py-2 rounded transition-all duration-300 text-sm sm:text-base font-medium';
  
  const variantClasses = {
    primary: 'bg-[var(--color-primary)] text-[var(--color-dark)] border border-[var(--color-dark)] hover:opacity-80',
    secondary: 'bg-[var(--color-secondry)] text-[var(--color-light)] hover:opacity-90',
    outline: 'bg-[var(--color-primary)] text-[var(--color-light)] group-hover:text-[var(--color-primary)] group-hover:bg-[var(--color-light)]'
  };

  const widthClass = fullWidth ? 'w-full' : 'w-full sm:w-auto';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
    >
      Buy for ${price}
    </button>
  );
};

export default ProductButton;