import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, MessageSquare, Phone, ShoppingCart, Users, Code, Monitor } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-nexora-dark">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-nexora-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-nexora-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nexora-primary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_25%_8%)_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-nexora-primary/10 border border-nexora-primary/20 rounded-full px-4 py-1.5 text-sm text-nexora-primary mb-6">
              <span className="w-2 h-2 bg-nexora-secondary rounded-full animate-pulse" />
              AI Automation · Software Development · Communication
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Build. Automate.{" "}
              <span className="bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">
                Scale.
              </span>{" "}
              — All in One Place
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              From AI-powered WhatsApp & robo call automation to custom web apps, e-commerce stores, and software solutions — we build and automate everything your business needs to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 text-lg px-8 py-6 rounded-xl shadow-lg">
                <Link to="/contact">Book Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl gap-2 bg-transparent border-gray-600 text-white hover:bg-white/5 hover:text-white">
                <Link to="/services">
                  <Play className="h-4 w-4" />
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-xs text-gray-500">Projects Delivered</div>
              </div>
              <div className="w-px h-10 bg-gray-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-500">Active Clients</div>
              </div>
              <div className="w-px h-10 bg-gray-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-xs text-gray-500">Countries</div>
              </div>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
              {/* Mockup header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-gray-500">Nexora Command Center</span>
              </div>

              {/* Dashboard grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* WhatsApp messages */}
                <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="h-4 w-4 text-green-400" />
                    <span className="text-xs font-medium text-green-400">WhatsApp AI</span>
                    <span className="ml-auto text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">12 new</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-700/40 rounded-lg p-2">
                      <p className="text-xs text-gray-300">Hi, I need pricing for...</p>
                      <p className="text-xs text-green-400 mt-1">🤖 AI replied in 2s</p>
                    </div>
                    <div className="bg-gray-700/40 rounded-lg p-2">
                      <p className="text-xs text-gray-300">Is delivery available?</p>
                      <p className="text-xs text-green-400 mt-1">🤖 AI replied in 1s</p>
                    </div>
                  </div>
                </div>

                {/* Robo Calls */}
                <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="h-4 w-4 text-nexora-primary" />
                    <span className="text-xs font-medium text-nexora-primary">Robo Calls</span>
                    <span className="ml-auto text-xs bg-nexora-primary/20 text-nexora-primary px-2 py-0.5 rounded-full">Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-gray-700/40 rounded-lg p-2">
                      <span className="text-xs text-gray-300">Reminder Campaign</span>
                      <span className="text-xs text-nexora-primary">✓ 340 sent</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-700/40 rounded-lg p-2">
                      <span className="text-xs text-gray-300">Follow-up Batch</span>
                      <span className="text-xs text-yellow-400">In Progress</span>
                    </div>
                  </div>
                </div>

                {/* E-Commerce */}
                <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <ShoppingCart className="h-4 w-4 text-nexora-secondary" />
                    <span className="text-xs font-medium text-nexora-secondary">E-Commerce</span>
                  </div>
                  <div className="text-2xl font-bold text-white">147</div>
                  <p className="text-xs text-gray-400">Orders auto-confirmed today</p>
                </div>

                {/* Development */}
                <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="h-4 w-4 text-purple-400" />
                    <span className="text-xs font-medium text-purple-400">Dev Projects</span>
                  </div>
                  <div className="text-2xl font-bold text-white">14</div>
                  <p className="text-xs text-gray-400">Active builds this month</p>
                </div>
              </div>
            </div>
            {/* Floating glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-nexora-primary/20 to-nexora-secondary/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
