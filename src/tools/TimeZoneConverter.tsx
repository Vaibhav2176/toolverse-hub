import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const ZONES = [
  "UTC", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
  "America/Sao_Paulo", "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Moscow",
  "Africa/Cairo", "Africa/Johannesburg", "Asia/Dubai", "Asia/Kolkata", "Asia/Shanghai",
  "Asia/Tokyo", "Asia/Singapore", "Australia/Sydney", "Pacific/Auckland",
];

let SOURCE_ZONES: string[] = ZONES;
try {
  const supported = (Intl as any).supportedValuesOf?.("timeZone");
  if (Array.isArray(supported) && supported.length) SOURCE_ZONES = supported;
} catch {
  SOURCE_ZONES = ZONES;
}

const TimeZoneConverter = () => {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const [date, setDate] = useState(`${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`);
  const [time, setTime] = useState(`${pad(now.getHours())}:${pad(now.getMinutes())}`);
  const [sourceZone, setSourceZone] = useState("UTC");
  const [error, setError] = useState<string | null>(null);

  const results = (() => {
    if (!date || !time) return null;
    const [y, m, d] = date.split("-").map(Number);
    const [hh, mm] = time.split(":").map(Number);
    if (![y, m, d, hh, mm].every(Number.isFinite)) return null;

    // Interpret the entered local wall-clock time as being in sourceZone.
    // Find the UTC instant that, when formatted in sourceZone, matches the entered values.
    const guessUtc = Date.UTC(y, m - 1, d, hh, mm);
    let instant = guessUtc;
    try {
      for (let i = 0; i < 2; i++) {
        const fmt = new Intl.DateTimeFormat("en-US", {
          timeZone: sourceZone, year: "numeric", month: "2-digit", day: "2-digit",
          hour: "2-digit", minute: "2-digit", hour12: false,
        });
        const parts = fmt.formatToParts(new Date(instant));
        const get = (t: string) => Number(parts.find(p => p.type === t)?.value);
        const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour") === 24 ? 0 : get("hour"), get("minute"));
        const diff = guessUtc - asUtc;
        instant += diff;
      }
    } catch {
      return null;
    }
    return instant;
  })();

  const convert = () => {
    if (results === null) {
      setError("Enter a valid date, time, and source time zone.");
      return;
    }
    setError(null);
  };

  const instant = results;

  return (
    <ToolLayout
      slug="time-zone-converter"
      howTo={["Enter a date and time", "Choose the source time zone it belongs to", "View the equivalent time in major world zones"]}
    >
      <div className="space-y-4 max-w-2xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="tz-date" className="block text-sm font-medium mb-1.5">Date</label>
            <input id="tz-date" type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="tz-time" className="block text-sm font-medium mb-1.5">Time</label>
            <input id="tz-time" type="time" value={time} onChange={e => setTime(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>
        <div>
          <label htmlFor="tz-source" className="block text-sm font-medium mb-1.5">Source time zone</label>
          <select id="tz-source" value={sourceZone} onChange={e => setSourceZone(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
            {SOURCE_ZONES.map(z => <option key={z} value={z}>{z}</option>)}
          </select>
        </div>
        <div className="flex gap-3">
          <button onClick={convert} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Convert</button>
          <button onClick={() => { setError(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {!error && instant !== null && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="py-1.5 pr-4">Zone</th>
                  <th className="py-1.5">Local date &amp; time</th>
                </tr>
              </thead>
              <tbody>
                {ZONES.map(z => (
                  <tr key={z} className="border-t border-border">
                    <td className="py-1.5 pr-4 font-medium">{z}</td>
                    <td className="py-1.5">
                      {new Intl.DateTimeFormat("en-US", {
                        timeZone: z, dateStyle: "medium", timeStyle: "short",
                      }).format(new Date(instant))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default TimeZoneConverter;
