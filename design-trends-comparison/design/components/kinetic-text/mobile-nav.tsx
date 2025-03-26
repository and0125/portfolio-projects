"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-white"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950 p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="font-bold">K</span>
              </div>
              <span className="font-bold text-xl">Kinetic</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="flex flex-col gap-6 mt-12">
            <Link
              href="#features"
              className="text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-auto mb-8">
            <Button
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
