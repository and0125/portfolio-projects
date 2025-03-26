import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Star,
  Zap,
  Rocket,
  Crown,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#FF00FF]/20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#00CED1]/20 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#FFD700]/20 -translate-y-1/2 blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b-4 border-[#8A2BE2] bg-gradient-to-r from-[#8A2BE2]/10 to-[#00CED1]/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-[#8A2BE2]" />
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] to-[#00CED1]">
                MAXIMA
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="font-semibold text-[#4B0082] hover:text-[#8A2BE2] transition-colors"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="font-semibold text-[#4B0082] hover:text-[#8A2BE2] transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="font-semibold text-[#4B0082] hover:text-[#8A2BE2] transition-colors"
              >
                Pricing
              </Link>
              <Button className="bg-[#8A2BE2] hover:bg-[#7B1FA2] text-white font-bold">
                Get Started
              </Button>
            </nav>
            <Button className="md:hidden bg-[#8A2BE2] hover:bg-[#7B1FA2] text-white">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 border-b-4 border-[#FFD700]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-[#FFD700] text-[#4B0082] font-bold rounded-full mb-4">
                  ✨ Unleash Your Creativity
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#4B0082]">
                  <span className="block">Bold.</span>
                  <span className="block text-[#8A2BE2]">Vibrant.</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#00CED1] to-[#FFD700]">
                    Maximalist.
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-800 max-w-lg">
                Embrace the extraordinary with our platform that celebrates
                abundance, decoration, and the beauty of "more is more" design
                philosophy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8A2BE2] hover:bg-[#7B1FA2] text-white text-lg px-8 py-6 rounded-xl font-bold">
                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#00CED1] text-[#00CED1] hover:bg-[#00CED1]/10 text-lg px-8 py-6 rounded-xl font-bold"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=User${i}`}
                        alt={`User ${i}`}
                        width={40}
                        height={40}
                        className="bg-[#FFD700]"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium">
                  <span className="text-[#8A2BE2] font-bold">2,000+</span>{" "}
                  creative minds already joined
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8A2BE2] to-[#00CED1] rounded-2xl -rotate-3 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FF00FF] rounded-2xl rotate-3 blur-sm"></div>
              <div className="relative bg-white p-2 rounded-2xl border-4 border-[#4B0082]">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Maximalist+Design"
                  alt="Maximalist Design Showcase"
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#FFD700] p-4 rounded-full border-4 border-[#4B0082] shadow-lg">
                <Star className="w-8 h-8 text-[#4B0082]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 py-20 bg-gradient-to-b from-white to-[#8A2BE2]/5 border-b-4 border-[#00CED1]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4B0082] mb-4">
              Extraordinary Features
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our platform is packed with features that embrace the maximalist
              philosophy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10 text-[#FFD700]" />,
                title: "Bold Templates",
                description:
                  "Access hundreds of vibrant, pattern-rich templates that make a statement",
              },
              {
                icon: <Crown className="w-10 h-10 text-[#FF00FF]" />,
                title: "Premium Elements",
                description:
                  "Decorative elements, textures, and patterns to layer your designs",
              },
              {
                icon: <Rocket className="w-10 h-10 text-[#00CED1]" />,
                title: "Fast Performance",
                description:
                  "Lightning-fast loading despite the rich visual elements",
              },
              {
                icon: <MessageCircle className="w-10 h-10 text-[#8A2BE2]" />,
                title: "Community Support",
                description:
                  "Join a community of maximalist designers sharing ideas",
              },
              {
                icon: <Star className="w-10 h-10 text-[#FFD700]" />,
                title: "Color Palettes",
                description:
                  "Curated vibrant color combinations that pop and make an impact",
              },
              {
                icon: <Sparkles className="w-10 h-10 text-[#FF00FF]" />,
                title: "Animation Library",
                description:
                  "Eye-catching animations to bring your maximalist designs to life",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-4 border-[#4B0082] overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/10 via-[#00CED1]/10 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-8">
                  <div className="bg-white p-4 rounded-full w-fit mb-6 border-2 border-[#4B0082]">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B0082] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative z-10 py-20 bg-gradient-to-b from-[#8A2BE2]/5 to-white border-b-4 border-[#8A2BE2]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4B0082] mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Join thousands of creative minds who've embraced the maximalist
              approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandra Rivers",
                role: "Creative Director",
                quote:
                  "MAXIMA has transformed our brand identity. The bold templates and vibrant elements have helped us stand out in a crowded market.",
              },
              {
                name: "Marcus Chen",
                role: "Digital Artist",
                quote:
                  "As someone who loves color and pattern, I've finally found a platform that doesn't shy away from maximalist design principles.",
              },
              {
                name: "Sophia Williams",
                role: "Fashion Blogger",
                quote:
                  "The templates are stunning! My audience engagement has increased by 200% since I started using these bold, eye-catching designs.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-4 border-[#4B0082] overflow-hidden"
              >
                <CardContent className="p-8 bg-gradient-to-br from-[#8A2BE2]/5 via-[#00CED1]/5 to-[#FFD700]/5">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 fill-[#FFD700] text-[#FFD700]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#8A2BE2]">
                      <Image
                        src={`/placeholder.svg?height=48&width=48&text=${testimonial.name.charAt(
                          0
                        )}`}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="bg-[#8A2BE2] text-white"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4B0082]">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl border-4 border-[#4B0082]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] via-[#00CED1] to-[#FFD700] opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] bg-repeat opacity-10"></div>
            <div className="relative p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Ready to Embrace Maximalism?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Join our platform today and discover the power of bold, vibrant,
                and unapologetically maximalist design.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-[#8A2BE2] hover:bg-white/90 text-lg px-8 py-6 rounded-xl font-bold">
                  Get Started Now
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl font-bold"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#4B0082] text-white pt-16 pb-8 border-t-4 border-[#FFD700]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-[#FFD700]" />
                <span className="text-2xl font-extrabold text-white">
                  MAXIMA
                </span>
              </div>
              <p className="text-white/80 mb-6">
                Embracing the extraordinary with bold, vibrant, and maximalist
                design.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-[#FFD700]">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-[#FFD700]">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-[#FFD700]">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Templates", "Pricing", "Updates"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Press", "Contact"],
              },
              {
                title: "Resources",
                links: ["Blog", "Newsletter", "Events", "Help Center"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-6 text-[#FFD700]">
                  {column.title}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-white/80 hover:text-[#FFD700] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} MAXIMA. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-[#FFD700] text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#FFD700] text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#FFD700] text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
