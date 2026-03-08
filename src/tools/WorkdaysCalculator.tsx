import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const WorkdaysCalculator = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState<{ total: number; weekends: number } | null>(null);

  const calculate = () => {
    if (!start || !end) return;
    let total = 0, weekends = 0;
    const cur = new Date(start);
    const e = new Date(end);
    while (cur <= e) {
      total++;
      const day = cur.getDay();
      if (day === 0 || day === 6) weekends++;
      cur.setDate(cur.getDate() + 1);
    }
    setResult({ total: total - weekends, weekends });
  };

  return (
    <ToolLayout slug="workdays-calculator" howTo={["Pick start and end dates.", "See total working days and weekend days."]} faqs={[{ q: "What's the difference from Business Days?", a: "They are similar — this tool also shows total calendar and weekend days for comparison." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Start Date</Label><Input type="date" value={start} onChange={e => setStart(e.target.value)} /></div>
          <div><Label>End Date</Label><Input type="date" value={end} onChange={e => setEnd(e.target.value)} /></div>
        </div>
        <div className="flex gap-3">
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={() => { setStart(""); setEnd(""); setResult(null); }}>Reset</Button>
        </div>
        {result && (
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-2xl font-bold text-primary">{result.total}</p><p className="text-sm text-muted-foreground">working days</p></div>
            <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-2xl font-bold text-muted-foreground">{result.weekends}</p><p className="text-sm text-muted-foreground">weekend days</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default WorkdaysCalculator;
