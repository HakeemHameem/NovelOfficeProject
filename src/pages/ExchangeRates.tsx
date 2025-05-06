
import React, { useState, useEffect } from 'react';
import { mockExchangeRates, currencies } from '@/utils/calculationUtils';
import { useTheme } from '@/contexts/ThemeContext';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ExchangeRates: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [baseCurrency, setBaseCurrency] = useState<string>("USD");
  const [rates, setRates] = useState<Record<string, number>>(mockExchangeRates);

  // In a real app, this would fetch from an API
  useEffect(() => {
    // Simulated API call
    const normalizedRates: Record<string, number> = {};
    const baseRate = mockExchangeRates[baseCurrency as keyof typeof mockExchangeRates];
    
    Object.entries(mockExchangeRates).forEach(([code, rate]) => {
      normalizedRates[code] = rate / baseRate;
    });
    
    setRates(normalizedRates);
  }, [baseCurrency]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-8">Exchange Rates (Live)</h2>
      
      <div className="mb-6">
        <label className="block mb-2">Base Currency:</label>
        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
          className={`px-4 py-2 rounded border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
        >
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className={`border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden`}>
        <Table>
          <TableHeader>
            <TableRow className={isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}>
              <TableHead>Currency</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Rate (against {baseCurrency})</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currencies.map(currency => (
              <TableRow key={currency.code} className={isDarkMode ? 'border-gray-700' : 'border-gray-200'}>
                <TableCell>{currency.name}</TableCell>
                <TableCell>{currency.code}</TableCell>
                <TableCell>
                  {currency.code === baseCurrency 
                    ? '1.00' 
                    : rates[currency.code]?.toFixed(6)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ExchangeRates;
