import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

type Known = "radius" | "diameter" | "circumference" | "area";

const CircleCalculator = () => {
  const [known, setKnown] = useState<Known>("radius");
  const [value, setValue] = useState("");
  const [result, setResult] = useState<{ r: number; d: number; c: number; a: number } | null>(null);

  const calculate = () => {
    const v = parseFloat(value);
    if (isNaN(v) || v <= 0) return;
    let r: number;
    if (known === "radius") r = v;
    else if (known === "diameter") r = v / 2;
    else if (known === "circumference") r = v / (2 * Math.PI);
    else r = Math.sqrt(v / Math.PI);
    setResult({ r, d: r * 2, c: 2 * Math.PI * r, a: Math.PI * r * r });
  };

  const labels: Record<Known, string> = {
    radius: "Radius",
    diameter: "Diameter",
    circumference: "Circumference",
    area: "Area",
  };

  return (
    <ToolLayout
      slug="circle-calculator"
      howTo={["Choose which measurement you know (radius, diameter, circumference or area)", "Enter its value", "Click Calculate to get all the other measurements"]}
      faqs={[
        { q: "What formulas does this use?", a: "Area = πr², Circumference = 2πr, Diameter = 2r, so any one value lets us derive all the others." },
        { q: "Can I enter the area and get the radius?", a: "Yes, selecting Area and entering a value will back-calculate the radius using r = √(Area/π)." },
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div className="flex gap-2 flex-wrap">
          {(Object.keys(labels) as Known[]).map(k => (
            <button key={k} onClick={() => { setKnown(k); setValue(""); setResult(null); }} className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${known === k ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{labels[k]}</button>
          ))}
        </div>
        <input type="number" placeholder={`Enter ${labels[known].toLowerCase()}`} value={value} onChange={e => setValue(e.target.value)} className="w-full input-field" />
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Calculate</button>
          <button onClick={() => { setValue(""); setResult(null); }} className="btn-secondary">Reset</button>
        </div>
        {result && (
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-secondary/50 p-3 border border-border"><div className="text-xs text-muted-foreground font-semibold">Radius</div><div className="text-sm font-mono font-bold mt-1">{result.r.toFixed(4)}</div></div>
            <div className="rounded-xl bg-secondary/50 p-3 border border-border"><div className="text-xs text-muted-foreground font-semibold">Diameter</div><div className="text-sm font-mono font-bold mt-1">{result.d.toFixed(4)}</div></div>
            <div className="rounded-xl bg-secondary/50 p-3 border border-border"><div className="text-xs text-muted-foreground font-semibold">Circumference</div><div className="text-sm font-mono font-bold mt-1">{result.c.toFixed(4)}</div></div>
            <div className="rounded-xl bg-secondary/50 p-3 border border-border"><div className="text-xs text-muted-foreground font-semibold">Area</div><div className="text-sm font-mono font-bold mt-1">{result.a.toFixed(4)}</div></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default CircleCalculator;
