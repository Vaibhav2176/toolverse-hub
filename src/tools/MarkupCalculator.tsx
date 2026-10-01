import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

type Mode = "price" | "markup";

const MarkupCalculator = () => {
  const [mode, setMode] = useState<Mode>("price");
  const [cost, setCost] = useState("");
  const [markup, setMarkup] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");

  const c = parseFloat(cost);
  const m = parseFloat(markup);
  const p = parseFloat(price);

  let result: { label: string; value: string }[] | null = null;

  const calc = () => {
    setError("");
    if (!Number.isFinite(c) || c < 0) {
      setError("Enter a valid, non-negative cost.");
      return;
    }
    if (mode === "price") {
      if (!Number.isFinite(m)) {
        setError("Enter a valid markup percentage.");
        return;
      }
      const sellingPrice = c * (1 + m / 100);
      const profit = sellingPrice - c;
      setPrice(sellingPrice.toFixed(2));
      result = [
        { label: "Selling price", value: formatCurrency(sellingPrice, currency) },
        { label: "Profit per unit", value: formatCurrency(profit, currency) },
      ];
    } else {
      if (!Number.isFinite(p) || p < 0) {
        setError("Enter a valid, non-negative selling price.");
        return;
      }
      const markupPct = ((p - c) / c) * 100;
      result = [
        { label: "Markup", value: `${markupPct.toFixed(2)}%` },
        { label: "Profit per unit", value: formatCurrency(p - c, currency) },
      ];
    }
  };

  const [out, setOut] = useState<{ label: string; value: string }[] | null>(null);

  const run = () => {
    calc();
    setOut(result);
  };

  const reset = () => {
    setCost("");
    setMarkup("");
    setPrice("");
    setOut(null);
    setError("");
  };

  return (
    <ToolLayout
      slug="markup-calculator"
      howTo={[
        "Choose whether to find the selling price or the markup percentage",
        "Enter the cost price",
        "Enter the markup % (or the selling price)",
        "Click Calculate to see the result",
      ]}
    >
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="flex gap-2">
          <button
            onClick={() => { setMode("price"); setOut(null); setError(""); }}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${mode === "price" ? "hero-gradient text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
          >
            Cost + Markup % → Price
          </button>
          <button
            onClick={() => { setMode("markup"); setOut(null); setError(""); }}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${mode === "markup" ? "hero-gradient text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
          >
            Cost + Price → Markup %
          </button>
        </div>
        <div>
          <label htmlFor="mu-cost" className="block text-sm font-medium mb-1.5">Cost price</label>
          <input id="mu-cost" type="number" value={cost} onChange={(e) => setCost(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 50" />
        </div>
        {mode === "price" ? (
          <div>
            <label htmlFor="mu-markup" className="block text-sm font-medium mb-1.5">Markup %</label>
            <input id="mu-markup" type="number" value={markup} onChange={(e) => setMarkup(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 40" />
          </div>
        ) : (
          <div>
            <label htmlFor="mu-price" className="block text-sm font-medium mb-1.5">Selling price</label>
            <input id="mu-price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 70" />
          </div>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <button onClick={run} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {out && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            {out.map((r) => (
              <p key={r.label} className="text-sm"><span className="text-muted-foreground">{r.label}: </span><span className="font-semibold">{r.value}</span></p>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default MarkupCalculator;
