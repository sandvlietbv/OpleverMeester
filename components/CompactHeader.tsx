import BrandLogo from "@/components/BrandLogo";

type Props = {
  ctaLabel?: string;
  ctaHref?: string;
  showPhone?: boolean;
};

export default function CompactHeader({ ctaLabel = "Start intake", ctaHref = "#intake", showPhone = false }: Props) {
  return (
    <header className="border-b border-surface-mid/80 bg-[#fffdf9]">
      <div className="container-om flex min-h-20 items-center justify-between gap-4 py-3">
        <BrandLogo tagline={false} />
        <div className="flex items-center gap-3">
          {showPhone && (
            <a href="tel:+31645316851" className="hidden text-sm font-semibold text-navy sm:inline">
              06 45 31 68 51
            </a>
          )}
          <a href={ctaHref} className="rounded-om bg-orange px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(169,104,0,0.16)] transition hover:bg-orange-light hover:text-navy">
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
