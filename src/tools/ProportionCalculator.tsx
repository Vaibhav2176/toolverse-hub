import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

type Field = "a" | "b" | "c" | "d";

const ProportionCalculator = () => {
  const [vals, setVals] = useState<Record<Field, string>>({ a: "", b: "", c: "", d: "" });
  const [missing, setMissing] = useState<Field>("d");
  const [error, setError] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const update = (field: Field, v: string) => setVals((prev) => ({ ...prev, [field]: v }));

  const calculate = () => {
    setError("");
    setResult(null);
    const fields: Field[] = ["a", "b", "c", "d"];
    const known = fields.filter((f) => f !== missing);
    const nums: Partial<Record<Field, number>> = {};
    for (const f of known) {
      const n = Number(vals[f]);
      if (vals[f] === "" || !Number.isFinite(n)) {
        setError("Please fill in all three known values with valid numbers.");
        return;
      }
      nums[f] = n;
    }
    const { a, b, c, d } = nums;
    let answer: number;
    try {
      if (missing === "a") {
        if (d === 0) throw new Error();
        answer = (b! * c!) / d!;
      } else if (missing === "b") {
        if (c === 0) throw new Error();
        answer = (a! * d!) / c!;
      } else if (missing === "c") {
        if (b === 0) throw new Error();
        answer = (a! * d!) / b!;
      } else {
        if (b === 0) throw new Error();
        answer = (b! * c!) / a!;
      }
    } catch {
      setError("Cannot divide by zero with the given values.");
      return;
    }
    if (!Number.isFinite(answer)) {
      setError("Cannot divide by zero with the given values.");
      return;
    }
    setResult(answer);
  };

  const reset = () => {
    setVals({ a: "", b: "", c: "", d: "" });
    setResult(null);
    setError("");
  };

  const labels: Record<Field, string> = { a: "a", b: "b", c: "c", d: "d" };

  return (
    <ToolLayout
      slug="proportion-calculator"
      howTo={[
        "Choose which term (a, b, c, or d) is unknown",
        "Enter the three known values in the proportion a/b = c/d",
        "Click Calculate to solve for the missing term using cross multiplication",
      ]}
      faqs={[
        {
          q: "What is cross multiplication?",
          a: "In a proportion a/b = c/d, cross multiplication means a × d = b × c. Rearranging this equation lets you solve for any single unknown term when the other three values are known.",
        },
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div>
          <label htmlFor="pc-missing" className="block text-sm font-medium mb-1.5">Solve for</label>
          <select id="pc-missing" value={missing} onChange={(e) => setMissing(e.target.value as Field)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
            {(["a", "b", "c", "d"] as Field[]).map((f) => (
              <option key={f} value={f}>{labels[f]}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center text-center">
          {(["a", "b"] as Field[]).map((f) => (
            <div key={f}>
              <label htmlFor={`pc-${f}`} className="block text-sm font-medium mb-1.5">{labels[f]}</label>
              <input id={`pc-${f}`} type="number" disabled={missing === f} value={vals[f]} onChange={(e) => update(f, e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary disabled:opacity-50" placeholder={missing === f ? "?" : ""} />
            </div>
          ))}
          <div className="col-span-2 text-sm text-muted-foreground">= a/b</div>
          {(["c", "d"] as Field[]).map((f) => (
            <div key={f}>
              <label htmlFor={`pc-${f}`} className="block text-sm font-medium mb-1.5">{labels[f]}</label>
              <input id={`pc-${f}`} type="number" disabled={missing === f} value={vals[f]} onChange={(e) => update(f, e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary disabled:opacity-50" placeholder={missing === f ? "?" : ""} />
            </div>
          ))}
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <button onClick={calculate} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result !== null && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5">
            <p className="text-lg font-semibold">{labels[missing]} = {result.toLocaleString(undefined, { maximumFractionDigits: 6 })}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default ProportionCalculator;
