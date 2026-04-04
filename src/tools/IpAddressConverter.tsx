import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const IpAddressConverter = () => {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState<{ decimal: number; binary: string; hex: string; octal: string } | null>(null);

  const convert = () => {
    const parts = ip.trim().split(".").map(Number);
    if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) { setResult(null); return; }
    const decimal = ((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
    const binary = parts.map(p => p.toString(2).padStart(8, "0")).join(".");
    const hex = parts.map(p => p.toString(16).padStart(2, "0").toUpperCase()).join(".");
    const octal = parts.map(p => p.toString(8)).join(".");
    setResult({ decimal: decimal >>> 0, binary, hex, octal });
  };

  return (
    <ToolLayout slug="ip-address-converter" howTo={["Enter an IPv4 address", "Click Convert to see all formats"]}>
      <div className="space-y-4 max-w-md">
        <div><Label>IPv4 Address</Label><Input placeholder="192.168.1.1" value={ip} onChange={e => setIp(e.target.value)} /></div>
        <div className="flex gap-3">
          <Button onClick={convert}>Convert</Button>
          <Button variant="outline" onClick={() => { setIp(""); setResult(null); }}>Reset</Button>
        </div>
        {result && (
          <div className="space-y-2">
            {[
              ["Decimal", result.decimal.toString()],
              ["Binary", result.binary],
              ["Hexadecimal", result.hex],
              ["Octal", result.octal],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between rounded-lg bg-secondary p-3">
                <span className="text-sm font-medium">{label}</span>
                <span className="font-mono text-sm text-primary">{val}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default IpAddressConverter;
