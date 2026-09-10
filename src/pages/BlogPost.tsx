import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { breadcrumbSchema, SITE_URL } from "@/config/toolSeo";
import { blogPosts } from "@/config/blogPosts";
import { Clock, ArrowLeft, Tag } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <Seo title="Post Not Found | ToolVerse Blog" description="This blog post could not be found. Browse all ToolVerse guides instead." path="/blog" noindex />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        type="article"
        image={post.image}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            image: post.image,
            datePublished: post.date,
            dateModified: post.date,
            articleSection: post.category,
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
            author: { "@type": "Organization", name: "ToolVerse", url: SITE_URL },
            publisher: { "@type": "Organization", name: "ToolVerse", url: SITE_URL },
          },
          breadcrumbSchema([{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]),
        ]}
      />
      <article className="py-10 md:py-14">
        <div className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <img src={post.image} alt={post.title} width={1200} height={630} className="w-full h-56 md:h-72 object-cover rounded-2xl mb-6" fetchPriority="high" />

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
            <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">{post.title}</h1>

          <div
            className="prose prose-sm md:prose-base dark:prose-invert max-w-none
              prose-headings:text-foreground prose-headings:font-semibold
              prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-table:text-sm
              prose-th:text-foreground prose-th:font-medium prose-th:border-border
              prose-td:border-border prose-td:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-lg font-semibold text-foreground mb-4">More from ToolVerse Blog</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="rounded-lg border border-border overflow-hidden hover:border-primary/30 hover:shadow-md transition-all">
                  <img src={p.image} alt={p.title} className="w-full h-32 object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="font-medium text-foreground mb-1 line-clamp-2">{p.title}</h3>
                    <p className="text-xs text-muted-foreground">{p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

function formatContent(content: string): string {
  return content
    .split("\n\n")
    .map(block => {
      block = block.trim();
      if (!block) return "";
      if (block.startsWith("### ")) return `<h3>${block.slice(4)}</h3>`;
      if (block.startsWith("## ")) return `<h2>${block.slice(3)}</h2>`;
      if (block.startsWith("| ")) {
        const rows = block.split("\n").filter(r => !r.match(/^\|\s*[-]+/));
        const [header, ...body] = rows;
        const thCells = header.split("|").filter(Boolean).map(c => `<th class="px-4 py-2">${c.trim()}</th>`).join("");
        const bodyRows = body.map(r => {
          const cells = r.split("|").filter(Boolean).map(c => `<td class="px-4 py-2">${c.trim()}</td>`).join("");
          return `<tr>${cells}</tr>`;
        }).join("");
        return `<table><thead><tr>${thCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").map(l => `<li>${l.replace(/^- /, "")}</li>`).join("");
        return `<ul>${items}</ul>`;
      }
      // Handle bold
      block = block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      return `<p>${block.replace(/\n/g, "<br/>")}</p>`;
    })
    .join("\n");
}

export default BlogPost;
