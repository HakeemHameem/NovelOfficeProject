
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from '@/components/ui/switch';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${isDarkMode ? 'bg-gray-900' : 'bg-appBlue'} text-white w-full`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Loan Calculator</h1>
        
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="text-white p-2"
          >
            <Menu />
          </button>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-200">HOME</Link>
          <Link to="/exchange-rates" className="hover:text-gray-200">EXCHANGE RATES (LIVE)</Link>
          <Link to="/about" className="hover:text-gray-200">ABOUT</Link>
          <Link to="/error" className="hover:text-gray-200">ERROR PAGE</Link>
          <div className="flex items-center ml-4">
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-white"
            />
          </div>
        </nav>

        {mobileMenuOpen && (
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default Header;
