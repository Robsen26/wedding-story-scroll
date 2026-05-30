interface FloralSprigProps {
  className?: string;
}

/** Single vertical floral stem used as an editorial ornament at section starts. */
export function FloralSprig({ className }: FloralSprigProps) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 60 140"
        fill="none"
        className="mx-auto h-28 w-12 text-[var(--line)]"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <path d="M30 140 C30 110 30 80 30 40" />
        {/* leaves */}
        <path d="M30 118 C18 114 12 104 12 92 C24 96 30 106 30 118 Z" opacity="0.85" />
        <path d="M30 100 C42 96 48 86 48 74 C36 78 30 88 30 100 Z" opacity="0.85" />
        <path d="M30 80 C20 77 15 69 15 60 C25 63 30 71 30 80 Z" opacity="0.85" />
        {/* top bloom */}
        <path d="M30 40 C25 30 25 22 30 14 C35 22 35 30 30 40 Z" />
        <path d="M30 40 C20 38 14 31 13 22 C23 24 29 31 30 40 Z" opacity="0.85" />
        <path d="M30 40 C40 38 46 31 47 22 C37 24 31 31 30 40 Z" opacity="0.85" />
        <circle cx="30" cy="40" r="2" fill="currentColor" stroke="none" />
        <circle cx="30" cy="10" r="1.6" fill="currentColor" stroke="none" opacity="0.7" />
      </svg>
    </div>
  );
}