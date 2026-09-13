import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, ChevronDown, Zap, Sun, Moon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { tools, categories } from "@/config/tools";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  const filtered = query.length > 1
    ? tools.filter(t => t.title.toLowerCase().includes(query.toLowerCase()) || t.keywords.some(k => k.includes(query.toLowerCase()))).slice(0, 8)
    : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex h-12 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="h-9 w-9 flex items-center justify-center">
            <img
              src="/toolverse-icon.png"
              alt="ToolVerse Logo"
              className="h-9 w-9 object-contain"
            />
          </div>
          <span className="font-display font-bold text-xl text-foreground">Tool<span className="gradient-text">Verse</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 text-sm font-medium">
          <Link to="/" className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all">Home</Link>
          <Link to="/tools" className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all">All Tools</Link>
          <div className="relative" onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}>
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all">
              Categories <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${catOpen ? 'rotate-180' : ''}`} />
            </button>
            {catOpen && (
              <div className="absolute top-full left-0 mt-1 grid w-[34rem] grid-cols-2 gap-0.5 rounded-xl border border-border bg-card p-2 shadow-2xl animate-fade-in">
                {categories.map(c => (
                  <Link key={c.slug} to={`/${c.slug}`} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-secondary/60 transition-all group/item" onClick={() => setCatOpen(false)}>
                    <div className={`h-9 w-9 rounded-lg ${c.bgClass} flex items-center justify-center group-hover/item:scale-110 transition-transform`}>
                      <c.icon className={`h-4 w-4 ${c.colorClass}`} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{c.title}</div>
                      <div className="text-xs text-muted-foreground">{c.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/blog" className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all">Blog</Link>
          <Link to="/about" className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all">About</Link>
          <Link to="/contact" className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all">Contact</Link>
        </nav>

        <div className="relative flex-1 max-w-xs" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full rounded-xl border border-border bg-secondary/40 py-2 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-card transition-all"
              value={query}
              onChange={e => { setQuery(e.target.value); setSearchFocused(true); }}
              onFocus={() => setSearchFocused(true)}
            />
          </div>
          {searchFocused && filtered.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-border bg-card p-2 shadow-2xl animate-fade-in">
              {filtered.map(t => (
                <button key={t.slug} className="w-full text-left rounded-lg px-3 py-2.5 text-sm hover:bg-secondary/60 transition-all flex items-center gap-3" onClick={() => { navigate(`/tools/${t.slug}`); setQuery(""); setSearchFocused(false); }}>
                  <Search className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">{t.title}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{t.description.slice(0, 60)}…</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <button onClick={toggleTheme} className="h-9 w-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300" aria-label="Toggle theme">
          {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>

        <button className="lg:hidden p-2 rounded-lg hover:bg-secondary/60 transition-all" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-card p-4 space-y-1 animate-fade-in">
          <Link to="/" className="block px-3 py-2.5 rounded-lg hover:bg-secondary/60 font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/tools" className="block px-3 py-2.5 rounded-lg hover:bg-secondary/60 font-medium" onClick={() => setMenuOpen(false)}>All Tools</Link>
          <div className="py-2">
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Categories</p>
            {categories.map(c => (
              <Link key={c.slug} to={`/${c.slug}`} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/60 text-muted-foreground" onClick={() => setMenuOpen(false)}>
                <c.icon className={`h-4 w-4 ${c.colorClass}`} />
                {c.title}
              </Link>
            ))}
          </div>
          <Link to="/blog" className="block px-3 py-2.5 rounded-lg hover:bg-secondary/60 font-medium" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/about" className="block px-3 py-2.5 rounded-lg hover:bg-secondary/60 font-medium" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block px-3 py-2.5 rounded-lg hover:bg-secondary/60 font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
