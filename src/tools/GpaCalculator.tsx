import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

interface Course { name: string; grade: string; credits: string; }
const gradePoints: Record<string, number> = { "A+": 4, A: 4, "A-": 3.7, "B+": 3.3, B: 3, "B-": 2.7, "C+": 2.3, C: 2, "C-": 1.7, "D+": 1.3, D: 1, F: 0 };

const GpaCalculator = () => {
  const [courses, setCourses] = useState<Course[]>([{ name: "", grade: "A", credits: "3" }]);
  const [result, setResult] = useState<string | null>(null);

  const update = (i: number, field: keyof Course, val: string) => {
    const c = [...courses]; c[i] = { ...c[i], [field]: val }; setCourses(c);
  };

  const calc = () => {
    let totalPoints = 0, totalCredits = 0;
    courses.forEach(c => {
      const cr = parseFloat(c.credits), gp = gradePoints[c.grade];
      if (!isNaN(cr) && gp !== undefined) { totalPoints += gp * cr; totalCredits += cr; }
    });
    setResult(totalCredits > 0 ? `GPA: ${(totalPoints / totalCredits).toFixed(2)} (${totalCredits} credits)` : "Add courses");
  };

  return (
    <ToolLayout slug="gpa-calculator" howTo={["Add courses with grade and credits", "Click Calculate GPA"]}>
      <div className="space-y-4">
        {courses.map((c, i) => (
          <div key={i} className="grid grid-cols-3 gap-2">
            <input placeholder="Course" value={c.name} onChange={e => update(i, "name", e.target.value)} className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            <select value={c.grade} onChange={e => update(i, "grade", e.target.value)} className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary">
              {Object.keys(gradePoints).map(g => <option key={g}>{g}</option>)}
            </select>
            <input type="number" placeholder="Credits" value={c.credits} onChange={e => update(i, "credits", e.target.value)} className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
          </div>
        ))}
        <button onClick={() => setCourses([...courses, { name: "", grade: "A", credits: "3" }])} className="text-sm text-primary font-medium hover:underline">+ Add Course</button>
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate GPA</button>
          <button onClick={() => { setCourses([{ name: "", grade: "A", credits: "3" }]); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default GpaCalculator;
