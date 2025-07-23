import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-foreground">Nexora</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering your digital future with innovative web development, software solutions, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-nexora-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-nexora-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://nexoratool.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-nexora-primary transition-colors text-sm"
                >
                  NexoraTool.com
                </a>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">PDF Tools</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">SEO Tools</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Text Tools</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-nexora-primary" />
                <div>
                  <div className="text-muted-foreground">Pakistan: +92 309 023 0074</div>
                  <div className="text-muted-foreground">UAE: +971 54 765 9859</div>
                </div>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-nexora-primary" />
                <div>
                  <div className="text-muted-foreground">support@nexora.llc</div>
                  <div className="text-muted-foreground">sales@nexora.llc</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Nexora LLC. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Also powering free tools at{" "}
            <a
              href="https://nexoratool.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nexora-primary hover:underline"
            >
              NexoraTool.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;