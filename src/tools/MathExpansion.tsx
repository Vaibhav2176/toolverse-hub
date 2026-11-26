import { useState } from "react";
import { useParams } from "react-router-dom";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Field = { key: string; label: string; placeholder?: string };
const fields: Record<string, Field[]> = {
  "variance-calculator": [{ key: "values", label: "Dataset (comma or space separated)", placeholder: "4, 7, 7, 10, 12" }],
  "z-score-calculator": [
    { key: "value", label: "Observed value", placeholder: "78" },
    { key: "mean", label: "Mean", placeholder: "70" },
    { key: "sd", label: "Standard deviation", placeholder: "8" },
  ],
  "quadratic-equation-solver": [
    { key: "a", label: "Coefficient a", placeholder: "1" },
    { key: "b", label: "Coefficient b", placeholder: "-5" },
    { key: "c", label: "Coefficient c", placeholder: "6" },
  ],
  "linear-equation-solver": [
    { key: "a", label: "Coefficient a in ax + b = c", placeholder: "3" },
    { key: "b", label: "Constant b", placeholder: "4" },
    { key: "c", label: "Right side c", placeholder: "19" },
  ],
  "circle-calculator": [{ key: "radius", label: "Radius", placeholder: "5" }],
};

const toolHowTo: Record<string, string[]> = {
  "variance-calculator": ["Enter the dataset as comma- or space-separated values.", "Choose population or sample variance, then calculate.", "Use the displayed mean and spread to interpret the result."],
  "z-score-calculator": ["Enter the observation, dataset mean, and standard deviation.", "Calculate to see how many standard deviations the value sits from the mean.", "Compare the signed score with other observations on the same scale."],
  "quadratic-equation-solver": ["Enter a, b, and c for ax² + bx + c = 0.", "Calculate to see the discriminant and both roots.", "Use the root type to identify whether solutions are real or complex."],
  "linear-equation-solver": ["Enter the coefficients for ax + b = c.", "Calculate to isolate x.", "If a is zero, the result identifies whether the equation is impossible or an identity."],
  "circle-calculator": ["Enter a positive radius in your chosen unit.", "Calculate the diameter, circumference, and area.", "Keep the same unit for lengths and its square for area."],
};

const format = (n: number) => Number.isInteger(n) ? n.toLocaleString() : Number(n.toPrecision(10)).toLocaleString();
const MathExpansion = () => {
  const { slug = "" } = useParams();
  const toolFields = fields[slug] ?? [];
  const [values, setValues] = useState<Record<string, string>>({});
  const [sample, setSample] = useState("population");
  const [error, setError] = useState("");
  const [result, setResult] = useState<[string, string][] | null>(null);
  const set = (key: string, value: string) => setValues(current => ({ ...current, [key]: value }));

  const calculate = () => {
    setError("");
    try {
      const n = (key: string) => {
        const value = Number(values[key]);
        if (values[key]?.trim() === "" || !Number.isFinite(value)) throw new Error("Enter a valid number in every field.");
        return value;
      };
      let rows: [string, string][] = [];
      if (slug === "variance-calculator") {
        const data = (values.values ?? "").split(/[\s,;]+/).filter(Boolean).map(Number);
        if (data.length < 2 || data.some(value => !Number.isFinite(value))) throw new Error("Enter at least two valid numbers.");
        const mean = data.reduce((sum, value) => sum + value, 0) / data.length;
        const variance = data.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (sample === "sample" ? data.length - 1 : data.length);
        rows = [["Count", String(data.length)], ["Mean", format(mean)], [sample === "sample" ? "Sample variance" : "Population variance", format(variance)], ["Standard deviation", format(Math.sqrt(variance))]];
      } else if (slug === "z-score-calculator") {
        const value = n("value"); const mean = n("mean"); const sd = n("sd");
        if (sd <= 0) throw new Error("Standard deviation must be greater than zero.");
        const z = (value - mean) / sd;
        rows = [["Z-score", format(z)], ["Distance from mean", `${format(Math.abs(z))} standard deviations`], ["Position", z < 0 ? "Below the mean" : z > 0 ? "Above the mean" : "Exactly at the mean"]];
      } else if (slug === "quadratic-equation-solver") {
        const a = n("a"); const b = n("b"); const c = n("c");
        if (a === 0) throw new Error("Coefficient a cannot be zero for a quadratic equation.");
        const d = b * b - 4 * a * c;
        if (d >= 0) {
          const root1 = (-b + Math.sqrt(d)) / (2 * a); const root2 = (-b - Math.sqrt(d)) / (2 * a);
          rows = [["Discriminant", format(d)], ["Root x₁", format(root1)], ["Root x₂", format(root2)], ["Solution type", d === 0 ? "One repeated real root" : "Two real roots"]];
        } else {
          const real = -b / (2 * a); const imaginary = Math.sqrt(-d) / (2 * Math.abs(a));
          rows = [["Discriminant", format(d)], ["Root x₁", `${format(real)} + ${format(imaginary)}i`], ["Root x₂", `${format(real)} − ${format(imaginary)}i`], ["Solution type", "Two complex conjugate roots"]];
        }
      } else if (slug === "linear-equation-solver") {
        const a = n("a"); const b = n("b"); const c = n("c");
        if (a === 0) {
          if (b === c) rows = [["Solution", "Every real number satisfies this identity."]];
          else rows = [["Solution", "No solution: the equation is inconsistent."]];
        } else rows = [["x", format((c - b) / a)], ["Rearranged equation", `x = (${format(c)} − ${format(b)}) ÷ ${format(a)}`]];
      } else if (slug === "circle-calculator") {
        const radius = n("radius");
        if (radius <= 0) throw new Error("Radius must be greater than zero.");
        rows = [["Diameter", format(2 * radius)], ["Circumference", format(2 * Math.PI * radius)], ["Area", format(Math.PI * radius * radius)]];
      }
      if (rows.length === 0) throw new Error("This tool is not available yet.");
      setResult(rows);
    } catch (cause) {
      setResult(null);
      setError(cause instanceof Error ? cause.message : "Check your entries and try again.");
    }
  };

  const reset = () => { setValues({}); setResult(null); setError(""); };
  return (
    <ToolLayout slug={slug} howTo={toolHowTo[slug]}>
      <div className="max-w-3xl space-y-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {toolFields.map(field => (
            <div key={field.key} className={field.key === "values" ? "sm:col-span-2" : ""}>
              <Label htmlFor={`${slug}-${field.key}`}>{field.label}</Label>
              <Input id={`${slug}-${field.key}`} inputMode={field.key === "values" ? "text" : "decimal"} placeholder={field.placeholder} value={values[field.key] ?? ""} onChange={event => set(field.key, event.target.value)} />
            </div>
          ))}
          {slug === "variance-calculator" && <div>
            <Label htmlFor="variance-kind">Variance type</Label>
            <select id="variance-kind" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground" value={sample} onChange={event => setSample(event.target.value)}>
              <option value="population">Population</option><option value="sample">Sample</option>
            </select>
          </div>}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={reset}>Reset</Button>
        </div>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        {result && <dl aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {result.map(([label, value]) => <div key={label} className="rounded-md border border-border bg-secondary p-4"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="mt-1 break-words text-lg font-semibold text-foreground">{value}</dd></div>)}
        </dl>}
      </div>
    </ToolLayout>
  );
};

export default MathExpansion;