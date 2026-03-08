import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ToolCard from "@/components/ToolCard";
import { tools, categories } from "@/config/tools";
import type { ToolCategory } from "@/config/tools";
import { Search, LayoutGrid } from "lucide-react";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const AllTools = () => {
  const [filter, setFilter] = useState<ToolCategory | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = tools.filter(t =>
    (filter === "all" || t.category === filter) &&
    (search.length < 2 || t.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Layout>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="container py-8 max-w-5xl">
        <Breadcrumb items={[{ label: "All Tools" }]} />
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-xl hero-gradient flex items-center justify-center shadow-lg shadow-primary/20">
            <LayoutGrid className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold tracking-tight">All <span className="gradient-text">Tools</span></h1>
            <p className="text-muted-foreground text-sm">Browse our growing collection of free online tools</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input placeholder="Search tools..." value={search} onChange={e => setSearch(e.target.value)} className="w-full input-field pl-10" />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setFilter("all")} className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${filter === "all" ? "btn-primary shadow-md" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>All</button>
            {categories.map(c => (
              <button key={c.slug} onClick={() => setFilter(c.slug)} className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${filter === c.slug ? "btn-primary shadow-md" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>{c.title}</button>
            ))}
          </div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.04 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(t => (
            <motion.div key={t.slug} variants={scaleIn}>
              <ToolCard tool={t} />
            </motion.div>
          ))}
        </motion.div>
        {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No tools found.</p>}
      </motion.div>
    </Layout>
  );
};
export default AllTools;
