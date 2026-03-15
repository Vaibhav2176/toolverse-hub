import { currencies } from "@/lib/currency";

interface CurrencySelectorProps {
  value: string;
  onChange: (code: string) => void;
  className?: string;
}

const CurrencySelector = ({ value, onChange, className = "" }: CurrencySelectorProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label className="text-sm font-medium text-muted-foreground whitespace-nowrap">Currency</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="flex h-9 rounded-lg border border-input bg-background px-3 py-1.5 text-sm outline-none focus:border-primary transition-colors"
      >
        {currencies.map(c => (
          <option key={c.code} value={c.code}>
            {c.code} ({c.symbol})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
