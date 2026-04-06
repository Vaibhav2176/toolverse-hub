import { Link } from "react-router-dom";
import { Zap, Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { categories, getPopularTools } from "@/config/tools";
import { blogPosts } from "@/config/blogPosts";

const Footer = () => {
  const popularTools = getPopularTools().slice(0, 6);
  const recentBlogs = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <footer className="border-t border-border mt-16 relative overflow-hidden">
      {/* Gradient background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-9 w-9 flex items-center justify-center">
                <img
                  src="/toolverse-icon.png"
                  alt="ToolVerse Logo"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <span className="font-display font-bold text-lg text-foreground">Tool<span className="gradient-text">Verse</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              145+ free, instant online calculators, converters & generators — 100% private, no signup required.
            </p>
            <div className="flex items-center gap-2">
              {[
                { href: "https://github.com", icon: Github },
                { href: "https://twitter.com", icon: Twitter },
                { href: "https://linkedin.com", icon: Linkedin },
                { href: "mailto:hello@toolverse.com", icon: Mail },
              ].map(({ href, icon: Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Categories</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {categories.map(c => (
                <li key={c.slug}><Link to={`/${c.slug}`} className="hover:text-primary transition-colors">{c.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Popular Tools</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {popularTools.map(t => (
                <li key={t.slug}><Link to={`/tools/${t.slug}`} className="hover:text-primary transition-colors">{t.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Blog</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {recentBlogs.map(b => (
                <li key={b.slug}><Link to={`/blog/${b.slug}`} className="hover:text-primary transition-colors line-clamp-1">{b.title}</Link></li>
              ))}
              <li><Link to="/blog" className="hover:text-primary transition-colors font-medium">View All →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/tools" className="hover:text-primary transition-colors">All Tools</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ToolVerse. All rights reserved.</p>
          <p className="flex items-center gap-1.5">Built with <Heart className="h-3.5 w-3.5 text-cat-student fill-cat-student" /> for everyone</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
