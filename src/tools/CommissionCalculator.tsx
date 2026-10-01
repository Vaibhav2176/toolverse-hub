import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const CommissionCalculator = () => {
  const [saleAmount, setSaleAmount] = useState("10000");
  const [commissionPercent, setCommissionPercent] = useState("5");
  const [baseSalary, setBaseSalary] = useState("0");

  const saleNum = Number(saleAmount);
  const commissionNum = Number(commissionPercent);
  const baseNum = Number(baseSalary);

  const valid = Number.isFinite(saleNum) && saleNum >= 0 && Number.isFinite(commissionNum) && commissionNum >= 0 && Number.isFinite(baseNum) && baseNum >= 0;

  const commission = valid ? saleNum * (commissionNum / 100) : 0;
  const totalEarnings = commission + baseNum;

  const handleReset = () => {
    setSaleAmount("10000");
    setCommissionPercent("5");
    setBaseSalary("0");
  };

  return (
    <ToolLayout
      slug="commission-calculator"
      howTo={[
        "Enter the total sale amount",
        "Enter the commission percentage",
        "Optionally add a base salary",
        "View your commission and total earnings",
      ]}
    >
      <div className="max-w-lg mx-auto space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cc-sale" className="block text-sm font-medium mb-1.5">Sale Amount (amount)</label>
            <input id="cc-sale" type="number" value={saleAmount} onChange={(e) => setSaleAmount(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="cc-percent" className="block text-sm font-medium mb-1.5">Commission (%)</label>
            <input id="cc-percent" type="number" value={commissionPercent} onChange={(e) => setCommissionPercent(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="cc-base" className="block text-sm font-medium mb-1.5">Base Salary (optional, amount)</label>
            <input id="cc-base" type="number" value={baseSalary} onChange={(e) => setBaseSalary(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>

        {!valid && <p className="text-sm text-destructive">Enter valid non-negative numbers for all fields.</p>}

        {valid && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 grid sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-muted-foreground">Commission</div>
              <div className="text-lg font-bold">{commission.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Total Earnings</div>
              <div className="text-lg font-bold">{totalEarnings.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
          </div>
        )}

        <button onClick={handleReset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
      </div>
    </ToolLayout>
  );
};

export default CommissionCalculator;
