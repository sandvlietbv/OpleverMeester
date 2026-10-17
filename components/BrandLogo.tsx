import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  compact?: boolean;
  tagline?: boolean;
  className?: string;
};

export default function BrandLogo({ href = "/", compact = false, className = "" }: Props) {
  const logo = (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/brand/oplevermeester-logo.svg"
        alt="OpleverMeester — Wij regelen. Jij gaat verder."
        width={1000}
        height={425}
        priority
        className={compact
          ? "h-auto w-[138px] sm:w-[154px]"
          : "h-auto w-[176px] sm:w-[205px] lg:w-[220px]"
        }
      />
    </span>
  );

  return href ? (
    <Link href={href} aria-label="OpleverMeester — home" className="inline-flex shrink-0">
      {logo}
    </Link>
  ) : logo;
}
