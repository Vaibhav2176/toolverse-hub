import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const units: Record<string, number> = { s: 1, min: 60, hr: 3600, day: 86400, week: 604800 };
const labels: Record<string, string> = { s: "Seconds", min: "Minutes", hr: "Hours", day: "Days", week: "Weeks" };

const TimeConverter = () => {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("hr");
  const [to, setTo] = useState("min");
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return;
    setResult(`${v} ${labels[from]} = ${(v * units[from] / units[to]).toFixed(4)} ${labels[to]}`);
  };

  return (
    <ToolLayout slug="time-converter" howTo={["Enter time value", "Select units", "Click Convert"]}>
      <div className="space-y-4 max-w-md">
        <input type="number" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <div className="grid grid-cols-2 gap-3">
          <select value={from} onChange={e => setFrom(e.target.value)} className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm">{Object.entries(labels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
          <select value={to} onChange={e => setTo(e.target.value)} className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm">{Object.entries(labels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
        </div>
        <div className="flex gap-3">
          <button onClick={convert} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Convert</button>
          <button onClick={() => { setVal(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default TimeConverter;
