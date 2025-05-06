
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-8">About This App</h2>
      
      <p className="mb-6">
        This Loan Calculator App is a modern, single-page web application built using React JS. It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.
      </p>
      
      <div className="border-t border-b py-8 my-8">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">📋</span> Instructions for Candidates
        </h3>
        
        <p className="mb-4">Please follow these instructions to complete and submit your project:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Push the entire project to a public <strong>GitHub repository</strong>.</li>
          <li>Make sure to <strong>commit regularly</strong> with clear messages after completing each feature.</li>
          <li>Use the provided EMI formula to perform calculations.</li>
          <li>Use <strong>Context API</strong> for global state management (e.g. theme, currency).</li>
          <li>Create <strong>custom React hooks</strong> for reusable logic (e.g. EMI calculation, fetching exchange rates).</li>
          <li>Integrate the <strong>ExchangeRate API</strong> for live currency conversion.</li>
          <li>Ensure the app is fully <strong>responsive</strong> on all screen sizes.</li>
          <li>Implement both <strong>light and dark modes</strong> using the theming system.</li>
          <li>Add a <strong>404 Not Found</strong> page for unmatched routes.</li>
          <li>Handle runtime errors gracefully by showing an <strong>Error Page</strong>.</li>
          <li>Once deployed, add the live deployment link in the <strong>About section</strong> of your GitHub repo.</li>
          <li>Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages).</li>
        </ul>
        
        <div className="mt-6 flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <p>Your final GitHub repository should include a live demo link, and your code should be readable, modular, and well-structured.</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🔧</span> Features
        </h3>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Loan EMI calculation using standard financial formulas</li>
          <li>Dynamic amortization schedule table with monthly breakdown</li>
          <li>Real-time currency conversion of EMI using a live exchange rate API</li>
          <li>Paginated exchange rate table for 160+ currencies</li>
          <li>Dark/Light mode toggle for a customizable experience</li>
          <li>Collapsible header navigation on mobile screens</li>
          <li>Fully responsive UI built with modern design principles</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🧰</span> Technologies Used
        </h3>
        
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>React</strong> (Hooks, Routing, Context API)</li>
          <li><strong>Tailwind CSS</strong> for styling and responsive components</li>
          <li><strong>Axios</strong> for API calls</li>
          <li><strong>Exchange Rate API</strong> for real-time currency conversion</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🧮</span> EMI Formula Used
        </h3>
        
        <p className="mb-4">The EMI (Equated Monthly Installment) is calculated using the standard formula:</p>
        
        <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-md mb-4`}>
          <code>EMI = [P x R x (1+R)^N]/[(1+R)^N-1]</code>
        </div>
        
        <p>Where:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>P</strong> = Principal loan amount</li>
          <li><strong>R</strong> = Monthly interest rate (annual rate / 12 / 100)</li>
          <li><strong>N</strong> = Loan duration in months</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌐</span> Currency Conversion API
        </h3>
        
        <p className="mb-4">This app integrates with the free tier of the ExchangeRate-API to fetch live exchange rates.</p>
        
        <p className="mb-2">API Endpoint Example:</p>
        <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-md mb-4`}>
          <code>https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD</code>
        </div>
        
        <p>You must register and obtain a free API key to use this endpoint. Then, replace YOUR_API_KEY in the app code with your actual key.</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🎯</span> Purpose of This App
        </h3>
        
        <p className="mb-4">This project is designed to assess a candidate's React development skills, including:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>React fundamentals (state, props, hooks)</li>
          <li>Component structure and code reusability</li>
          <li>Third-party API integration and live data rendering</li>
          <li>Working with tables, lists, and pagination</li>
          <li>Theme customization (dark/light mode toggle)</li>
          <li>Error handling and graceful UI fallbacks</li>
          <li>Responsive design and collapsible mobile header navigation</li>
        </ul>
      </div>
      
      <div className="flex items-center">
        <span className="mr-2">⭐</span>
        <p>For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.</p>
      </div>
    </div>
  );
};

export default About;
