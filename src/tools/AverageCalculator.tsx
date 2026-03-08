import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const AverageCalculator = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Record<string, string> | null>(null);

  const calculate = () => {
    const nums = input.split(/[,\s\n]+/).map(Number).filter(n => !isNaN(n));
    if (nums.length === 0) return;
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    const sorted = [...nums].sort((a, b) => a - b);
    const median = sorted.length % 2 === 0
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)];
    const freq: Record<number, number> = {};
    nums.forEach(n => freq[n] = (freq[n] || 0) + 1);
    const maxFreq = Math.max(...Object.values(freq));
    const modes = Object.entries(freq).filter(([, v]) => v === maxFreq).map(([k]) => k);

    setResults({
      "Mean": mean.toFixed(4),
      "Median": median.toFixed(4),
      "Mode": maxFreq === 1 ? "No mode" : modes.join(", "),
      "Sum": nums.reduce((a, b) => a + b, 0).toFixed(4),
      "Count": String(nums.length),
      "Range": (sorted[sorted.length - 1] - sorted[0]).toFixed(4),
    });
  };

  return (
    <ToolLayout slug="average-calculator" howTo={["Enter numbers separated by commas, spaces, or newlines", "Click Calculate to see mean, median, and mode"]} faqs={[{ q: "What is the difference between mean, median, and mode?", a: "Mean is the average, median is the middle value, and mode is the most frequent value." }]}>
      <div className="space-y-4 max-w-md">
        <textarea placeholder="Enter numbers (e.g. 10, 20, 30, 40, 50)" value={input} onChange={e => setInput(e.target.value)} rows={3} className="w-full input-field resize-none" />
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Calculate</button>
          <button onClick={() => { setInput(""); setResults(null); }} className="btn-secondary">Reset</button>
        </div>
        {results && (
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(results).map(([k, v]) => (
              <div key={k} className="rounded-xl bg-secondary/50 p-4 border border-border">
                <div className="text-xs text-muted-foreground font-semibold uppercase">{k}</div>
                <div className="text-lg font-mono font-bold mt-1">{v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default AverageCalculator;
