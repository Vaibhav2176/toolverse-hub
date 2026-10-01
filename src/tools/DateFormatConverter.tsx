import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const pad = (n: number) => String(n).padStart(2, "0");

const DateFormatConverter = () => {
  const now = new Date();
  const [date, setDate] = useState(`${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`);
  const [time, setTime] = useState(`${pad(now.getHours())}:${pad(now.getMinutes())}`);
  const [error, setError] = useState<string | null>(null);
  const [formats, setFormats] = useState<Record<string, string> | null>(null);

  const convert = () => {
    if (!date) {
      setError("Please choose a date.");
      setFormats(null);
      return;
    }
    const [y, m, d] = date.split("-").map(Number);
    const [hh, mm] = (time || "00:00").split(":").map(Number);
    const dt = new Date(y, m - 1, d, hh || 0, mm || 0);
    if (isNaN(dt.getTime())) {
      setError("Invalid date or time.");
      setFormats(null);
      return;
    }
    setError(null);
    const iso = `${y}-${pad(m)}-${pad(d)}T${pad(hh || 0)}:${pad(mm || 0)}:00`;
    const us = `${pad(m)}/${pad(d)}/${y}`;
    const uk = `${pad(d)}/${pad(m)}/${y}`;
    const long = new Intl.DateTimeFormat("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(dt);
    const weekdayShort = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(dt);
    const monthShort = new Intl.DateTimeFormat("en-US", { month: "short" }).format(dt);
    const rfc = `${weekdayShort}, ${pad(d)} ${monthShort} ${y} ${pad(hh || 0)}:${pad(mm || 0)}:00 GMT`;
    const unix = Math.floor(dt.getTime() / 1000);
    setFormats({ "ISO 8601": iso, "US (MM/DD/YYYY)": us, "UK (DD/MM/YYYY)": uk, "Long form": long, "RFC-style": rfc, "Unix timestamp": String(unix) });
  };

  return (
    <ToolLayout slug="date-format-converter" howTo={["Enter a date and time", "Click Convert", "Copy the format you need"]}>
      <div className="space-y-4 max-w-md">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="df-date" className="block text-sm font-medium mb-1.5">Date</label>
            <input id="df-date" type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="df-time" className="block text-sm font-medium mb-1.5">Time</label>
            <input id="df-time" type="time" value={time} onChange={e => setTime(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={convert} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Convert</button>
          <button onClick={() => { setFormats(null); setError(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {formats && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-2">
            {Object.entries(formats).map(([label, value]) => (
              <div key={label} className="flex justify-between gap-3 text-sm border-b border-border last:border-0 pb-1.5 last:pb-0">
                <span className="text-muted-foreground">{label}</span>
                <span className="font-medium break-all text-right">{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default DateFormatConverter;
