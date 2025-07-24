
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Target, Users, Globe, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to deliver exceptional results."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Our clients' success is our priority. We work closely with you to understand and exceed your expectations."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operating across Pakistan, UAE, and the GCC region, we bring international standards to every project."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Nexora Founded",
      description: "Our journey began with a vision to empower businesses through innovative digital solutions"
    },
    {
      year: "2024",
      title: "80+ Projects Completed",
      description: "Successfully delivered diverse projects across web development, POS systems, and e-commerce"
    },
    {
      year: "2025",
      title: "NexoraTool.com Launched",
      description: "Released our comprehensive free online utility platform serving thousands of users worldwide"
    },
    {
      year: "2025+",
      title: "GCC & Pakistan Expansion",
      description: "Currently expanding our operations across the Gulf region and strengthening our Pakistan presence"
    }
  ];

  const founders = [
    {
      name: "Muhammad Hamza Saleemi",
      role: "Founder & CEO",
      image: "/lovable-uploads/b476ecf4-f63f-46ec-9f94-52c09f301c93.png"
      
    },
    {
      name: "Muhammad Naveed Anjum",
      role: "Founder & CEO",
      image: "/lovable-uploads/placeholder-male.jpg"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-nexora-accent to-background">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Nexora
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering businesses through innovative digital solutions since 2023
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Nexora, we believe in the transformative power of technology. Our mission is to empower businesses 
                  of all sizes with innovative digital solutions that drive growth, efficiency, and success in the modern world.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We're not just developers; we're digital partners committed to understanding your unique challenges 
                  and delivering solutions that exceed expectations. From custom web applications to comprehensive 
                  e-commerce platforms, we bring your vision to life with precision and creativity.
                </p>
                <div className="bg-nexora-accent p-6 rounded-lg border border-nexora-primary/20">
                  <p className="text-foreground font-medium">
                    "Also powering free online utilities at{" "}
                    <a 
                      href="https://nexoratool.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-nexora-primary hover:underline font-semibold"
                    >
                      NexoraTool.com
                    </a>
                    , serving thousands of users worldwide with free PDF, SEO, text processing, and developer tools."
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Team collaboration"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Founders</h2>
              <p className="text-lg text-muted-foreground">
                Meet the visionaries behind Nexora's innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-nexora-primary/20">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{founder.name}</h3>
                    <p className="text-nexora-primary font-medium mb-4">{founder.role}</p>
                    <div className="w-12 h-1 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-full mx-auto"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                From startup to regional expansion - our growth story
              </p>
            </div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-semibold text-nexora-primary bg-nexora-accent px-2 py-1 rounded">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Passionate professionals dedicated to your success
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" 
                alt="Nexora team"
                className="w-full max-w-2xl h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Expert Developers</h3>
                  <p className="text-muted-foreground text-sm">Skilled in modern technologies and best practices</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Creative Designers</h3>
                  <p className="text-muted-foreground text-sm">Crafting beautiful and intuitive user experiences</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Project Managers</h3>
                  <p className="text-muted-foreground text-sm">Ensuring timely delivery and quality results</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href="https://nexoratool.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Try Our Free Tools
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
