import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const DateToDateCalculator = () => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const valid = date1 && date2 && !isNaN(d1.getTime()) && !isNaN(d2.getTime());

  let years = 0, months = 0, days = 0, totalDays = 0, totalWeeks = 0, totalHours = 0;
  if (valid) {
    const [start, end] = d1.getTime() <= d2.getTime() ? [d1, d2] : [d2, d1];
    years = end.getFullYear() - start.getFullYear();
    months = end.getMonth() - start.getMonth();
    days = end.getDate() - start.getDate();
    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    const diffMs = Math.abs(end.getTime() - start.getTime());
    totalDays = Math.floor(diffMs / 86400000);
    totalWeeks = Math.floor(totalDays / 7);
    totalHours = Math.floor(diffMs / 3600000);
  }

  const reset = () => { setDate1(""); setDate2(""); };

  return (
    <ToolLayout
      slug="date-to-date-calculator"
      howTo={[
        "Enter the first date",
        "Enter the second date",
        "View the exact duration broken into years, months and days",
        "Check total days, weeks and hours between the two dates",
      ]}
      faqs={[
        { q: "What makes this different from a simple day-count tool?", a: "This calculator breaks the gap into a calendar-accurate years/months/days figure, not just a raw day total, while also giving you total days, weeks and hours for reference." },
        { q: "Does the order of the two dates matter?", a: "No, the calculator automatically works out which date is earlier, so you can enter them in any order and still get a positive duration." },
      ]}
    >
      <div className="max-w-md mx-auto space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="d1" className="block text-sm font-medium mb-1.5">First date</label>
            <input id="d1" type="date" value={date1} onChange={e => setDate1(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="d2" className="block text-sm font-medium mb-1.5">Second date</label>
            <input id="d2" type="date" value={date2} onChange={e => setDate2(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>
        {(date1 || date2) && !valid && <p className="text-sm text-destructive">Please enter two valid dates.</p>}
        {valid && (
          <>
            <div className="rounded-xl border border-border bg-secondary/40 p-5 text-center">
              <div className="text-xs text-muted-foreground mb-1">Exact duration</div>
              <div className="text-xl font-bold text-foreground">{years}y {months}m {days}d</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Total Days", value: totalDays },
                { label: "Total Weeks", value: totalWeeks },
                { label: "Total Hours", value: totalHours },
              ].map(item => (
                <div key={item.label} className="bg-secondary rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-foreground">{item.value.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </>
        )}
        <button type="button" onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
      </div>
    </ToolLayout>
  );
};
export default DateToDateCalculator;
