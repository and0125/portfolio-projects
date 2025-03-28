import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Zap, Rocket, Globe, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-[#0B0E17] backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-[#FF5277]" />
            <span className="text-xl font-bold tracking-wider text-white">
              RETRO<span className="text-[#FF5277]">FUTURE</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-[#B4ABDF] transition-colors hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-[#B4ABDF] transition-colors hover:text-white"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-[#B4ABDF] transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-[#B4ABDF] transition-colors hover:text-white"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-[#B4ABDF] hover:text-white hover:bg-[#1A1E2E]"
            >
              Sign In
            </Button>
            <Button className="bg-[#FF5277] text-white hover:bg-[#FF3A64]">
              Get Started
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#0B0E17] py-20 md:py-32">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#7B4CFF] blur-[150px]"></div>
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FF5277] blur-[150px]"></div>
          </div>
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center rounded-full border border-[#7B4CFF] bg-[#1A1E2E] px-3 py-1 text-sm text-[#7B4CFF]">
                  <span>The Future is Now</span>
                  <div className="ml-2 h-1 w-1 rounded-full bg-[#7B4CFF]"></div>
                  <span className="ml-2">Version 2.0</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                  Retro Meets <span className="text-[#FF5277]">Future</span> in
                  Perfect Harmony
                </h1>
                <p className="max-w-[600px] text-[#B4ABDF] md:text-xl">
                  Experience the nostalgic aesthetics of the past combined with
                  cutting-edge technology of tomorrow. Your journey to the
                  future begins here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#7B4CFF] text-white hover:bg-[#6A3AEE] h-12 px-8">
                    Start Your Journey
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#7B4CFF] text-[#7B4CFF] hover:bg-[#1A1E2E] h-12 px-8"
                  >
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#B4ABDF]">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full border-2 border-[#0B0E17] bg-[#1A1E2E]"
                      ></div>
                    ))}
                  </div>
                  <div>
                    <span className="font-medium text-white">2,000+</span>{" "}
                    satisfied customers
                  </div>
                </div>
              </div>
              <div className="relative mx-auto lg:ml-auto">
                <div className="relative h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#7B4CFF] to-[#FF5277] p-1">
                  <div className="absolute inset-1 rounded-full bg-[#0B0E17]"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Retro Futurism"
                    width={400}
                    height={400}
                    className="absolute inset-0 h-full w-full rounded-full object-cover mix-blend-lighten"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-br from-[#FF5277] to-[#FFB454] p-1">
                  <div className="absolute inset-1 rounded-full bg-[#0B0E17]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-[#0F1320] py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Core <span className="text-[#7B4CFF]">Features</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-[#B4ABDF]">
                Discover the perfect blend of nostalgic design and cutting-edge
                functionality that sets us apart.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description:
                    "Experience speeds that were once thought impossible. Our technology breaks barriers.",
                  color: "#FF5277",
                },
                {
                  icon: Shield,
                  title: "Ultra Secure",
                  description:
                    "Bank-level security with retro aesthetics. Your data is protected by the future.",
                  color: "#7B4CFF",
                },
                {
                  icon: Globe,
                  title: "Global Network",
                  description:
                    "Connected across time and space. Access your content from anywhere in the universe.",
                  color: "#FFB454",
                },
                {
                  icon: Rocket,
                  title: "Quantum Powered",
                  description:
                    "Harness the power of quantum computing with an interface inspired by the classics.",
                  color: "#54FFDB",
                },
                {
                  icon: Zap,
                  title: "Time Synced",
                  description:
                    "Always in perfect harmony with the chronosphere. Never miss a beat or deadline.",
                  color: "#FF5277",
                },
                {
                  icon: Shield,
                  title: "Neural Interface",
                  description:
                    "Thought becomes reality with our advanced neural mapping technology.",
                  color: "#7B4CFF",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl bg-[#1A1E2E] p-6 transition-all hover:shadow-lg hover:shadow-[#7B4CFF]/20"
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#1A1E2E] to-[#1A1E2E] opacity-50 transition-all group-hover:from-[#1A1E2E] group-hover:to-[feature.color]/20"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B0E17]">
                      <feature.icon
                        className={`h-6 w-6 text-[${feature.color}]`}
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-[#B4ABDF]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-[#0B0E17] py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                What Our <span className="text-[#FF5277]">Travelers</span> Say
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-[#B4ABDF]">
                Join thousands of time travelers who have experienced the
                perfect blend of past and future.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl bg-[#1A1E2E] p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7B4CFF] to-[#FF5277]"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Time Traveler #{i}
                      </h4>
                      <p className="text-sm text-[#B4ABDF]">Future Citizen</p>
                    </div>
                  </div>
                  <p className="text-[#B4ABDF]">
                    "The perfect blend of nostalgia and innovation. It feels
                    like I'm using technology from the future with the comfort
                    of the past."
                  </p>
                  <div className="mt-4 flex text-[#FFB454]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Zap key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-[#0F1320] py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Simple, <span className="text-[#7B4CFF]">Transparent</span>{" "}
                Pricing
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-[#B4ABDF]">
                Choose the perfect plan for your journey through time and space.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "29",
                  description:
                    "Perfect for beginners exploring the retro future.",
                  features: [
                    "Basic time synchronization",
                    "5 neural interfaces",
                    "Standard quantum security",
                    "24/7 support",
                  ],
                },
                {
                  name: "Pro",
                  price: "79",
                  description:
                    "For serious time travelers and future explorers.",
                  features: [
                    "Advanced time manipulation",
                    "Unlimited neural interfaces",
                    "Enhanced quantum security",
                    "Priority support",
                    "Custom chronosphere",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "199",
                  description:
                    "Complete control over the space-time continuum.",
                  features: [
                    "Full chronosphere access",
                    "Unlimited everything",
                    "Military-grade security",
                    "Dedicated support team",
                    "Custom development",
                    "Time loop insurance",
                  ],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-xl ${
                    i === 1
                      ? "bg-gradient-to-b from-[#7B4CFF]/20 to-[#FF5277]/20 border border-[#7B4CFF]/50"
                      : "bg-[#1A1E2E]"
                  } p-6`}
                >
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="ml-1 text-[#B4ABDF]">/month</span>
                  </div>
                  <p className="mt-2 text-[#B4ABDF]">{plan.description}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-[#B4ABDF]">
                        <div className="mr-2 h-4 w-4 rounded-full bg-[#7B4CFF]"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-8 w-full ${
                      i === 1
                        ? "bg-[#7B4CFF] hover:bg-[#6A3AEE]"
                        : "bg-[#1A1E2E] border border-[#7B4CFF] text-[#7B4CFF] hover:bg-[#0B0E17]"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#0B0E17] py-20">
          <div className="container">
            <div className="rounded-2xl bg-gradient-to-r from-[#7B4CFF]/20 to-[#FF5277]/20 p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                    Ready to Experience the{" "}
                    <span className="text-[#FF5277]">Retro Future</span>?
                  </h2>
                  <p className="mt-4 text-[#B4ABDF]">
                    Join thousands of time travelers on an unforgettable journey
                    through the chronosphere.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#FF5277] text-white hover:bg-[#FF3A64] h-12 px-8">
                      Start Your Journey
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#7B4CFF] text-[#7B4CFF] hover:bg-[#1A1E2E] h-12 px-8"
                    >
                      Contact Sales
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-12 -left-12 h-24 w-24 rounded-full bg-[#7B4CFF] opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-[#FF5277] opacity-20 blur-xl"></div>
                  <div className="relative rounded-xl bg-[#1A1E2E] p-6">
                    <h3 className="mb-4 text-xl font-bold text-white">
                      Stay Updated
                    </h3>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-[#0B0E17] p-3">
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full bg-transparent text-white placeholder-[#B4ABDF] outline-none"
                        />
                      </div>
                      <div className="rounded-lg bg-[#0B0E17] p-3">
                        <input
                          type="email"
                          placeholder="Your email"
                          className="w-full bg-transparent text-white placeholder-[#B4ABDF] outline-none"
                        />
                      </div>
                      <Button className="w-full bg-[#7B4CFF] text-white hover:bg-[#6A3AEE]">
                        Subscribe to Updates
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0B0E17] py-12 border-t border-[#1A1E2E]">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Rocket className="h-6 w-6 text-[#FF5277]" />
                <span className="text-xl font-bold tracking-wider text-white">
                  RETRO<span className="text-[#FF5277]">FUTURE</span>
                </span>
              </div>
              <p className="text-[#B4ABDF]">
                The perfect blend of nostalgic design and cutting-edge
                technology.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Company</h4>
              <ul className="space-y-2 text-[#B4ABDF]">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Resources</h4>
              <ul className="space-y-2 text-[#B4ABDF]">
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Legal</h4>
              <ul className="space-y-2 text-[#B4ABDF]">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-[#1A1E2E] pt-6 text-center text-[#B4ABDF]">
            <p>
              &copy; {new Date().getFullYear()} RetroFuture. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
