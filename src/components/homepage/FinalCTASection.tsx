import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nexora-primary to-nexora-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_transparent_0%,_hsl(220_90%_30%_/_0.4)_100%)]" />
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          See Your Business Running Without Manual Replies
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
          Join hundreds of businesses automating their customer communication. 
          Get a personalized demo in 15 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-nexora-primary hover:bg-white/90 text-lg px-8 py-6 rounded-xl font-semibold gap-2 shadow-lg">
            <Link to="/contact">
              Start Free Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
            <a href="tel:+447877180793">
              Call: +44 7877 180793
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
