import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";

const blogPost = {
  id: 1,
  title: "How WhatsApp Automation is Transforming Customer Service in 2025",
  content: `
    <h2>The Rise of WhatsApp for Business</h2>
    <p>With over 2 billion users worldwide, WhatsApp has become the primary communication channel for businesses across industries. In 2025, AI-powered WhatsApp automation is no longer optional — it's essential for any business that wants to stay competitive.</p>
    
    <h2>Why Automate WhatsApp?</h2>
    <p>Customers expect instant responses. Studies show that 90% of customers expect a response within 10 minutes. Manual handling simply can't keep up, especially for growing businesses.</p>
    
    <h3>Key Benefits:</h3>
    <ul>
      <li>Instant replies to customer queries 24/7</li>
      <li>Automated order confirmations and tracking</li>
      <li>Lead qualification without human intervention</li>
      <li>Broadcast campaigns reaching thousands instantly</li>
    </ul>
    
    <h2>Real Results from Real Businesses</h2>
    <p>Businesses using Nexora's WhatsApp automation have seen response times drop from hours to seconds, lead conversion rates increase by 60%, and support costs decrease by up to 50%.</p>
    
    <h2>Getting Started</h2>
    <p>Setting up WhatsApp automation with Nexora takes minutes, not months. Connect your WhatsApp Business number, train the AI with your business information, and let it handle conversations automatically.</p>
  `,
  author: "Nexora Team",
  publishedDate: "2025-01-20",
  category: "WhatsApp Automation"
};

const BlogPost = () => {
  const { slug } = useParams();
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <Layout>
      <Helmet>
        <title>{blogPost.title} - Nexora Blog</title>
        <meta name="description" content="Learn how WhatsApp automation is transforming customer service for businesses in 2025." />
      </Helmet>

      {/* Hero */}
      <section className="relative py-16 overflow-hidden bg-nexora-dark">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-nexora-primary/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_25%_8%)_70%)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="inline-block text-xs font-medium text-nexora-primary bg-nexora-primary/10 px-3 py-1 rounded-full mb-4">
            {blogPost.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{blogPost.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(blogPost.publishedDate)}
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {blogPost.author}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div
              className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed prose-ul:my-4 prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-nexora-primary/10 to-nexora-secondary/10 border border-nexora-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Ready to Automate Your Business?</h3>
            <p className="text-muted-foreground mb-6">See Nexora in action with a free demo.</p>
            <Button asChild className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 rounded-xl gap-2">
              <Link to="/contact">
                Book Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
