import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Zap, MessageCircle, ExternalLink, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      name: "ChatAsBot.com",
      tagline: "WhatsApp Automation Platform",
      description: "Advanced WhatsApp automation for businesses. Automate customer support, lead generation, order updates, and communication workflows with intelligent AI-powered chatbots.",
      icon: MessageCircle,
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500/20 hover:border-green-500/40",
      link: "https://chatasbot.com",
      features: [
        "AI-powered auto-replies & chatbot flows",
        "Broadcast campaigns & promotions",
        "Order tracking & status updates",
        "Lead capture & qualification",
        "Multi-agent team inbox",
        "CRM & Shopify integration"
      ]
    },
    {
      name: "NexoraTool.com",
      tagline: "Free Online Utility Platform",
      description: "Comprehensive suite of 200+ free online utilities for PDF processing, SEO optimization, text manipulation, image conversion, and developer tools — no registration required.",
      icon: Zap,
      color: "from-nexora-primary to-nexora-secondary",
      borderColor: "border-nexora-primary/20 hover:border-nexora-primary/40",
      link: "https://nexoratool.com",
      features: [
        "PDF tools: convert, merge, split, compress",
        "SEO tools: meta tags, sitemap, keywords",
        "Image tools: format conversion, resize, crop",
        "Developer tools: JSON, SQL, regex, base64",
        "Text tools: paraphrase, grammar, summarize",
        "100% free — no sign-up needed"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-nexora-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-nexora-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-nexora-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_25%_8%)_70%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-nexora-primary/10 border border-nexora-primary/20 rounded-full px-4 py-1.5 text-sm text-nexora-primary mb-6">
            <span className="w-2 h-2 bg-nexora-secondary rounded-full animate-pulse" />
            Our Products
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Products That{" "}
            <span className="bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">
              Power Growth
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From WhatsApp automation to free online tools — our products help businesses and individuals work smarter.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isReversed = index % 2 !== 0;
            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${product.color} mb-6`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{product.name}</h2>
                  <p className="text-nexora-primary font-medium mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-nexora-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className={`bg-gradient-to-r ${product.color} hover:opacity-90 rounded-xl gap-2`}>
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                      Visit {product.name}
                    </a>
                  </Button>
                </div>
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <div className={`relative bg-card border-2 ${product.borderColor} rounded-2xl p-10 text-center transition-all duration-300`}>
                    <div className={`w-28 h-28 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${product.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-14 w-14 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground">{product.tagline}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-nexora-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-nexora-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-nexora-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Try our products or book a demo to see the full automation platform in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 text-lg px-8 py-6 rounded-xl gap-2">
              <Link to="/contact">
                Book Demo <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl bg-transparent border-gray-600 text-white hover:bg-white/5 hover:text-white gap-2">
              <a href="https://chatasbot.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                Try ChatAsBot
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
