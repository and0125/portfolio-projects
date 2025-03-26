import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  iconColor,
  iconBg,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="relative rounded-2xl bg-[#FFFAF0] p-8 shadow-clay-md transition-all hover:shadow-clay-lg hover:-translate-y-1">
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-[#2D3748]">{title}</h3>
      <p className="text-[#4A5568]">{description}</p>
    </div>
  );
}
