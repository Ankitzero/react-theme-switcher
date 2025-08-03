import type { SidebarProps } from "../../types";

const Sidebar = ({ 
  categories = ['All Products', 'Electronics', 'Clothing', 'Jewelry'],
  onCategorySelect,
  className = ''
}: SidebarProps) => {
  return (
    <aside className={`lg:col-span-3 xl:col-span-2 p-4 bg-[var(--color-primary)] text-[var(--color-light)] rounded h-fit ${className}`}>
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Categories</h2>
      <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
        {categories.map((category) => (
          <li 
            key={category}
            className="cursor-pointer hover:opacity-80 py-1 transition-opacity"
            onClick={() => onCategorySelect?.(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;