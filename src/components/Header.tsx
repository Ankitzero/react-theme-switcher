import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { NavLink } from 'react-router-dom';
import type { Theme } from '../types';

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className="w-full fixed top-0 flex justify-between items-center shadow z-50 p-4 bg-[var(--bg)] text-[var(--text)]">
      <h1 className="text-xl font-bold">
        <NavLink to="/">Shop</NavLink>
      </h1>
      <nav className="flex gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>Contact</NavLink>
      </nav>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as Theme)}
        className="border rounded bg-[white] text-black"
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
};
