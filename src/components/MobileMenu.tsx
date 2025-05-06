
import { useTheme } from '@/contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className={`fixed inset-y-0 right-0 w-64 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isDarkMode ? 'text-white' : 'text-black'} p-4 flex flex-col`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={onClose} className="p-2">
            <X />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="py-2" onClick={onClose}>HOME</Link>
          <Link to="/exchange-rates" className="py-2" onClick={onClose}>EXCHANGE RATES (LIVE)</Link>
          <Link to="/about" className="py-2" onClick={onClose}>ABOUT</Link>
          <Link to="/error" className="py-2" onClick={onClose}>ERROR PAGE</Link>
          
          <div className="flex items-center pt-4 justify-between">
            <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-appBlue"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
