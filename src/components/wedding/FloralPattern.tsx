interface FloralPatternProps {
  className?: string;
}

/** Subtle, elegant floral line-art motif used as a faint backdrop behind text. */
export function FloralPattern({ className }: FloralPatternProps) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="h-full w-full text-[var(--clay)]"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* central stem */}
        <path d="M200 40 C200 140 200 260 200 360" opacity="0.6" />
        {/* leaves along the stem */}
        <path d="M200 90 C170 80 150 95 140 120 C170 122 192 112 200 90 Z" opacity="0.55" />
        <path d="M200 130 C230 120 250 135 260 160 C230 162 208 152 200 130 Z" opacity="0.55" />
        <path d="M200 190 C168 182 146 198 136 226 C168 228 192 214 200 190 Z" opacity="0.5" />
        <path d="M200 230 C232 222 254 238 264 266 C232 268 208 254 200 230 Z" opacity="0.5" />
        {/* blossoms */}
        <g opacity="0.6">
          <circle cx="200" cy="48" r="6" />
          <path d="M200 48 C188 36 188 22 200 12 C212 22 212 36 200 48 Z" />
          <path d="M200 48 C214 40 226 42 232 54 C220 60 208 58 200 48 Z" />
          <path d="M200 48 C186 40 174 42 168 54 C180 60 192 58 200 48 Z" />
        </g>
        {/* side sprigs */}
        <path d="M80 200 C120 200 150 210 200 230" opacity="0.35" />
        <path d="M320 200 C280 200 250 210 200 230" opacity="0.35" />
        <path d="M110 195 C108 185 102 182 96 182" opacity="0.35" />
        <path d="M290 195 C292 185 298 182 304 182" opacity="0.35" />
      </svg>
    </div>
  );
}
