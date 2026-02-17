import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy - Nexora LLC</title>
        <meta name="description" content="Privacy Policy for Nexora LLC - Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <section className="relative py-16 overflow-hidden bg-nexora-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_25%_8%)_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We collect information you provide directly to us, such as when you request a demo, contact us, or use our platform:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Name and email address</li>
                <li>Phone number and contact information</li>
                <li>Company information and business details</li>
                <li>Communication data processed through our platform</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide and improve our automation platform</li>
                <li>Process demo requests and support inquiries</li>
                <li>Send technical notices and platform updates</li>
                <li>Analyze usage patterns to improve our services</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Data Security</h2>
              <p className="text-muted-foreground">We implement industry-standard security measures to protect your data against unauthorized access, alteration, or destruction.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Contact Us</h2>
              <p className="text-muted-foreground">For privacy-related questions:</p>
              <div className="mt-4 text-muted-foreground">
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

export default Privacy;
