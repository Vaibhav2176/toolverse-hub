import { Link } from "react-router-dom";
import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { categories, getPopularTools } from "@/config/tools";

const Footer = () => {
  const popularTools = getPopularTools().slice(0, 6);

  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-lg hero-gradient flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">ToolVerse</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Free, fast, and private online tools for everyday tasks. No signup, no tracking.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:hello@toolverse.com" className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Categories</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {categories.map(c => (
                <li key={c.slug}><Link to={`/${c.slug}`} className="hover:text-foreground transition-colors">{c.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Popular Tools</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {popularTools.map(t => (
                <li key={t.slug}><Link to={`/tools/${t.slug}`} className="hover:text-foreground transition-colors">{t.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/tools" className="hover:text-foreground transition-colors">All Tools</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ToolVerse. All rights reserved.</p>
          <p>Built with care for everyone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
