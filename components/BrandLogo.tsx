import Link from "next/link";

type Props = {
  href?: string;
  compact?: boolean;
  tagline?: boolean;
  className?: string;
};

function KeyMark({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      viewBox="0 0 140 72"
      aria-hidden="true"
      className={compact ? "h-9 w-[70px] shrink-0" : "h-11 w-[86px] shrink-0 sm:h-12 sm:w-[94px]"}
    >
      <defs>
        <linearGradient id="om-brand-gold" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#f2bc35" />
          <stop offset="42%" stopColor="#d4940f" />
          <stop offset="64%" stopColor="#9b9791" />
          <stop offset="100%" stopColor="#676562" />
        </linearGradient>
        <linearGradient id="om-brand-tooth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#716e6b" />
          <stop offset="72%" stopColor="#716e6b" />
          <stop offset="100%" stopColor="#dfa31e" />
        </linearGradient>
      </defs>
      <path
        d="M45 10a27 27 0 1 0 0 54c13.8 0 23.2-6.3 30.4-17.4l6.8-10.4H122c5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8H74.9c-3.4 0-6.5 1.7-8.3 4.6l-7.7 11.9C54.8 39.6 50.8 43 45 43a11.6 11.6 0 1 1 10.3-16.9h17.2A27 27 0 0 0 45 10Z"
        fill="url(#om-brand-gold)"
      />
      <circle cx="45" cy="37" r="6.4" fill="#d79712" />
      <path d="M98 36h11v18a5.5 5.5 0 0 1-11 0V36Z" fill="#706d6a" />
      <path d="M115 36h10v20a5 5 0 0 1-10 0V36Z" fill="url(#om-brand-tooth)" />
    </svg>
  );
}

export default function BrandLogo({ href = "/", compact = false, tagline = true, className = "" }: Props) {
  const logo = (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <KeyMark compact={compact} />
      <span className="min-w-0 leading-none">
        <span className={`block whitespace-nowrap font-brand font-normal tracking-[-0.055em] text-[#151515] ${compact ? "text-[1.45rem] sm:text-[1.58rem]" : "text-[1.7rem] sm:text-[1.95rem]"}`}>
          OpleverMeester
        </span>
        {tagline && !compact && (
          <span className="mt-1.5 block whitespace-nowrap text-[0.68rem] font-medium tracking-[0.01em] text-[#5d5954] sm:text-[0.75rem]">
            Wij regelen. Jij gaat verder.
          </span>
        )}
      </span>
    </span>
  );

  return href ? (
    <Link href={href} aria-label="OpleverMeester — home" className="inline-flex shrink-0">
      {logo}
    </Link>
  ) : logo;
}
