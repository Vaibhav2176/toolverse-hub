import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Mail, MessageSquare, Bug, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const reasons = [
  { icon: MessageSquare, label: "General Inquiry", color: "text-primary" },
  { icon: Lightbulb, label: "Feature Request", color: "text-cat-gen" },
  { icon: Bug, label: "Bug Report", color: "text-destructive" },
];

const Contact = () => {
  const [selected, setSelected] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. We'll get back to you soon." });
  };

  return (
    <Layout>
      <div className="container py-10 max-w-4xl">
        <Breadcrumb items={[{ label: "Contact" }]} />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Mail className="h-3.5 w-3.5" /> Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
            We'd Love to <span className="gradient-text">Hear</span> from You
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Have a question, suggestion, or found a bug? Drop us a message and we'll get back to you.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="grid md:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">What's this about?</h3>
            {reasons.map((r, i) => (
              <button key={r.label} onClick={() => setSelected(i)} className={`w-full flex items-center gap-3 rounded-xl p-4 text-left text-sm font-medium transition-all duration-200 border ${selected === i ? "border-primary/30 bg-primary/5 shadow-md" : "border-border bg-card hover:border-primary/10"}`}>
                <r.icon className={`h-5 w-5 ${r.color}`} />
                {r.label}
              </button>
            ))}
            <div className="glass-card p-5 mt-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Quick note:</strong> ToolVerse is a free project. We read every message but may take a few days to respond.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 bg-card border border-border rounded-2xl p-6 md:p-8 space-y-5 shadow-sm">
            <div>
              <label className="text-sm font-medium block mb-1.5">Name</label>
              <input required placeholder="Your name" className="input-field w-full" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Email</label>
              <input required type="email" placeholder="your@email.com" className="input-field w-full" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Subject</label>
              <input placeholder={reasons[selected].label} className="input-field w-full" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Message</label>
              <textarea required rows={5} placeholder="Tell us what's on your mind..." className="input-field w-full resize-y" />
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact;
