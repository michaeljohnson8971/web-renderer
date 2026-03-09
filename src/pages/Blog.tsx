import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const posts = [
  {
    slug: "community-wealth-building-strategies",
    title: "Community Wealth Building: Strategies That Actually Work",
    excerpt:
      "Exploring proven approaches to building community wealth through anchor institutions, cooperative ownership, and inclusive procurement policies.",
    date: "2026-03-01",
    readTime: "6 min read",
    category: "Strategy",
  },
  {
    slug: "corridor-planning-lessons",
    title: "What We've Learned About Corridor Planning",
    excerpt:
      "Key takeaways from years of corridor revitalization work — what drives lasting change and what doesn't.",
    date: "2026-02-15",
    readTime: "8 min read",
    category: "Planning",
  },
  {
    slug: "equitable-economic-development",
    title: "Equity as Infrastructure: Rethinking Economic Development",
    excerpt:
      "Why centering racial and economic equity isn't just the right thing to do — it's the most effective development strategy.",
    date: "2026-01-28",
    readTime: "5 min read",
    category: "Equity",
  },
  {
    slug: "municipal-finance-innovation",
    title: "Innovation in Municipal Finance for Local Impact",
    excerpt:
      "How cities are leveraging new financing tools — from social impact bonds to community development financial institutions — to fund equitable growth.",
    date: "2026-01-10",
    readTime: "7 min read",
    category: "Finance",
  },
];

const categoryColors: Record<string, string> = {
  Strategy: "bg-primary/10 text-primary",
  Planning: "bg-accent/10 text-accent-foreground",
  Equity: "bg-olive/10 text-foreground",
  Finance: "bg-terracotta/10 text-foreground",
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};

const Blog = () => {
  return (
    <main className="min-h-screen bg-background pt-28 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 lg:px-8 mb-20">
        <p className="font-body text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Insights & Perspectives
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
          The DABL Blog
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Thoughts on economic development, community strategy, and building more equitable local economies.
        </p>
      </section>

      {/* Posts Grid */}
      <section className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className={`group relative rounded-2xl border border-border/60 bg-card p-8 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                    categoryColors[post.category] || "bg-muted text-muted-foreground"
                  }`}
                >
                  <Tag size={12} />
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              <h2
                className={`font-display text-foreground leading-snug mb-3 group-hover:text-terracotta transition-colors ${
                  i === 0 ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                }`}
              >
                {post.title}
              </h2>

              <p className="font-body text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-terracotta transition-colors">
                Read more
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-6 lg:px-8 mt-24">
        <div className="rounded-2xl bg-primary p-12 md:p-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-primary-foreground mb-4">
            Want to Discuss an Idea?
          </h2>
          <p className="font-body text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            We love connecting with people who care about equitable economic development.
          </p>
          <Link
            to="/services#contact"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-medium px-8 py-3 rounded-full hover:bg-primary-foreground/90 transition-colors"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Blog;
