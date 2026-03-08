import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const CsvToJson = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convert = () => {
    const lines = input.trim().split("\n");
    if (lines.length < 2) { setOutput("[]"); return; }
    const headers = lines[0].split(",").map(h => h.trim());
    const data = lines.slice(1).map(line => {
      const vals = line.split(",").map(v => v.trim());
      const obj: Record<string, string> = {};
      headers.forEach((h, i) => { obj[h] = vals[i] || ""; });
      return obj;
    });
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <ToolLayout slug="csv-to-json" howTo={["Paste CSV data with headers in the first row.", "Click Convert to generate JSON."]} faqs={[{ q: "Does it handle quoted fields?", a: "Basic CSV parsing is supported. Complex quoted fields may need manual adjustments." }]}>
      <div className="space-y-4">
        <div><Label>CSV Input</Label><textarea className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={input} onChange={e => setInput(e.target.value)} placeholder="name,age&#10;John,30&#10;Jane,25" /></div>
        <div className="flex gap-3"><Button onClick={convert}>Convert</Button><Button variant="outline" onClick={() => { setInput(""); setOutput(""); }}>Reset</Button></div>
        {output && <div><Label>JSON Output</Label><textarea className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={output} readOnly /></div>}
      </div>
    </ToolLayout>
  );
};
export default CsvToJson;
