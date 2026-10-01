import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const AgeInDaysCalculator = () => {
  const [dob, setDob] = useState("");

  const birth = new Date(dob);
  const now = new Date();
  const valid = dob && !isNaN(birth.getTime()) && birth.getTime() <= now.getTime();

  const diffMs = valid ? now.getTime() - birth.getTime() : 0;
  const totalDays = Math.floor(diffMs / 86400000);
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = Math.floor(diffMs / 3600000);
  const totalMinutes = Math.floor(diffMs / 60000);

  let months = 0;
  if (valid) {
    months = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
    if (now.getDate() < birth.getDate()) months -= 1;
  }

  const reset = () => setDob("");

  return (
    <ToolLayout
      slug="age-in-days-calculator"
      howTo={[
        "Enter your date of birth",
        "The tool compares it against today's date",
        "See your age expressed in total days, weeks, months, hours and minutes",
      ]}
      faqs={[
        { q: "How is this different from a regular age calculator?", a: "Instead of just years/months/days, this tool focuses on large cumulative totals — how many days, weeks, hours and minutes you've been alive — which is useful for milestone tracking or curiosity." },
        { q: "Does it account for leap years?", a: "Yes, because it works directly from real calendar dates and milliseconds, leap years are automatically factored into the totals." },
      ]}
    >
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="dob" className="block text-sm font-medium mb-1.5">Date of birth</label>
          <input id="dob" type="date" value={dob} onChange={e => setDob(e.target.value)} max={now.toISOString().slice(0, 10)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        {dob && !valid && <p className="text-sm text-destructive">Please enter a valid date of birth that is not in the future.</p>}
        {valid && (
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Total Days", value: totalDays },
              { label: "Total Weeks", value: totalWeeks },
              { label: "Total Months", value: months },
              { label: "Total Hours", value: totalHours },
              { label: "Total Minutes", value: totalMinutes },
            ].map(item => (
              <div key={item.label} className="rounded-xl border border-border bg-secondary/40 p-4 text-center">
                <div className="text-xl font-bold text-foreground">{item.value.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        )}
        <button type="button" onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
      </div>
    </ToolLayout>
  );
};
export default AgeInDaysCalculator;
