import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight), h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return;
    let bmi: number;
    if (unit === "metric") bmi = w / ((h / 100) ** 2);
    else bmi = (w * 703) / (h ** 2);
    let category = "Obese";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    setResult({ bmi: parseFloat(bmi.toFixed(1)), category });
  };

  return (
    <ToolLayout slug="bmi-calculator" howTo={["Select metric or imperial units", "Enter your weight and height", "Click Calculate to see your BMI"]}
      faqs={[
        { q: "What is BMI?", a: "BMI (Body Mass Index) is a measure of body fat based on height and weight." },
        { q: "What is a healthy BMI?", a: "A BMI between 18.5 and 24.9 is considered normal weight." },
      ]}>
      <div className="space-y-4 max-w-md">
        <div className="flex gap-2">
          {(["metric", "imperial"] as const).map(u => (
            <button key={u} onClick={() => setUnit(u)} className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${unit === u ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{u === "metric" ? "Metric (kg/cm)" : "Imperial (lb/in)"}</button>
          ))}
        </div>
        <input type="number" placeholder={unit === "metric" ? "Weight (kg)" : "Weight (lbs)"} value={weight} onChange={e => setWeight(e.target.value)} className="w-full input-field" />
        <input type="number" placeholder={unit === "metric" ? "Height (cm)" : "Height (inches)"} value={height} onChange={e => setHeight(e.target.value)} className="w-full input-field" />
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Calculate BMI</button>
          <button onClick={() => { setWeight(""); setHeight(""); setResult(null); }} className="btn-secondary">Reset</button>
        </div>
        {result && (
          <div className="rounded-xl bg-accent/10 p-5 border border-accent/20">
            <div className="text-3xl font-display font-bold text-accent">{result.bmi}</div>
            <div className="text-sm text-muted-foreground mt-1">Category: <span className="font-semibold text-foreground">{result.category}</span></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default BmiCalculator;
