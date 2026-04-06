import { Zap, TrendingUp, Clock, Users, Smile, Code } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    stat: "< 3s",
    label: "Average Response Time",
    description: "AI replies to every message in under 3 seconds"
  },
  {
    icon: TrendingUp,
    stat: "3x",
    label: "Lead Conversion",
    description: "Convert 3x more visitors into paying customers"
  },
  {
    icon: Clock,
    stat: "24/7",
    label: "Always Operating",
    description: "Never close. Your AI works nights, weekends, holidays"
  },
  {
    icon: Users,
    stat: "60%",
    label: "Less Staff Workload",
    description: "Free your team from repetitive manual tasks"
  },
  {
    icon: Code,
    stat: "200+",
    label: "Projects Delivered",
    description: "Web apps, stores, and automation systems built and shipped"
  },
  {
    icon: Smile,
    stat: "95%",
    label: "Client Satisfaction",
    description: "From automation to development — clients love the results"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-nexora-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nexora-secondary font-semibold text-sm uppercase tracking-wider">Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Measurable Business Impact
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real outcomes from real businesses using our automation and development services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-nexora-primary/20 to-nexora-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-nexora-primary/30 group-hover:to-nexora-secondary/30 transition-colors">
                  <Icon className="h-6 w-6 text-nexora-primary" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{benefit.stat}</div>
                <div className="text-sm font-medium text-nexora-primary mb-2">{benefit.label}</div>
                <p className="text-xs text-gray-500">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
