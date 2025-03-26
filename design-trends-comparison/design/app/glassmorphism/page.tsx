import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A00E0] to-[#8E2DE2] text-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <span className="text-xl font-bold">G</span>
              </div>
              <span className="text-xl font-bold">GlassMorph</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="hover:text-white/80 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-white/80 transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="hover:text-white/80 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="hover:text-white/80 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="hidden md:flex hover:bg-white/20"
              >
                Log in
              </Button>
              <Button className="bg-white text-[#4A00E0] hover:bg-white/90">
                Sign up
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Modern UI with Glassmorphism Effect
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-lg">
                  Create stunning interfaces with our glass-like components.
                  Perfect for modern web applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-[#4A00E0] hover:bg-white/90 text-lg px-8 py-6">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/20 text-lg px-8 py-6"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-xl relative">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#8E2DE2] rounded-full blur-3xl opacity-30"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#4A00E0] rounded-full blur-3xl opacity-30"></div>
                  <div className="p-8 h-full flex flex-col justify-center">
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 mb-4">
                      <h3 className="text-xl font-semibold mb-2">
                        Glassmorphism UI Kit
                      </h3>
                      <p className="text-white/70">
                        Beautiful, modern, and easy to use.
                      </p>
                    </div>
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-xl font-bold">A</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Alex Johnson</h4>
                          <p className="text-sm text-white/70">
                            Product Designer
                          </p>
                        </div>
                      </div>
                      <p className="text-white/70">
                        "This UI kit has transformed our design workflow
                        completely!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Amazing Features
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Our glassmorphism UI kit comes with everything you need to
                create stunning interfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Responsive Design",
                  description:
                    "All components are fully responsive and work on all devices.",
                },
                {
                  title: "Customizable",
                  description:
                    "Easily customize colors, blur effects, and transparency levels.",
                },
                {
                  title: "Modern Effects",
                  description:
                    "Beautiful blur effects and glass-like interfaces for modern UIs.",
                },
                {
                  title: "Performance Optimized",
                  description:
                    "Built with performance in mind, ensuring smooth animations.",
                },
                {
                  title: "Easy Integration",
                  description:
                    "Simple to integrate with your existing React or Next.js projects.",
                },
                {
                  title: "Well Documented",
                  description:
                    "Comprehensive documentation to help you get started quickly.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our customers have
                to say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Sarah Thompson",
                  role: "UI Designer",
                  content:
                    "The glassmorphism components have saved me countless hours of design work. The results are stunning and my clients love it!",
                  avatar: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "Michael Chen",
                  role: "Frontend Developer",
                  content:
                    "As a developer, I appreciate how easy it is to implement these components. The code is clean and well-structured.",
                  avatar: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Product Manager",
                  content:
                    "Our product's visual appeal increased dramatically after implementing this UI kit. User engagement is up by 40%!",
                  avatar: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "David Kim",
                  role: "Startup Founder",
                  content:
                    "This UI kit helped us launch our MVP quickly with a professional look. Worth every penny!",
                  avatar: "/placeholder.svg?height=80&width=80",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-white/70">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/80">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Simple Pricing
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Choose the plan that works best for you and your team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$49",
                  description: "Perfect for individuals and small projects",
                  features: [
                    "50+ Components",
                    "Responsive Design",
                    "Basic Documentation",
                    "6 Months Updates",
                  ],
                  highlighted: false,
                },
                {
                  name: "Professional",
                  price: "$99",
                  description: "Ideal for professional designers and teams",
                  features: [
                    "100+ Components",
                    "Responsive Design",
                    "Comprehensive Documentation",
                    "1 Year Updates",
                    "Premium Support",
                    "Source Files",
                  ],
                  highlighted: true,
                },
                {
                  name: "Enterprise",
                  price: "$199",
                  description: "For large teams and complex projects",
                  features: [
                    "200+ Components",
                    "Responsive Design",
                    "Comprehensive Documentation",
                    "Lifetime Updates",
                    "Priority Support",
                    "Source Files",
                    "Custom Components",
                  ],
                  highlighted: false,
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-md ${
                    plan.highlighted
                      ? "bg-white/20 border-[#8E2DE2]/50"
                      : "bg-white/10 border-white/20"
                  } border rounded-xl p-8 ${
                    plan.highlighted ? "transform scale-105" : ""
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-white/70"> / one-time</span>
                  </div>
                  <p className="text-white/80 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-[#8E2DE2]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-white text-[#4A00E0] hover:bg-white/90"
                        : "bg-white/20 hover:bg-white/30"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Join thousands of designers and developers who are already
                  using our UI kit.
                </p>
              </div>

              <form className="max-w-md mx-auto">
                <div className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                    />
                  </div>
                  <Button className="w-full bg-white text-[#4A00E0] hover:bg-white/90 h-12">
                    Subscribe to Newsletter
                  </Button>
                </div>
                <p className="text-sm text-white/60 text-center mt-4">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <span className="text-xl font-bold">G</span>
                </div>
                <span className="text-xl font-bold">GlassMorph</span>
              </Link>
              <p className="text-white/70 mb-4">
                Beautiful glassmorphism UI components for modern web
                applications.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>
              &copy; {new Date().getFullYear()} GlassMorph UI. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
