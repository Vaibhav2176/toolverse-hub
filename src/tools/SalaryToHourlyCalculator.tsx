import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const SalaryToHourlyCalculator = () => {
  const [salary, setSalary] = useState("60000");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("50");

  const salaryNum = Number(salary);
  const hoursNum = Number(hoursPerWeek);
  const weeksNum = Number(weeksPerYear);
  const valid = Number.isFinite(salaryNum) && salaryNum >= 0 && Number.isFinite(hoursNum) && hoursNum > 0 && Number.isFinite(weeksNum) && weeksNum > 0;

  const totalHours = hoursNum * weeksNum;
  const hourlyRate = valid ? salaryNum / totalHours : 0;

  const handleReset = () => {
    setSalary("60000");
    setHoursPerWeek("40");
    setWeeksPerYear("50");
  };

  return (
    <ToolLayout
      slug="salary-to-hourly-calculator"
      howTo={[
        "Enter your annual salary",
        "Enter your typical hours worked per week",
        "Enter how many weeks per year you work",
        "See your effective hourly rate",
      ]}
    >
      <div className="max-w-lg mx-auto space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="sth-salary" className="block text-sm font-medium mb-1.5">Annual Salary (amount)</label>
            <input id="sth-salary" type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="sth-hours" className="block text-sm font-medium mb-1.5">Hours / Week</label>
            <input id="sth-hours" type="number" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="sth-weeks" className="block text-sm font-medium mb-1.5">Weeks / Year</label>
            <input id="sth-weeks" type="number" value={weeksPerYear} onChange={(e) => setWeeksPerYear(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>

        {!valid && <p className="text-sm text-destructive">Enter a non-negative salary and positive hours/weeks.</p>}

        {valid && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5">
            <div className="text-xs text-muted-foreground">Effective Hourly Rate</div>
            <div className="text-2xl font-bold">{hourlyRate.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
          </div>
        )}

        <button onClick={handleReset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
      </div>
    </ToolLayout>
  );
};

export default SalaryToHourlyCalculator;
