import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const BusinessDateCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [workDays, setWorkDays] = useState("10");

  const n = Number(workDays);
  const validDate = startDate && !isNaN(new Date(startDate).getTime());
  const validN = Number.isFinite(n) && n >= 0;
  const valid = validDate && validN;

  let result: Date | null = null;
  if (valid) {
    const d = new Date(startDate);
    let remaining = Math.floor(n);
    while (remaining > 0) {
      d.setDate(d.getDate() + 1);
      const dow = d.getDay();
      if (dow !== 0 && dow !== 6) remaining--;
    }
    result = d;
  }

  const weekday = result ? result.toLocaleDateString(undefined, { weekday: "long" }) : "";
  const formatted = result ? result.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }) : "";

  const reset = () => { setStartDate(""); setWorkDays("10"); };

  return (
    <ToolLayout
      slug="business-date-calculator"
      howTo={[
        "Pick a starting date",
        "Enter how many working days to add",
        "Weekends are automatically skipped",
        "See the landing date and its weekday",
      ]}
      faqs={[
        { q: "Does this count the starting date itself?", a: "No, the calculator starts counting from the next day and only lands on a date after the specified number of working weekdays has passed." },
        { q: "Are public holidays excluded?", a: "This tool only skips Saturdays and Sundays. Public holidays vary by country and calendar, so they are not automatically excluded." },
      ]}
    >
      <div className="max-w-md mx-auto space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="start" className="block text-sm font-medium mb-1.5">Starting date</label>
            <input id="start" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="workdays" className="block text-sm font-medium mb-1.5">Working days to add</label>
            <input id="workdays" type="number" min={0} value={workDays} onChange={e => setWorkDays(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>
        {startDate && !validDate && <p className="text-sm text-destructive">Please enter a valid starting date.</p>}
        {workDays && !validN && <p className="text-sm text-destructive">Please enter a non-negative number of days.</p>}
        {valid && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 text-center">
            <div className="text-xs text-muted-foreground mb-1">Landing date</div>
            <div className="text-2xl font-bold text-foreground">{formatted}</div>
            <div className="text-sm text-muted-foreground mt-1">{weekday}</div>
          </div>
        )}
        <button type="button" onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
      </div>
    </ToolLayout>
  );
};
export default BusinessDateCalculator;
