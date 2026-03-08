import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "An unexamined life is not worth living.", author: "Socrates" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
];

const QuotesGenerator = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const newQuote = () => {
    let q;
    do { q = quotes[Math.floor(Math.random() * quotes.length)]; } while (q.text === quote.text);
    setQuote(q);
  };

  return (
    <ToolLayout slug="quotes-generator" howTo={["Click the button to generate a random quote", "Copy and share your favorite quotes"]} faqs={[{ q: "How many quotes are available?", a: "Currently 20 hand-picked inspirational quotes." }]}>
      <div className="max-w-lg mx-auto text-center space-y-6">
        <div className="bg-secondary rounded-2xl p-8">
          <p className="text-xl font-medium text-foreground leading-relaxed italic">"{quote.text}"</p>
          <p className="text-sm text-muted-foreground mt-4">— {quote.author}</p>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={newQuote} className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-all">New Quote</button>
          <button onClick={() => navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`)} className="bg-accent text-accent-foreground px-4 py-3 rounded-xl text-sm font-medium hover:opacity-90">Copy</button>
        </div>
      </div>
    </ToolLayout>
  );
};
export default QuotesGenerator;
