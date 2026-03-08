import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const DateDiffCalculator = () => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const valid = date1 && date2 && !isNaN(d1.getTime()) && !isNaN(d2.getTime());

  const diffMs = valid ? Math.abs(d2.getTime() - d1.getTime()) : 0;
  const days = Math.floor(diffMs / 86400000);
  const weeks = Math.floor(days / 7);
  const months = valid ? Math.abs((d2.getFullYear() - d1.getFullYear()) * 12 + d2.getMonth() - d1.getMonth()) : 0;
  const years = valid ? Math.abs(d2.getFullYear() - d1.getFullYear()) : 0;
  const hours = Math.floor(diffMs / 3600000);

  return (
    <ToolLayout slug="date-difference-calculator" howTo={["Pick a start date", "Pick an end date", "See the difference in various units"]} faqs={[{ q: "Does it account for leap years?", a: "Yes, it uses actual calendar dates for accurate results." }]}>
      <div className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground">Start Date</label>
            <input type="date" value={date1} onChange={e => setDate1(e.target.value)} className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">End Date</label>
            <input type="date" value={date2} onChange={e => setDate2(e.target.value)} className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          </div>
        </div>
        {valid && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: "Days", value: days },
              { label: "Weeks", value: weeks },
              { label: "Months", value: months },
              { label: "Years", value: years },
              { label: "Hours", value: hours },
              { label: "Minutes", value: hours * 60 },
            ].map(item => (
              <div key={item.label} className="bg-secondary rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-foreground">{item.value.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default DateDiffCalculator;
