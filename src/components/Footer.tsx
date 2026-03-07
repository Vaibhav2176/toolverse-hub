import { Link } from "react-router-dom";
import { categories } from "@/config/tools";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-16">
    <div className="ad-placeholder mx-auto max-w-4xl mt-8">Footer Ad Space</div>
    <div className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3 hero-gradient bg-clip-text text-transparent">ToolVerse</h3>
          <p className="text-sm text-muted-foreground">Free online tools for everyone. No signup required.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {categories.map(c => (
              <li key={c.slug}><Link to={`/${c.slug}`} className="hover:text-foreground transition-colors">{c.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ToolVerse. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
