import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Zap,
  Shield,
  Users,
  Sun,
} from "lucide-react";
import FeatureCard from "@/components/claymorphism/feature-card";
import TestimonialCard from "@/components/claymorphism/testimonial-card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFFAF0]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#F0E6D2] bg-[#FFFAF0]/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-[#3CBBB1] shadow-clay-sm"></div>
            <span className="text-xl font-bold text-[#2D3748]">ClayBrand</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {["Features", "Testimonials", "Pricing", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#2D3748] hover:text-[#3CBBB1] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden md:inline-flex h-10 items-center justify-center rounded-xl bg-[#3CBBB1] px-6 font-medium text-white shadow-clay-sm transition-all hover:shadow-clay-xs hover:translate-y-0.5"
            >
              Get Started
            </Link>
            <button className="md:hidden rounded-xl p-2 text-[#2D3748] shadow-clay-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#2D3748]">
                Bring Your Ideas to Life with{" "}
                <span className="text-[#3CBBB1]">Clay</span>
              </h1>
              <p className="max-w-[600px] text-[#4A5568] md:text-xl">
                Create beautiful, engaging experiences with our claymorphic
                design system. Build faster, design better, and stand out from
                the crowd.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#3CBBB1] px-8 font-medium text-white shadow-clay-md transition-all hover:shadow-clay-sm hover:translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#FFFAF0] px-8 font-medium text-[#2D3748] border border-[#F0E6D2] shadow-clay-md transition-all hover:shadow-clay-sm hover:translate-y-0.5"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl bg-gradient-to-br from-[#3CBBB1] to-[#9F7AEA] p-1 shadow-clay-lg">
              <div className="absolute inset-[6px] rounded-xl bg-[#FFFAF0]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Hero illustration"
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#F7F3EA]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-xl bg-[#3CBBB1]/10 px-4 py-1.5 text-sm font-medium text-[#3CBBB1]">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2D3748]">
              Everything You Need
            </h2>
            <p className="max-w-[700px] text-[#4A5568] md:text-xl">
              Our platform provides all the tools you need to create beautiful,
              engaging experiences.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-7 w-7" />}
              iconColor="text-[#FF8E6E]"
              iconBg="bg-[#FF8E6E]/10"
              title="Lightning Fast"
              description="Our platform is optimized for speed, ensuring your users have a smooth experience."
            />

            <FeatureCard
              icon={<Shield className="h-7 w-7" />}
              iconColor="text-[#9F7AEA]"
              iconBg="bg-[#9F7AEA]/10"
              title="Secure by Default"
              description="Security is built into every aspect of our platform, keeping your data safe."
            />

            <FeatureCard
              icon={<Users className="h-7 w-7" />}
              iconColor="text-[#3CBBB1]"
              iconBg="bg-[#3CBBB1]/10"
              title="Team Collaboration"
              description="Work together seamlessly with your team to create amazing experiences."
            />

            <FeatureCard
              icon={<MessageCircle className="h-7 w-7" />}
              iconColor="text-[#FF8E6E]"
              iconBg="bg-[#FF8E6E]/10"
              title="24/7 Support"
              description="Our support team is always available to help you with any questions or issues."
            />

            <FeatureCard
              icon={<CheckCircle className="h-7 w-7" />}
              iconColor="text-[#9F7AEA]"
              iconBg="bg-[#9F7AEA]/10"
              title="Easy Integration"
              description="Integrate with your favorite tools and services with just a few clicks."
            />

            <FeatureCard
              icon={<Sun className="h-7 w-7" />}
              iconColor="text-[#3CBBB1]"
              iconBg="bg-[#3CBBB1]/10"
              title="Customizable"
              description="Tailor the platform to your specific needs with our customization options."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-xl bg-[#FF8E6E]/10 px-4 py-1.5 text-sm font-medium text-[#FF8E6E]">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2D3748]">
              What Our Customers Say
            </h2>
            <p className="max-w-[700px] text-[#4A5568] md:text-xl">
              Don't just take our word for it. Here's what our customers have to
              say about our platform.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              avatarColor="bg-[#3CBBB1]"
              name="Sarah Johnson"
              role="Product Designer, Acme Inc."
              quote="This platform has completely transformed how we design and build our products. The claymorphic design system is intuitive and beautiful."
            />

            <TestimonialCard
              avatarColor="bg-[#9F7AEA]"
              name="Michael Chen"
              role="CTO, TechStart"
              quote="The performance and security features are top-notch. We've seen a significant improvement in user engagement since switching to this platform."
            />

            <TestimonialCard
              avatarColor="bg-[#FF8E6E]"
              name="Emily Rodriguez"
              role="Marketing Director, GrowthCo"
              quote="The customization options are incredible. We've been able to create a unique brand experience that really resonates with our audience."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-[#F7F3EA]">
        <div className="container px-4 md:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#3CBBB1] to-[#9F7AEA] p-1 shadow-clay-lg">
            <div className="rounded-2xl bg-[#FFFAF0] p-8 md:p-12 lg:p-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2D3748]">
                  Ready to Get Started?
                </h2>
                <p className="mt-4 text-[#4A5568] md:text-xl">
                  Join thousands of companies that are already using our
                  platform to create amazing experiences.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="#"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-[#3CBBB1] px-8 font-medium text-white shadow-clay-md transition-all hover:shadow-clay-sm hover:translate-y-0.5"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-[#FFFAF0] px-8 font-medium text-[#2D3748] border border-[#F0E6D2] shadow-clay-md transition-all hover:shadow-clay-sm hover:translate-y-0.5"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-[#FFFAF0] border-t border-[#F0E6D2]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="#" className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-xl bg-[#3CBBB1] shadow-clay-sm"></div>
                <span className="text-xl font-bold text-[#2D3748]">
                  ClayBrand
                </span>
              </Link>
              <p className="text-[#4A5568]">
                Creating beautiful, engaging experiences with our claymorphic
                design system.
              </p>
            </div>

            {["Product", "Company", "Legal"].map((category, index) => (
              <div key={category}>
                <h3 className="mb-4 text-lg font-semibold text-[#2D3748]">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {getFooterLinks(index).map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[#4A5568] hover:text-[#3CBBB1] transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-[#F0E6D2] pt-8">
            <p className="text-sm text-[#4A5568]">
              &copy; {new Date().getFullYear()} ClayBrand. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {["facebook", "twitter", "instagram"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFFAF0] text-[#4A5568] shadow-clay-sm transition-all hover:shadow-clay-xs hover:text-[#3CBBB1]"
                >
                  {getSocialIcon(social)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function getFooterLinks(index: number) {
  const links = [
    ["Features", "Pricing", "Testimonials", "FAQ"],
    ["About", "Blog", "Careers", "Contact"],
    ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  ];
  return links[index] || [];
}

function getSocialIcon(type: string) {
  switch (type) {
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    default:
      return null;
  }
}
