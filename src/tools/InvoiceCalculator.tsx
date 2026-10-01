import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

interface LineItem { desc: string; qty: string; price: string; }

const InvoiceCalculator = () => {
  const [items, setItems] = useState<LineItem[]>([{ desc: "", qty: "1", price: "" }]);
  const [discount, setDiscount] = useState("0");
  const [tax, setTax] = useState("0");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");

  const updateItem = (i: number, field: keyof LineItem, value: string) => {
    setItems(prev => prev.map((it, idx) => idx === i ? { ...it, [field]: value } : it));
  };
  const addItem = () => setItems(prev => [...prev, { desc: "", qty: "1", price: "" }]);
  const removeItem = (i: number) => setItems(prev => prev.filter((_, idx) => idx !== i));
  const reset = () => { setItems([{ desc: "", qty: "1", price: "" }]); setDiscount("0"); setTax("0"); setError(""); };

  let subtotal = 0;
  let valid = true;
  items.forEach(it => {
    const q = Number(it.qty), p = Number(it.price);
    if (it.desc.trim() && (!Number.isFinite(q) || !Number.isFinite(p) || q < 0 || p < 0)) valid = false;
    if (Number.isFinite(q) && Number.isFinite(p)) subtotal += q * p;
  });
  const d = Number(discount), t = Number(tax);
  const validRates = Number.isFinite(d) && d >= 0 && Number.isFinite(t) && t >= 0;
  const discountAmt = validRates ? subtotal * d / 100 : 0;
  const afterDiscount = subtotal - discountAmt;
  const taxAmt = validRates ? afterDiscount * t / 100 : 0;
  const grandTotal = afterDiscount + taxAmt;
  const hasOutput = valid && validRates && subtotal > 0;

  return (
    <ToolLayout
      slug="invoice-calculator"
      howTo={[
        "Add a line item for each product or service with quantity and unit price.",
        "Enter a discount percentage and tax percentage if applicable.",
        "The subtotal, discount, tax and grand total update automatically.",
      ]}
    >
      <div className="space-y-4">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-muted-foreground">
                <th className="py-2 pr-2">Description</th>
                <th className="py-2 pr-2 w-20">Qty</th>
                <th className="py-2 pr-2 w-28">Unit Price</th>
                <th className="py-2 w-10"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, i) => (
                <tr key={i}>
                  <td className="py-1 pr-2"><Input aria-label={`Item ${i + 1} description`} value={it.desc} onChange={e => updateItem(i, "desc", e.target.value)} placeholder="e.g. Web design" /></td>
                  <td className="py-1 pr-2"><Input aria-label={`Item ${i + 1} quantity`} type="number" value={it.qty} onChange={e => updateItem(i, "qty", e.target.value)} /></td>
                  <td className="py-1 pr-2"><Input aria-label={`Item ${i + 1} unit price`} type="number" value={it.price} onChange={e => updateItem(i, "price", e.target.value)} /></td>
                  <td className="py-1">
                    {items.length > 1 && (
                      <button type="button" aria-label={`Remove item ${i + 1}`} onClick={() => removeItem(i)} className="text-muted-foreground hover:text-destructive">✕</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button variant="outline" onClick={addItem}>+ Add Line Item</Button>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="invoice-discount">Discount (%)</Label>
            <Input id="invoice-discount" type="number" value={discount} onChange={e => setDiscount(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="invoice-tax">Tax (%)</Label>
            <Input id="invoice-tax" type="number" value={tax} onChange={e => setTax(e.target.value)} />
          </div>
        </div>
        {!valid && <p className="text-sm text-destructive">Each item with a description needs a valid quantity and unit price.</p>}
        {!validRates && <p className="text-sm text-destructive">Enter valid discount and tax percentages.</p>}
        <div className="flex gap-3">
          <Button variant="outline" onClick={reset}>Reset</Button>
        </div>
        {hasOutput && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatCurrency(subtotal, currency)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Discount</span><span>−{formatCurrency(discountAmt, currency)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>+{formatCurrency(taxAmt, currency)}</span></div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-border"><span>Grand Total</span><span className="text-primary">{formatCurrency(grandTotal, currency)}</span></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default InvoiceCalculator;
