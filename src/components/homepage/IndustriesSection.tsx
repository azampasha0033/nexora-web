import { Heart, Building2, ShoppingBag, GraduationCap, Wrench } from "lucide-react";

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
    name: "E-commerce",
    useCase: "Order confirmations, shipping updates, abandoned cart recovery — all on autopilot.",
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
            No matter your sector, our AI adapts to your business workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${industry.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${industry.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground">{industry.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{industry.useCase}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
