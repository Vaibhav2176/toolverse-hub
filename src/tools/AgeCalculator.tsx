import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob), now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    const totalDays = Math.floor((now.getTime() - birth.getTime()) / 86400000);
    setResult(`${years} years, ${months} months, ${days} days (${totalDays.toLocaleString()} total days)`);
  };

  return (
    <ToolLayout slug="age-calculator" howTo={["Enter your date of birth", "Click Calculate", "See your exact age"]} faqs={[{ q: "Is the calculation accurate?", a: "Yes, it accounts for leap years and varying month lengths." }]}>
      <div className="space-y-4 max-w-md">
        <label className="block text-sm font-medium">Date of Birth</label>
        <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <div className="flex gap-3">
          <button onClick={calculate} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={() => { setDob(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default AgeCalculator;
