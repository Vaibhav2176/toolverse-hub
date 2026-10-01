import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const isLeap = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

const ruleFor = (y: number) => {
  if (y % 400 === 0) return `${y} is divisible by 400, so it is a leap year.`;
  if (y % 100 === 0) return `${y} is divisible by 100 but not by 400, so it is NOT a leap year.`;
  if (y % 4 === 0) return `${y} is divisible by 4 but not by 100, so it is a leap year.`;
  return `${y} is not divisible by 4, so it is not a leap year.`;
};

const LeapYearCalculator = () => {
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ leap: boolean; rule: string; next: number; prev: number } | null>(null);

  const calculate = () => {
    const y = Number(year);
    if (!Number.isFinite(y) || !Number.isInteger(y)) {
      setError("Please enter a valid whole year.");
      setResult(null);
      return;
    }
    setError(null);
    let next = y + 1;
    while (!isLeap(next)) next++;
    let prev = y - 1;
    while (!isLeap(prev)) prev--;
    setResult({ leap: isLeap(y), rule: ruleFor(y), next, prev });
  };

  return (
    <ToolLayout slug="leap-year-calculator" howTo={["Enter a year", "Click Check", "See whether it's a leap year and the nearest leap years"]}>
      <div className="space-y-4 max-w-md">
        <div>
          <label htmlFor="ly-year" className="block text-sm font-medium mb-1.5">Year</label>
          <input id="ly-year" type="number" value={year} onChange={e => setYear(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div className="flex gap-3">
          <button onClick={calculate} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Check</button>
          <button onClick={() => { setYear(""); setResult(null); setError(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-lg font-semibold text-accent">{result.leap ? "Yes, it's a leap year." : "No, it's not a leap year."}</p>
            <p className="text-sm text-muted-foreground">{result.rule}</p>
            <p className="text-sm text-muted-foreground">Previous leap year: {result.prev}</p>
            <p className="text-sm text-muted-foreground">Next leap year: {result.next}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default LeapYearCalculator;
