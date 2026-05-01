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
          <p className="text-gray-400">Last updated: April 2025</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground">We collect information you provide directly, including your name, email address, phone number, and any other information you submit through our forms. We also collect usage data such as IP addresses, browser type, and pages visited.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Communicate with you about our services</li>
                <li>Send SMS/text messages if you have opted in</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. SMS/Text Messaging</h2>
              <p className="text-muted-foreground mb-4">If you opt in to receive SMS/text messages:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>We may send messages regarding your application status, account updates, and promotional offers.</li>
                <li>Message frequency varies. Message and data rates may apply.</li>
                <li>You can opt out at any time by replying STOP to any message.</li>
                <li>For help, reply HELP or contact us at our provided contact information.</li>
                <li>Carriers are not liable for delayed or undelivered messages.</li>
                <li>Your consent to receive SMS is not a condition of any purchase.</li>
                <li>We do not share your phone number or SMS opt-in data with third parties for marketing purposes. Your information is only shared with service providers who assist us in delivering messages.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Sharing</h2>
              <p className="text-muted-foreground mb-4">We do not sell your personal information. We may share your data with trusted service providers who help us operate our business, comply with legal requirements, or protect our rights. We do not share your opt-in consent or phone number with third parties for their marketing purposes.</p>
              <p className="text-muted-foreground">No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Security</h2>
              <p className="text-muted-foreground">We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Your Rights</h2>
              <p className="text-muted-foreground">You may request access to, correction of, or deletion of your personal information by contacting us. You may opt out of SMS messaging at any time by replying STOP.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Changes to This Policy</h2>
              <p className="text-muted-foreground">We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Contact Us</h2>
              <p className="text-muted-foreground">If you have questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-nexora-primary hover:underline">Contact page</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
