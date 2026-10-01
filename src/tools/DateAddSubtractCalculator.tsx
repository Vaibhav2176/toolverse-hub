import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const UNITS = ["days", "weeks", "months", "years"] as const;
type Unit = typeof UNITS[number];

const DateAddSubtractCalculator = () => {
  const [baseDate, setBaseDate] = useState("");
  const [amount, setAmount] = useState("7");
  const [unit, setUnit] = useState<Unit>("days");
  const [op, setOp] = useState<"add" | "subtract">("add");

  const n = Number(amount);
  const validDate = baseDate && !isNaN(new Date(baseDate).getTime());
  const validAmount = Number.isFinite(n);
  const valid = validDate && validAmount;

  let result: Date | null = null;
  if (valid) {
    const d = new Date(baseDate);
    const signed = op === "add" ? n : -n;
    if (unit === "days") d.setDate(d.getDate() + signed);
    else if (unit === "weeks") d.setDate(d.getDate() + signed * 7);
    else if (unit === "months") d.setMonth(d.getMonth() + signed);
    else if (unit === "years") d.setFullYear(d.getFullYear() + signed);
    result = d;
  }

  const weekday = result ? result.toLocaleDateString(undefined, { weekday: "long" }) : "";
  const formatted = result ? result.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }) : "";

  const reset = () => {
    setBaseDate("");
    setAmount("7");
    setUnit("days");
    setOp("add");
  };

  return (
    <ToolLayout
      slug="date-add-subtract-calculator"
      howTo={[
        "Pick a starting date",
        "Enter the number of days, weeks, months or years",
        "Choose whether to add or subtract that amount",
        "Read the resulting date and weekday",
      ]}
      faqs={[
        { q: "Does this handle month-end overflow correctly?", a: "Yes, it uses JavaScript's native Date object, which automatically rolls over into the next month when a day doesn't exist (for example adding a month to January 31)." },
        { q: "Can I subtract time instead of adding it?", a: "Yes, toggle the Subtract option to move backward from your starting date instead of forward." },
      ]}
    >
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="base-date" className="block text-sm font-medium mb-1.5">Starting date</label>
          <input id="base-date" type="date" value={baseDate} onChange={e => setBaseDate(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="op" className="block text-sm font-medium mb-1.5">Operation</label>
            <select id="op" value={op} onChange={e => setOp(e.target.value as "add" | "subtract")} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
              <option value="add">Add</option>
              <option value="subtract">Subtract</option>
            </select>
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium mb-1.5">Amount</label>
            <input id="amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>
        <div>
          <label htmlFor="unit" className="block text-sm font-medium mb-1.5">Unit</label>
          <select id="unit" value={unit} onChange={e => setUnit(e.target.value as Unit)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
            {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        {baseDate && !validDate && <p className="text-sm text-destructive">Please enter a valid starting date.</p>}
        {amount && !validAmount && <p className="text-sm text-destructive">Please enter a valid number.</p>}
        {valid && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 text-center">
            <div className="text-xs text-muted-foreground mb-1">Resulting date</div>
            <div className="text-2xl font-bold text-foreground">{formatted}</div>
            <div className="text-sm text-muted-foreground mt-1">{weekday}</div>
          </div>
        )}
        <button type="button" onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
      </div>
    </ToolLayout>
  );
};
export default DateAddSubtractCalculator;
