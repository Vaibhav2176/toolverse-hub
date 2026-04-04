import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Card { front: string; back: string }

const FlashcardMaker = () => {
  const [cards, setCards] = useState<Card[]>([{ front: "", back: "" }]);
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [studying, setStudying] = useState(false);

  const addCard = () => setCards([...cards, { front: "", back: "" }]);
  const updateCard = (i: number, field: "front" | "back", val: string) => {
    const copy = [...cards]; copy[i] = { ...copy[i], [field]: val }; setCards(copy);
  };
  const removeCard = (i: number) => { if (cards.length > 1) setCards(cards.filter((_, idx) => idx !== i)); };

  const validCards = cards.filter(c => c.front.trim() && c.back.trim());

  return (
    <ToolLayout slug="flashcard-maker" howTo={["Add question-answer pairs", "Click Study to start reviewing"]}>
      <div className="space-y-4">
        {!studying ? (
          <>
            {cards.map((c, i) => (
              <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2 items-end">
                <div><Label>Front {i + 1}</Label><Input value={c.front} onChange={e => updateCard(i, "front", e.target.value)} placeholder="Question" /></div>
                <div><Label>Back</Label><Input value={c.back} onChange={e => updateCard(i, "back", e.target.value)} placeholder="Answer" /></div>
                <Button variant="outline" size="sm" onClick={() => removeCard(i)}>✕</Button>
              </div>
            ))}
            <div className="flex gap-3">
              <Button variant="outline" onClick={addCard}>+ Add Card</Button>
              {validCards.length > 0 && <Button onClick={() => { setStudying(true); setCurrent(0); setFlipped(false); }}>Study ({validCards.length} cards)</Button>}
            </div>
          </>
        ) : (
          <div className="space-y-4 text-center">
            <div className="text-sm text-muted-foreground">Card {current + 1} of {validCards.length}</div>
            <div
              onClick={() => setFlipped(!flipped)}
              className="cursor-pointer rounded-xl bg-secondary p-8 min-h-[200px] flex items-center justify-center transition-all hover:shadow-lg"
            >
              <p className="text-2xl font-bold">{flipped ? validCards[current].back : validCards[current].front}</p>
            </div>
            <p className="text-xs text-muted-foreground">Click card to flip</p>
            <div className="flex justify-center gap-3">
              <Button variant="outline" disabled={current === 0} onClick={() => { setCurrent(current - 1); setFlipped(false); }}>Previous</Button>
              <Button variant="outline" disabled={current >= validCards.length - 1} onClick={() => { setCurrent(current + 1); setFlipped(false); }}>Next</Button>
              <Button variant="outline" onClick={() => setStudying(false)}>Exit</Button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default FlashcardMaker;
