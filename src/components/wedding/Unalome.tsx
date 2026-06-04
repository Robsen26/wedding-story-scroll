interface UnalomeProps {
  className?: string;
  flip?: boolean;
}

/**
 * Horizontal Unalome motif — a spiral that unwinds into a straight line ending
 * in three dots. The three dots mark the spacing toward the central divider.
 * Use `flip` to mirror it for the opposite side.
 */
export function Unalome({ className, flip }: UnalomeProps) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 124 40"
        fill="none"
        className="h-full w-full text-[var(--line)]"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* spiral that unwinds into a line */}
        <path d="M7 20 C7 11 21 11 21 20 C21 28 10 28 11.5 20 C13 14 18 16 23 20 L96 20" />
        {/* three dots = the spacing toward the central floral line */}
        <circle cx="103" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="110" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="117" cy="20" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}
