import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const UnixTimestampConverter = () => {
  const [timestamp, setTimestamp] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [result, setResult] = useState("");

  const toDate = () => {
    const ts = Number(timestamp);
    if (isNaN(ts)) return;
    const d = new Date(ts * (ts > 1e12 ? 1 : 1000));
    setResult(d.toISOString() + "\n" + d.toLocaleString());
  };

  const toTimestamp = () => {
    if (!dateStr) return;
    const d = new Date(dateStr);
    setResult(`Unix: ${Math.floor(d.getTime() / 1000)}\nMilliseconds: ${d.getTime()}`);
  };

  const now = () => {
    const n = Math.floor(Date.now() / 1000);
    setTimestamp(String(n));
    setResult(`Current: ${n}\n${new Date().toISOString()}`);
  };

  return (
    <ToolLayout slug="unix-timestamp-converter" howTo={["Enter a Unix timestamp to convert to a date.", "Or enter a date to get its Unix timestamp.", "Click 'Now' for the current timestamp."]} faqs={[{ q: "Seconds vs milliseconds?", a: "The tool auto-detects. Timestamps > 1 trillion are treated as milliseconds." }]}>
      <div className="space-y-4">
        <div><Label>Unix Timestamp</Label><div className="flex gap-2"><Input placeholder="e.g. 1700000000" value={timestamp} onChange={e => setTimestamp(e.target.value)} /><Button onClick={toDate}>→ Date</Button></div></div>
        <div><Label>Date</Label><div className="flex gap-2"><Input type="datetime-local" value={dateStr} onChange={e => setDateStr(e.target.value)} /><Button onClick={toTimestamp}>→ Unix</Button></div></div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={now}>Now</Button>
          <Button variant="outline" onClick={() => { setTimestamp(""); setDateStr(""); setResult(""); }}>Reset</Button>
        </div>
        {result && <pre className="p-4 rounded-xl bg-secondary/50 text-sm whitespace-pre-wrap">{result}</pre>}
      </div>
    </ToolLayout>
  );
};
export default UnixTimestampConverter;
