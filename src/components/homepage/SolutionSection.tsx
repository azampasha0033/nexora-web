import { MessageSquare, Globe, ShoppingCart, PhoneCall, Headphones, Code, Monitor, Database } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp AI Assistant",
    description: "Automatically answers FAQs, shares products, tracks orders — all through WhatsApp, 24/7.",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    icon: PhoneCall,
    title: "Smart Robo Calling",
    description: "Automated voice campaigns for reminders, marketing outreach, OTP verification, and follow-ups at scale.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  },
  {
    icon: Globe,
    title: "Website Live Chat Automation",
    description: "Converts website visitors into qualified leads automatically with intelligent AI chat.",
    color: "text-nexora-primary",
    bgColor: "bg-nexora-primary/10"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Marketplace Automation",
    description: "Shopify, Amazon, eBay, Walmart — order confirmations, cart recovery, and support automated.",
    color: "text-nexora-secondary",
    bgColor: "bg-nexora-secondary/10"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Web apps, SaaS platforms, CRM dashboards, POS systems — built to your business needs.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Monitor,
    title: "Website & Store Development",
    description: "WordPress, Shopify, WooCommerce, and custom-coded websites designed for performance and conversion.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10"
  },
  {
    icon: Headphones,
    title: "VoIP CRM Calling Workspace",
    description: "Agents call from a unified dashboard with full history, recordings, and CRM integration.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10"
  },
  {
    icon: Database,
    title: "Business Process Automation",
    description: "Automate repetitive tasks — invoicing, inventory alerts, reporting, and workflow triggers.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  }
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nexora-secondary font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Automation + Development — Everything Under One Roof
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just build websites — we build intelligent systems that automate your customer communication, sales, and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-nexora-primary hover:text-nexora-secondary transition-colors font-medium">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
