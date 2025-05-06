
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { calculateEMI, calculateAmortizationSchedule, convertCurrency, formatCurrency, AmortizationItem, currencies } from '@/utils/calculationUtils';
import AmortizationTable from './AmortizationTable';
import { useTheme } from '@/contexts/ThemeContext';

const LoanCalculator: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [loanTerm, setLoanTerm] = useState<number>(5);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [amortizationSchedule, setAmortizationSchedule] = useState<AmortizationItem[]>([]);
  
  const handleCalculate = () => {
    const emi = calculateEMI(loanAmount, interestRate, loanTerm);
    setMonthlyPayment(emi);
    
    const schedule = calculateAmortizationSchedule(loanAmount, interestRate, loanTerm);
    setAmortizationSchedule(schedule);
  };
  
  const handleReset = () => {
    setAmortizationSchedule([]);
    setMonthlyPayment(null);
  };
  
  return (
    <div className={`w-full ${isDarkMode ? 'text-white' : 'text-black'}`}>
      <h2 className="text-3xl font-bold mb-8">Loan Calculator Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-1">Loan Amount</label>
          <Input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="calculator-input"
          />
        </div>
        
        <div>
          <label className="block mb-1">Interest Rate (%)</label>
          <Input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            step="0.1"
            className="calculator-input"
          />
        </div>
        
        <div>
          <label className="block mb-1">Term (Years)</label>
          <Input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="calculator-input"
          />
        </div>
      </div>
      
      <Button 
        onClick={handleCalculate}
        className={`bg-appBlue hover:bg-blue-700 text-white`}
      >
        CALCULATE
      </Button>
      
      {monthlyPayment !== null && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">
            Monthly EMI: {formatCurrency(monthlyPayment, selectedCurrency)}
          </h3>
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <label className="block mb-1">Currency</label>
              <Select 
                value={selectedCurrency} 
                onValueChange={setSelectedCurrency}
              >
                <SelectTrigger className="w-32">
                  <SelectValue>{selectedCurrency}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {currencies.map(currency => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.code} - {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={handleReset} 
              variant="outline" 
              className={`${isDarkMode ? 'text-white border-white' : 'text-purple-600 border-purple-600'}`}
            >
              RESET TABLE
            </Button>
          </div>
          
          <AmortizationTable 
            schedule={amortizationSchedule} 
            currency={selectedCurrency}
          />
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
