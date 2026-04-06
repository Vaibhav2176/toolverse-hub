import { Link } from "react-router-dom";
import { Search, ArrowRight, Sparkles, TrendingUp, Clock, Zap, Shield, Globe, CheckCircle, Star, MousePointerClick, BookOpen, Users, BarChart3 } from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ToolCard from "@/components/ToolCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { tools, categories, getFeaturedTools, getPopularTools, getNewTools } from "@/config/tools";
import { blogPosts } from "@/config/blogPosts";
import heroImg from "@/assets/hero-illustration.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

// Animated counter hook
const useCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const CounterStat = ({ icon: Icon, value, suffix, label, color }: { icon: any; value: number; suffix: string; label: string; color: string }) => {
  const { count, ref } = useCounter(value);
  return (
    <motion.div ref={ref} variants={scaleIn} className="glass-card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
      <Icon className={`h-8 w-8 ${color} mx-auto mb-3`} />
      <div className="font-display text-3xl font-bold mb-1">{count}{suffix}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const Index = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const filtered = query.length > 1 ? tools.filter(t => t.title.toLowerCase().includes(query.toLowerCase())).slice(0, 6) : [];
  const quickAccessTools = getPopularTools().filter(t => t.title.length <= 20).slice(0, 8);

  // Get 3 random blog posts (stable per render)
  const randomBlogs = useMemo(() => {
    const shuffled = [...blogPosts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  // Recently added = last 6 tools with isNew flag
  const recentTools = getNewTools().slice(-6).reverse();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient-2 animate-gradient py-4 md:py-8 px-4 relative">
          <div className="absolute top-10 left-[10%] w-80 h-80 bg-primary-foreground/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-0 right-[5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-[150px]" />

          {/* Dark mode mesh overlay */}
          <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_top_left,hsl(280_70%_30%/0.4),transparent_50%),radial-gradient(ellipse_at_bottom_right,hsl(200_80%_25%/0.3),transparent_50%)] bg-transparent pointer-events-none" />

          <div className="absolute top-20 right-[20%] w-3 h-3 bg-primary-foreground/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-40 left-[15%] w-2 h-2 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute bottom-32 right-[30%] w-4 h-4 bg-primary-foreground/20 rounded-full animate-float" style={{ animationDelay: "2.5s" }} />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div initial="hidden" animate="visible" className="text-center lg:text-left">
                <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 px-5 py-2 text-sm text-primary-foreground mb-4">
                  <Sparkles className="h-4 w-4" /> <span className="font-medium">Free & Open Tools Platform</span>
                </motion.div>
                <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-[1.05] tracking-tight">
                  Your Go-To<br />
                  Online <span className="relative">
                    Toolbox
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 120-2s60 4 76-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary-foreground/40"/></svg>
                  </span>
                </motion.h1>
                <motion.p custom={2} variants={fadeUp} className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                  {tools.length}+ free browser-based calculators, unit converters, text editors, code utilities & generators — instant results, zero signups, 100% private.
                </motion.p>

                <motion.div custom={3} variants={fadeUp} className="relative max-w-xl mx-auto lg:mx-0">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground/70" />
                  <input
                    type="text"
                    placeholder="Search calculators, converters, generators..."
                    className="w-full rounded-2xl bg-card py-5 pl-16 pr-6 text-base shadow-2xl shadow-black/15 outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/50"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                  {filtered.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-border bg-card shadow-2xl p-2 z-10 animate-fade-in">
                      {filtered.map(t => (
                        <button key={t.slug} onClick={() => { navigate(`/tools/${t.slug}`); setQuery(""); }} className="w-full text-left rounded-xl px-5 py-3.5 text-sm hover:bg-secondary/60 transition-all">
                          <span className="font-semibold text-foreground">{t.title}</span>
                          <span className="block text-xs text-muted-foreground mt-0.5">{t.description.slice(0, 70)}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>

                <motion.div custom={4} variants={fadeUp} className="flex items-center gap-5 mt-6 justify-center lg:justify-start">
                  <Link to="/tools" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm rounded-2xl">
                    Explore All Tools <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="text-white font-bold text-base bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">{tools.length}+ free tools</span>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.85, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="hidden lg:flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-foreground/5 rounded-full blur-3xl scale-110" />
                  <img src={heroImg} alt="ToolVerse online tools illustration" className="w-full max-w-lg drop-shadow-2xl relative animate-float" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Quick Access Strip */}
        <div className="container py-3">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0 mr-1">Quick Access</span>
              {quickAccessTools.map((t, i) => (
                <motion.div key={t.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.06 }} className="shrink-0">
                  <Link to={`/tools/${t.slug}`} className="inline-flex items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-sm px-5 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:bg-card whitespace-nowrap">
                    {t.title}
                  </Link>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      <AdPlaceholder label="Banner Ad Space" />

      {/* Value Props */}
      <section className="container py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={scaleIn} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 tracking-tight">Why <span className="gradient-text">ToolVerse</span>?</h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">Everything you need, nothing you don't.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Every tool runs instantly in your browser. No loading, no servers — just results.", gradient: "from-primary to-accent" },
              { icon: Shield, title: "Completely Private", desc: "Your data never leaves your device. Zero tracking, zero cookies, zero signups.", gradient: "from-cat-convert to-accent" },
              { icon: Globe, title: "Works Everywhere", desc: "Designed for every screen — phones, tablets, laptops, desktops. Always accessible.", gradient: "from-cat-student to-primary" },
            ].map(({ icon: Icon, title, desc, gradient }) => (
              <motion.div key={title} variants={scaleIn} className="glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-300">
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="container py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={scaleIn} className="text-center mb-10">
            <h2 className="section-title mb-2">Browse by <span className="gradient-text">Category</span></h2>
            <p className="text-muted-foreground">Find the right tool for your task</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {categories.map(c => (
              <motion.div key={c.slug} variants={scaleIn} className="h-full">
                <Link to={`/${c.slug}`} className="tool-card text-center group p-6 block gradient-border h-full items-center justify-center">
                  <div className={`h-14 w-14 rounded-2xl ${c.bgClass} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <c.icon className={`h-7 w-7 ${c.colorClass}`} />
                  </div>
                  <h3 className="font-display font-semibold text-sm">{c.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured */}
      <section className="container py-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl hero-gradient flex items-center justify-center animate-pulse-glow">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h2 className="section-title">Featured <span className="gradient-text">Tools</span></h2>
            </div>
            <Link to="/tools" className="text-sm text-primary font-semibold hover:underline flex items-center gap-1 group">
              View all <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {getFeaturedTools().map(t => (
              <motion.div key={t.slug} variants={scaleIn}>
                <ToolCard tool={t} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Popular — 9 items */}
      <section className="gradient-glow py-14 rounded-3xl mx-4 my-4">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <h2 className="section-title">Popular <span className="gradient-text">Tools</span></h2>
              </div>
              <Link to="/tools" className="text-sm text-primary font-semibold hover:underline flex items-center gap-1 group">
                View all <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {getPopularTools().slice(0, 9).map(t => (
                <motion.div key={t.slug} variants={scaleIn}>
                  <ToolCard tool={t} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AdPlaceholder label="Mid-Page Ad Space" />

      {/* Recently Added */}
      <section className="container py-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-cat-student/15 flex items-center justify-center">
              <Clock className="h-5 w-5 text-cat-student" />
            </div>
            <h2 className="section-title">Recently <span className="gradient-text">Added</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentTools.map(t => (
              <motion.div key={t.slug} variants={scaleIn}>
                <ToolCard tool={t} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="container py-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h2 className="section-title">From the <span className="gradient-text">Blog</span></h2>
            </div>
            <Link to="/blog" className="text-sm text-primary font-semibold hover:underline flex items-center gap-1 group">
              All posts <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {randomBlogs.map(post => (
              <motion.div key={post.slug} variants={scaleIn}>
                <Link to={`/blog/${post.slug}`} className="tool-card group block gradient-border h-full">
                  <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-xl mb-4" loading="lazy" />
                  <span className="category-badge bg-primary/10 text-primary mb-3 inline-block">{post.category}</span>
                  <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-[15px] leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-3">{post.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-all">
                      Read More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Trust / Stats Section with animated counters */}
      <section className="container py-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={scaleIn} className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 tracking-tight">Trusted by <span className="gradient-text">Thousands</span></h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">Students, developers, and professionals use ToolVerse every day.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <CounterStat icon={Zap} value={tools.length} suffix="+" label="Free Tools" color="text-primary" />
            <CounterStat icon={BarChart3} value={7} suffix="" label="Categories" color="text-cat-convert" />
            <CounterStat icon={Users} value={50} suffix="K+" label="Monthly Users" color="text-cat-student" />
            <CounterStat icon={Star} value={100} suffix="%" label="Free Forever" color="text-accent" />
          </div>
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="container py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="hero-gradient-2 animate-gradient p-10 md:p-16">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-[60px]" />
              <div className="max-w-2xl mx-auto text-center relative">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-5 tracking-tight text-white">Why Use Online Tools?</h2>
                <p className="text-white/75 leading-relaxed mb-10 text-lg">
                  Online tools save you time by providing instant calculations, conversions, and text operations right in your browser.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  {[
                    "No software installation needed",
                    "Works on any device with a browser",
                    "Your data stays private and local",
                    "Always free, no hidden costs",
                    "New tools added regularly",
                    "Clean, distraction-free interface",
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                      <CheckCircle className="h-4 w-4 text-white shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* All tools CTA */}
      <section className="container py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">Browse all {tools.length}+ tools and find exactly what you need.</p>
          <Link to="/tools" className="btn-primary inline-flex items-center gap-2 px-10 py-4 text-base rounded-2xl">
            Browse All Tools <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
