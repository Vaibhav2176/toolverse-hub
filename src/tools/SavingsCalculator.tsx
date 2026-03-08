import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SavingsCalculator = () => {
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{ total: number; interest: number; deposited: number } | null>(null);

  const calculate = () => {
    const m = Number(monthly), r = Number(rate) / 100 / 12, n = Number(years) * 12;
    if (!m || !n) return;
    const fv = r > 0 ? m * ((Math.pow(1 + r, n) - 1) / r) * (1 + r) : m * n;
    const deposited = m * n;
    setResult({ total: +fv.toFixed(2), interest: +(fv - deposited).toFixed(2), deposited });
  };

  return (
    <ToolLayout slug="savings-calculator" howTo={["Enter monthly contribution, interest rate, and years.", "Click Calculate to see future savings."]} faqs={[{ q: "Is interest compounded?", a: "Yes, monthly compounding is used." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-3 gap-4">
          <div><Label>Monthly Contribution</Label><Input type="number" value={monthly} onChange={e => setMonthly(e.target.value)} placeholder="e.g. 500" /></div>
          <div><Label>Annual Interest Rate (%)</Label><Input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 6" /></div>
          <div><Label>Years</Label><Input type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="e.g. 10" /></div>
        </div>
        <div className="flex gap-3"><Button onClick={calculate}>Calculate</Button><Button variant="outline" onClick={() => { setMonthly(""); setRate(""); setYears(""); setResult(null); }}>Reset</Button></div>
        {result && (
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Total Deposited</p><p className="text-lg font-bold">${result.deposited.toLocaleString()}</p></div>
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Interest Earned</p><p className="text-lg font-bold text-primary">${result.interest.toLocaleString()}</p></div>
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Future Value</p><p className="text-lg font-bold">${result.total.toLocaleString()}</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default SavingsCalculator;
