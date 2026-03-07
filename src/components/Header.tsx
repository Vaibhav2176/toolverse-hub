import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { tools, categories } from "@/config/tools";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [catOpen, setCatOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const filtered = query.length > 1
    ? tools.filter(t => t.title.toLowerCase().includes(query.toLowerCase()) || t.keywords.some(k => k.includes(query.toLowerCase()))).slice(0, 8)
    : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setSearchOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl shrink-0">
          <span className="hero-gradient bg-clip-text text-transparent">ToolVerse</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link to="/tools" className="text-muted-foreground hover:text-foreground transition-colors">All Tools</Link>
          <div className="relative" onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              Categories <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {catOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 rounded-lg border border-border bg-card p-2 shadow-lg">
                {categories.map(c => (
                  <Link key={c.slug} to={`/${c.slug}`} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-secondary transition-colors" onClick={() => setCatOpen(false)}>
                    <c.icon className={`h-4 w-4 ${c.colorClass}`} />
                    {c.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
        </nav>

        {/* Search */}
        <div className="relative flex-1 max-w-xs" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full rounded-lg border border-border bg-secondary/50 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              value={query}
              onChange={e => { setQuery(e.target.value); setSearchOpen(true); }}
              onFocus={() => setSearchOpen(true)}
            />
          </div>
          {searchOpen && filtered.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 rounded-lg border border-border bg-card p-1 shadow-lg">
              {filtered.map(t => (
                <button key={t.slug} className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-secondary transition-colors" onClick={() => { navigate(`/tools/${t.slug}`); setQuery(""); setSearchOpen(false); }}>
                  <span className="font-medium">{t.title}</span>
                  <span className="block text-xs text-muted-foreground">{t.description.slice(0, 60)}…</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile menu */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card p-4 space-y-3">
          <Link to="/" className="block py-1" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/tools" className="block py-1" onClick={() => setMenuOpen(false)}>All Tools</Link>
          {categories.map(c => (
            <Link key={c.slug} to={`/${c.slug}`} className="block py-1 pl-3 text-muted-foreground" onClick={() => setMenuOpen(false)}>{c.title}</Link>
          ))}
          <Link to="/about" className="block py-1" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block py-1" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
