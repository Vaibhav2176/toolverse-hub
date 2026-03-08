import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Shield, Eye, Cookie, Globe, Mail } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    icon: Eye,
    title: "Data Collection",
    content: "ToolVerse does not collect, store, or transmit any personal data. All 65+ tools run entirely in your browser — your inputs and results never leave your device."
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    content: "We may use cookies for basic analytics (e.g., page views) and advertising through third-party services like Google Analytics and Google AdSense. These services may place their own cookies to serve relevant ads."
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    content: "We may integrate third-party advertising services such as Google AdSense, which may use cookies and web beacons to serve ads based on your browsing history. We do not share any personal information with these services."
  },
  {
    icon: Shield,
    title: "Your Privacy Matters",
    content: "Since all tools run client-side, we have no access to your data. There are no user accounts, no tracking pixels, and no data sold to anyone — ever."
  },
  {
    icon: Mail,
    title: "Questions?",
    content: "If you have any questions about this privacy policy, feel free to reach out through our Contact page. We're happy to clarify anything."
  },
];

const Privacy = () => (
  <Layout>
    <div className="container py-10 max-w-3xl">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
          <Shield className="h-3.5 w-3.5" /> Privacy First
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
          Privacy <span className="gradient-text">Policy</span>
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
    </div>
  </Layout>
);

export default Privacy;
