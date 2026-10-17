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
        src="/brand/oplevermeester-logo.webp"
        alt="OpleverMeester — Wij regelen. Jij gaat verder."
        width={520}
        height={221}
        priority
        className={compact ? "h-auto w-[150px] sm:w-[170px]" : "h-auto w-[155px] sm:w-[180px]"}
      />
    </span>
  );

  return href ? <Link href={href} aria-label="OpleverMeester — home">{logo}</Link> : logo;
}
