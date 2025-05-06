
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ErrorPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
      <h2 className="text-6xl font-bold mb-4">Error</h2>
      
      <div className={`w-24 h-24 rounded-full ${isDarkMode ? 'bg-red-700' : 'bg-red-500'} text-white flex items-center justify-center text-4xl mb-6`}>
        !
      </div>
      
      <h3 className="text-xl mb-6">Something went wrong</h3>
      
      <p className="mb-8 max-w-md">
        We apologize for the inconvenience. The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Button asChild>
        <Link to="/" className="px-6">
          Return to Home
        </Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
