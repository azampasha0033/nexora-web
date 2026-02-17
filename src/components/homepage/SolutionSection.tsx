import { MessageSquare, Globe, ShoppingCart, PhoneCall, Headphones } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp AI Assistant",
    description: "Automatically answers FAQs, shares products, tracks orders — all through WhatsApp, 24/7.",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
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
    title: "Shopify Store Automation",
    description: "Order confirmation, abandoned cart recovery, and status updates — all automated.",
    color: "text-nexora-secondary",
    bgColor: "bg-nexora-secondary/10"
  },
  {
    icon: PhoneCall,
    title: "Smart Robo Calling",
    description: "Automated reminders, marketing campaigns, and OTP verification at scale.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  },
  {
    icon: Headphones,
    title: "VoIP CRM Calling Workspace",
    description: "Agents call from a unified dashboard with full history, recordings, and CRM integration.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nexora-secondary font-semibold text-sm uppercase tracking-wider">The Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            One Automation System — All Communication Channels
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Replace disconnected tools with a single intelligent platform that handles every customer touchpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
