import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ElectricityCostCalculator = () => {
  const [watts, setWatts] = useState("");
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState<{ daily: number; monthly: number; yearly: number } | null>(null);

  const calculate = () => {
    const w = Number(watts), h = Number(hours), r = Number(rate);
    if (!w || !h || !r) return;
    const dailyKwh = (w * h) / 1000;
    const daily = dailyKwh * r;
    setResult({ daily: +daily.toFixed(2), monthly: +(daily * 30).toFixed(2), yearly: +(daily * 365).toFixed(2) });
  };

  return (
    <ToolLayout slug="electricity-cost-calculator" howTo={["Enter device wattage, daily usage hours, and cost per kWh.", "See daily, monthly, and yearly cost estimates."]} faqs={[{ q: "Where do I find wattage?", a: "Check the label on your appliance or its manual." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-3 gap-4">
          <div><Label>Wattage (W)</Label><Input type="number" value={watts} onChange={e => setWatts(e.target.value)} placeholder="e.g. 100" /></div>
          <div><Label>Hours/Day</Label><Input type="number" value={hours} onChange={e => setHours(e.target.value)} placeholder="e.g. 8" /></div>
          <div><Label>Cost per kWh ($)</Label><Input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 0.12" /></div>
        </div>
        <div className="flex gap-3"><Button onClick={calculate}>Calculate</Button><Button variant="outline" onClick={() => { setWatts(""); setHours(""); setRate(""); setResult(null); }}>Reset</Button></div>
        {result && (
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Daily</p><p className="text-lg font-bold">${result.daily}</p></div>
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Monthly</p><p className="text-lg font-bold text-primary">${result.monthly}</p></div>
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Yearly</p><p className="text-lg font-bold">${result.yearly}</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default ElectricityCostCalculator;
