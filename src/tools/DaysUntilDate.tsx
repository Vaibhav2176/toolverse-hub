import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const DaysUntilDate = () => {
  const [date, setDate] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    if (!date) return;
    const target = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    const diff = Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    setResult(diff);
  };

  return (
    <ToolLayout slug="days-until-date" howTo={["Select a future date.", "Click Calculate to see remaining days."]} faqs={[{ q: "Does it count today?", a: "No, it counts full days starting from tomorrow." }]}>
      <div className="space-y-4">
        <div><Label>Target Date</Label><Input type="date" value={date} onChange={e => setDate(e.target.value)} /></div>
        <div className="flex gap-3">
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={() => { setDate(""); setResult(null); }}>Reset</Button>
        </div>
        {result !== null && (
          <div className="p-4 rounded-xl bg-secondary/50 text-center">
            <p className="text-3xl font-bold text-primary">{result}</p>
            <p className="text-sm text-muted-foreground">{result >= 0 ? "days remaining" : "days ago"}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default DaysUntilDate;
