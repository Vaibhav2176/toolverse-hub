import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const decode = (s: string) => {
  try { return JSON.parse(atob(s.replace(/-/g, "+").replace(/_/g, "/"))); } catch { return null; }
};

const JwtDecoder = () => {
  const [token, setToken] = useState("");
  const [result, setResult] = useState<{ header: any; payload: any; signature: string } | null>(null);
  const [error, setError] = useState("");

  const decodeToken = () => {
    setError("");
    const parts = token.trim().split(".");
    if (parts.length !== 3) { setError("Invalid JWT: expected 3 parts"); return; }
    const header = decode(parts[0]);
    const payload = decode(parts[1]);
    if (!header || !payload) { setError("Failed to decode JWT"); return; }
    setResult({ header, payload, signature: parts[2] });
  };

  return (
    <ToolLayout slug="jwt-decoder" howTo={["Paste a JWT token.", "Click Decode to see header and payload.", "Note: this does NOT verify the signature."]} faqs={[{ q: "Is this secure?", a: "Yes, decoding happens entirely in your browser. No data is sent anywhere." }]}>
      <div className="space-y-4">
        <div><Label>JWT Token</Label><textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={token} onChange={e => setToken(e.target.value)} placeholder="eyJhbGciOiJIUzI1NiIs..." /></div>
        <div className="flex gap-3"><Button onClick={decodeToken}>Decode</Button><Button variant="outline" onClick={() => { setToken(""); setResult(null); setError(""); }}>Reset</Button></div>
        {error && <p className="text-destructive text-sm">{error}</p>}
        {result && (
          <div className="space-y-3">
            <div><Label>Header</Label><pre className="p-3 rounded-lg bg-secondary/50 text-sm font-mono overflow-x-auto">{JSON.stringify(result.header, null, 2)}</pre></div>
            <div><Label>Payload</Label><pre className="p-3 rounded-lg bg-secondary/50 text-sm font-mono overflow-x-auto">{JSON.stringify(result.payload, null, 2)}</pre></div>
            <div><Label>Signature</Label><p className="p-3 rounded-lg bg-secondary/50 text-sm font-mono break-all">{result.signature}</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default JwtDecoder;
