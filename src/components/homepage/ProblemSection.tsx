import { MessageSquareOff, UserX, Clock, PhoneMissed, HeadphonesIcon, Code2 } from "lucide-react";

const problems = [
  {
    icon: MessageSquareOff,
    title: "Customers message but no one replies instantly",
    description: "Delayed responses mean lost sales. Every minute counts."
  },
  {
    icon: UserX,
    title: "Website visitors leave without contacting",
    description: "No proactive chat means potential leads bounce silently."
  },
  {
    icon: Clock,
    title: "Manual operations consume staff time",
    description: "Your team spends hours on repetitive order confirmations and follow-ups."
  },
  {
    icon: PhoneMissed,
    title: "Missed calls = lost revenue",
    description: "After-hours calls go unanswered and customers move on to competitors."
  },
  {
    icon: HeadphonesIcon,
    title: "Agents overloaded with repetitive queries",
    description: "Support staff burned out answering the same questions daily."
  },
  {
    icon: Code2,
    title: "Outdated tech slowing your business",
    description: "Legacy systems and manual workflows keep you from scaling effectively."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nexora-primary font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Your Business Is Losing Customers Right Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every unanswered message, missed call, and outdated system is revenue walking away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-destructive/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                  <Icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
