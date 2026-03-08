import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

type Shape = "rectangle" | "circle" | "triangle" | "trapezoid";

const AreaCalculator = () => {
  const [shape, setShape] = useState<Shape>("rectangle");
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);

  const set = (k: string, v: string) => setInputs({ ...inputs, [k]: v });
  const g = (k: string) => parseFloat(inputs[k] || "0");

  const calculate = () => {
    let area: number;
    if (shape === "rectangle") area = g("w") * g("h");
    else if (shape === "circle") area = Math.PI * g("r") ** 2;
    else if (shape === "triangle") area = 0.5 * g("b") * g("h");
    else area = 0.5 * (g("a") + g("b")) * g("h");
    setResult(`Area = ${area.toFixed(4)}`);
  };

  const fields: Record<Shape, { key: string; label: string }[]> = {
    rectangle: [{ key: "w", label: "Width" }, { key: "h", label: "Height" }],
    circle: [{ key: "r", label: "Radius" }],
    triangle: [{ key: "b", label: "Base" }, { key: "h", label: "Height" }],
    trapezoid: [{ key: "a", label: "Side A" }, { key: "b", label: "Side B" }, { key: "h", label: "Height" }],
  };

  return (
    <ToolLayout slug="area-calculator" howTo={["Select a shape", "Enter dimensions", "Click Calculate"]} faqs={[{ q: "What shapes are supported?", a: "Rectangle, circle, triangle, and trapezoid." }]}>
      <div className="space-y-4 max-w-md">
        <div className="flex gap-2 flex-wrap">
          {(["rectangle", "circle", "triangle", "trapezoid"] as Shape[]).map(s => (
            <button key={s} onClick={() => { setShape(s); setInputs({}); setResult(null); }} className={`px-4 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all ${shape === s ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{s}</button>
          ))}
        </div>
        {fields[shape].map(f => (
          <input key={f.key} type="number" placeholder={f.label} value={inputs[f.key] || ""} onChange={e => set(f.key, e.target.value)} className="w-full input-field" />
        ))}
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Calculate</button>
          <button onClick={() => { setInputs({}); setResult(null); }} className="btn-secondary">Reset</button>
        </div>
        {result && <div className="rounded-xl bg-accent/10 p-4 text-lg font-semibold text-accent">{result}</div>}
      </div>
    </ToolLayout>
  );
};

export default AreaCalculator;
