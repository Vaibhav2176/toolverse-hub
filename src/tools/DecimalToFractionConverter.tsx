import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const DecimalToFractionConverter = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ num: number; den: number; mixed: string } | null>(null);

  const convert = () => {
    setError("");
    setResult(null);
    const trimmed = input.trim();
    if (!trimmed) {
      setError("Please enter a decimal number.");
      return;
    }
    // support repeating decimal notation like 0.3(3) or 0.1(6)
    const repeatMatch = trimmed.match(/^(-?)(\d+)\.(\d*)\((\d+)\)$/);
    let num: number, den: number;
    if (repeatMatch) {
      const [, sign, intPart, nonRep, rep] = repeatMatch;
      const a = parseInt(intPart + nonRep + rep, 10) - parseInt(intPart + nonRep || "0", 10);
      const b = Math.pow(10, nonRep.length + rep.length) - Math.pow(10, nonRep.length);
      num = a;
      den = b;
      if (sign === "-") num = -num;
    } else {
      const value = Number(trimmed);
      if (!Number.isFinite(value)) {
        setError("Please enter a valid decimal number.");
        return;
      }
      const decimalPart = trimmed.includes(".") ? trimmed.split(".")[1].replace("-", "") : "";
      const places = decimalPart.length;
      den = Math.pow(10, places);
      num = Math.round(value * den);
    }
    if (den === 0) {
      setError("Could not convert this value.");
      return;
    }
    const g = gcd(Math.abs(num), Math.abs(den)) || 1;
    num /= g; den /= g;
    const sign = num < 0 ? -1 : 1;
    const absN = Math.abs(num);
    const whole = Math.floor(absN / den);
    const rem = absN % den;
    const mixed = rem === 0 ? `${sign * whole}` : whole === 0 ? `${sign < 0 ? "-" : ""}${rem}/${den}` : `${sign < 0 ? "-" : ""}${whole} ${rem}/${den}`;
    setResult({ num, den, mixed });
  };

  const reset = () => {
    setInput("");
    setResult(null);
    setError("");
  };

  return (
    <ToolLayout
      slug="decimal-to-fraction-converter"
      howTo={[
        "Enter a decimal number, e.g. 0.75",
        "For repeating decimals, wrap the repeating digits in parentheses, e.g. 0.3(3)",
        "Click Convert to get the simplified fraction and mixed number",
      ]}
      faqs={[
        {
          q: "How do I enter a repeating decimal?",
          a: "Wrap the repeating digits in parentheses after the decimal point, such as 0.1(6) for 0.1666... (which equals 1/6). The converter uses exact algebra to find the fraction rather than rounding.",
        },
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div>
          <label htmlFor="dtf-input" className="block text-sm font-medium mb-1.5">Decimal number</label>
          <input id="dtf-input" type="text" value={input} onChange={(e) => setInput(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 0.75 or 0.3(3)" />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <button onClick={convert} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Convert</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-lg font-semibold">Fraction: {result.num}/{result.den}</p>
            <p className="text-sm text-muted-foreground">Mixed number: {result.mixed}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default DecimalToFractionConverter;
