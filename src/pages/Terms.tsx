import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <Layout>
      <Helmet>
        <title>Terms & Conditions - Nexora LLC</title>
        <meta name="description" content="Terms & Conditions for Nexora LLC automation platform." />
      </Helmet>

      <section className="relative py-16 overflow-hidden bg-nexora-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_25%_8%)_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-gray-400">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">By accessing and using Nexora's automation platform and services, you accept and agree to be bound by these terms.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">Nexora provides AI-powered communication automation including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>WhatsApp AI chatbot automation</li>
                <li>Website live chat automation</li>
                <li>Smart robo calling & VoIP CRM</li>
                <li>Shopify store automation</li>
                <li>Free online tools via NexoraTool.com</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. User Obligations</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use services only for lawful purposes</li>
                <li>Comply with WhatsApp and platform policies</li>
                <li>Respect data protection regulations</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Limitation of Liability</h2>
              <p className="text-muted-foreground">Nexora LLC shall not be liable for indirect, incidental, or consequential damages arising from use of our platform.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Contact</h2>
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

export default Terms;
