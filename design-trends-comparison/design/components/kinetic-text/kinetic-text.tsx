"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface KineticTextProps {
  text: string;
  className?: string;
}

export default function KineticText({ text, className }: KineticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const letters = container.querySelectorAll(".letter");

    const animateLetters = () => {
      letters.forEach((letter, index) => {
        const htmlLetter = letter as HTMLElement;

        // Random animation delay for each letter
        const delay = Math.random() * 0.5;
        htmlLetter.style.animationDelay = `${delay}s`;

        // Apply animation
        htmlLetter.classList.add("animate");

        // Remove animation class after animation completes to reset
        setTimeout(() => {
          htmlLetter.classList.remove("animate");
        }, 2000 + delay * 1000);
      });
    };

    // Initial animation
    setTimeout(animateLetters, 500);

    // Set interval for repeated animations
    const interval = setInterval(animateLetters, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative inline-block", className)}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={cn(
            "letter inline-block transition-all duration-500 relative",
            char === " " ? "mr-2" : ""
          )}
          style={{
            transformOrigin: "center bottom",
          }}
        >
          {char}
          <style jsx>{`
            .letter.animate {
              animation: bounce 1s ease forwards;
            }

            @keyframes bounce {
              0%,
              20%,
              50%,
              80%,
              100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-20px) rotate(var(--rotation, 5deg));
              }
              60% {
                transform: translateY(-10px) rotate(var(--rotation, -3deg));
              }
            }

            .letter:nth-child(odd) {
              --rotation: 5deg;
            }

            .letter:nth-child(even) {
              --rotation: -5deg;
            }
          `}</style>
        </span>
      ))}
    </div>
  );
}
