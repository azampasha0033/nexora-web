import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { TrendingUp, Clock, Users, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const caseStudies = [
    {
      industry: "Healthcare Clinic",
      title: "70% Fewer Missed Appointments",
      description: "A multi-location dental clinic automated appointment reminders and patient follow-ups via WhatsApp and robo calls.",
      stats: [
        { label: "Missed appointments reduced", value: "70%" },
        { label: "Patient response rate", value: "92%" },
        { label: "Staff hours saved/week", value: "25hrs" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      industry: "E-Commerce Store",
      title: "3x More Recovered Carts",
      description: "A Shopify fashion brand used Nexora's abandoned cart automation and WhatsApp follow-ups to recover lost sales.",
      stats: [
        { label: "Cart recovery rate", value: "3x" },
        { label: "Revenue increase", value: "45%" },
        { label: "Auto-confirmed orders", value: "98%" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      industry: "Real Estate Agency",
      title: "Lead Response in Under 5 Seconds",
      description: "A property agency deployed AI chat on their website and WhatsApp to instantly qualify and route buyer leads.",
      stats: [
        { label: "Avg response time", value: "<5s" },
        { label: "Lead conversion up", value: "60%" },
        { label: "Leads captured/month", value: "500+" }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      industry: "Education Institute",
      title: "Automated Enrollment Pipeline",
      description: "A training institute automated course inquiries, fee reminders, and enrollment confirmations via WhatsApp bot.",
      stats: [
        { label: "Inquiry handling", value: "24/7" },
        { label: "Enrollment rate up", value: "40%" },
        { label: "Manual follow-ups cut", value: "80%" }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      industry: "Service Business",
      title: "Zero Missed Customer Calls",
      description: "A home services company used VoIP CRM and smart robo calling to ensure every customer inquiry was captured and followed up.",
      stats: [
        { label: "Missed calls", value: "0%" },
        { label: "Customer satisfaction", value: "96%" },
        { label: "Repeat bookings up", value: "55%" }
      ],
      color: "from-nexora-primary to-nexora-secondary"
    },
    {
      industry: "Restaurant Chain",
      title: "Automated Order & Delivery Updates",
      description: "A multi-outlet restaurant chain automated order confirmations, delivery tracking, and customer feedback collection.",
      stats: [
        { label: "Order confirmation", value: "Instant" },
        { label: "Support tickets down", value: "65%" },
        { label: "Review collection up", value: "4x" }
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      industry: "Custom Web Application",
      title: "Full-Stack SaaS Dashboard",
      description: "Built a custom CRM dashboard with real-time analytics, role-based access, and automated reporting for a logistics company.",
      stats: [
        { label: "Manual reporting cut", value: "90%" },
        { label: "Team productivity up", value: "3x" },
        { label: "Data accuracy", value: "99.5%" }
      ],
      color: "from-indigo-500 to-violet-500"
    },
    {
      industry: "POS System",
      title: "Cloud-Based Point of Sale",
      description: "Developed a cloud POS system with inventory management, sales tracking, and multi-branch synchronization for a retail chain.",
      stats: [
        { label: "Transaction speed", value: "<2s" },
        { label: "Inventory accuracy", value: "99%" },
        { label: "Branches connected", value: "12" }
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      industry: "WordPress Website",
      title: "High-Performance Business Site",
      description: "Designed and launched a SEO-optimized WordPress site with custom themes, booking system, and lead capture for a consulting firm.",
      stats: [
        { label: "Page load time", value: "<1.5s" },
        { label: "Organic traffic up", value: "180%" },
        { label: "Lead capture rate", value: "12%" }
      ],
      color: "from-sky-500 to-blue-600"
    },
    {
      industry: "Shopify Store",
      title: "Premium E-Commerce Storefront",
      description: "Built a high-converting Shopify store with custom theme, automated email flows, and integrated WhatsApp support for a beauty brand.",
      stats: [
        { label: "Conversion rate", value: "4.8%" },
        { label: "AOV increase", value: "35%" },
        { label: "Return customers", value: "42%" }
      ],
      color: "from-purple-600 to-fuchsia-500"
    },
    {
      industry: "Amazon FBA Store",
      title: "Automated Amazon Operations",
      description: "Set up full Amazon FBA automation — listing optimization, buyer messaging, review collection, and inventory alerts for a home goods brand.",
      stats: [
        { label: "Review rate up", value: "5x" },
        { label: "Response time", value: "<1hr" },
        { label: "Sales increase", value: "60%" }
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      industry: "Multi-Channel E-Commerce",
      title: "Unified Commerce Platform",
      description: "Integrated Shopify, Amazon, and eBay into a single dashboard with centralized inventory, order management, and customer communication.",
      stats: [
        { label: "Channels unified", value: "4" },
        { label: "Order errors down", value: "95%" },
        { label: "Fulfillment speed", value: "2x" }
      ],
      color: "from-rose-500 to-pink-600"
    },
    {
      industry: "WooCommerce Store",
      title: "Custom E-Commerce Solution",
      description: "Developed a WooCommerce store with custom payment gateway, WhatsApp order notifications, and automated inventory sync.",
      stats: [
        { label: "Payment success rate", value: "99.2%" },
        { label: "Cart abandonment down", value: "40%" },
        { label: "Support tickets cut", value: "60%" }
      ],
      color: "from-lime-500 to-green-600"
    },
    {
      industry: "Corporate Web Portal",
      title: "Enterprise Client Portal",
      description: "Built a secure client portal with document management, ticketing system, and real-time project tracking for a construction company.",
      stats: [
        { label: "Client satisfaction", value: "98%" },
        { label: "Document retrieval", value: "<3s" },
        { label: "Support cost down", value: "50%" }
      ],
      color: "from-slate-500 to-gray-600"
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
            Success Stories
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Real Results.{" "}
            <span className="bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">
              Real Businesses.
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            See how businesses across industries use Nexora to automate communication, capture leads, and grow revenue.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${study.color}`} />
                <div className="p-6">
                  <span className="inline-block text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full mb-4">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">{study.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{study.description}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {study.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-lg font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
            Your Success Story Starts Here
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Join businesses that have transformed their customer communication with Nexora.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 text-lg px-8 py-6 rounded-xl gap-2">
            <Link to="/contact">
              Book Free Demo <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
