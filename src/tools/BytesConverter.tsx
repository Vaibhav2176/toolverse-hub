import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const units = ["B", "KB", "MB", "GB", "TB"];
const toBytes = (val: number, unit: string) => val * Math.pow(1024, units.indexOf(unit));
const fromBytes = (bytes: number, unit: string) => bytes / Math.pow(1024, units.indexOf(unit));

const BytesConverter = () => {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("MB");
  const [to, setTo] = useState("GB");
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return;
    setResult(`${v} ${from} = ${fromBytes(toBytes(v, from), to).toFixed(6)} ${to}`);
  };

  return (
    <ToolLayout slug="bytes-converter" howTo={["Enter a value", "Select from and to units", "Click Convert"]}>
      <div className="space-y-4 max-w-md">
        <input type="number" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <div className="grid grid-cols-2 gap-3">
          <select value={from} onChange={e => setFrom(e.target.value)} className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm">{units.map(u => <option key={u}>{u}</option>)}</select>
          <select value={to} onChange={e => setTo(e.target.value)} className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm">{units.map(u => <option key={u}>{u}</option>)}</select>
        </div>
        <div className="flex gap-3">
          <button onClick={convert} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Convert</button>
          <button onClick={() => { setVal(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent font-mono">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default BytesConverter;
