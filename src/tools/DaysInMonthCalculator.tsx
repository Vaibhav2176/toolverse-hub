import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DaysInMonthCalculator = () => {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [year, setYear] = useState(String(now.getFullYear()));
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ days: number; first: string; last: string } | null>(null);

  const calculate = () => {
    const y = Number(year);
    if (!Number.isFinite(y) || !Number.isInteger(y)) {
      setError("Please enter a valid whole year.");
      setResult(null);
      return;
    }
    setError(null);
    const days = new Date(y, month, 0).getDate();
    const firstDate = new Date(y, month - 1, 1);
    const lastDate = new Date(y, month - 1, days);
    const first = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(firstDate);
    const last = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(lastDate);
    setResult({ days, first, last });
  };

  return (
    <ToolLayout slug="days-in-month-calculator" howTo={["Choose a month and year", "Click Calculate", "See total days and the weekday of the first and last day"]}>
      <div className="space-y-4 max-w-md">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dim-month" className="block text-sm font-medium mb-1.5">Month</label>
            <select id="dim-month" value={month} onChange={e => setMonth(Number(e.target.value))} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
              {MONTHS.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="dim-year" className="block text-sm font-medium mb-1.5">Year</label>
            <input id="dim-year" type="number" value={year} onChange={e => setYear(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={calculate} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={() => { setResult(null); setError(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-lg font-semibold text-accent">{MONTHS[month - 1]} {year} has {result.days} days.</p>
            <p className="text-sm text-muted-foreground">First day ({MONTHS[month - 1]} 1) is a {result.first}.</p>
            <p className="text-sm text-muted-foreground">Last day ({MONTHS[month - 1]} {result.days}) is a {result.last}.</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default DaysInMonthCalculator;
