import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const FIELDS: Record<string, string[]> = {
  minute: ["0-59", "*", ",", "-", "/"],
  hour: ["0-23", "*", ",", "-", "/"],
  "day of month": ["1-31", "*", ",", "-", "/"],
  month: ["1-12", "*", ",", "-", "/"],
  "day of week": ["0-6", "*", ",", "-", "/"],
};

const describe = (expr: string): string => {
  const parts = expr.trim().split(/\s+/);
  if (parts.length !== 5) return "Invalid: expected 5 fields (minute hour day month weekday)";
  const labels = Object.keys(FIELDS);
  return parts.map((p, i) => {
    if (p === "*") return `Every ${labels[i]}`;
    if (p.includes("/")) { const [, step] = p.split("/"); return `Every ${step} ${labels[i]}(s)`; }
    if (p.includes("-")) return `${labels[i]} ${p}`;
    return `${labels[i]}: ${p}`;
  }).join(", ");
};

const getNextRuns = (expr: string, count = 5): string[] => {
  const parts = expr.trim().split(/\s+/);
  if (parts.length !== 5) return [];
  const runs: string[] = [];
  const now = new Date();
  const d = new Date(now);
  d.setSeconds(0, 0);
  for (let i = 0; i < 525600 && runs.length < count; i++) {
    d.setMinutes(d.getMinutes() + 1);
    const m = d.getMinutes(), h = d.getHours(), dom = d.getDate(), mon = d.getMonth() + 1, dow = d.getDay();
    const match = (field: string, val: number) => {
      if (field === "*") return true;
      if (field.includes("/")) { const [base, step] = field.split("/"); const b = base === "*" ? 0 : Number(base); return (val - b) % Number(step) === 0 && val >= b; }
      if (field.includes("-")) { const [a, b] = field.split("-").map(Number); return val >= a && val <= b; }
      return field.split(",").map(Number).includes(val);
    };
    if (match(parts[0], m) && match(parts[1], h) && match(parts[2], dom) && match(parts[3], mon) && match(parts[4], dow)) {
      runs.push(d.toLocaleString());
    }
  }
  return runs;
};

const CronExpressionParser = () => {
  const [expr, setExpr] = useState("*/5 * * * *");
  const [result, setResult] = useState<{ description: string; nextRuns: string[] } | null>(null);

  const parse = () => setResult({ description: describe(expr), nextRuns: getNextRuns(expr) });

  return (
    <ToolLayout slug="cron-expression-parser" howTo={["Enter a cron expression (5 fields).", "Click Parse to see description and next runs."]} faqs={[{ q: "What format is used?", a: "Standard 5-field cron: minute hour day-of-month month day-of-week." }]}>
      <div className="space-y-4">
        <div><Label>Cron Expression</Label><Input value={expr} onChange={e => setExpr(e.target.value)} className="font-mono" placeholder="*/5 * * * *" /></div>
        <p className="text-xs text-muted-foreground">Format: minute(0-59) hour(0-23) day(1-31) month(1-12) weekday(0-6)</p>
        <div className="flex gap-3"><Button onClick={parse}>Parse</Button><Button variant="outline" onClick={() => { setExpr("*/5 * * * *"); setResult(null); }}>Reset</Button></div>
        {result && (
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-secondary/50"><p className="text-sm">{result.description}</p></div>
            {result.nextRuns.length > 0 && (
              <div><Label>Next {result.nextRuns.length} Runs</Label>
                <div className="space-y-1 mt-1">{result.nextRuns.map((r, i) => <div key={i} className="p-2 rounded-lg bg-secondary/50 text-sm font-mono">{r}</div>)}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default CronExpressionParser;
