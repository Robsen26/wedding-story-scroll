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
        {/* spiral that unwinds, then winds through symmetrical loops into a line */}
        <path d="M6 20 C6 12.5 17 12.5 17 20 C17 26.5 9 26.5 10.5 20 C11.5 15 15 16.5 19 20 C25 8 35 8 37 20 C38.5 30.5 47 30.5 49 20 C50.5 10 59 10 61 20 C62 26.5 68 26.5 73 20 L96 20" />
        {/* three dots = the spacing toward the central floral line */}
        <circle cx="103" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="110" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="117" cy="20" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}
