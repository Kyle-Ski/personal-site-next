interface MountainDividerProps {
  /** Optional override for the visual width. Default scales with viewport. */
  className?: string
}

/**
 * Small decorative mountain ridge divider used between sections.
 * Centered horizontally, scales down on mobile, theme-aware via accent color.
 */
export default function MountainDivider({ className = '' }: MountainDividerProps) {
  return (
    <div
      className={`flex items-center justify-center my-2 sm:my-4 ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 sm:gap-4 opacity-60">
        <span
          className="h-px w-10 sm:w-16"
          style={{ backgroundColor: 'var(--color-text-accent)' }}
        />
        <svg
          width="36"
          height="14"
          viewBox="0 0 80 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[var(--color-text-accent)] sm:w-[60px] sm:h-[20px]"
        >
          <path
            d="M2 22 L18 8 L28 14 L40 2 L52 14 L62 8 L78 22 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span
          className="h-px w-10 sm:w-16"
          style={{ backgroundColor: 'var(--color-text-accent)' }}
        />
      </div>
    </div>
  )
}
