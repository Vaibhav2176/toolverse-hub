import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Subject { name: string; marks: string; total: string }

const GradeCalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: "Math", marks: "", total: "100" },
    { name: "Science", marks: "", total: "100" },
  ]);

  const addSubject = () => setSubjects([...subjects, { name: "", marks: "", total: "100" }]);
  const update = (i: number, field: keyof Subject, val: string) => {
    const copy = [...subjects]; copy[i] = { ...copy[i], [field]: val }; setSubjects(copy);
  };
  const remove = (i: number) => { if (subjects.length > 1) setSubjects(subjects.filter((_, idx) => idx !== i)); };

  const valid = subjects.filter(s => !isNaN(parseFloat(s.marks)) && !isNaN(parseFloat(s.total)) && parseFloat(s.total) > 0);
  const totalMarks = valid.reduce((s, sub) => s + parseFloat(sub.marks), 0);
  const totalPossible = valid.reduce((s, sub) => s + parseFloat(sub.total), 0);
  const percentage = totalPossible > 0 ? (totalMarks / totalPossible) * 100 : 0;

  const getGrade = (p: number) => {
    if (p >= 90) return "A+";
    if (p >= 80) return "A";
    if (p >= 70) return "B";
    if (p >= 60) return "C";
    if (p >= 50) return "D";
    return "F";
  };

  return (
    <ToolLayout slug="grade-calculator" howTo={["Add subjects with marks obtained and total marks", "See overall percentage and grade"]}>
      <div className="space-y-4">
        {subjects.map((s, i) => (
          <div key={i} className="grid grid-cols-[1fr_80px_80px_auto] gap-2 items-end">
            <div><Label>Subject</Label><Input value={s.name} onChange={e => update(i, "name", e.target.value)} placeholder="Subject" /></div>
            <div><Label>Marks</Label><Input type="number" value={s.marks} onChange={e => update(i, "marks", e.target.value)} placeholder="85" /></div>
            <div><Label>Total</Label><Input type="number" value={s.total} onChange={e => update(i, "total", e.target.value)} placeholder="100" /></div>
            <Button variant="outline" size="sm" onClick={() => remove(i)}>✕</Button>
          </div>
        ))}
        <Button variant="outline" onClick={addSubject}>+ Add Subject</Button>
        {valid.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-2xl font-bold text-primary">{totalMarks}/{totalPossible}</div><div className="text-xs text-muted-foreground">Total Marks</div></div>
            <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-2xl font-bold text-primary">{percentage.toFixed(1)}%</div><div className="text-xs text-muted-foreground">Percentage</div></div>
            <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-2xl font-bold text-primary">{getGrade(percentage)}</div><div className="text-xs text-muted-foreground">Grade</div></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default GradeCalculator;
