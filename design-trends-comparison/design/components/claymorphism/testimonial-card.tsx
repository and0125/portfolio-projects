interface TestimonialCardProps {
  avatarColor: string;
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({
  avatarColor,
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl bg-[#FFFAF0] p-8 shadow-clay-md">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`h-12 w-12 rounded-full ${avatarColor} shadow-clay-xs`}
        ></div>
        <div>
          <h4 className="text-lg font-semibold text-[#2D3748]">{name}</h4>
          <p className="text-sm text-[#4A5568]">{role}</p>
        </div>
      </div>
      <p className="text-[#4A5568]">"{quote}"</p>
      <div className="mt-6 flex text-[#FF8E6E]">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    </div>
  );
}
