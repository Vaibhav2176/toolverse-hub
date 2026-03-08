import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { FileText, CheckCircle, AlertTriangle, RefreshCw, Scale } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    icon: CheckCircle,
    title: "Acceptance of Terms",
    content: "By accessing and using ToolVerse, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of our services immediately."
  },
  {
    icon: Scale,
    title: "Use of Tools",
    content: "All 65+ tools on ToolVerse are provided free of charge for informational and educational purposes. They are offered \"as is\" without warranties of any kind. While we strive for accuracy, we do not guarantee results for critical or professional calculations."
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: "ToolVerse and its creators shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of our tools. Always verify important calculations independently through certified professional tools."
  },
  {
    icon: RefreshCw,
    title: "Changes to Terms",
    content: "We reserve the right to modify or replace these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of ToolVerse after changes constitutes acceptance of the updated terms."
  },
];

const Terms = () => (
  <Layout>
    <div className="container py-10 max-w-3xl">
      <Breadcrumb items={[{ label: "Terms of Service" }]} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
          <FileText className="h-3.5 w-3.5" /> Legal
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-muted-foreground">Last updated: March 2026</p>
      </motion.div>

      <div className="space-y-5">
        {sections.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.4 }} className="bg-card border border-border rounded-2xl p-6 flex gap-5 items-start hover:border-primary/15 transition-colors">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-lg mb-1.5">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="glass-card p-6 mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Questions about these terms? <a href="/contact" className="text-primary font-medium hover:underline">Contact us</a> and we'll be happy to help.
        </p>
      </motion.div>
    </div>
  </Layout>
);

export default Terms;
