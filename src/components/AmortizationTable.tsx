
import React from 'react';
import { AmortizationItem, formatCurrency } from '@/utils/calculationUtils';
import { useTheme } from '@/contexts/ThemeContext';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface AmortizationTableProps {
  schedule: AmortizationItem[];
  currency: string;
}

const AmortizationTable: React.FC<AmortizationTableProps> = ({ schedule, currency }) => {
  const { isDarkMode } = useTheme();
  
  if (!schedule.length) return null;
  
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-4">Amortization Schedule ({currency})</h3>
      
      <div className={`border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden`}>
        <Table>
          <TableHeader>
            <TableRow className={isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}>
              <TableHead className="w-24">Month</TableHead>
              <TableHead>Principal</TableHead>
              <TableHead>Interest</TableHead>
              <TableHead>Remaining Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((item) => (
              <TableRow key={item.month} className={isDarkMode ? 'border-gray-700' : 'border-gray-200'}>
                <TableCell>{item.month}</TableCell>
                <TableCell>{formatCurrency(item.principal, currency)}</TableCell>
                <TableCell>{formatCurrency(item.interest, currency)}</TableCell>
                <TableCell>{formatCurrency(item.remainingBalance, currency)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AmortizationTable;
