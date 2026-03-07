import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const TemperatureConverter = () => {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("C");
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return;
    let c: number, f: number, k: number;
    if (from === "C") { c = v; f = v * 9 / 5 + 32; k = v + 273.15; }
    else if (from === "F") { c = (v - 32) * 5 / 9; f = v; k = c + 273.15; }
    else { k = v; c = v - 273.15; f = c * 9 / 5 + 32; }
    setResult(`${c.toFixed(2)}°C = ${f.toFixed(2)}°F = ${k.toFixed(2)}K`);
  };

  return (
    <ToolLayout slug="temperature-converter" howTo={["Enter temperature", "Select input unit", "See all conversions"]}>
      <div className="space-y-4 max-w-md">
        <input type="number" placeholder="Temperature" value={val} onChange={e => setVal(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <select value={from} onChange={e => setFrom(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm">
          <option value="C">Celsius</option><option value="F">Fahrenheit</option><option value="K">Kelvin</option>
        </select>
        <div className="flex gap-3">
          <button onClick={convert} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Convert</button>
          <button onClick={() => { setVal(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default TemperatureConverter;
