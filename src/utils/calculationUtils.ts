
export interface AmortizationItem {
  month: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

export type Currency = {
  code: string;
  symbol: string;
  name: string;
}

export const currencies: Currency[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'RUB', symbol: '₽', name: 'Russian Ruble' },
  { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc' }
];

// Mock exchange rates - in a real app, would come from API
export const mockExchangeRates = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.78,
  JPY: 150.59,
  INR: 83.12,
  RUB: 90.25,
  CHF: 0.89
};

// Calculate EMI (Equated Monthly Installment)
export const calculateEMI = (principal: number, interestRate: number, tenureYears: number): number => {
  // Convert interest rate from percentage to decimal and calculate monthly rate
  const monthlyRate = interestRate / 100 / 12;
  // Convert tenure from years to months
  const tenureMonths = tenureYears * 12;
  
  // EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
  const emi = 
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / 
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    
  return emi;
};

// Calculate amortization schedule
export const calculateAmortizationSchedule = (
  principal: number, 
  interestRate: number, 
  tenureYears: number
): AmortizationItem[] => {
  const schedule: AmortizationItem[] = [];
  const monthlyRate = interestRate / 100 / 12;
  const tenureMonths = tenureYears * 12;
  const emi = calculateEMI(principal, interestRate, tenureYears);
  
  let balance = principal;
  
  for (let month = 1; month <= tenureMonths; month++) {
    // Calculate interest for the month
    const interestPayment = balance * monthlyRate;
    
    // Calculate principal for the month
    const principalPayment = emi - interestPayment;
    
    // Update balance
    balance -= principalPayment;
    
    // Ensure we don't have negative balance in the last month due to rounding
    if (month === tenureMonths) {
      balance = Math.max(0, balance);
    }
    
    schedule.push({
      month,
      principal: principalPayment,
      interest: interestPayment,
      remainingBalance: balance
    });
  }
  
  return schedule;
};

// Convert currency
export const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number => {
  // In a real app, this would fetch exchange rates from an API
  return amount * (mockExchangeRates[toCurrency as keyof typeof mockExchangeRates] / 
                  mockExchangeRates[fromCurrency as keyof typeof mockExchangeRates]);
};

// Format currency with 2 decimal places
export const formatCurrency = (amount: number, currency: string): string => {
  const currencyObj = currencies.find(c => c.code === currency);
  return `${amount.toFixed(2)} ${currency}`;
};
