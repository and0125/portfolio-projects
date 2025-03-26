"use client";

import {
  Sparkles,
  Smartphone,
  LayoutTemplate,
  Download,
  Users,
  BarChart,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  color,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (iconName: string) => {
    const icons: Record<string, LucideIcon> = {
      Sparkles,
      Smartphone,
      LayoutTemplate,
      Download,
      Users,
      BarChart,
    };

    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
  };

  return (
    <div
      className={cn(
        "bg-slate-900 p-6 rounded-xl border border-slate-800 transition-all duration-300",
        isHovered
          ? "transform -translate-y-2 shadow-lg shadow-slate-900/50"
          : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("p-3 rounded-lg w-fit mb-4", color)}>
        {getIcon(icon)}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>

      <div
        className={cn(
          "mt-4 h-1 rounded-full transition-all duration-500 ease-out",
          color,
          isHovered ? "w-full" : "w-12"
        )}
      ></div>
    </div>
  );
}
