import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { MessageSquare, Globe, ShoppingCart, Phone, Headphones, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "WhatsApp AI Assistant",
      description: "Automatically answers FAQs, shares product catalogs, tracks orders, and nurtures leads — all through WhatsApp.",
      benefits: [
        "Instant replies to customer queries 24/7",
        "Product catalog sharing & order tracking",
        "Lead qualification & CRM integration",
        "Multi-language support",
        "Broadcast campaigns & promotions"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      title: "Website Live Chat Automation",
      description: "Convert website visitors into qualified leads with AI-powered live chat that engages, captures info, and routes conversations.",
      benefits: [
        "Proactive visitor engagement",
        "Smart lead capture forms",
        "Automated appointment booking",
        "Seamless agent handoff",
        "Analytics & conversion tracking"
      ],
      color: "from-nexora-primary to-blue-500"
    },
    {
      icon: ShoppingCart,
      title: "Shopify Store Automation",
      description: "Automate order confirmations, abandoned cart recovery, shipping updates, and customer support for your Shopify store.",
      benefits: [
        "Automated order confirmation messages",
        "Abandoned cart recovery campaigns",
        "Real-time shipping status updates",
        "Customer review collection",
        "Inventory alerts & restocking"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "Amazon Seller Automation",
      description: "Streamline your Amazon FBA/FBM operations with automated buyer messaging, review requests, and inventory management alerts.",
      benefits: [
        "Automated buyer-seller messaging",
        "Review request automation",
        "Inventory level alerts",
        "Order status notifications",
        "Returns & refund handling"
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: ShoppingCart,
      title: "eBay Store Automation",
      description: "Manage eBay buyer communication, listing updates, and post-sale follow-ups with intelligent automation.",
      benefits: [
        "Buyer inquiry auto-responses",
        "Listing optimization alerts",
        "Post-sale feedback requests",
        "Shipping & tracking updates",
        "Multi-listing management"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: ShoppingCart,
      title: "Walmart Marketplace Automation",
      description: "Scale your Walmart marketplace operations with automated customer messaging, order management, and performance tracking.",
      benefits: [
        "Customer inquiry automation",
        "Order confirmation & tracking",
        "Performance metric alerts",
        "Listing compliance checks",
        "Inventory sync notifications"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform Integration",
      description: "Connect WooCommerce, Magento, BigCommerce, or any custom e-commerce platform with unified communication automation.",
      benefits: [
        "Multi-platform order management",
        "Unified customer messaging",
        "Cross-platform analytics",
        "Abandoned cart recovery",
        "Customer lifecycle automation"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Phone,
      title: "Smart Robo Calling",
      description: "Automated voice campaigns for reminders, marketing outreach, OTP verification, and customer follow-ups at scale.",
      benefits: [
        "Appointment & payment reminders",
        "Marketing campaign broadcasts",
        "OTP & verification calls",
        "Customer satisfaction surveys",
        "Scalable to thousands of calls"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Headphones,
      title: "VoIP CRM Calling Workspace",
      description: "Empower your agents with a unified calling dashboard — call history, recordings, notes, and CRM data in one place.",
      benefits: [
        "Click-to-call from dashboard",
        "Call recording & playback",
        "Agent performance analytics",
        "CRM integration & contact sync",
        "Real-time call monitoring"
      ],
      color: "from-nexora-secondary to-teal-500"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-nexora-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-nexora-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-nexora-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_25%_8%)_70%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-nexora-primary/10 border border-nexora-primary/20 rounded-full px-4 py-1.5 text-sm text-nexora-primary mb-6">
            <span className="w-2 h-2 bg-nexora-secondary rounded-full animate-pulse" />
            Platform Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            One Platform.{" "}
            <span className="bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">
              Every Channel.
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Automate customer communication across WhatsApp, Website Chat, Phone Calls, and E-commerce — all from a single dashboard.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isReversed = index % 2 !== 0;
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-nexora-secondary flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 rounded-xl gap-2">
                      <Link to="/contact">
                        Get Started <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg">
                      <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl opacity-5 blur-sm`} />
                      <div className="relative text-center">
                        <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                          <Icon className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">Powered by Nexora AI Engine</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Book a free demo and see how Nexora can transform your customer communication in minutes.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 text-lg px-8 py-6 rounded-xl">
            <Link to="/contact">Book Free Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
