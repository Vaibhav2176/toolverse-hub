import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

type Shape = "cube" | "cuboid" | "sphere" | "cylinder" | "cone" | "pyramid";

const fields: Record<Shape, { key: string; label: string }[]> = {
  cube: [{ key: "s", label: "Side length" }],
  cuboid: [{ key: "l", label: "Length" }, { key: "w", label: "Width" }, { key: "h", label: "Height" }],
  sphere: [{ key: "r", label: "Radius" }],
  cylinder: [{ key: "r", label: "Radius" }, { key: "h", label: "Height" }],
  cone: [{ key: "r", label: "Radius" }, { key: "l", label: "Slant height" }],
  pyramid: [{ key: "base", label: "Base side" }, { key: "l", label: "Slant height" }],
};

const SurfaceAreaCalculator = () => {
  const [shape, setShape] = useState<Shape>("cube");
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ total: number; lateral: number } | null>(null);

  const set = (k: string, v: string) => setInputs({ ...inputs, [k]: v });
  const g = (k: string) => parseFloat(inputs[k] || "0");

  const calculate = () => {
    let total: number, lateral: number;
    if (shape === "cube") {
      const s = g("s");
      lateral = 4 * s * s;
      total = 6 * s * s;
    } else if (shape === "cuboid") {
      const l = g("l"), w = g("w"), h = g("h");
      lateral = 2 * h * (l + w);
      total = lateral + 2 * l * w;
    } else if (shape === "sphere") {
      const r = g("r");
      total = 4 * Math.PI * r * r;
      lateral = total;
    } else if (shape === "cylinder") {
      const r = g("r"), h = g("h");
      lateral = 2 * Math.PI * r * h;
      total = lateral + 2 * Math.PI * r * r;
    } else if (shape === "cone") {
      const r = g("r"), l = g("l");
      lateral = Math.PI * r * l;
      total = lateral + Math.PI * r * r;
    } else {
      const base = g("base"), l = g("l");
      lateral = 2 * base * l;
      total = lateral + base * base;
    }
    setResult({ total, lateral });
  };

  return (
    <ToolLayout
      slug="surface-area-calculator"
      howTo={["Select a 3D shape", "Enter its dimensions", "Click Calculate to get total and lateral surface area"]}
      faqs={[
        { q: "What's the difference between total and lateral surface area?", a: "Lateral surface area excludes the top and bottom (bases); total surface area includes every face of the shape." },
        { q: "What shapes are supported?", a: "Cube, cuboid, sphere, cylinder, cone, and square-based pyramid." },
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div className="flex gap-2 flex-wrap">
          {(Object.keys(fields) as Shape[]).map(s => (
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
        {result && (
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-accent/10 p-4"><div className="text-xs text-muted-foreground font-semibold">Total Surface Area</div><div className="text-lg font-bold text-accent mt-1">{result.total.toFixed(4)}</div></div>
            <div className="rounded-xl bg-accent/10 p-4"><div className="text-xs text-muted-foreground font-semibold">Lateral Surface Area</div><div className="text-lg font-bold text-accent mt-1">{result.lateral.toFixed(4)}</div></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default SurfaceAreaCalculator;
