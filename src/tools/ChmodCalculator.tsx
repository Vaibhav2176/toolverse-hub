import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Label } from "@/components/ui/label";

const PERMS = ["---", "--x", "-w-", "-wx", "r--", "r-x", "rw-", "rwx"];

const ChmodCalculator = () => {
  const [owner, setOwner] = useState([true, true, false]); // r,w,x
  const [group, setGroup] = useState([true, false, false]);
  const [others, setOthers] = useState([true, false, false]);

  const toNum = (bits: boolean[]) => bits.reduce((a, b, i) => a + (b ? [4, 2, 1][i] : 0), 0);
  const numeric = `${toNum(owner)}${toNum(group)}${toNum(others)}`;
  const symbolic = `-${PERMS[toNum(owner)]}${PERMS[toNum(group)]}${PERMS[toNum(others)]}`;

  const Toggle = ({ label, bits, setBits }: { label: string; bits: boolean[]; setBits: (b: boolean[]) => void }) => (
    <div>
      <Label>{label}</Label>
      <div className="flex gap-2 mt-1">
        {["Read", "Write", "Execute"].map((p, i) => (
          <label key={p} className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border cursor-pointer text-sm transition-colors ${bits[i] ? "bg-primary/10 border-primary/30" : "bg-secondary/50 border-border"}`}>
            <input type="checkbox" checked={bits[i]} onChange={() => { const n = [...bits]; n[i] = !n[i]; setBits(n); }} className="sr-only" />{p}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <ToolLayout slug="chmod-calculator" howTo={["Toggle read, write, execute for owner, group, others.", "See the numeric and symbolic chmod values."]} faqs={[{ q: "What does 755 mean?", a: "Owner: rwx (7), Group: r-x (5), Others: r-x (5)." }]}>
      <div className="space-y-4">
        <Toggle label="Owner" bits={owner} setBits={setOwner} />
        <Toggle label="Group" bits={group} setBits={setGroup} />
        <Toggle label="Others" bits={others} setBits={setOthers} />
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Numeric</p><p className="text-3xl font-bold font-mono text-primary">{numeric}</p></div>
          <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Symbolic</p><p className="text-2xl font-bold font-mono">{symbolic}</p></div>
        </div>
      </div>
    </ToolLayout>
  );
};
export default ChmodCalculator;
