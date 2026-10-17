import Link from "next/link";

type Props = {
  href?: string;
  compact?: boolean;
  tagline?: boolean;
  className?: string;
};

export default function BrandLogo({ href = "/", compact = false, tagline = true, className = "" }: Props) {
  const mark = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 140 72"
        aria-hidden="true"
        className={compact ? "h-9 w-[70px] shrink-0" : "h-11 w-[86px] shrink-0 md:h-12 md:w-[94px]"}
      >
        <defs>
          <linearGradient id="om-key-gold" x1="0" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#f1b52b" />
            <stop offset="42%" stopColor="#d38d08" />
            <stop offset="64%" stopColor="#8f8a84" />
            <stop offset="100%" stopColor="#666462" />
          </linearGradient>
          <linearGradient id="om-key-tooth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6c6a68" />
            <stop offset="72%" stopColor="#6c6a68" />
            <stop offset="100%" stopColor="#e3a016" />
          </linearGradient>
        </defs>
        <path
          d="M45 10a27 27 0 1 0 0 54c13.8 0 23.2-6.3 30.4-17.4l6.8-10.4H122c5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8H74.9c-3.4 0-6.5 1.7-8.3 4.6l-7.7 11.9C54.8 39.6 50.8 43 45 43a11.6 11.6 0 1 1 10.3-16.9h17.2A27 27 0 0 0 45 10Z"
          fill="url(#om-key-gold)"
        />
        <circle cx="45" cy="37" r="6.4" fill="#d99408" />
        <path d="M98 36h11v18a5.5 5.5 0 0 1-11 0V36Z" fill="#6f6c69" />
        <path d="M115 36h10v20a5 5 0 0 1-10 0V36Z" fill="url(#om-key-tooth)" />
      </svg>
      <span className="leading-none">
        <span className={`block font-brand text-[#171717] ${compact ? "text-[1.42rem]" : "text-[1.62rem] md:text-[1.82rem]"} tracking-[-0.035em]`}>
          OpleverMeester
        </span>
        {tagline && !compact && (
          <span className="mt-1 block text-[0.66rem] font-medium tracking-[0.01em] text-[#5f5a54] md:text-[0.72rem]">
            Wij regelen. Jij gaat verder.
          </span>
        )}
      </span>
    </span>
  );

  return href ? <Link href={href} aria-label="OpleverMeester — home">{mark}</Link> : mark;
}
