import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Settings, Zap, Shield, BarChart, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#e0e5ec]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] flex items-center justify-center">
            <Home className="h-5 w-5 text-[#6d7b94]" />
          </div>
          <span className="font-bold text-xl text-[#6d7b94]">NeumorphUI</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-[#6d7b94] font-medium hover:text-[#5a6882] transition-colors"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-[#6d7b94] font-medium hover:text-[#5a6882] transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-[#6d7b94] font-medium hover:text-[#5a6882] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-[#6d7b94] font-medium hover:text-[#5a6882] transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div>
          <Button className="rounded-xl bg-[#e0e5ec] text-[#6d7b94] font-medium shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] hover:bg-[#e0e5ec] transition-all">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6d7b94] leading-tight">
                Modern UI with Neumorphic Design
              </h1>
              <p className="text-[#8a96ab] text-lg md:text-xl max-w-md">
                Create beautiful, soft interfaces with our neumorphic design
                system. Perfect for modern web applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-xl bg-[#e0e5ec] text-[#6d7b94] font-medium shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] hover:bg-[#e0e5ec] transition-all px-8 py-6">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl bg-[#e0e5ec] border-none text-[#6d7b94] font-medium shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] hover:bg-[#e0e5ec] transition-all px-8 py-6"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[400px] rounded-2xl bg-[#e0e5ec] shadow-[10px_10px_20px_#bec3c9,-10px_-10px_20px_#ffffff] overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dashboard Preview"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[#e6ebf2]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d7b94] mb-4">
              Core Features
            </h2>
            <p className="text-[#8a96ab] text-lg max-w-2xl mx-auto">
              Our platform provides everything you need to create beautiful
              neumorphic interfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-[#6d7b94]" />,
                title: "Fast Performance",
                description:
                  "Optimized for speed and efficiency with minimal load times.",
              },
              {
                icon: <Shield className="h-8 w-8 text-[#6d7b94]" />,
                title: "Secure Design",
                description:
                  "Built with security in mind to protect your data and users.",
              },
              {
                icon: <Settings className="h-8 w-8 text-[#6d7b94]" />,
                title: "Customizable",
                description:
                  "Easily customize every aspect to match your brand identity.",
              },
              {
                icon: <BarChart className="h-8 w-8 text-[#6d7b94]" />,
                title: "Analytics",
                description:
                  "Comprehensive analytics to track user engagement and behavior.",
              },
              {
                icon: <Users className="h-8 w-8 text-[#6d7b94]" />,
                title: "Collaborative",
                description:
                  "Built for teams with real-time collaboration features.",
              },
              {
                icon: <Home className="h-8 w-8 text-[#6d7b94]" />,
                title: "Responsive",
                description:
                  "Fully responsive design that works on all devices and screen sizes.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="rounded-xl bg-[#e0e5ec] border-none shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] p-6 hover:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#6d7b94] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#8a96ab]">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl bg-[#e0e5ec] shadow-[10px_10px_20px_#bec3c9,-10px_-10px_20px_#ffffff] p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d7b94] mb-4">
                  Ready to get started?
                </h2>
                <p className="text-[#8a96ab] text-lg max-w-2xl">
                  Join thousands of designers and developers who are already
                  creating beautiful interfaces with our neumorphic design
                  system.
                </p>
              </div>
              <div>
                <Button className="rounded-xl bg-[#e0e5ec] text-[#6d7b94] font-medium shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] hover:bg-[#e0e5ec] transition-all px-8 py-6 text-lg">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#d0d5dc]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-1/3">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] flex items-center justify-center">
                  <Home className="h-5 w-5 text-[#6d7b94]" />
                </div>
                <span className="font-bold text-xl text-[#6d7b94]">
                  NeumorphUI
                </span>
              </Link>
              <p className="text-[#8a96ab] mb-4">
                Creating beautiful, soft interfaces with neumorphic design
                principles.
              </p>
              <p className="text-[#8a96ab]">
                © {new Date().getFullYear()} NeumorphUI. All rights reserved.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-[#6d7b94] mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-[#8a96ab] hover:text-[#6d7b94]"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#8a96ab] hover:text-[#6d7b94]"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#8a96ab] hover:text-[#6d7b94]"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#8a96ab] hover:text-[#6d7b94]"
                    >
                      Releases
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#6d7b94] mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-[#8a96ab] hover:text-[#6d7b94]"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#8a96ab] hover:text-[#6d7b94]"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#8a96ab] hover:text-[#6d7b94]"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#8a96ab] hover:text-[#6d7b94]"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#6d7b94] mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-[#8a96ab] hover:text-[#6d7b94]"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#8a96ab] hover:text-[#6d7b94]"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#8a96ab] hover:text-[#6d7b94]"
                    >
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
