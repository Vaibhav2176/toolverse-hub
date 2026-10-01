import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const SalaryCalculator = () => {
  const [gross, setGross] = useState("60000");
  const [period, setPeriod] = useState<"annual" | "monthly">("annual");
  const [taxPercent, setTaxPercent] = useState("20");
  const [deductions, setDeductions] = useState("0");
  const [error, setError] = useState("");

  const grossNum = Number(gross);
  const taxNum = Number(taxPercent);
  const deductNum = Number(deductions);

  const valid = Number.isFinite(grossNum) && grossNum >= 0 && Number.isFinite(taxNum) && taxNum >= 0 && taxNum <= 100 && Number.isFinite(deductNum) && deductNum >= 0;

  const annualGross = period === "annual" ? grossNum : grossNum * 12;
  const annualDeductions = period === "annual" ? deductNum : deductNum * 12;
  const taxAmount = annualGross * (taxNum / 100);
  const annualNet = annualGross - taxAmount - annualDeductions;
  const monthlyNet = annualNet / 12;
  const weeklyNet = annualNet / 52;

  const handleReset = () => {
    setGross("60000");
    setPeriod("annual");
    setTaxPercent("20");
    setDeductions("0");
    setError("");
  };

  return (
    <ToolLayout
      slug="salary-calculator"
      howTo={[
        "Enter your gross salary and choose whether it's annual or monthly",
        "Enter your estimated tax rate as a percentage",
        "Add any other fixed deductions (insurance, pension, etc.)",
        "View your take-home pay broken down by year, month and week",
      ]}
    >
      <div className="max-w-lg mx-auto space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="sc-gross" className="block text-sm font-medium mb-1.5">Gross Salary (amount)</label>
            <input id="sc-gross" type="number" value={gross} onChange={(e) => setGross(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="sc-period" className="block text-sm font-medium mb-1.5">Period</label>
            <select id="sc-period" value={period} onChange={(e) => setPeriod(e.target.value as "annual" | "monthly")} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
              <option value="annual">Annual</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div>
            <label htmlFor="sc-tax" className="block text-sm font-medium mb-1.5">Tax Rate (%)</label>
            <input id="sc-tax" type="number" value={taxPercent} onChange={(e) => setTaxPercent(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="sc-deduct" className="block text-sm font-medium mb-1.5">Other Deductions ({period})</label>
            <input id="sc-deduct" type="number" value={deductions} onChange={(e) => setDeductions(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>

        {!valid && (gross !== "" || taxPercent !== "" || deductions !== "") && (
          <p className="text-sm text-destructive">Please enter valid, non-negative numbers (tax rate 0-100).</p>
        )}

        {valid && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 grid sm:grid-cols-3 gap-4">
            <div>
              <div className="text-xs text-muted-foreground">Take-home / Year</div>
              <div className="text-lg font-bold">{annualNet.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Take-home / Month</div>
              <div className="text-lg font-bold">{monthlyNet.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Take-home / Week</div>
              <div className="text-lg font-bold">{weeklyNet.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
          </div>
        )}

        <button onClick={handleReset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
      </div>
    </ToolLayout>
  );
};

export default SalaryCalculator;
