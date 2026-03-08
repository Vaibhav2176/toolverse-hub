import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const JsonToCsv = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const convert = () => {
    setError("");
    try {
      const data = JSON.parse(input);
      const arr = Array.isArray(data) ? data : [data];
      if (arr.length === 0) { setOutput(""); return; }
      const keys = Object.keys(arr[0]);
      const csv = [keys.join(","), ...arr.map(row => keys.map(k => {
        const v = String(row[k] ?? "");
        return v.includes(",") || v.includes('"') ? `"${v.replace(/"/g, '""')}"` : v;
      }).join(","))].join("\n");
      setOutput(csv);
    } catch { setError("Invalid JSON"); }
  };

  return (
    <ToolLayout slug="json-to-csv" howTo={["Paste JSON array data.", "Click Convert to generate CSV.", "Copy the CSV output."]} faqs={[{ q: "What JSON format is supported?", a: "An array of objects with consistent keys works best." }]}>
      <div className="space-y-4">
        <div><Label>JSON Input</Label><textarea className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={input} onChange={e => setInput(e.target.value)} placeholder='[{"name":"John","age":30}]' /></div>
        <div className="flex gap-3"><Button onClick={convert}>Convert</Button><Button variant="outline" onClick={() => { setInput(""); setOutput(""); setError(""); }}>Reset</Button></div>
        {error && <p className="text-destructive text-sm">{error}</p>}
        {output && <div><Label>CSV Output</Label><textarea className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={output} readOnly /></div>}
      </div>
    </ToolLayout>
  );
};
export default JsonToCsv;
