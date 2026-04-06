import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { blogPosts } from "@/config/blogPosts";
import { Clock, ArrowRight, Tag } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    document.title = "ToolVerse Blog – Guides, Tips & Resources | ToolVerse";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Read guides, tips, and useful resources on calculators, converters, and productivity tools. ToolVerse Blog helps students, developers, and everyday users.");
  }, []);

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">ToolVerse Blog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Guides, tips, and useful resources for students, developers, and everyday users
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <img src={post.image} alt={post.title} className="w-full h-44 object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
