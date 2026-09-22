import Image from "next/image";

type VisualProofProps = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  text: string;
  imagePosition?: string;
  imageFirst?: boolean;
};

export default function VisualProof({ src, alt, eyebrow, title, text, imagePosition = "center", imageFirst = false }: VisualProofProps) {
  return (
    <section className="bg-white py-12 md:py-16" aria-labelledby={`${src.replace(/\W/g, "-")}-title`}>
      <div className="container-om grid items-center gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-12">
        <figure className={`relative overflow-hidden rounded-om bg-surface-light shadow-[0_18px_50px_rgba(11,29,51,0.12)] ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative aspect-[16/10] sm:aspect-[16/9]">
            <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
          </div>
        </figure>
        <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
          <p className="text-sm font-semibold text-orange">{eyebrow}</p>
          <h2 id={`${src.replace(/\W/g, "-")}-title`} className="mt-2 max-w-xl font-display text-3xl font-semibold tracking-tight text-navy">{title}</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">{text}</p>
        </div>
      </div>
    </section>
  );
}
