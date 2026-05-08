import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Target, Users, Globe, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Automation First",
      description: "We believe every business deserves AI-powered automation that works around the clock."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your growth is our metric. We measure success by the results our platform delivers for you."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving businesses across the UK, UAE, Pakistan, and the GCC region with world-class automation."
    }
  ];

  const milestones = [
    { year: "2023", title: "Neexora Founded", description: "Started with a vision to eliminate manual customer communication." },
    { year: "2024", title: "Platform Launch", description: "Launched our unified AI communication automation platform." },
    { year: "2025", title: "ChatAsBot.com Live", description: "Released WhatsApp automation product serving hundreds of businesses." },
    { year: "2025+", title: "Global Expansion", description: "Scaling across UK, UAE, GCC, and South Asia with enterprise features." }
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
            About Neexora LLC
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            We Build the Future of{" "}
            <span className="bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">
              Business Communication
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Neexora LLC (operating as Neexora) is an AI-powered communication automation platform that helps businesses automate conversations, capture leads, and close customers 24/7.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're on a mission to eliminate the gap between businesses and their customers. 
                Every missed message, unanswered call, and abandoned cart is lost revenue. Neexora fixes that.
              </p>
              <div className="space-y-4">
                {["AI that replies instantly on WhatsApp & website", "Smart calling that never misses a follow-up", "Store automation that runs your e-commerce 24/7", "One dashboard to manage all communication"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-nexora-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative bg-card border border-border rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">500+</div>
                  <p className="text-sm text-muted-foreground mt-1">Businesses Automated</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">1M+</div>
                  <p className="text-sm text-muted-foreground mt-1">Messages Processed</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">24/7</div>
                  <p className="text-sm text-muted-foreground mt-1">Always Running</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">3</div>
                  <p className="text-sm text-muted-foreground mt-1">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that drive everything we build</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
          </div>
          <div className="space-y-8">
            {milestones.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
            Ready to Join the Automation Revolution?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            See Neexora in action. Book a free demo today.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 text-lg px-8 py-6 rounded-xl gap-2">
            <Link to="/contact">
              Book Demo <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
