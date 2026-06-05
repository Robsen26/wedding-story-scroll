interface FloralDividerProps {
  className?: string;
  /** Colour that fills the central raised peak (the next page's background). */
  peakFill?: string;
}

/** Delicate symmetrical floral line-art separator placed between sections. */
export function FloralDivider({ className, peakFill }: FloralDividerProps) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 320 80"
        fill="none"
        className="mx-auto h-16 w-[min(280px,80%)] text-[var(--line)]"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        {/* next page colour rising into the central peak of the divider */}
        {peakFill && (
          <path
            d="M120 40 C140 40 150 28 160 24 C170 28 180 40 200 40 Z"
            fill={peakFill}
            stroke="none"
          />
        )}
        <path d="M20 40 H120" opacity="0.5" />
        <path d="M200 40 H300" opacity="0.5" />
        {/* left sprig */}
        <path d="M120 40 C140 40 150 28 160 24" />
        <path d="M134 39 C132 31 126 28 120 28" opacity="0.8" />
        <path d="M146 36 C145 28 139 24 132 24" opacity="0.8" />
        {/* right sprig */}
        <path d="M200 40 C180 40 170 28 160 24" />
        <path d="M186 39 C188 31 194 28 200 28" opacity="0.8" />
        <path d="M174 36 C175 28 181 24 188 24" opacity="0.8" />
        {/* center bloom */}
        <path d="M160 24 C156 16 156 10 160 4 C164 10 164 16 160 24 Z" />
        <path d="M160 24 C152 22 147 17 146 10 C154 12 159 17 160 24 Z" opacity="0.85" />
        <path d="M160 24 C168 22 173 17 174 10 C166 12 161 17 160 24 Z" opacity="0.85" />
        <circle cx="160" cy="24" r="2" fill="currentColor" stroke="none" />
        {/* end dots */}
        <circle cx="20" cy="40" r="1.6" fill="currentColor" stroke="none" opacity="0.6" />
        <circle cx="300" cy="40" r="1.6" fill="currentColor" stroke="none" opacity="0.6" />
      </svg>
    </div>
  );
}