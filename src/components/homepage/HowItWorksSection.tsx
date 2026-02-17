import { Link2, Brain, Rocket } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Connect Your Channels",
    description: "Link WhatsApp, website chat, phone lines, and your Shopify store in minutes."
  },
  {
    icon: Brain,
    number: "02",
    title: "Train AI with Your Business",
    description: "Upload your FAQs, products, and workflows. AI learns your business instantly."
  },
  {
    icon: Rocket,
    number: "03",
    title: "AI Handles Conversations",
    description: "Your AI assistant starts replying, capturing leads, and closing sales — automatically."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nexora-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Go Live in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-nexora-primary to-nexora-secondary" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-nexora-primary to-nexora-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <span className="text-xs font-bold text-nexora-primary tracking-widest">{step.number}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
