import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How WhatsApp Automation is Transforming Customer Service in 2025",
    excerpt: "Discover how businesses are using AI-powered WhatsApp bots to handle customer queries instantly and reduce support costs by up to 60%.",
    author: "Nexora Team",
    publishedDate: "2025-01-20",
    slug: "whatsapp-automation-customer-service-2025",
    category: "WhatsApp Automation"
  },
  {
    id: 2,
    title: "5 Communication Channels Every E-Commerce Store Must Automate",
    excerpt: "From abandoned cart recovery to order updates — learn which communication channels drive the most revenue when automated.",
    author: "Nexora Team",
    publishedDate: "2025-01-18",
    slug: "ecommerce-communication-automation",
    category: "E-Commerce"
  },
  {
    id: 3,
    title: "AI Chatbots vs Live Agents: When to Use What",
    excerpt: "A practical guide to balancing AI automation with human support for the best customer experience.",
    author: "Nexora Team",
    publishedDate: "2025-01-15",
    slug: "ai-chatbots-vs-live-agents",
    category: "AI & Automation"
  },
  {
    id: 4,
    title: "How Clinics Are Using Robo Calls to Reduce No-Shows by 70%",
    excerpt: "Automated appointment reminders and follow-up calls are saving healthcare providers thousands in lost revenue.",
    author: "Nexora Team",
    publishedDate: "2025-01-12",
    slug: "clinics-robo-calls-reduce-no-shows",
    category: "Healthcare"
  },
  {
    id: 5,
    title: "The ROI of Business Communication Automation",
    excerpt: "Breaking down the real numbers behind automating WhatsApp, website chat, and phone calls for SMBs.",
    author: "Nexora Team",
    publishedDate: "2025-01-10",
    slug: "roi-business-communication-automation",
    category: "Business Growth"
  },
  {
    id: 6,
    title: "Building a 24/7 Sales Machine with AI-Powered Chat",
    excerpt: "How businesses are capturing and converting leads around the clock without adding headcount.",
    author: "Nexora Team",
    publishedDate: "2025-01-08",
    slug: "24-7-sales-machine-ai-chat",
    category: "Sales Automation"
  }
];

const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog - Nexora | AI Communication Automation Insights</title>
        <meta name="description" content="Insights on WhatsApp automation, AI chatbots, business communication, and growth strategies from Nexora." />
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-nexora-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-nexora-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-nexora-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_25%_8%)_70%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-nexora-primary/10 border border-nexora-primary/20 rounded-full px-4 py-1.5 text-sm text-nexora-primary mb-6">
            <span className="w-2 h-2 bg-nexora-secondary rounded-full animate-pulse" />
            Blog & Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Automation{" "}
            <span className="bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tips, strategies, and case studies on automating business communication for growth.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-nexora-primary to-nexora-secondary" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-nexora-primary bg-nexora-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(post.publishedDate)}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-nexora-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-nexora-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Read <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
