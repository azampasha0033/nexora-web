
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { FileText, Search, Type, Download, ExternalLink, Zap, Image, Calendar, Clock, QrCode, Video, Code, Wrench, Languages, PenTool } from "lucide-react";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tools = [
    {
      icon: FileText,
      name: "PDF Tools",
      description: "Convert, merge, split, and manipulate PDF files effortlessly",
      features: ["PDF to Word conversion", "Merge multiple PDFs", "Split PDF pages", "Compress PDF files"],
      tools: [
        { name: "PDF to PDF/A", path: "/pdf-to-pdfa" },
        { name: "Word to PDF", path: "/word-to-pdf" },
        { name: "Excel to PDF", path: "/excel-to-pdf" },
        { name: "Edit PDF", path: "/edit-pdf" },
        { name: "PDF to JPG", path: "/pdf-to-jpg" },
        { name: "JPG to PDF", path: "/jpg-to-pdf" },
        { name: "Sign PDF", path: "/sign-pdf" },
        { name: "Merge PDF", path: "/merge-pdf" },
        { name: "Split PDF", path: "/split-pdf" },
        { name: "Compress PDF", path: "/compress-pdf" },
        { name: "PDF to Word", path: "/pdf-to-word" },
        { name: "PDF to PowerPoint", path: "/pdf-to-powerpoint" },
        { name: "PowerPoint to PDF", path: "/powerpoint-to-pdf" },
        { name: "PDF Password Remover", path: "/pdf-password-remover" }
      ]
    },
    {
      icon: Search,
      name: "SEO Tools",
      description: "Optimize your website's search engine performance",
      features: ["Keyword analysis", "Meta tag generator", "Site audit tools", "Ranking checker"],
      tools: [
        { name: "Create Slug", path: "/create-slug" },
        { name: "Meta Tag Generator", path: "/meta-tag-generator" },
        { name: "Keyword Density Checker", path: "/keyword-density-checker" },
        { name: "Robots.txt Generator", path: "/robots-txt-generator" },
        { name: "XML Sitemap Generator", path: "/xml-sitemap-generator" },
        { name: "SERP Snippet Preview", path: "/serp-snippet-preview" },
        { name: "Redirect Checker", path: "/redirect-checker" },
        { name: "Page Speed Tester", path: "/page-speed-tester" },
        { name: "Backlink Checker", path: "/backlink-checker" },
        { name: "Header Tag Checker", path: "/header-tag-checker" },
        { name: "Schema Markup Generator", path: "/schema-markup-generator" }
      ]
    },
    {
      icon: Type,
      name: "Text & Writing Tools",
      description: "Powerful text processing and writing utilities",
      features: ["Text formatting", "Grammar checking", "Content optimization", "Language tools"],
      tools: [
        { name: "Paraphrasing Tool", path: "/paraphrasing-tool" },
        { name: "Grammar Spell Checker", path: "/grammar-spell-checker" },
        { name: "Text Summarizer", path: "/text-summarizer" },
        { name: "Readability Checker", path: "/readability-checker" },
        { name: "Text Case Converter", path: "/text-case-converter" },
        { name: "Duplicate Line Remover", path: "/duplicate-line-remover" },
        { name: "Word Character Counter", path: "/line-word-character-counter" },
        { name: "Text Sorter", path: "/text-sorter" },
        { name: "Find Replace Tool", path: "/find-replace-tool" },
        { name: "Sentence Rephraser", path: "/sentence-rephraser" },
        { name: "Title Headline Analyzer", path: "/title-headline-analyzer" },
        { name: "Passive Voice Detector", path: "/passive-voice-detector" },
        { name: "Random Sentence Generator", path: "/random-sentence-generator" },
        { name: "Quote Formatter", path: "/quote-formatter" },
        { name: "Chronological Organizer", path: "/chronological-organizer" },
        { name: "Synonym Finder", path: "/synonym-finder" },
        { name: "Antonym Finder", path: "/antonym-finder" },
        { name: "Language Detector", path: "/language-detector" },
        { name: "Anagram Generator", path: "/anagram-generator" },
        { name: "Markdown to HTML Converter", path: "/Markdown-HTML-Converter" },
        { name: "HTML to Plain Text", path: "/HTMLToPlainTextConverter" },
        { name: "CSV/TSV to Text", path: "/CSVTSVToPlainTextConverter" },
        { name: "JSON to Text", path: "/json-to-text" },
        { name: "Code Comment Generator", path: "/code-comment-generator" },
        { name: "Regex Generator", path: "/regex-generator" },
        { name: "YAML JSON Formatter", path: "/yaml-json-formatter" },
        { name: "HTML Beautifier", path: "/html-beautifier" },
        { name: "Morse Code Converter", path: "/morse-code-converter" },
        { name: "ASCII Art Generator", path: "/ascii-art-generator" },
        { name: "Braille Translator", path: "/braille-translator" },
        { name: "Text Difference Highlighter", path: "/text-difference-highlighter" }
      ]
    },
    {
      icon: Code,
      name: "Developer Tools",
      description: "Essential tools for developers and programmers",
      features: ["Code formatting", "API testing", "Data conversion", "Development utilities"],
      tools: [
        { name: "JSON Formatter", path: "/json-formatter" },
        { name: "CSS Minifier", path: "/css-minifier" },
        { name: "JavaScript Minifier", path: "/javascript-minifier" },
        { name: "SQL Syntax Checker", path: "/sql-syntax-checker" },
        { name: "SQL Formatter", path: "/SQL-formatter" },
        { name: "Lorem Ipsum Generator", path: "/lorem-ipsum-generator" },
        { name: "JWT Decoder", path: "/jwt-decoder" },
        { name: "Base64 Tool", path: "/base64-tool" },
        { name: "UUID Generator", path: "/uuid-generator" },
        { name: "Color Picker", path: "/color-picker" },
        { name: "Markdown Previewer", path: "/markdown-previewer" },
        { name: "Cron Job Generator", path: "/cron-job-generator" },
        { name: "Password Strength Checker", path: "/password-strength-checker" },
        { name: "Hashing Tool", path: "/hashing-tool" },
        { name: "Time Zone Converter", path: "/time-zone-converter" },
        { name: "Database Schema Visualizer", path: "/database-schema-visualizer" },
        { name: "SQL to NoSQL Converter", path: "/sql-to-nosql-converter" },
        { name: "Data Mocking Tool", path: "/data-mocking-tool" },
        { name: "API Request Generator", path: "/api-request-generator" },
        { name: "JSON to CSV Converter", path: "/json-to-csv-converter" },
        { name: "CSV to Excel Converter", path: "/csv-to-excel-converter" },
        { name: "Excel Merger", path: "/excel-merger" },
        { name: "Excel Viewer", path: "/excel-viewer" },
        { name: "XSS Payload Generator", path: "/xss-payload-generator" },
        { name: "IP Geolocation", path: "/ip-geolocation" },
        { name: "API Rate Limit Tester", path: "/api-rate-limit-tester" },
        { name: "Code Performance Benchmark", path: "/code-performance-benchmark" },
        { name: "Unit Test Generator", path: "/unit-test-generator" },
        { name: "Load Testing Tool", path: "/load-testing-tool" },
        { name: "Memory Leak Detector", path: "/memory-leak-detector" },
        { name: "Key Change Detector", path: "/key-change-detector" }
      ]
    },
    {
      icon: Image,
      name: "Image Tools",
      description: "Convert, resize, and manipulate images",
      features: ["Format conversion", "Image resizing", "Cropping tools", "Optimization"],
      tools: [
        { name: "PNG to JPG", path: "/png-to-jpg" },
        { name: "JPG to PNG", path: "/jpg-to-png" },
        { name: "PNG to WebP", path: "/png-to-webp" },
        { name: "WebP to PNG", path: "/webp-to-png" },
        { name: "JPG to WebP", path: "/jpg-to-webp" },
        { name: "WebP to JPG", path: "/webp-to-jpg" },
        { name: "GIF to PNG", path: "/gif-to-png" },
        { name: "GIF to JPG", path: "/gif-to-jpg" },
        { name: "BMP to PNG", path: "/bmp-to-png" },
        { name: "BMP to JPG", path: "/bmp-to-jpg" },
        { name: "TIFF to PNG", path: "/tiff-to-png" },
        { name: "TIFF to JPG", path: "/tiff-to-jpg" },
        { name: "SVG to PNG", path: "/svg-to-png" },
        { name: "SVG to JPG", path: "/svg-to-jpg" },
        { name: "HEIC to JPG", path: "/heic-to-jpg" },
        { name: "HEIC to PNG", path: "/heic-to-png" },
        { name: "RAW to JPG", path: "/raw-to-jpg" },
        { name: "RAW to PNG", path: "/raw-to-png" },
        { name: "EPS to PNG", path: "/eps-to-png" },
        { name: "EPS to JPG", path: "/eps-to-jpg" },
        { name: "PSD to PNG", path: "/psd-to-png" },
        { name: "PSD to JPG", path: "/psd-to-jpg" },
        { name: "Resize Image", path: "/resize-image" },
        { name: "Crop Image", path: "/crop-image" },
        { name: "Circle Crop", path: "/circle-crop" },
        { name: "Square Crop", path: "/square-crop" },
        { name: "Scale Image", path: "/scale-image" }
      ]
    },
    {
      icon: Video,
      name: "Video Tools",
      description: "Video processing and conversion tools (Coming Soon)",
      features: ["Video compression", "Format conversion", "Editing tools", "Optimization"],
      tools: [
        { name: "Video Compressor", path: "/video-compressor", comingSoon: true },
        { name: "Video to GIF", path: "/video-to-gif", comingSoon: true },
        { name: "GIF to Video", path: "/gif-to-video", comingSoon: true },
        { name: "Video Resizer", path: "/video-resizer", comingSoon: true },
        { name: "Video Cropper", path: "/video-cropper", comingSoon: true },
        { name: "Video Trimmer", path: "/video-trimmer", comingSoon: true },
        { name: "Video Merger", path: "/video-merger", comingSoon: true },
        { name: "Video Rotator", path: "/video-rotator", comingSoon: true },
        { name: "Video Speed", path: "/video-speed", comingSoon: true },
        { name: "Video Watermark", path: "/video-watermark", comingSoon: true },
        { name: "Video Stabilizer", path: "/video-stabilizer", comingSoon: true },
        { name: "Video Frame Extractor", path: "/video-frame-extractor", comingSoon: true },
        { name: "Video Background Remover", path: "/video-background-remover", comingSoon: true },
        { name: "Video Enhancer", path: "/video-enhancer", comingSoon: true }
      ]
    },
    {
      icon: QrCode,
      name: "QR & Barcode Tools",
      description: "Generate and scan QR codes and barcodes",
      features: ["QR code generation", "Barcode reading", "Custom designs", "Bulk generation"],
      tools: [
        { name: "QR Code Generator", path: "/qr-code-generator" },
        { name: "QR Code Designer", path: "/qr-code-designer" },
        { name: "Barcode Reader", path: "/barcode-reader" },
        { name: "VCard QR Generator", path: "/vcard-qr-generator" },
        { name: "Dynamic QR Code", path: "/dynamic-qr-code" },
        { name: "Bulk Barcode Generator", path: "/bulk-barcode-generator" }
      ]
    },
    {
      icon: Calendar,
      name: "Date & Time Tools",
      description: "Date calculations and time utilities",
      features: ["Date calculations", "Time conversion", "Duration tools", "Countdown timers"],
      tools: [
        { name: "Date Gap Calculator", path: "/date/date-gap-calculator" },
        { name: "Time Span Finder", path: "/date/timespan-finder" },
        { name: "Days Between Dates", path: "/date/days-between-dates" },
        { name: "Quick Date Diff", path: "/date/quick-date-diff" },
        { name: "Date Delta Tool", path: "/date/date-delta-tool" },
        { name: "Time Passed", path: "/date/time-passed" },
        { name: "Countdown Mate", path: "/date/countdown-mate" },
        { name: "Age Duration Wizard", path: "/date/age-duration-wizard" },
        { name: "Elapsed Time Tool", path: "/date/elapsed-time-tool" },
        { name: "TimeCalc Pro", path: "/date/timecalc-pro" },
        { name: "Stopwatch Tool", path: "/time/stopwatch" },
        { name: "Time Unit Converter", path: "/time-unit-converter" }
      ]
    },
    {
      icon: Wrench,
      name: "Utility Tools",
      description: "Miscellaneous utility tools for various tasks",
      features: ["General utilities", "Productivity tools", "Helper functions", "Convenience tools"],
      tools: [
        { name: "Journal Prompt Generator", path: "/journal-prompt-generator" },
        { name: "Gift Idea Generator", path: "/gift-idea-generator" },
        { name: "Book Summary Generator", path: "/book-summary-generator" },
        { name: "Grocery List Optimizer", path: "/grocery-list-optimizer" }
      ]
    }
  ];

  const roadmapItems = [
    "Advanced AI-powered tools",
    "Real-time collaboration features",
    "API access for developers",
    "Mobile app companion",
    "Advanced analytics dashboard"
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-nexora-accent to-background">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                NexoraTool.com
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive suite of free online utilities for PDF processing, SEO optimization, text manipulation, 
              image conversion, and developer tools. All tools are completely free and require no registration.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 gap-2">
              <a href="https://nexoratool.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                Go to NexoraTool.com
              </a>
            </Button>
          </div>
        </section>

        {/* Tools Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Available Tool Categories</h2>
              <p className="text-lg text-muted-foreground">
                Over 200+ tools organized into comprehensive categories for maximum productivity
              </p>
            </div>

            <div className="space-y-12">
              {tools.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-nexora-primary/5 to-nexora-secondary/5">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{category.name}</CardTitle>
                          <CardDescription className="text-base">{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                        {category.tools.map((tool, toolIndex) => (
                          <Button
                            key={toolIndex}
                            asChild
                            variant="outline"
                            size="sm"
                            className={`text-left justify-start h-auto p-3 ${
                              tool.comingSoon 
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-nexora-accent hover:text-foreground hover:border-nexora-primary'
                            }`}
                            disabled={tool.comingSoon}
                          >
                            {tool.comingSoon ? (
                              <span className="text-sm">
                                {tool.name}
                                <span className="block text-xs text-muted-foreground">Coming Soon</span>
                              </span>
                            ) : (
                              <a href={`https://nexoratool.com${tool.path}`} target="_blank" rel="noopener noreferrer" className="text-sm">
                                {tool.name}
                              </a>
                            )}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">See It in Action</h2>
              <p className="text-lg text-muted-foreground">
                Clean, intuitive interfaces designed for maximum productivity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <img 
                  src="/lovable-uploads/359584a6-51f1-4d88-9e8e-e4e64c524345.png" 
                  alt="PDF Tools Interface"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-foreground mb-2">PDF Processing</h3>
                <p className="text-sm text-muted-foreground">Drag, drop, and process your PDF files instantly</p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="SEO Tools Interface"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-foreground mb-2">SEO Analytics</h3>
                <p className="text-sm text-muted-foreground">Comprehensive SEO analysis and recommendations</p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                  alt="Text Tools Interface"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-foreground mb-2">Text Processing</h3>
                <p className="text-sm text-muted-foreground">Advanced text manipulation and formatting tools</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
              <p className="text-lg text-muted-foreground">
                We're constantly expanding our tool suite based on user feedback and emerging needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roadmapItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg border border-border">
                  <div className="w-2 h-2 bg-nexora-secondary rounded-full flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-nexora-primary to-nexora-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Using Our Free Tools Today
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              No registration required. All tools are completely free and ready to use.
            </p>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href="https://nexoratool.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                Visit NexoraTool.com
              </a>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;
