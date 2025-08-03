
export type Theme = 'theme1' | 'theme2' | 'theme3';

export type LayoutType = 'list' | 'sidebar' | 'grid';

export type ProductCardVariant = 'horizontal' | 'vertical' | 'compact';

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductImageProps {
  src: string;
  alt: string;
  variant: 'small' | 'medium' | 'large' | 'responsive';
  className?: string;
}

export interface ProductButtonProps {
  price: number;
  variant: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface ProductCardProps {
  product: Product;
  variant: ProductCardVariant;
  showDescription?: boolean;
  descriptionLength?: number;
  onProductClick?: (product: Product) => void;
}

export interface SidebarProps {
  categories?: string[];
  onCategorySelect?: (category: string) => void;
  className?: string;
}

export interface ProductLayoutProps {
  products: Product[];
  layoutType: LayoutType;
  onProductClick?: (product: Product) => void;
  onCategorySelect?: (category: string) => void;
  categories?: string[];
}

export interface NoItemsFoundProps {
  title?: string;
  message?: string;
  showRefreshButton?: boolean;
  onRefresh?: () => void;
  className?: string;
}