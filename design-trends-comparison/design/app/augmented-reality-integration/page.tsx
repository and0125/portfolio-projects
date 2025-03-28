import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Compass,
  Layers,
  Smartphone,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-[#4f46e5]" />
            <span className="text-xl font-bold">
              ARConnect (Need to fill in videos with Augmented Reality Images)
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-[#4f46e5] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#integrations"
              className="text-sm font-medium hover:text-[#4f46e5] transition-colors"
            >
              Integrations
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-[#4f46e5] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#docs"
              className="text-sm font-medium hover:text-[#4f46e5] transition-colors"
            >
              Documentation
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden sm:block text-sm font-medium hover:text-[#4f46e5] transition-colors"
            >
              Contact
            </Link>
            <Button className="bg-[#4f46e5] hover:bg-[#4338ca]">
              Get Started
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-[#f5f3ff]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-[#ede9fe] px-3 py-1 text-sm text-[#4f46e5]">
                  Next-Gen AR Platform
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Seamless Augmented Reality Integration
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Transform your applications with our powerful AR toolkit.
                  Build immersive experiences that blend digital content with
                  the real world.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white">
                    Start Building
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4f46e5] text-[#4f46e5]"
                  >
                    View Demo
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[600px] overflow-hidden rounded-lg border bg-white shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/10 to-[#06b6d4]/10 opacity-50" />
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="AR Visualization"
                    className="aspect-video object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                    <h3 className="text-xl font-bold">
                      Immersive AR Experience
                    </h3>
                    <p className="text-sm opacity-90">
                      Visualize digital content in real-world environments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#ede9fe] px-3 py-1 text-sm text-[#4f46e5]">
                  Core Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful AR Capabilities
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides everything you need to create stunning
                  augmented reality experiences across devices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-[#f5f3ff] shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ede9fe]">
                    <Smartphone className="h-6 w-6 text-[#4f46e5]" />
                  </div>
                  <CardTitle className="mt-4">Cross-Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Deploy AR experiences across iOS, Android, and web platforms
                    with a single codebase.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-[#f5f3ff] shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ede9fe]">
                    <Compass className="h-6 w-6 text-[#4f46e5]" />
                  </div>
                  <CardTitle className="mt-4">Spatial Mapping</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced algorithms for precise tracking and mapping of
                    physical environments.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-[#f5f3ff] shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ede9fe]">
                    <Zap className="h-6 w-6 text-[#4f46e5]" />
                  </div>
                  <CardTitle className="mt-4">Real-time Rendering</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    High-performance rendering engine for smooth, responsive AR
                    experiences.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-[#f5f3ff] shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ede9fe]">
                    <Code className="h-6 w-6 text-[#4f46e5]" />
                  </div>
                  <CardTitle className="mt-4">Developer API</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive API and SDK for seamless integration with
                    existing applications.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-[#f5f3ff] shadow-sm hover:shadow-md transition-all md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ede9fe]">
                    <Layers className="h-6 w-6 text-[#4f46e5]" />
                  </div>
                  <CardTitle className="mt-4">3D Object Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced machine learning algorithms for identifying and
                    tracking 3D objects in real-time.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="integrations"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f3ff]"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#ede9fe] px-3 py-1 text-sm text-[#4f46e5]">
                  Seamless Integration
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Works With Your Tech Stack
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AR platform integrates with popular frameworks and
                  technologies, making implementation simple and efficient.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4f46e5]/10">
                      <ArrowRight className="h-4 w-4 text-[#4f46e5]" />
                    </div>
                    <span>React Native & Flutter support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4f46e5]/10">
                      <ArrowRight className="h-4 w-4 text-[#4f46e5]" />
                    </div>
                    <span>Unity & Unreal Engine plugins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4f46e5]/10">
                      <ArrowRight className="h-4 w-4 text-[#4f46e5]" />
                    </div>
                    <span>WebXR compatibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4f46e5]/10">
                      <ArrowRight className="h-4 w-4 text-[#4f46e5]" />
                    </div>
                    <span>REST API for custom implementations</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white">
                    View Documentation
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] overflow-hidden rounded-lg border bg-white shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    width={500}
                    height={500}
                    alt="Integration Diagram"
                    className="aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/10 via-transparent to-[#06b6d4]/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#ede9fe] px-3 py-1 text-sm text-[#4f46e5]">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Choose Your Plan
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible pricing options to suit businesses of all sizes.
                  Scale as you grow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3">
              <Card className="border-[#f5f3ff] shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <div className="text-3xl font-bold">
                    $49
                    <span className="text-sm font-normal text-gray-500">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[100px]">
                    Perfect for individuals and small projects getting started
                    with AR.
                  </CardDescription>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f46e5]/10">
                        <ArrowRight className="h-3 w-3 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm">
                        Up to 1,000 monthly active users
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f46e5]/10">
                        <ArrowRight className="h-3 w-3 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm">Basic spatial mapping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f46e5]/10">
                        <ArrowRight className="h-3 w-3 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm">Standard support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-[#4f46e5] shadow-lg hover:shadow-xl transition-all relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-[#4f46e5] px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <div className="text-3xl font-bold">
                    $149
                    <span className="text-sm font-normal text-gray-500">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[100px]">
                    Ideal for growing businesses looking to expand their AR
                    capabilities.
                  </CardDescription>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f46e5]/10">
                        <ArrowRight className="h-3 w-3 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm">
                        Up to 10,000 monthly active users
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f46e5]/10">
                        <ArrowRight className="h-3 w-3 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm">Advanced spatial mapping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f46e5]/10">
                        <ArrowRight className="h-3 w-3 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm">Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f46e5]/10">
                        <ArrowRight className="h-3 w-3 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm">Custom 3D object library</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-[#f5f3ff] shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <div className="text-3xl font-bold">
                    Custom
                    <span className="text-sm font-normal text-gray-500">
                      {" "}
                      pricing
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[100px]">
                    Tailored solutions for large organizations with complex AR
                    requirements.
                  </CardDescription>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f46e5]/10">
                        <ArrowRight className="h-3 w-3 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm">
                        Unlimited monthly active users
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f46e5]/10">
                        <ArrowRight className="h-3 w-3 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm">Premium spatial mapping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f46e5]/10">
                        <ArrowRight className="h-3 w-3 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm">24/7 dedicated support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4f46e5]/10">
                        <ArrowRight className="h-3 w-3 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm">
                        Custom integration services
                      </span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-[#4f46e5] text-[#4f46e5]"
                  >
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#f5f3ff] to-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#ede9fe] px-3 py-1 text-sm text-[#4f46e5]">
                  Get Started
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Applications?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of developers building the next generation of
                  AR experiences.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  No credit card required. 14-day free trial.{" "}
                  <Link
                    href="#"
                    className="text-[#4f46e5] underline underline-offset-2"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-[#4f46e5]" />
            <span className="text-lg font-bold">ARConnect</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Cookies
            </Link>
          </nav>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ARConnect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
