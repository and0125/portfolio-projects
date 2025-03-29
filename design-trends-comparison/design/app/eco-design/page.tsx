import Link from "next/link";
import Image from "next/image";
import { Leaf, Wind, Droplets, Sun, ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">EcoSphere</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log in
            </Button>
            <Button className="hidden md:flex">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/80">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Sustainable Solutions for a Better Tomorrow
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                  Embrace Nature, <br />
                  Empower Change
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join our mission to create a sustainable future. Our
                  eco-friendly solutions help you reduce your carbon footprint
                  while enhancing your quality of life.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="inline-flex items-center gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[450px] rounded-full bg-primary/5 p-4">
                  <Image
                    src="/placeholder.svg?height=450&width=450"
                    alt="Hero Image"
                    width={450}
                    height={450}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
                  Sustainable Solutions for Every Need
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Discover how our eco-friendly products and services can
                  transform your lifestyle and help protect our planet.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Eco-Friendly Materials
                  </h3>
                  <p className="text-muted-foreground">
                    All our products are made from sustainable, biodegradable
                    materials that reduce environmental impact.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Wind className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Carbon Neutral
                  </h3>
                  <p className="text-muted-foreground">
                    We offset 100% of our carbon emissions through verified
                    environmental projects around the world.
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Water Conservation
                  </h3>
                  <p className="text-muted-foreground">
                    Our manufacturing processes use 50% less water than industry
                    standards, preserving this precious resource.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Renewable Energy
                  </h3>
                  <p className="text-muted-foreground">
                    Powered by 100% renewable energy sources, including solar
                    and wind, for all our operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
                Creating a Sustainable Future Together
              </h2>
              <p className="text-muted-foreground md:text-xl">
                At EcoSphere, we believe that small changes can make a big
                difference. Our mission is to provide accessible, eco-friendly
                solutions that empower individuals and businesses to reduce
                their environmental impact.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <Leaf className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">
                    Committed to sustainability in every aspect of our business
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <Leaf className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">
                    Transparent supply chain and ethical sourcing practices
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <Leaf className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">
                    Community-focused initiatives and environmental education
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Hear from people who have transformed their lives with our
                  sustainable solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Sarah Johnson
                    </h3>
                    <p className="text-sm text-muted-foreground">Homeowner</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Switching to EcoSphere products has made it so easy to reduce
                  waste in our home. My family loves the quality, and I love
                  knowing we're making a difference."
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Michael Chen
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Business Owner
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Implementing EcoSphere solutions in our office has not only
                  reduced our carbon footprint but also inspired our team to
                  embrace sustainability in their personal lives."
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Emma Rodriguez
                    </h3>
                    <p className="text-sm text-muted-foreground">Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As someone passionate about environmental justice, I
                  appreciate how EcoSphere makes eco-friendly living accessible
                  and affordable for everyone."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-primary/5"
        >
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
                Ready to Make a Change?
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Join thousands of individuals and businesses who are already
                making a positive impact with EcoSphere. Contact us today to
                learn how we can help you on your sustainability journey.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="inline-flex items-center gap-2">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View FAQ
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold text-foreground">
                  Send us a message
                </h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button className="w-full">Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">EcoSphere</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} EcoSphere. All rights reserved.
            Committed to a sustainable future.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
