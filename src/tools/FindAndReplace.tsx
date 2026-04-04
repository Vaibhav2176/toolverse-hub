import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FindAndReplace = () => {
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);

  const doReplace = () => {
    if (!find) return;
    const flags = caseSensitive ? "g" : "gi";
    const regex = new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), flags);
    setText(text.replace(regex, replace));
  };

  const count = find ? (text.match(new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), caseSensitive ? "g" : "gi")) || []).length : 0;

  return (
    <ToolLayout slug="find-and-replace" howTo={["Paste your text", "Enter search and replacement terms", "Click Replace All"]}>
      <div className="space-y-4">
        <div><Label>Text</Label><textarea rows={6} className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={text} onChange={e => setText(e.target.value)} placeholder="Paste your text here..." /></div>
        <div className="grid grid-cols-2 gap-3">
          <div><Label>Find</Label><Input value={find} onChange={e => setFind(e.target.value)} placeholder="Search for..." /></div>
          <div><Label>Replace with</Label><Input value={replace} onChange={e => setReplace(e.target.value)} placeholder="Replace with..." /></div>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={caseSensitive} onChange={e => setCaseSensitive(e.target.checked)} /> Case sensitive</label>
          {find && <span className="text-sm text-muted-foreground">{count} match{count !== 1 ? "es" : ""} found</span>}
        </div>
        <div className="flex gap-3">
          <Button onClick={doReplace}>Replace All</Button>
          <Button variant="outline" onClick={() => { setText(""); setFind(""); setReplace(""); }}>Clear</Button>
        </div>
      </div>
    </ToolLayout>
  );
};
export default FindAndReplace;
