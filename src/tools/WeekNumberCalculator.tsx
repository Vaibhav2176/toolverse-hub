import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const getISOWeek = (d: Date) => {
  const date = new Date(d.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  const week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
};

const WeekNumberCalculator = () => {
  const [date, setDate] = useState("");
  const [result, setResult] = useState<{ week: number; year: number; day: string } | null>(null);

  const calculate = () => {
    if (!date) return;
    const d = new Date(date);
    setResult({ week: getISOWeek(d), year: d.getFullYear(), day: d.toLocaleDateString("en-US", { weekday: "long" }) });
  };

  return (
    <ToolLayout slug="week-number-calculator" howTo={["Select any date.", "See the ISO week number and day of the week."]} faqs={[{ q: "What is ISO week numbering?", a: "ISO 8601 defines week 1 as the week containing the first Thursday of the year." }]}>
      <div className="space-y-4">
        <div><Label>Date</Label><Input type="date" value={date} onChange={e => setDate(e.target.value)} /></div>
        <div className="flex gap-3">
          <Button onClick={calculate}>Find Week</Button>
          <Button variant="outline" onClick={() => { setDate(""); setResult(null); }}>Reset</Button>
        </div>
        {result && (
          <div className="p-4 rounded-xl bg-secondary/50 text-center space-y-1">
            <p className="text-3xl font-bold text-primary">Week {result.week}</p>
            <p className="text-sm text-muted-foreground">{result.day}, {result.year}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default WeekNumberCalculator;
