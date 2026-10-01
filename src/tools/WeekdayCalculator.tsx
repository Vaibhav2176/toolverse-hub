import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const WeekdayCalculator = () => {
  const [date, setDate] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ weekday: string; diffText: string; full: string } | null>(null);

  const calculate = () => {
    if (!date) {
      setError("Please choose a date.");
      setResult(null);
      return;
    }
    const [y, m, d] = date.split("-").map(Number);
    const target = new Date(y, m - 1, d);
    if (isNaN(target.getTime())) {
      setError("Invalid date.");
      setResult(null);
      return;
    }
    setError(null);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    const diffDays = Math.round((target.getTime() - today.getTime()) / 86400000);
    const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(target);
    const full = new Intl.DateTimeFormat("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(target);
    let diffText: string;
    if (diffDays === 0) diffText = "That is today.";
    else if (diffDays > 0) diffText = `That is ${diffDays} day${diffDays === 1 ? "" : "s"} from today.`;
    else diffText = `That was ${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? "" : "s"} ago.`;
    setResult({ weekday, diffText, full });
  };

  return (
    <ToolLayout slug="weekday-calculator" howTo={["Pick any date", "Click Calculate", "See the weekday and how far it is from today"]}>
      <div className="space-y-4 max-w-md">
        <div>
          <label htmlFor="wd-date" className="block text-sm font-medium mb-1.5">Date</label>
          <input id="wd-date" type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div className="flex gap-3">
          <button onClick={calculate} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={() => { setDate(""); setResult(null); setError(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-lg font-semibold text-accent">{result.full}</p>
            <p className="text-sm text-muted-foreground">{result.full.split(",")[0]} is a {result.weekday}.</p>
            <p className="text-sm text-muted-foreground">{result.diffText}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default WeekdayCalculator;
