import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

function getIsoWeek(d: Date): number {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

function isLeap(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const DayOfYearCalculator = () => {
  const [date, setDate] = useState("");

  const d = new Date(date);
  const valid = date && !isNaN(d.getTime());

  let dayOfYear = 0, daysRemaining = 0, isoWeek = 0, totalDaysInYear = 365;
  if (valid) {
    const start = new Date(d.getFullYear(), 0, 1);
    dayOfYear = Math.floor((d.getTime() - start.getTime()) / 86400000) + 1;
    totalDaysInYear = isLeap(d.getFullYear()) ? 366 : 365;
    daysRemaining = totalDaysInYear - dayOfYear;
    isoWeek = getIsoWeek(d);
  }

  const reset = () => setDate("");

  return (
    <ToolLayout
      slug="day-of-year-calculator"
      howTo={[
        "Pick any date",
        "See which day number of the year it falls on",
        "Check how many days remain in the year",
        "View the ISO week number for that date",
      ]}
      faqs={[
        { q: "What is day-of-year numbering?", a: "Day-of-year numbering counts each day starting from January 1st as day 1, continuing sequentially through December 31st as day 365 or 366 in a leap year." },
        { q: "What is an ISO week number?", a: "ISO week numbering divides the year into weeks starting on Monday, with week 1 being the week containing the first Thursday of the year, as defined by the ISO 8601 standard." },
        { q: "Does this tool handle leap years?", a: "Yes, it checks whether the selected year is a leap year and adjusts the total days in the year and the remaining-day count accordingly." },
      ]}
    >
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="doy-date" className="block text-sm font-medium mb-1.5">Select a date</label>
          <input id="doy-date" type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        {date && !valid && <p className="text-sm text-destructive">Please enter a valid date.</p>}
        {valid && (
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Day of Year", value: dayOfYear },
              { label: "Days Remaining", value: daysRemaining },
              { label: "ISO Week", value: isoWeek },
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
export default DayOfYearCalculator;
