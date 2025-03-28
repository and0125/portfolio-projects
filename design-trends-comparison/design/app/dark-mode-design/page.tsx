import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check,
  ChevronRight,
  Code,
  Laptop,
  Zap,
  Shield,
  Star,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f8fafc]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-[#1e293b]">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-[#8b5cf6]" />
          <span className="font-bold text-xl">DarkUI</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden sm:inline-flex text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
          >
            Log in
          </Link>
          <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Beautiful Dark Mode UI for Modern Applications
          </h1>
          <p className="text-xl text-[#94a3b8] md:text-2xl max-w-[700px] mx-auto">
            Build stunning interfaces with our dark-themed components that look
            great and protect your users' eyes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white h-12 px-8">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-[#334155] text-[#f8fafc] hover:bg-[#1e293b] h-12 px-8"
            >
              Live Demo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-16 relative w-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/20 to-[#6366f1]/20 rounded-lg blur-3xl" />
          <div className="relative bg-[#1e293b] border border-[#334155] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              width={1200}
              height={600}
              alt="Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-16 md:py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">
              Everything you need to build beautiful dark mode interfaces that
              your users will love.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dark Mode Optimized",
                description:
                  "Designed specifically for dark environments with perfect contrast ratios.",
                icon: <Laptop className="h-10 w-10 text-[#8b5cf6]" />,
              },
              {
                title: "Accessible Components",
                description:
                  "Every component meets WCAG standards for maximum accessibility.",
                icon: <Shield className="h-10 w-10 text-[#8b5cf6]" />,
              },
              {
                title: "Developer Friendly",
                description:
                  "Easy to implement with comprehensive documentation and examples.",
                icon: <Code className="h-10 w-10 text-[#8b5cf6]" />,
              },
              {
                title: "Customizable",
                description:
                  "Easily adapt the components to match your brand's unique style.",
                icon: <Star className="h-10 w-10 text-[#8b5cf6]" />,
              },
              {
                title: "Performance Optimized",
                description:
                  "Lightweight components that won't slow down your application.",
                icon: <Zap className="h-10 w-10 text-[#8b5cf6]" />,
              },
              {
                title: "Regular Updates",
                description:
                  "Constantly improving with new components and features.",
                icon: <Check className="h-10 w-10 text-[#8b5cf6]" />,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-[#1e293b] border-[#334155] shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#94a3b8] text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 py-16 md:py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">
              Trusted by thousands of developers and designers around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The dark mode components have completely transformed our application's night-time usability. Our users love it!",
                name: "Alex Johnson",
                role: "Product Designer",
                avatar: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "Implementation was incredibly easy. The documentation is clear and the components work perfectly out of the box.",
                name: "Sarah Chen",
                role: "Frontend Developer",
                avatar: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "We've seen a 40% increase in evening usage since implementing these dark mode components. Absolutely worth it.",
                name: "Michael Rodriguez",
                role: "UX Researcher",
                avatar: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#1e293b] border-[#334155] shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <p className="text-[#f8fafc] italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        width={48}
                        height={48}
                        alt={testimonial.name}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-[#94a3b8]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#4c1d95] to-[#6d28d9] rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold">
                Ready to get started?
              </h2>
              <p className="text-[#e0e7ff] max-w-md">
                Join thousands of developers building beautiful dark mode
                interfaces today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-[#4c1d95] hover:bg-[#f8fafc] h-12 px-8">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 h-12 px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-[#8b5cf6]" />
              <span className="font-bold text-xl">DarkUI</span>
            </Link>
            <p className="text-[#94a3b8] max-w-xs">
              Beautiful dark mode components for modern web applications.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Docs", "Changelog"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {["Terms", "Privacy", "Cookies", "Licenses"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#1e293b] text-center text-[#94a3b8]">
          <p>© {new Date().getFullYear()} DarkUI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
