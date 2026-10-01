import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const OvertimeCalculator = () => {
  const [baseRate, setBaseRate] = useState("20");
  const [regularHours, setRegularHours] = useState("40");
  const [overtimeHours, setOvertimeHours] = useState("5");
  const [multiplier, setMultiplier] = useState("1.5");
  const [customMultiplier, setCustomMultiplier] = useState("");

  const baseRateNum = Number(baseRate);
  const regularHoursNum = Number(regularHours);
  const overtimeHoursNum = Number(overtimeHours);
  const effectiveMultiplier = multiplier === "custom" ? Number(customMultiplier) : Number(multiplier);

  const valid =
    Number.isFinite(baseRateNum) && baseRateNum >= 0 &&
    Number.isFinite(regularHoursNum) && regularHoursNum >= 0 &&
    Number.isFinite(overtimeHoursNum) && overtimeHoursNum >= 0 &&
    Number.isFinite(effectiveMultiplier) && effectiveMultiplier > 0;

  const regularPay = valid ? baseRateNum * regularHoursNum : 0;
  const overtimePay = valid ? baseRateNum * effectiveMultiplier * overtimeHoursNum : 0;
  const totalGross = regularPay + overtimePay;

  const handleReset = () => {
    setBaseRate("20");
    setRegularHours("40");
    setOvertimeHours("5");
    setMultiplier("1.5");
    setCustomMultiplier("");
  };

  return (
    <ToolLayout
      slug="overtime-calculator"
      howTo={[
        "Enter your base hourly rate",
        "Enter your regular hours and overtime hours worked",
        "Choose an overtime multiplier (1.5x, 2x, or a custom rate)",
        "View your overtime pay and total gross pay",
      ]}
    >
      <div className="max-w-lg mx-auto space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="ot-rate" className="block text-sm font-medium mb-1.5">Base Rate (amount/hour)</label>
            <input id="ot-rate" type="number" value={baseRate} onChange={(e) => setBaseRate(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="ot-regular" className="block text-sm font-medium mb-1.5">Regular Hours</label>
            <input id="ot-regular" type="number" value={regularHours} onChange={(e) => setRegularHours(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="ot-overtime" className="block text-sm font-medium mb-1.5">Overtime Hours</label>
            <input id="ot-overtime" type="number" value={overtimeHours} onChange={(e) => setOvertimeHours(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="ot-mult" className="block text-sm font-medium mb-1.5">Overtime Multiplier</label>
            <select id="ot-mult" value={multiplier} onChange={(e) => setMultiplier(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
              <option value="custom">Custom</option>
            </select>
            {multiplier === "custom" && (
              <input aria-label="Custom overtime multiplier" type="number" value={customMultiplier} onChange={(e) => setCustomMultiplier(e.target.value)} placeholder="e.g. 1.75" className="w-full mt-2 rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
            )}
          </div>
        </div>

        {!valid && <p className="text-sm text-destructive">Enter valid non-negative hours/rate and a positive multiplier.</p>}

        {valid && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 grid sm:grid-cols-3 gap-4">
            <div>
              <div className="text-xs text-muted-foreground">Regular Pay</div>
              <div className="text-lg font-bold">{regularPay.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Overtime Pay</div>
              <div className="text-lg font-bold">{overtimePay.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Total Gross</div>
              <div className="text-lg font-bold">{totalGross.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
          </div>
        )}

        <button onClick={handleReset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
      </div>
    </ToolLayout>
  );
};

export default OvertimeCalculator;
