import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { Phone, Mail, Clock, Send, MessageSquare, ShieldCheck, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendFormNotification, generateCaptcha } from "@/lib/messaging";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(captchaInput) !== captcha.answer) {
      toast({
        title: "Verification Failed",
        description: "Please solve the math question correctly.",
        variant: "destructive",
      });
      refreshCaptcha();
      return;
    }

    setIsSubmitting(true);

    const success = await sendFormNotification({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      source: "Demo Request",
    });

    setIsSubmitting(false);

    if (success) {
      toast({
        title: "Demo Request Sent!",
        description: "Thank you! Our team will contact you within 24 hours to schedule your demo.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      refreshCaptcha();
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out via WhatsApp.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["UK: +44 7877 180793", "UAE: +971 54 765 9859", "Pakistan: +92 309 023 0074"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@nexora.llc", "sales@nexora.llc"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-nexora-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-nexora-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-nexora-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_25%_8%)_70%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-nexora-primary/10 border border-nexora-primary/20 rounded-full px-4 py-1.5 text-sm text-nexora-primary mb-6">
            <span className="w-2 h-2 bg-nexora-secondary rounded-full animate-pulse" />
            Book a Demo
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">
              Automate
            </span>{" "}
            Your Business
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Schedule a free demo and see how Nexora can handle your customer communication on autopilot.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Request a Free Demo</h2>
              <p className="text-muted-foreground mb-8">Fill out the form and our team will reach out within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+44 7877 180793" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="message">How can we help? *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your business and what you'd like to automate..." rows={5} className="mt-1.5" />
                </div>

                {/* Human Verification */}
                <div className="bg-muted/50 border border-border rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="h-4 w-4 text-nexora-primary" />
                    <Label className="text-sm font-medium">Human Verification</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-foreground font-mono text-lg bg-background border border-border rounded-lg px-4 py-2 select-none">
                      {captcha.question} = ?
                    </span>
                    <Input
                      type="number"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      placeholder="Answer"
                      required
                      className="w-28"
                    />
                    <Button type="button" variant="ghost" size="sm" onClick={refreshCaptcha} className="text-xs text-muted-foreground">
                      New question
                    </Button>
                  </div>
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 rounded-xl gap-2">
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {isSubmitting ? "Sending..." : "Book Demo"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? Contact us through any of these channels.
                </p>
              </div>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-card border border-border rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Chat on WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-3">Get instant replies from our team</p>
                    <Button asChild size="sm" className="bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 rounded-lg">
                      <a href="https://wa.me/447877180793" target="_blank" rel="noopener noreferrer">
                        Start Chat
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
