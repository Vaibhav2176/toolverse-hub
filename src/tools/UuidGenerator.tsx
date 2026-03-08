import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const genUUID = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
  const r = Math.random() * 16 | 0;
  return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
});

const UuidGenerator = () => {
  const [count, setCount] = useState("1");
  const [uuids, setUuids] = useState<string[]>([]);

  const generate = () => {
    const n = Math.min(Math.max(1, Number(count) || 1), 100);
    setUuids(Array.from({ length: n }, genUUID));
  };

  const copyAll = () => navigator.clipboard.writeText(uuids.join("\n"));

  return (
    <ToolLayout slug="uuid-generator" howTo={["Choose how many UUIDs to generate.", "Click Generate.", "Copy individual UUIDs or all at once."]} faqs={[{ q: "What version is generated?", a: "UUID v4 (random) following RFC 4122." }]}>
      <div className="space-y-4">
        <div className="flex gap-3 items-end">
          <div className="flex-1"><Label>Count</Label><Input type="number" value={count} onChange={e => setCount(e.target.value)} min="1" max="100" /></div>
          <Button onClick={generate}>Generate</Button>
          <Button variant="outline" onClick={() => setUuids([])}>Reset</Button>
        </div>
        {uuids.length > 0 && (
          <div className="space-y-2">
            <div className="flex justify-end"><Button variant="ghost" size="sm" onClick={copyAll}>Copy All</Button></div>
            {uuids.map((u, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50">
                <code className="flex-1 text-sm font-mono">{u}</code>
                <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(u)}>Copy</Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default UuidGenerator;
