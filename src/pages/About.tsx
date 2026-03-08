import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Zap, Shield, Smartphone, Gauge, Globe, Heart, Wrench, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Wrench, title: "65+ Free Tools", desc: "Calculators, converters, text tools, generators & more — always growing." },
  { icon: Shield, title: "100% Private", desc: "Everything runs in your browser. No data ever leaves your device." },
  { icon: Gauge, title: "Blazing Fast", desc: "Lightweight, no bloat. Tools load instantly with zero wait time." },
  { icon: Smartphone, title: "Mobile Friendly", desc: "Fully responsive design that works beautifully on any screen size." },
  { icon: Globe, title: "No Signup", desc: "Jump straight in. No accounts, no emails, no friction." },
  { icon: Users, title: "Built for Everyone", desc: "Students, professionals, and casual users — tools for all." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => (
  <Layout>
    <div className="container py-10 max-w-4xl">
      <Breadcrumb items={[{ label: "About" }]} />

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
          <Zap className="h-3.5 w-3.5" /> About ToolVerse
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Your Go-To <span className="gradient-text">Toolbox</span> for Everything
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          ToolVerse is a growing collection of <strong>65+ free, browser-based tools</strong> designed to help you with everyday calculations, conversions, text manipulation, coding utilities, and more — all without ever leaving your browser.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="glass-card p-8 mb-12 text-center">
        <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
        <h2 className="text-2xl font-display font-bold mb-3">Our Mission</h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          To provide fast, free, and reliable online tools that anyone can use — without signing up, installing anything, or worrying about their data being collected. Simple tools, done right.
        </p>
      </motion.div>

      {/* Features Grid */}
      <h2 className="text-2xl font-display font-bold text-center mb-8">Why ToolVerse?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {features.map((f, i) => (
          <motion.div key={f.title} custom={i} initial="hidden" animate="visible" variants={fadeUp} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
              <f.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-display font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className="text-center">
        <a href="/tools" className="btn-primary inline-flex items-center gap-2">
          <Zap className="h-4 w-4" /> Explore All Tools
        </a>
      </motion.div>
    </div>
  </Layout>
);

export default About;
