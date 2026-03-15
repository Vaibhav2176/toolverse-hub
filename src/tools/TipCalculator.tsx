import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("15");
  const [people, setPeople] = useState("1");
  const [currency, setCurrency] = useState("USD");

  const billNum = parseFloat(bill) || 0;
  const tipNum = parseFloat(tipPercent) || 0;
  const peopleNum = parseInt(people) || 1;
  const tipAmount = billNum * (tipNum / 100);
  const total = billNum + tipAmount;
  const perPerson = total / peopleNum;

  return (
    <ToolLayout slug="tip-calculator" howTo={["Select currency", "Enter bill amount", "Choose tip percentage", "Split between people"]} faqs={[{ q: "What's a standard tip?", a: "15-20% is standard in the US. Adjust based on service quality." }]}>
      <div className="max-w-md mx-auto space-y-4">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div>
          <label className="text-sm font-medium text-foreground">Bill Amount</label>
          <input type="number" value={bill} onChange={e => setBill(e.target.value)} placeholder="0.00" className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Tip Percentage (%)</label>
          <div className="flex gap-2 mt-1">
            {["10", "15", "18", "20", "25"].map(p => (
              <button key={p} onClick={() => setTipPercent(p)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${tipPercent === p ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>{p}%</button>
            ))}
          </div>
          <input type="number" value={tipPercent} onChange={e => setTipPercent(e.target.value)} className="w-full mt-2 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Split Between</label>
          <input type="number" min="1" value={people} onChange={e => setPeople(e.target.value)} className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        </div>
        {billNum > 0 && (
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-secondary rounded-xl p-4 text-center">
              <div className="text-xs text-muted-foreground">Tip</div>
              <div className="text-lg font-bold text-foreground">{formatCurrency(tipAmount, currency)}</div>
            </div>
            <div className="bg-secondary rounded-xl p-4 text-center">
              <div className="text-xs text-muted-foreground">Total</div>
              <div className="text-lg font-bold text-foreground">{formatCurrency(total, currency)}</div>
            </div>
            <div className="bg-primary/10 rounded-xl p-4 text-center">
              <div className="text-xs text-muted-foreground">Per Person</div>
              <div className="text-lg font-bold text-primary">{formatCurrency(perPerson, currency)}</div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default TipCalculator;
