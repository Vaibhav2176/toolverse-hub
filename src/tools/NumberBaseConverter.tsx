import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const NumberBaseConverter = () => {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("10");

  const bases = [
    { label: "Binary (2)", value: "2" },
    { label: "Octal (8)", value: "8" },
    { label: "Decimal (10)", value: "10" },
    { label: "Hexadecimal (16)", value: "16" },
  ];

  const parsed = parseInt(input, parseInt(fromBase));
  const isValid = !isNaN(parsed) && input.length > 0;

  return (
    <ToolLayout slug="number-base-converter" howTo={["Enter a number", "Select input base", "See conversions in all bases"]} faqs={[{ q: "What bases are supported?", a: "Binary (2), Octal (8), Decimal (10), and Hexadecimal (16)." }]}>
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground">Input Number</label>
          <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter number..." className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">From Base</label>
          <select value={fromBase} onChange={e => setFromBase(e.target.value)} className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
            {bases.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
          </select>
        </div>
        {isValid && (
          <div className="space-y-2 pt-2">
            {bases.map(b => (
              <div key={b.value} className="flex justify-between items-center bg-secondary rounded-xl px-4 py-3">
                <span className="text-sm text-muted-foreground">{b.label}</span>
                <span className="font-mono font-bold text-foreground">{parsed.toString(parseInt(b.value)).toUpperCase()}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default NumberBaseConverter;
