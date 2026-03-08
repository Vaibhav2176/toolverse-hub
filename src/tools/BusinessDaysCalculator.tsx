import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const BusinessDaysCalculator = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    if (!start || !end) return;
    let count = 0;
    const s = new Date(start);
    const e = new Date(end);
    const cur = new Date(s);
    while (cur <= e) {
      const day = cur.getDay();
      if (day !== 0 && day !== 6) count++;
      cur.setDate(cur.getDate() + 1);
    }
    setResult(count);
  };

  return (
    <ToolLayout slug="business-days-calculator" howTo={["Select start and end dates.", "Click Calculate to count business days (excludes weekends)."]} faqs={[{ q: "Are holidays excluded?", a: "Only weekends (Saturday & Sunday) are excluded. Public holidays are counted as business days." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Start Date</Label><Input type="date" value={start} onChange={e => setStart(e.target.value)} /></div>
          <div><Label>End Date</Label><Input type="date" value={end} onChange={e => setEnd(e.target.value)} /></div>
        </div>
        <div className="flex gap-3">
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={() => { setStart(""); setEnd(""); setResult(null); }}>Reset</Button>
        </div>
        {result !== null && <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-3xl font-bold text-primary">{result}</p><p className="text-sm text-muted-foreground">business days</p></div>}
      </div>
    </ToolLayout>
  );
};
export default BusinessDaysCalculator;
