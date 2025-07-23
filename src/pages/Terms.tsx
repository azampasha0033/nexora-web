
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <Layout>
      <Helmet>
        <title>Terms & Conditions - Nexora LLC</title>
        <meta name="description" content="Terms & Conditions for Nexora LLC - Learn about our service terms and user obligations." />
      </Helmet>
      
      <div className="bg-gradient-to-b from-nexora-accent to-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Terms & Conditions</h1>
          <p className="text-center text-muted-foreground mb-12">Last updated: January 2025</p>
          
          <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Nexora LLC's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                Nexora LLC provides web development, software development, and digital solutions 
                including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Custom web development and design</li>
                <li>Software development and consulting</li>
                <li>Point-of-Sale (POS) solutions</li>
                <li>WordPress and Shopify customization</li>
                <li>Free online tools via NexoraTool.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Obligations</h2>
              <p className="text-muted-foreground mb-4">Users agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use services only for lawful purposes</li>
                <li>Not interfere with the operation of our services</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>50% advance payment required for all projects</li>
                <li>Remaining 50% due upon project completion</li>
                <li>Payments are non-refundable unless otherwise agreed</li>
                <li>Late payments may incur additional charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, features, and functionality of our services are owned by Nexora LLC 
                and are protected by international copyright, trademark, and other intellectual 
                property laws. Custom work delivered to clients becomes their property upon full payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Nexora LLC shall not be liable for any indirect, incidental, special, or consequential 
                damages arising out of or in connection with the use of our services. Our total 
                liability shall not exceed the amount paid for the specific service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate services with written notice. Upon termination, 
                all rights and obligations shall cease except those that by their nature should survive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms & Conditions, contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: support@nexora.llc</p>
                <p>Phone: +92 309 023 0074 (Pakistan) | +971 54 765 9859 (UAE)</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
