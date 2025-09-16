
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";

const Cookies = () => {
  return (
    <Layout>
      <Helmet>
        <title>Cookie Policy - Nexora LLC</title>
        <meta name="description" content="Cookie Policy for Nexora LLC - Learn about our use of cookies and tracking technologies." />
      </Helmet>
      
      <div className="bg-gradient-to-b from-nexora-accent to-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Cookie Policy</h1>
          <p className="text-center text-muted-foreground mb-12">Last updated: January 2025</p>
          
          <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">What Are Cookies?</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable 
                    core functionality such as security, network management, and accessibility.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    We use Google Analytics to understand how visitors interact with our website. 
                    These cookies help us improve our services by providing insights into user behavior.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Advertising Cookies</h3>
                  <p className="text-muted-foreground">
                    We use Google AdSense to display relevant advertisements. These cookies help 
                    provide more personalized ads based on your interests and browsing behavior.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Functional Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies enable enhanced functionality and personalization, such as 
                    remembering your preferences and settings.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We may also use third-party services that set cookies on your device:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Google AdSense for advertising</li>
                <li>Social media platforms for sharing functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                <li>Opt-out tools: Google provides opt-out tools for Analytics and AdSense</li>
                <li>Privacy settings: Adjust your privacy preferences in your browser</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or applicable laws. We will notify you of any material changes by 
                posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: support@nexora.llc</p>
                <p>Phone: +44 7877 180793 (UK) | +971 54 765 9859 (UAE) | +92 309 023 0074 (Pakistan)</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;
