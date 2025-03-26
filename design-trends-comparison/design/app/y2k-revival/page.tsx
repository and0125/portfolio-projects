import Link from "next/link";
import Image from "next/image";
import { Star, Zap, Globe, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-black text-white overflow-hidden">
      {/* Header */}
      <header className="border-b border-cyan-400/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-cyan-400" />
            <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
              Y2K.io
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm hover:text-cyan-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-sm hover:text-cyan-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#pricing"
              className="text-sm hover:text-cyan-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Link
            href="#signup"
            className="px-4 py-2 text-sm font-medium rounded bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:opacity-90 transition-opacity"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border border-cyan-400/10"></div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 text-transparent bg-clip-text">
                The Future is Now
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Experience the revival of Y2K aesthetics with our cutting-edge
              digital platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#demo"
                className="px-6 py-3 font-medium rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:opacity-90 transition-opacity"
              >
                Try Demo
              </Link>
              <Link
                href="#learn"
                className="px-6 py-3 font-medium rounded-full border border-cyan-400/50 hover:bg-cyan-400/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative mx-auto max-w-2xl h-64 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 rounded-xl backdrop-blur-md border border-white/10"></div>
            <div className="absolute -top-4 -left-4 h-full w-full bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 rounded-xl"></div>
            <div className="absolute -bottom-4 -right-4 h-full w-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Y2K Interface"
                width={600}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
                Core Features
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the amazing features that bring the Y2K aesthetic into
              the modern digital age
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-black/50 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm hover:border-cyan-400/40 transition-colors group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Retro Interfaces
              </h3>
              <p className="text-gray-300">
                Experience nostalgic UI designs with modern functionality and
                performance
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-black/50 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm hover:border-cyan-400/40 transition-colors group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Digital Glitch Effects
              </h3>
              <p className="text-gray-300">
                Add authentic Y2K-inspired glitch effects to your digital
                content
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-black/50 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm hover:border-cyan-400/40 transition-colors group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Global Community
              </h3>
              <p className="text-gray-300">
                Connect with Y2K enthusiasts from around the world in our
                digital hub
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-fuchsia-500/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
                Ready to Travel Back to the Future?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users already experiencing the Y2K revival
            </p>
            <form className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-black/50 border border-cyan-400/30 focus:border-cyan-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 font-medium rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:opacity-90 transition-opacity"
                >
                  Get Started
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-400">
              No credit card required. Start your free 14-day trial today.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-400/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
                Y2K.io
              </span>
            </div>
            <div className="flex gap-6 mb-4 md:mb-0">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                FAQ
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Y2K.io. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
