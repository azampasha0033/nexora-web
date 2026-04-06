import { Link } from "react-router-dom";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer className="bg-nexora-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-white">Nexora</span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered communication automation platform. Automate WhatsApp, website chat, calls, and store operations from one dashboard.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-nexora-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-nexora-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="h-4 w-4 text-nexora-primary mt-0.5" />
                <div className="text-gray-400">
                  <div>USA: +1 307 417 0173</div>
                  <div>UK: +44 7877 180793</div>
                  <div>UAE: +971 54 765 9859</div>
                  <div>Pakistan: +92 309 023 0074</div>
                </div>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="h-4 w-4 text-nexora-primary mt-0.5" />
                <div className="text-gray-400">
                  <div>support@nexora.llc</div>
                  <div>sales@nexora.llc</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Nexora LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a href="https://chatasbot.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-nexora-primary text-sm transition-colors">
              ChatAsBot.com
            </a>
            <span className="text-gray-700">•</span>
            <a href="https://nexoratool.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-nexora-primary text-sm transition-colors">
              NexoraTool.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
