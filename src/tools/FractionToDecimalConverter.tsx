import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const FractionToDecimalConverter = () => {
  const [n, setN] = useState("");
  const [d, setD] = useState("");
  const [places, setPlaces] = useState("4");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ rounded: string; repeats: boolean } | null>(null);

  const convert = () => {
    setError("");
    setResult(null);
    const num = Number(n), den = Number(d), dp = Number(places);
    if (!n || !d || !Number.isFinite(num) || !Number.isFinite(den) || den === 0) {
      setError("Please enter a valid numerator and a non-zero denominator.");
      return;
    }
    if (!Number.isFinite(dp) || dp < 0 || dp > 15) {
      setError("Decimal places must be between 0 and 15.");
      return;
    }
    const g = gcd(Math.abs(num), Math.abs(den)) || 1;
    const simplifiedDen = Math.abs(den) / g;
    // a fraction terminates in decimal iff, after removing factors of 2 and 5 from
    // the simplified denominator, nothing remains
    let rest = simplifiedDen;
    while (rest % 2 === 0) rest /= 2;
    while (rest % 5 === 0) rest /= 5;
    const terminates = rest === 1;
    const decimal = num / den;
    setResult({ rounded: decimal.toFixed(dp), repeats: !terminates });
  };

  const reset = () => {
    setN(""); setD(""); setPlaces("4"); setResult(null); setError("");
  };

  return (
    <ToolLayout
      slug="fraction-to-decimal-converter"
      howTo={[
        "Enter the numerator and denominator of the fraction",
        "Choose how many decimal places to round to",
        "Click Convert to see the decimal value and whether it terminates or repeats",
      ]}
      faqs={[
        {
          q: "How do I know if a fraction's decimal repeats?",
          a: "After simplifying the fraction, if the denominator's only prime factors are 2 and 5, the decimal terminates. Otherwise, it repeats forever, such as 1/3 = 0.333...",
        },
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="ftd-n" className="block text-sm font-medium mb-1.5">Numerator</label>
            <input id="ftd-n" type="number" value={n} onChange={(e) => setN(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="ftd-d" className="block text-sm font-medium mb-1.5">Denominator</label>
            <input id="ftd-d" type="number" value={d} onChange={(e) => setD(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>
        <div>
          <label htmlFor="ftd-places" className="block text-sm font-medium mb-1.5">Decimal places</label>
          <input id="ftd-places" type="number" min={0} max={15} value={places} onChange={(e) => setPlaces(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <button onClick={convert} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Convert</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-lg font-semibold">Decimal: {result.rounded}</p>
            <p className="text-sm text-muted-foreground">{result.repeats ? "This fraction is a repeating decimal." : "This fraction terminates exactly."}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default FractionToDecimalConverter;
