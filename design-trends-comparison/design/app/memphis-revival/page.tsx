import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-black bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-[#FF3CA5]">
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-[#00C2CB]"></div>
              <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-[#FFD23F]"></div>
            </div>
            <span className="text-xl font-bold">Memphis</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-[#FF3CA5] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-[#FF3CA5] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-[#FF3CA5] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-[#FF3CA5] transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#signup"
              className="inline-flex h-9 items-center justify-center rounded-md bg-[#00C2CB] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#00A5AD] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00C2CB]"
            >
              Sign Up
            </Link>
            <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden">
              <span className="sr-only">Toggle menu</span>
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
                className="h-6 w-6"
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
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Memphis style background elements */}
        <div className="absolute -left-10 top-20 h-32 w-32 rounded-full border-8 border-dashed border-[#FFD23F] opacity-30"></div>
        <div className="absolute right-20 top-40 h-16 w-16 rotate-45 bg-[#FF3CA5] opacity-20"></div>
        <div className="absolute bottom-10 left-1/3 h-24 w-24 rounded-full bg-[#00C2CB] opacity-20"></div>
        <div className="absolute -right-10 bottom-20 h-40 w-40 rounded-full border-8 border-[#B288FD] opacity-20"></div>
        <div className="absolute left-1/2 top-1/4 h-20 w-20 -translate-x-1/2 transform bg-[#FFD23F] opacity-20"></div>

        <div className="container relative px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[#FFD23F] px-3 py-1 text-sm font-medium">
                  New Release
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="text-[#FF3CA5]">Bold.</span>{" "}
                  <span className="text-[#00C2CB]">Playful.</span>{" "}
                  <span className="block">Unforgettable.</span>
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Break the rules of conventional design with our
                  Memphis-inspired platform. Stand out with vibrant colors and
                  playful patterns.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#getstarted"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#FF3CA5] px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#E0348F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3CA5]"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#demo"
                  className="inline-flex h-10 items-center justify-center rounded-md border-2 border-black bg-white px-8 py-2 text-sm font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] overflow-hidden rounded-3xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#FFD23F]"></div>
                <div className="absolute bottom-10 left-10 h-20 w-20 rounded-full border-4 border-[#FF3CA5]"></div>
                <div className="absolute bottom-20 right-20 h-12 w-12 rotate-45 bg-[#00C2CB]"></div>
                <div className="absolute left-20 top-20 h-16 w-16 rounded-full bg-[#B288FD]"></div>
                <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">Memphis Style</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#F9F9F9] py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Core <span className="text-[#00C2CB]">Features</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-600">
              Discover what makes our platform stand out from the crowd with
              these amazing features.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="relative overflow-hidden rounded-xl border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-[#FF3CA5]"></div>
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD23F]">
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
                  className="h-6 w-6"
                >
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="m4.93 4.93 2.83 2.83" />
                  <path d="m16.24 16.24 2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="m4.93 19.07 2.83-2.83" />
                  <path d="m16.24 7.76 2.83-2.83" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Bold Design System</h3>
              <p className="text-gray-600">
                Stand out with our vibrant color palettes and geometric patterns
                that capture attention.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative overflow-hidden rounded-xl border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -right-4 -top-4 h-12 w-12 rotate-45 bg-[#00C2CB]"></div>
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#B288FD]">
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
                  className="h-6 w-6"
                >
                  <path d="M2 9V5c0-1.1.9-2 2-2h4" />
                  <path d="M2 13v4c0 1.1.9 2 2 2h4" />
                  <path d="M22 9V5c0-1.1-.9-2-2-2h-4" />
                  <path d="M22 13v4c0 1.1-.9 2-2 2h-4" />
                  <path d="M6 12h12" />
                  <path d="M12 6v12" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Playful Components</h3>
              <p className="text-gray-600">
                Engage users with interactive elements that bring joy and
                excitement to every interaction.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="relative overflow-hidden rounded-xl border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full border-4 border-[#FFD23F]"></div>
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FF3CA5]">
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
                  className="h-6 w-6 text-white"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Pattern Library</h3>
              <p className="text-gray-600">
                Access hundreds of Memphis-inspired patterns to create unique
                and memorable experiences.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="relative overflow-hidden rounded-xl border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-[#B288FD]"></div>
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#00C2CB]">
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
                  className="h-6 w-6 text-white"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Customization Tools</h3>
              <p className="text-gray-600">
                Easily customize every aspect of your design with intuitive
                tools and controls.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="relative overflow-hidden rounded-xl border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -right-4 -top-4 h-12 w-12 rotate-45 bg-[#FFD23F]"></div>
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FF3CA5]">
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
                  className="h-6 w-6 text-white"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Collaboration Suite</h3>
              <p className="text-gray-600">
                Work together with your team in real-time to create stunning
                Memphis-style designs.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="relative overflow-hidden rounded-xl border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-[#00C2CB]"></div>
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#B288FD]">
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
                  className="h-6 w-6"
                >
                  <path d="m12 14 4-4" />
                  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Performance Analytics</h3>
              <p className="text-gray-600">
                Track how your designs perform with comprehensive analytics and
                insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        {/* Memphis style background elements */}
        <div className="absolute left-0 top-0 h-40 w-40 -translate-x-1/2 translate-y-1/2 transform rotate-45 bg-[#FFD23F] opacity-20"></div>
        <div className="absolute bottom-0 right-0 h-60 w-60 translate-x-1/3 translate-y-1/3 transform rounded-full border-8 border-dashed border-[#FF3CA5] opacity-20"></div>

        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-xl border-2 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-12">
            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#00C2CB] opacity-20"></div>
            <div className="absolute -left-16 -bottom-16 h-32 w-32 rotate-45 bg-[#FF3CA5] opacity-20"></div>

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to <span className="text-[#FF3CA5]">stand out</span>{" "}
                  from the crowd?
                </h2>
                <p className="mt-4 text-gray-600">
                  Join thousands of designers who are already creating stunning
                  Memphis-style designs with our platform.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00C2CB]" />
                    <span>14-day free trial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00C2CB]" />
                    <span>No credit card required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00C2CB]" />
                    <span>Cancel anytime</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold">
                    Start your free trial
                  </h3>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#00C2CB] focus:outline-none focus:ring-1 focus:ring-[#00C2CB]"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#00C2CB] focus:outline-none focus:ring-1 focus:ring-[#00C2CB]"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button className="w-full rounded-md bg-[#FF3CA5] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#E0348F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3CA5]">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-[#FF3CA5]">
                  <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-[#00C2CB]"></div>
                  <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-[#FFD23F]"></div>
                </div>
                <span className="text-xl font-bold">Memphis</span>
              </Link>
              <p className="text-sm text-gray-600">
                Break the rules of conventional design with our Memphis-inspired
                platform.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    Releases
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF3CA5]">
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Memphis Design. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
