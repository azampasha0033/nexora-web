
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";

const Disclaimer = () => {
  return (
    <Layout>
      <Helmet>
        <title>Disclaimer - Nexora LLC</title>
        <meta name="description" content="Disclaimer for Nexora LLC - Important information about our services and content." />
      </Helmet>
      
      <div className="bg-gradient-to-b from-nexora-accent to-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Disclaimer</h1>
          <p className="text-center text-muted-foreground mb-12">Last updated: January 2025</p>
          
          <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">General Information</h2>
              <p className="text-muted-foreground">
                The information on this website is provided on an "as is" basis. To the fullest 
                extent permitted by law, Nexora LLC excludes all representations, warranties, 
                conditions and terms, whether express or implied, statutory or otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Service Performance</h2>
              <p className="text-muted-foreground">
                While we strive to provide high-quality services, we cannot guarantee that our 
                services will be uninterrupted, timely, secure, or error-free. Results may vary 
                based on various factors including but not limited to client requirements, 
                third-party services, and external circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Content</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites or services. We are not 
                responsible for the content, privacy policies, or practices of these third-party 
                sites. We encourage you to review the terms and privacy policies of any third-party 
                sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Technical Accuracy</h2>
              <p className="text-muted-foreground">
                We make every effort to ensure the accuracy of technical information and tools 
                provided on our website and through our services. However, we cannot guarantee 
                the completeness, reliability, or accuracy of this information. Users should 
                verify all information before making decisions based on it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Professional Advice</h2>
              <p className="text-muted-foreground">
                The information and services provided by Nexora LLC are not intended to be a 
                substitute for professional advice. You should consult with appropriate 
                professionals before making any business, legal, or technical decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Under no circumstances shall Nexora LLC be liable for any direct, indirect, 
                incidental, special, or consequential damages that may result from the use of, 
                or inability to use, our services or information provided on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to Services</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify, suspend, or discontinue our services at any time 
                without prior notice. We also reserve the right to change the terms of service 
                and pricing at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about this disclaimer, please contact us at:
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

export default Disclaimer;
