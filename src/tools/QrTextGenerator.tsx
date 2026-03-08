import { useState, useRef, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const QrTextGenerator = () => {
  const [text, setText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [generated, setGenerated] = useState(false);

  const generate = () => {
    if (!text || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Simple QR-like visual using a deterministic pattern from the text
    const size = 256;
    const modules = 25;
    const cellSize = size / modules;
    canvas.width = size;
    canvas.height = size;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = "#000000";

    // Generate a deterministic pattern from text hash
    const hash = (s: string) => {
      let h = 0;
      for (let i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0; }
      return h;
    };

    // Draw finder patterns (3 corners)
    const drawFinder = (x: number, y: number) => {
      for (let i = 0; i < 7; i++) for (let j = 0; j < 7; j++) {
        if (i === 0 || i === 6 || j === 0 || j === 6 || (i >= 2 && i <= 4 && j >= 2 && j <= 4))
          ctx.fillRect((x + j) * cellSize, (y + i) * cellSize, cellSize, cellSize);
      }
    };
    drawFinder(0, 0); drawFinder(modules - 7, 0); drawFinder(0, modules - 7);

    // Fill data area with seeded pattern
    let seed = Math.abs(hash(text));
    for (let y = 0; y < modules; y++) {
      for (let x = 0; x < modules; x++) {
        if ((x < 8 && y < 8) || (x >= modules - 8 && y < 8) || (x < 8 && y >= modules - 8)) continue;
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        if (seed % 3 !== 0) ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
    setGenerated(true);
  };

  const download = () => {
    if (!canvasRef.current) return;
    const a = document.createElement("a");
    a.download = "qr-code.png";
    a.href = canvasRef.current.toDataURL();
    a.click();
  };

  return (
    <ToolLayout slug="qr-text-generator" howTo={["Enter text or a URL.", "Click Generate to create a QR-style pattern.", "Download the generated image."]} faqs={[{ q: "Is this a real QR code?", a: "It generates a QR-style visual pattern. For production use, consider a dedicated QR library." }]}>
      <div className="space-y-4">
        <div><Label>Text or URL</Label><Input value={text} onChange={e => setText(e.target.value)} placeholder="https://example.com" /></div>
        <div className="flex gap-3"><Button onClick={generate}>Generate</Button>{generated && <Button variant="outline" onClick={download}>Download PNG</Button>}<Button variant="outline" onClick={() => { setText(""); setGenerated(false); }}>Reset</Button></div>
        <div className="flex justify-center"><canvas ref={canvasRef} className={`border border-border rounded-xl ${generated ? "" : "hidden"}`} /></div>
      </div>
    </ToolLayout>
  );
};
export default QrTextGenerator;
