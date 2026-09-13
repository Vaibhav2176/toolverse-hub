import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const fmt = (n: number) => (isFinite(n) ? n.toLocaleString(undefined, { maximumFractionDigits: 2 }) : "0");

const SalaryCalculator = () => {
  const [gross, setGross] = useState("60000");
  const [taxPercent, setTaxPercent] = useState("20");
  const [otherDeductions, setOtherDeductions] = useState("0");

  const grossNum = parseFloat(gross) || 0;
  const taxNum = parseFloat(taxPercent) || 0;
  const otherNum = parseFloat(otherDeductions) || 0;

  const taxAmount = grossNum * (taxNum / 100);
  const totalDeductions = taxAmount + otherNum;
  const netAnnual = grossNum - totalDeductions;
  const netMonthly = netAnnual / 12;
  const netWeekly = netAnnual / 52;

  return (
    <ToolLayout
      slug="salary-calculator"
      howTo={["Enter your gross annual salary", "Enter your estimated tax rate", "Add any other fixed annual deductions", "View your estimated take-home pay"]}
      faqs={[{ q: "Is this an exact tax calculation?", a: "No, this is an estimate based on a flat tax rate you provide. Actual take-home pay depends on your local tax brackets, credits, and benefits." }]}
    >
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground">Gross Annual Salary</label>
          <input type="number" value={gross} onChange={e => setGross(e.target.value)} className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Estimated Tax Rate (%)</label>
          <input type="number" value={taxPercent} onChange={e => setTaxPercent(e.target.value)} className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Other Annual Deductions</label>
          <input type="number" value={otherDeductions} onChange={e => setOtherDeductions(e.target.value)} className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        </div>
        {grossNum > 0 && (
          <div className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-secondary rounded-xl p-4 text-center">
                <div className="text-xs text-muted-foreground">Total Deductions</div>
                <div className="text-lg font-bold text-foreground">{fmt(totalDeductions)}</div>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 text-center">
                <div className="text-xs text-muted-foreground">Net Annual Pay</div>
                <div className="text-lg font-bold text-primary">{fmt(netAnnual)}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-secondary rounded-xl p-4 text-center">
                <div className="text-xs text-muted-foreground">Net Monthly</div>
                <div className="text-lg font-bold text-foreground">{fmt(netMonthly)}</div>
              </div>
              <div className="bg-secondary rounded-xl p-4 text-center">
                <div className="text-xs text-muted-foreground">Net Weekly</div>
                <div className="text-lg font-bold text-foreground">{fmt(netWeekly)}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default SalaryCalculator;
