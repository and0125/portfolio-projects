import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Sparkles, Rocket } from "lucide-react";

export default function AntiDesignLanding() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#000000]">
      {/* Unconventional Header */}
      <header className="relative pt-8 pb-4 px-4">
        <div className="flex justify-between items-start">
          <h1 className="text-[#FF00FF] font-bold text-4xl transform -rotate-3 ml-6">
            ANTI<span className="text-[#00FFFF]">DESIGN</span>
          </h1>
          <nav className="transform rotate-2 mr-10">
            <ul className="flex gap-x-6">
              <li>
                <Link
                  href="#"
                  className="text-[#FFFF00] hover:text-[#00FF00] text-lg font-bold"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#00FFFF] hover:text-[#FF00FF] text-lg font-bold transform -rotate-3 inline-block"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#00FF00] hover:text-[#FFFF00] text-lg font-bold transform rotate-2 inline-block"
                >
                  WORK
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF00FF] rounded-full opacity-50 blur-xl"></div>
        <div className="absolute bottom-0 left-20 w-16 h-16 bg-[#00FFFF] rounded-full opacity-60 blur-md"></div>
      </header>

      {/* Chaotic Hero Section */}
      <section className="relative py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 md:col-start-2 transform -rotate-1">
              <h2 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                <span className="text-[#FFFF00] block transform -translate-x-4">
                  BREAK
                </span>
                <span className="text-[#00FFFF] block transform translate-x-8">
                  THE
                </span>
                <span className="text-[#FF00FF] block transform -translate-x-2">
                  RULES
                </span>
              </h2>
              <p className="text-white text-xl md:text-2xl max-w-2xl ml-12 mb-8 leading-relaxed">
                Embrace chaos. Reject convention. Create something
                <span className="text-[#00FF00] font-bold"> unforgettable</span>
                .
              </p>
              <div className="flex flex-wrap gap-4 ml-4 mt-12">
                <button className="bg-[#FF00FF] hover:bg-[#FFFF00] text-black font-bold py-3 px-8 transform rotate-1 border-4 border-[#00FFFF]">
                  GET STARTED
                </button>
                <button className="bg-transparent hover:bg-[#00FFFF] text-[#00FF00] font-bold py-3 px-8 border-4 border-[#00FF00] transform -rotate-2">
                  LEARN MORE
                </button>
              </div>
            </div>
            <div className="md:col-span-5 relative h-80 md:h-auto">
              <div className="absolute top-10 right-10 w-48 h-48 bg-[#FFFF00] rounded-lg transform rotate-12"></div>
              <div className="absolute top-20 right-20 w-64 h-64 border-8 border-[#00FFFF] rounded-full transform -rotate-6"></div>
              <div className="absolute top-40 right-40 w-32 h-32 bg-[#FF00FF] transform rotate-45"></div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Abstract design"
                width={400}
                height={400}
                className="absolute top-10 right-10 transform -rotate-3 z-10 mix-blend-difference"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#00FF00] opacity-30 blur-xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[#FFFF00] text-5xl font-bold mb-16 transform -rotate-2 ml-8">
            CORE <span className="text-[#00FFFF]">FEATURES</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-[#000000] to-[#222222] p-8 border-l-8 border-[#FF00FF] transform rotate-1 hover:-rotate-1 transition-transform">
              <div className="flex justify-between mb-4">
                <Zap size={40} className="text-[#FFFF00]" />
                <span className="text-[#00FFFF] text-5xl font-bold">01</span>
              </div>
              <h4 className="text-[#FF00FF] text-2xl font-bold mb-4">
                BOLD DESIGN
              </h4>
              <p className="text-white">
                Break conventional design patterns and create memorable
                experiences that stand out from the crowd.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-[#000000] to-[#222222] p-8 border-t-8 border-[#00FFFF] transform -rotate-1 hover:rotate-1 transition-transform mt-12">
              <div className="flex justify-between mb-4">
                <Sparkles size={40} className="text-[#00FF00]" />
                <span className="text-[#FF00FF] text-5xl font-bold">02</span>
              </div>
              <h4 className="text-[#FFFF00] text-2xl font-bold mb-4">
                CHAOTIC LAYOUTS
              </h4>
              <p className="text-white">
                Embrace asymmetry and unexpected positioning to create dynamic
                visual hierarchies.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-[#000000] to-[#222222] p-8 border-r-8 border-[#00FF00] transform rotate-2 hover:-rotate-2 transition-transform mt-6">
              <div className="flex justify-between mb-4">
                <Rocket size={40} className="text-[#FF00FF]" />
                <span className="text-[#FFFF00] text-5xl font-bold">03</span>
              </div>
              <h4 className="text-[#00FFFF] text-2xl font-bold mb-4">
                VIBRANT COLORS
              </h4>
              <p className="text-white">
                Use clashing, vibrant color combinations that demand attention
                and create visual tension.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-20 h-20 bg-[#FF00FF] opacity-40 blur-lg"></div>
        <div className="absolute bottom-1/3 right-0 w-40 h-40 bg-[#00FFFF] opacity-30 blur-xl"></div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-6xl font-black mb-8">
            <span className="text-[#00FF00] block transform -rotate-2">
              READY TO
            </span>
            <span className="text-[#FFFF00] block transform rotate-1">
              BREAK THE
            </span>
            <span className="text-[#FF00FF] block">INTERNET?</span>
          </h3>
          <p className="text-white text-xl mb-12 max-w-2xl mx-auto">
            Join the anti-design revolution and create websites that people
            can't stop talking about.
          </p>
          <button className="bg-[#00FFFF] hover:bg-[#FF00FF] text-black font-bold py-4 px-12 text-xl transform -rotate-1 border-4 border-[#FFFF00] inline-flex items-center">
            GET STARTED NOW
            <ArrowRight className="ml-2" />
          </button>
        </div>

        {/* Decorative grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 z-[-1]">
          <div className="col-start-1 row-start-2 w-full h-full border-2 border-[#FF00FF] opacity-20"></div>
          <div className="col-start-3 row-start-4 w-full h-full border-2 border-[#00FFFF] opacity-20"></div>
          <div className="col-start-5 row-start-1 w-full h-full border-2 border-[#FFFF00] opacity-20"></div>
          <div className="col-start-2 row-start-6 w-full h-full border-2 border-[#00FF00] opacity-20"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-4 border-[#FF00FF]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <h4 className="text-[#00FFFF] font-bold text-2xl transform -rotate-2 mb-4">
              ANTI<span className="text-[#FF00FF]">DESIGN</span>
            </h4>
            <p className="text-white max-w-xs">
              Breaking design rules since 2023.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-[#FFFF00] font-bold mb-4 transform rotate-1">
                EXPLORE
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white hover:text-[#00FF00]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-[#00FF00]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-[#00FF00]">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-[#00FF00]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-[#FF00FF] font-bold mb-4 transform -rotate-1">
                FOLLOW
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white hover:text-[#FFFF00]">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-[#FFFF00]">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-[#FFFF00]">
                    Dribbble
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-[#FFFF00]">
                    Behance
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h5 className="text-[#00FFFF] font-bold mb-4">NEWSLETTER</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#111111] text-white px-4 py-2 w-full border-2 border-[#00FF00] focus:border-[#FFFF00] outline-none"
                />
                <button className="bg-[#00FF00] text-black px-4">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#333333] text-[#666666] text-sm flex justify-between">
          <p>© 2023 AntiDesign. All rights reserved.</p>
          <p>Made with chaos</p>
        </div>
      </footer>
    </div>
  );
}
