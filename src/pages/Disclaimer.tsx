import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";

const Disclaimer = () => {
  return (
    <Layout>
      <Helmet>
        <title>Disclaimer - Nexora LLC</title>
        <meta name="description" content="Disclaimer for Nexora LLC automation platform." />
      </Helmet>

      <section className="relative py-16 overflow-hidden bg-nexora-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_25%_8%)_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Disclaimer</h1>
          <p className="text-gray-400">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">General Information</h2>
              <p className="text-muted-foreground">The information on this website is provided on an "as is" basis. Nexora LLC makes no warranties regarding the completeness, reliability, or accuracy of this information.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Service Performance</h2>
              <p className="text-muted-foreground">While our AI automation platform is designed for high reliability, we cannot guarantee uninterrupted service. Results may vary based on business requirements and external factors.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Integrations</h2>
              <p className="text-muted-foreground">Our platform integrates with third-party services including WhatsApp, Shopify, and various CRM systems. We are not responsible for the availability or policies of these services.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground">Nexora LLC shall not be liable for any damages resulting from the use of our automation platform or the information provided on our website.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact</h2>
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

export default Disclaimer;
