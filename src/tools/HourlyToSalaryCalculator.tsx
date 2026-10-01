import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const HourlyToSalaryCalculator = () => {
  const [rate, setRate] = useState("25");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("50");

  const rateNum = Number(rate);
  const hoursNum = Number(hoursPerWeek);
  const weeksNum = Number(weeksPerYear);
  const valid = Number.isFinite(rateNum) && rateNum >= 0 && Number.isFinite(hoursNum) && hoursNum > 0 && Number.isFinite(weeksNum) && weeksNum > 0;

  const daily = valid ? rateNum * (hoursNum / 5) : 0;
  const weekly = valid ? rateNum * hoursNum : 0;
  const monthly = valid ? (weekly * weeksNum) / 12 : 0;
  const annual = valid ? weekly * weeksNum : 0;

  const handleReset = () => {
    setRate("25");
    setHoursPerWeek("40");
    setWeeksPerYear("50");
  };

  return (
    <ToolLayout
      slug="hourly-to-salary-calculator"
      howTo={[
        "Enter your hourly pay rate",
        "Enter how many hours you work per week",
        "Enter how many weeks per year you work",
        "See your equivalent daily, weekly, monthly and annual pay",
      ]}
    >
      <div className="max-w-lg mx-auto space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="hts-rate" className="block text-sm font-medium mb-1.5">Hourly Rate (amount)</label>
            <input id="hts-rate" type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="hts-hours" className="block text-sm font-medium mb-1.5">Hours / Week</label>
            <input id="hts-hours" type="number" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="hts-weeks" className="block text-sm font-medium mb-1.5">Weeks / Year</label>
            <input id="hts-weeks" type="number" value={weeksPerYear} onChange={(e) => setWeeksPerYear(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>

        {!valid && <p className="text-sm text-destructive">Enter a non-negative rate and positive hours/weeks.</p>}

        {valid && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 grid sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-muted-foreground">Daily</div>
              <div className="text-lg font-bold">{daily.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Weekly</div>
              <div className="text-lg font-bold">{weekly.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Monthly</div>
              <div className="text-lg font-bold">{monthly.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Annual</div>
              <div className="text-lg font-bold">{annual.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
            </div>
          </div>
        )}

        <button onClick={handleReset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
      </div>
    </ToolLayout>
  );
};

export default HourlyToSalaryCalculator;
