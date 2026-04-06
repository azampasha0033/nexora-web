import { Heart, Building2, ShoppingBag, GraduationCap, Wrench, UtensilsCrossed, Briefcase, Truck } from "lucide-react";

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    useCase: "Automated appointment reminders, patient FAQs, and prescription refill requests via WhatsApp.",
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  {
    icon: Building2,
    name: "Real Estate",
    useCase: "AI qualifies buyer leads, schedules viewings, and sends property details automatically.",
    color: "text-nexora-primary",
    bgColor: "bg-nexora-primary/10"
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce & Marketplaces",
    useCase: "Shopify, Amazon, eBay, Walmart — order confirmations, shipping updates, and cart recovery on autopilot.",
    color: "text-nexora-secondary",
    bgColor: "bg-nexora-secondary/10"
  },
  {
    icon: GraduationCap,
    name: "Education",
    useCase: "Enrollment inquiries, class schedules, and fee reminders handled by AI assistant.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  },
  {
    icon: Wrench,
    name: "Service Businesses",
    useCase: "Booking confirmations, service updates, and follow-up reviews collected automatically.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants & Food",
    useCase: "Order automation, delivery tracking, customer feedback, and WhatsApp menu sharing.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    icon: Briefcase,
    name: "Startups & SaaS",
    useCase: "Custom web apps, dashboards, MVPs, and process automation built for rapid scaling.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10"
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    useCase: "Shipment tracking, driver coordination, and automated customer delivery updates.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10"
  }
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nexora-secondary font-semibold text-sm uppercase tracking-wider">Industries</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Built for Every Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a clinic, store, startup, or enterprise — our solutions adapt to your workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${industry.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${industry.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{industry.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{industry.useCase}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
