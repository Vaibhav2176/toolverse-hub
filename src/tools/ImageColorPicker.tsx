import { useState, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ImageColorPicker = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState<{ hex: string; rgb: string } | null>(null);
  const [hasImage, setHasImage] = useState(false);

  const loadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d")?.drawImage(img, 0, 0);
      setHasImage(true);
    };
    img.src = URL.createObjectURL(file);
  };

  const pick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) * (canvas.width / rect.width));
    const y = Math.floor((e.clientY - rect.top) * (canvas.height / rect.height));
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const [r, g, b] = ctx.getImageData(x, y, 1, 1).data;
    const hex = `#${[r, g, b].map(v => v.toString(16).padStart(2, "0")).join("")}`;
    setColor({ hex, rgb: `rgb(${r}, ${g}, ${b})` });
  };

  return (
    <ToolLayout slug="image-color-picker" howTo={["Upload an image.", "Click anywhere on the image to pick a color.", "Copy the hex or RGB value."]} faqs={[{ q: "What image formats work?", a: "PNG, JPG, GIF, WebP – any format your browser supports." }]}>
      <div className="space-y-4">
        <div><Label>Upload Image</Label><input type="file" accept="image/*" onChange={loadImage} className="text-sm" /></div>
        <canvas ref={canvasRef} onClick={pick} className={`max-w-full rounded-xl border border-border ${hasImage ? "cursor-crosshair" : "hidden"}`} style={{ maxHeight: 400, objectFit: "contain" }} />
        {color && (
          <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
            <div className="h-14 w-14 rounded-xl border border-border shrink-0" style={{ backgroundColor: color.hex }} />
            <div className="space-y-1">
              <button onClick={() => navigator.clipboard.writeText(color.hex)} className="block font-mono text-sm hover:text-primary">{color.hex}</button>
              <button onClick={() => navigator.clipboard.writeText(color.rgb)} className="block font-mono text-sm hover:text-primary">{color.rgb}</button>
              <p className="text-xs text-muted-foreground">Click a value to copy</p>
            </div>
          </div>
        )}
        {!hasImage && <p className="text-sm text-muted-foreground text-center py-8">Upload an image to start picking colors</p>}
      </div>
    </ToolLayout>
  );
};
export default ImageColorPicker;
