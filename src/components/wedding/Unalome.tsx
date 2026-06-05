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
        viewBox="0 0 136 40"
        fill="none"
        className="h-full w-full text-[var(--line)]"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* classic unalome: a true coiled spiral that unwinds into crossing
            loops, straightens into a line, and ends in three dots */}
        <path d="M15.7 19.4 L15.8 19.4 15.9 19.4 16.0 19.5 16.2 19.5 16.3 19.6 16.4 19.7 16.5 19.8 16.5 20.0 16.6 20.1 16.6 20.3 16.6 20.5 16.6 20.7 16.5 20.9 16.4 21.1 16.2 21.2 16.0 21.4 15.8 21.5 15.6 21.6 15.3 21.7 15.1 21.7 14.8 21.6 14.5 21.6 14.3 21.4 14.0 21.3 13.8 21.1 13.6 20.8 13.4 20.5 13.3 20.2 13.3 19.9 13.3 19.5 13.3 19.2 13.4 18.8 13.6 18.5 13.8 18.2 14.1 17.9 14.4 17.6 14.7 17.4 15.1 17.3 15.6 17.2 16.0 17.2 16.4 17.2 16.9 17.4 17.3 17.6 17.7 17.8 18.0 18.2 18.3 18.5 18.6 19.0 18.8 19.4 18.9 20.0 18.9 20.5 18.8 21.0 18.7 21.5 18.5 22.0 18.2 22.5 17.8 22.9 17.3 23.3 16.8 23.6 16.3 23.8 15.7 23.9 15.1 24.0 14.5 23.9 13.9 23.7 13.3 23.5 12.7 23.2 12.2 22.7 11.8 22.2 11.5 21.7 11.2 21.0 11.0 20.4 11.0 19.7 11.0 19.0 11.2 18.3 11.4 17.6 11.8 17.0 12.3 16.4 12.8 15.9 13.5 15.5 14.2 15.2 14.9 15.0 15.7 14.9 16.5 14.9 17.2 15.1 18.0 15.4 18.7 15.8 19.4 16.3 19.9 16.9 20.4 17.6 20.8 18.3 21.0 19.1 21.2 20.0 C27 6 38 6 40 20 C41.5 32 51 32 53 20 C54.5 9 63 9 65 20 L101 20" />
        {/* three dots = the spacing toward the central floral line */}
        <circle cx="109" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="116" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="123" cy="20" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}
