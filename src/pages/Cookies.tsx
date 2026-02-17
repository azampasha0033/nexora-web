import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";

const Cookies = () => {
  return (
    <Layout>
      <Helmet>
        <title>Cookie Policy - Nexora LLC</title>
        <meta name="description" content="Cookie Policy for Nexora LLC - Learn about our use of cookies." />
      </Helmet>

      <section className="relative py-16 overflow-hidden bg-nexora-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_25%_8%)_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-gray-400">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">What Are Cookies?</h2>
              <p className="text-muted-foreground">Cookies are small text files stored on your device when you visit our website, helping us provide a better experience.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Essential Cookies</h3>
                  <p className="text-muted-foreground">Required for core website functionality and security.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Analytics Cookies</h3>
                  <p className="text-muted-foreground">Help us understand how visitors interact with our platform.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Functional Cookies</h3>
                  <p className="text-muted-foreground">Enable enhanced functionality and personalization.</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Managing Cookies</h2>
              <p className="text-muted-foreground">You can control cookies through your browser settings. Disabling cookies may affect platform functionality.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <div className="text-muted-foreground">
                <p>Email: support@nexora.llc</p>
                <p>Phone: +44 7877 180793 (UK) | +971 54 765 9859 (UAE) | +92 309 023 0074 (Pakistan)</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
