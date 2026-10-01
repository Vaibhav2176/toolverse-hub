import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

interface Row { id: number; name: string; value: string; }

let idSeq = 1;
const newRow = (): Row => ({ id: idSeq++, name: "", value: "" });

const NetWorthCalculator = () => {
  const [assets, setAssets] = useState<Row[]>([newRow(), newRow()]);
  const [liabilities, setLiabilities] = useState<Row[]>([newRow(), newRow()]);
  const [currency, setCurrency] = useState("USD");

  const sum = (rows: Row[]) => rows.reduce((s, r) => s + (Number(r.value) || 0), 0);
  const totalAssets = sum(assets);
  const totalLiabilities = sum(liabilities);
  const netWorth = totalAssets - totalLiabilities;

  const updateRow = (rows: Row[], setRows: (r: Row[]) => void, id: number, field: "name" | "value", val: string) => {
    setRows(rows.map(r => (r.id === id ? { ...r, [field]: val } : r)));
  };

  const reset = () => { setAssets([newRow(), newRow()]); setLiabilities([newRow(), newRow()]); };

  const Section = ({ title, rows, setRows }: { title: string; rows: Row[]; setRows: (r: Row[]) => void }) => (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold">{title}</h3>
      {rows.map(r => (
        <div key={r.id} className="flex gap-2 items-center">
          <input
            aria-label={`${title} name`}
            type="text"
            placeholder="e.g. Savings account"
            value={r.name}
            onChange={e => updateRow(rows, setRows, r.id, "name", e.target.value)}
            className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          <input
            aria-label={`${title} value`}
            type="number"
            placeholder="Amount"
            value={r.value}
            onChange={e => updateRow(rows, setRows, r.id, "value", e.target.value)}
            className="w-32 rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          <button
            type="button"
            onClick={() => setRows(rows.filter(x => x.id !== r.id))}
            className="rounded-lg bg-secondary px-3 py-2.5 text-sm font-medium text-secondary-foreground"
            aria-label={`Remove ${title} row`}
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => setRows([...rows, newRow()])}
        className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
      >
        + Add {title.slice(0, -1)}
      </button>
    </div>
  );

  return (
    <ToolLayout
      slug="net-worth-calculator"
      howTo={["Add each asset you own with its current value.", "Add each liability (debt) you owe with its balance.", "Your total assets, total liabilities, and net worth update automatically."]}
    >
      <div className="space-y-6 max-w-2xl">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <Section title="Assets" rows={assets} setRows={setAssets} />
        <Section title="Liabilities" rows={liabilities} setRows={setLiabilities} />
        <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        <div className="rounded-xl border border-border bg-secondary/40 p-5 grid sm:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Total Assets</p>
            <p className="text-lg font-semibold">{formatCurrency(totalAssets, currency)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Total Liabilities</p>
            <p className="text-lg font-semibold">{formatCurrency(totalLiabilities, currency)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Net Worth</p>
            <p className={`text-lg font-semibold ${netWorth >= 0 ? "text-primary" : "text-destructive"}`}>{formatCurrency(netWorth, currency)}</p>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};
export default NetWorthCalculator;
