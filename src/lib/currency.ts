export interface CurrencyOption {
  code: string;
  symbol: string;
  name: string;
  locale: string;
}

export const currencies: CurrencyOption[] = [
  { code: "USD", symbol: "$", name: "US Dollar", locale: "en-US" },
  { code: "EUR", symbol: "€", name: "Euro", locale: "de-DE" },
  { code: "GBP", symbol: "£", name: "British Pound", locale: "en-GB" },
  { code: "INR", symbol: "₹", name: "Indian Rupee", locale: "en-IN" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen", locale: "ja-JP" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar", locale: "en-AU" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar", locale: "en-CA" },
  { code: "CHF", symbol: "CHF", name: "Swiss Franc", locale: "de-CH" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan", locale: "zh-CN" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar", locale: "en-SG" },
];

export const formatCurrency = (amount: number, currencyCode: string = "USD"): string => {
  const curr = currencies.find(c => c.code === currencyCode) || currencies[0];
  return new Intl.NumberFormat(curr.locale, {
    style: "currency",
    currency: curr.code,
    minimumFractionDigits: curr.code === "JPY" ? 0 : 2,
    maximumFractionDigits: curr.code === "JPY" ? 0 : 2,
  }).format(amount);
};

export const getCurrencySymbol = (code: string): string => {
  return currencies.find(c => c.code === code)?.symbol || "$";
};

// Static exchange rates (approximate, for demonstration)
export const exchangeRates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.12,
  JPY: 149.50,
  AUD: 1.53,
  CAD: 1.36,
  CHF: 0.88,
  CNY: 7.24,
  SGD: 1.34,
};
