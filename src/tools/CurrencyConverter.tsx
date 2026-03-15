import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { currencies, exchangeRates, formatCurrency } from "@/lib/currency";
import { ArrowLeftRight } from "lucide-react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("1000");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  const amtNum = Number(amount) || 0;
  const fromRate = exchangeRates[from] || 1;
  const toRate = exchangeRates[to] || 1;
  const converted = amtNum / fromRate * toRate;
  const rate = toRate / fromRate;

  const swap = () => { setFrom(to); setTo(from); };

  return (
    <ToolLayout slug="currency-converter" howTo={["Enter an amount.", "Select source and target currencies.", "See the converted result instantly."]} faqs={[{ q: "Are the exchange rates live?", a: "Rates are approximate static values for demonstration. For live rates, consult a financial service." }, { q: "How many currencies are supported?", a: "We support 10 major world currencies." }]}>
      <div className="space-y-5 max-w-lg mx-auto">
        <div>
          <Label>Amount</Label>
          <Input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount" className="text-lg" />
        </div>
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <Label>From</Label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={from} onChange={e => setFrom(e.target.value)}>
              {currencies.map(c => <option key={c.code} value={c.code}>{c.code} – {c.name}</option>)}
            </select>
          </div>
          <Button variant="outline" size="icon" onClick={swap} className="shrink-0 mb-0.5" title="Swap currencies">
            <ArrowLeftRight className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <Label>To</Label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={to} onChange={e => setTo(e.target.value)}>
              {currencies.map(c => <option key={c.code} value={c.code}>{c.code} – {c.name}</option>)}
            </select>
          </div>
        </div>

        {amtNum > 0 && (
          <div className="rounded-xl bg-secondary/50 p-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">{formatCurrency(amtNum, from)} =</p>
            <p className="text-3xl font-bold text-primary">{formatCurrency(converted, to)}</p>
            <p className="text-xs text-muted-foreground">1 {from} = {rate.toFixed(4)} {to}</p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {currencies.filter(c => c.code !== from).map(c => {
            const val = amtNum / fromRate * (exchangeRates[c.code] || 1);
            return (
              <div key={c.code} className="p-3 rounded-xl bg-secondary/30 text-center border border-border">
                <p className="text-xs text-muted-foreground">{c.code}</p>
                <p className="text-sm font-bold font-mono">{formatCurrency(val, c.code)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </ToolLayout>
  );
};
export default CurrencyConverter;
