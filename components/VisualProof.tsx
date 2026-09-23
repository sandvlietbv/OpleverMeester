import Image from "next/image";

type VisualProofProps = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  text: string;
  imagePosition?: string;
  imageFirst?: boolean;
  variant?: "balanced" | "editorial" | "compact" | "business" | "process";
  considerations?: string[];
};

const VARIANTS = {
  balanced: { section: "bg-white py-12 md:py-16", grid: "lg:grid-cols-[.92fr_1.08fr]", figure: "shadow-[0_18px_50px_rgba(11,29,51,0.12)]", media: "aspect-[16/10] sm:aspect-[16/9]" },
  editorial: { section: "bg-white py-14 md:py-20", grid: "lg:grid-cols-[1.05fr_.95fr] lg:gap-16", figure: "border border-surface-mid shadow-[0_14px_40px_rgba(11,29,51,0.09)]", media: "aspect-[4/3]" },
  compact: { section: "bg-surface-light py-12 md:py-16", grid: "lg:grid-cols-[1.2fr_.8fr]", figure: "border border-surface-mid shadow-sm lg:max-w-md lg:justify-self-end", media: "aspect-[4/3]" },
  business: { section: "bg-surface-light py-14 md:py-16", grid: "lg:grid-cols-[1.15fr_.85fr]", figure: "border border-navy/10 shadow-[0_12px_32px_rgba(11,29,51,0.08)]", media: "aspect-[16/10]" },
  process: { section: "bg-white py-12 md:py-16", grid: "lg:grid-cols-[1.25fr_.75fr]", figure: "border border-surface-mid shadow-[0_14px_36px_rgba(11,29,51,0.1)]", media: "aspect-[3/2]" },
};

export default function VisualProof({ src, alt, eyebrow, title, text, imagePosition = "center", imageFirst = false, variant = "balanced", considerations = [] }: VisualProofProps) {
  const style = VARIANTS[variant];
  return (
    <section className={style.section} aria-labelledby={`${src.replace(/\W/g, "-")}-title`}>
      <div className={`container-om grid items-center gap-8 lg:gap-12 ${style.grid}`}>
        <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
          <p className="text-sm font-semibold text-orange">{eyebrow}</p>
          <h2 id={`${src.replace(/\W/g, "-")}-title`} className="mt-2 max-w-xl font-display text-3xl font-semibold tracking-tight text-navy">{title}</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">{text}</p>
          {considerations.length > 0 && (
            <div className="mt-6 border-t border-surface-mid pt-5">
              <p className="text-sm font-semibold text-navy">We houden rekening met</p>
              <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm leading-relaxed text-muted sm:grid-cols-2">
                {considerations.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[0.6rem] h-1 w-4 shrink-0 bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <figure className={`relative overflow-hidden rounded-om bg-surface-light ${style.figure} ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
          <div className={`relative ${style.media}`}>
            <Image src={src} alt={alt} fill sizes={variant === "compact" ? "(min-width: 1024px) 34vw, 100vw" : "(min-width: 1024px) 54vw, 100vw"} className="object-cover" style={{ objectPosition: imagePosition }} />
          </div>
        </figure>
      </div>
    </section>
  );
}
