import { Link2, Brain, Rocket, Settings } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Tell Us What You Need",
    description: "Automation, a new website, software, or all of the above — we scope it out together."
  },
  {
    icon: Brain,
    number: "02",
    title: "We Build & Configure",
    description: "Our team builds your solution — AI bots, web apps, robo call campaigns, or custom software."
  },
  {
    icon: Settings,
    number: "03",
    title: "Connect & Integrate",
    description: "We link WhatsApp, phone lines, e-commerce stores, and CRMs into one unified system."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Go Live & Scale",
    description: "Everything runs on autopilot. You focus on growth — we handle the tech."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nexora-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            From Idea to Automation in 4 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-nexora-primary to-nexora-secondary" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-nexora-primary to-nexora-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <span className="text-xs font-bold text-nexora-primary tracking-widest">{step.number}</span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">{step.title}</h3>
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
