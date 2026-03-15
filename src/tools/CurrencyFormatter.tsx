import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
];

const CurrencyFormatter = () => {
  const [amount, setAmount] = useState("1234567.89");
  const [currency, setCurrency] = useState("USD");

  const num = parseFloat(amount) || 0;

  return (
    <ToolLayout slug="currency-formatter" howTo={["Select a display currency", "Enter a number", "See it formatted in multiple currencies"]} faqs={[{ q: "Does this convert currencies?", a: "No, it only formats numbers in different currency styles." }]}>
      <div className="max-w-md mx-auto space-y-4">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div>
          <label className="text-sm font-medium text-foreground">Amount</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        </div>
        <div className="space-y-2">
          {currencies.map(c => (
            <div key={c.code} className="flex justify-between items-center bg-secondary rounded-xl px-4 py-3">
              <span className="text-sm text-muted-foreground">{c.code} – {c.name}</span>
              <span className="font-mono font-bold text-foreground">{formatCurrency(num, c.code)}</span>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
};
export default CurrencyFormatter;
