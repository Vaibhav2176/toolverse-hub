import { Link } from "react-router-dom";
import { Search, ArrowRight, Sparkles, TrendingUp, Clock, Zap, Shield, Globe, CheckCircle, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ToolCard from "@/components/ToolCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { tools, categories, getFeaturedTools, getPopularTools, getNewTools } from "@/config/tools";
import heroImg from "@/assets/hero-illustration.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } }),
};

const Index = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const filtered = query.length > 1 ? tools.filter(t => t.title.toLowerCase().includes(query.toLowerCase())).slice(0, 6) : [];
  const popularTools = getPopularTools().slice(0, 8);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient py-20 md:py-28 px-4 relative">
          {/* Decorative blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div initial="hidden" animate="visible" className="text-center lg:text-left">
                <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-1.5 text-sm text-primary-foreground mb-6">
                  <Sparkles className="h-3.5 w-3.5" /> Free & Open Tools Platform
                </motion.div>
                <motion.h1 custom={1} variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-5 leading-[1.1] tracking-tight">
                  Your Go-To<br />Online <span className="underline decoration-primary-foreground/30 decoration-wavy underline-offset-8">Toolbox</span>
                </motion.h1>
                <motion.p custom={2} variants={fadeUp} className="text-lg md:text-xl text-primary-foreground/75 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Fast, private calculators, converters, text tools, and generators — all running in your browser.
                </motion.p>
                <motion.div custom={3} variants={fadeUp} className="relative max-w-lg mx-auto lg:mx-0">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search for a tool... (e.g. calculator, converter)"
                    className="w-full rounded-2xl bg-card py-4 pl-12 pr-4 text-sm shadow-2xl outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                  {filtered.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-border bg-card shadow-2xl p-2 z-10 animate-fade-in">
                      {filtered.map(t => (
                        <button key={t.slug} onClick={() => { navigate(`/tools/${t.slug}`); setQuery(""); }} className="w-full text-left rounded-lg px-4 py-3 text-sm hover:bg-secondary/60 transition-all">
                          <span className="font-medium text-foreground">{t.title}</span>
                          <span className="block text-xs text-muted-foreground mt-0.5">{t.description.slice(0, 60)}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="hidden lg:flex justify-center">
                <img src={heroImg} alt="ToolVerse online tools illustration" className="w-full max-w-md drop-shadow-2xl" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Quick Access Strip */}
        <div className="bg-card border-b border-border">
          <div className="container py-4">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0 mr-1">Quick:</span>
              {popularTools.map(t => (
                <Link key={t.slug} to={`/tools/${t.slug}`} className="quick-access-chip shrink-0">
                  <Star className="h-3.5 w-3.5 text-primary" />
                  {t.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdPlaceholder label="Banner Ad Space" />

      {/* Value Props */}
      <section className="container py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Instant Results", desc: "Every tool runs in your browser with zero loading time. No servers, no waiting.", color: "text-primary" },
            { icon: Shield, title: "100% Private", desc: "Your data never leaves your device. No tracking, no cookies, no signup required.", color: "text-accent" },
            { icon: Globe, title: "Works Everywhere", desc: "Fully responsive design that works on phones, tablets, and desktops.", color: "text-cat-text" },
          ].map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div key={title} custom={i} variants={fadeUp} className="glass-card text-center p-8">
              <div className={`h-14 w-14 rounded-2xl bg-background flex items-center justify-center mx-auto mb-5 border border-border`}>
                <Icon className={`h-7 w-7 ${color}`} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Categories */}
      <section className="container py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 custom={0} variants={fadeUp} className="section-title mb-2">Browse by Category</motion.h2>
          <motion.p custom={1} variants={fadeUp} className="text-muted-foreground mb-8">Find the right tool for your task</motion.p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((c, i) => (
              <motion.div key={c.slug} custom={i + 2} variants={fadeUp}>
                <Link to={`/${c.slug}`} className="tool-card text-center group p-6 block">
                  <div className={`h-14 w-14 rounded-2xl ${c.bgClass} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <c.icon className={`h-7 w-7 ${c.colorClass}`} />
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-1">{c.title}</h3>
                  <p className="text-xs text-muted-foreground">{c.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl hero-gradient flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <h2 className="section-title">Featured Tools</h2>
          </div>
          <Link to="/tools" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">View all <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {getFeaturedTools().map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
      </section>

      {/* Popular */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-accent" />
            </div>
            <h2 className="section-title">Popular Tools</h2>
          </div>
          <Link to="/tools" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">View all <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {getPopularTools().map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
      </section>

      <AdPlaceholder label="Mid-Page Ad Space" />

      {/* New */}
      <section className="container py-12">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="h-9 w-9 rounded-xl bg-cat-student/10 flex items-center justify-center">
            <Clock className="h-4 w-4 text-cat-student" />
          </div>
          <h2 className="section-title">Recently Added</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {getNewTools().map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
      </section>

      {/* Info Section */}
      <section className="container py-20">
        <div className="glass-card p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
          <div className="max-w-2xl mx-auto text-center relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5 tracking-tight">Why Use Online Tools?</h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              Online tools save you time by providing instant calculations, conversions, and text operations right in your browser. No software to install, no accounts to create.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
              {[
                "No software installation needed",
                "Works on any device with a browser",
                "Your data stays private and local",
                "Always free, no hidden costs",
                "New tools added regularly",
                "Clean, distraction-free interface",
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm bg-card rounded-xl px-4 py-3 border border-border">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All tools CTA */}
      <section className="container py-12 text-center">
        <Link to="/tools" className="btn-primary inline-flex items-center gap-2 px-10 py-4 text-base rounded-2xl">
          Browse All Tools <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </Layout>
  );
};

export default Index;
