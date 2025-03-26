import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-[#FACC15] border-4 border-black rotate-12"></div>
              <span className="text-2xl font-black">BRUTALIST</span>
            </div>

            {/* Mobile menu button */}
            <div className="block md:hidden">
              <Button className="h-10 w-10 p-0 bg-[#FACC15] border-4 border-black hover:bg-[#F59E0B] hover:translate-y-[-2px] transition-transform">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="font-bold hover:underline">
                Features
              </Link>
              <Link href="#pricing" className="font-bold hover:underline">
                Pricing
              </Link>
              <Link href="#testimonials" className="font-bold hover:underline">
                Testimonials
              </Link>
              <Link href="#contact" className="font-bold hover:underline">
                Contact
              </Link>
              <Button className="bg-[#EF4444] text-white border-4 border-black px-6 py-2 font-bold hover:bg-[#DC2626] hover:translate-y-[-2px] transition-transform">
                Sign Up
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-[#FACC15] border-4 border-black px-4 py-1 -rotate-2">
                <span className="font-bold text-lg">NEW RELEASE</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Bold Design for the Digital Age
              </h1>
              <p className="text-xl">
                Break free from boring designs with our neo-brutalist approach.
                Stand out with unapologetically bold aesthetics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-black text-white border-4 border-black px-8 py-6 text-lg font-bold hover:bg-gray-800 hover:translate-y-[-4px] transition-transform">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white border-4 border-black px-8 py-6 text-lg font-bold hover:bg-gray-100 hover:translate-y-[-4px] transition-transform"
                >
                  See Examples
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#EF4444] border-4 border-black rotate-3"></div>
              <div className="relative bg-[#FACC15] border-4 border-black p-4 -rotate-2">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Hero image"
                  width={500}
                  height={400}
                  className="w-full h-auto border-4 border-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-[#FACC15]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Core Features
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Our platform offers everything you need to create stunning
              brutalist designs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bold Typography",
                description:
                  "Make a statement with our library of attention-grabbing fonts and text styles.",
              },
              {
                title: "Raw Layouts",
                description:
                  "Break the grid with asymmetrical designs that capture attention and create visual interest.",
              },
              {
                title: "Chunky Elements",
                description:
                  "Use thick borders, high contrast colors, and geometric shapes for maximum impact.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white border-4 border-black p-6 ${
                  index === 0
                    ? "rotate-1"
                    : index === 1
                    ? "-rotate-1"
                    : "rotate-2"
                } hover:translate-y-[-8px] transition-transform`}
              >
                <div className="h-12 w-12 bg-black mb-4"></div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full bg-[#FACC15] border-4 border-black -rotate-3"></div>
                <div className="relative bg-white border-4 border-black p-4 rotate-1">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Showcase image"
                    width={500}
                    height={400}
                    className="w-full h-auto border-4 border-black"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block bg-[#EF4444] border-4 border-black px-4 py-1 rotate-2">
                <span className="font-bold text-lg text-white">
                  WHY CHOOSE US
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Stand Out in a Sea of Sameness
              </h2>
              <p className="text-xl">
                In a world of minimalist designs, brutalism offers a refreshing
                alternative that captures attention and creates memorable
                experiences.
              </p>
              <ul className="space-y-4">
                {[
                  "Increased engagement and longer session times",
                  "Memorable brand identity that stands out",
                  "Higher conversion rates through bold CTAs",
                  "Unique user experience that breaks conventions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-[#EF4444] flex-shrink-0 mt-1" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Don't just take our word for it. Here's what others have to say
              about our approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Switching to a brutalist design increased our conversion rate by 40%. The bold approach really makes us stand out.",
                author: "Sarah Johnson",
                company: "Tech Innovators",
              },
              {
                quote:
                  "Our audience loves the raw, authentic feel of our new website. It perfectly represents our brand values.",
                author: "Mark Williams",
                company: "Creative Studio",
              },
              {
                quote:
                  "The unique design language has become a core part of our brand identity. It's instantly recognizable.",
                author: "Jessica Chen",
                company: "Fashion Forward",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white text-black border-4 border-[#FACC15] p-6 ${
                  index === 0
                    ? "-rotate-1"
                    : index === 1
                    ? "rotate-1"
                    : "-rotate-2"
                }`}
              >
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              No hidden fees or complicated tiers. Just straightforward pricing
              for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$49",
                description: "Perfect for individuals and small projects",
                features: [
                  "5 projects",
                  "Basic components",
                  "Email support",
                  "1 team member",
                ],
              },
              {
                name: "Pro",
                price: "$99",
                description: "Ideal for growing businesses and teams",
                features: [
                  "Unlimited projects",
                  "Advanced components",
                  "Priority support",
                  "5 team members",
                  "Custom exports",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "$199",
                description: "For large organizations with complex needs",
                features: [
                  "Unlimited everything",
                  "Custom components",
                  "24/7 support",
                  "Unlimited team members",
                  "White labeling",
                  "API access",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`
                  border-4 ${
                    plan.highlighted
                      ? "border-[#EF4444] bg-[#FACC15]"
                      : "border-black bg-white"
                  } 
                  p-6 ${
                    index === 0
                      ? "rotate-1"
                      : index === 1
                      ? "-rotate-1"
                      : "rotate-2"
                  }
                  ${plan.highlighted ? "relative z-10 md:-mt-4 md:-mb-4" : ""}
                `}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 -right-4 bg-[#EF4444] text-white border-4 border-black px-4 py-1 font-bold rotate-12">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="ml-1">/month</span>
                </div>
                <p className="mb-6">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#EF4444]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full border-4 border-black font-bold py-3 ${
                    plan.highlighted
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-white hover:bg-gray-100"
                  } hover:translate-y-[-4px] transition-transform`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#EF4444] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Break the Mold?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of forward-thinking brands embracing the brutalist
              aesthetic.
            </p>
            <div className="bg-white border-4 border-black p-6 rotate-1 text-black">
              <h3 className="text-2xl font-bold mb-4">
                Sign up for our newsletter
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-4 border-black py-6 px-4 text-lg flex-1"
                />
                <Button className="bg-black text-white border-4 border-black px-8 py-6 text-lg font-bold hover:bg-gray-800 hover:translate-y-[-4px] transition-transform">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm mt-4">
                We'll send you brutalist inspiration, not spam. Unsubscribe
                anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4 border-[#FACC15]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 bg-[#FACC15] border-2 border-white rotate-12"></div>
                <span className="text-xl font-black">BRUTALIST</span>
              </div>
              <p className="mb-4">Breaking design conventions since 2023.</p>
              <div className="flex gap-4">
                {["Twitter", "Instagram", "Dribbble"].map((social, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="h-10 w-10 bg-white text-black border-2 border-white flex items-center justify-center font-bold hover:bg-[#FACC15] transition-colors"
                  >
                    {social.charAt(0)}
                  </Link>
                ))}
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Examples", "Documentation"],
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
                <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="hover:text-[#FACC15] transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Brutalist Design Co. All rights
              reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
