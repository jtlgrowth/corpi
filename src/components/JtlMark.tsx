// The JTL Growth mark, redrawn from the construction (three constant-width
// strokes, two fillets). Inherits currentColor, so `text-ink` makes it black
// on light skins and light on dark ones; opacity comes from the caller.
export function JtlMark({ className = "", title = "JTL Growth" }: { className?: string; title?: string }) {
  return (
    <svg viewBox="290 640 1312 680" role="img" aria-label={title} className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="141.5" strokeLinecap="butt">
        <path d="M624 774H1267" />
        <path d="M846 706V1122A134.5 134.5 0 0 1 711.5 1256.5H494A134.5 134.5 0 0 1 359.5 1122" />
        <path d="M1195 706V1122A134.5 134.5 0 0 0 1329.5 1256.5H1602" />
      </g>
    </svg>
  );
}
