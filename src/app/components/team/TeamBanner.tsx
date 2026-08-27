import Image from "next/image";

interface TeamBannerProps {
  src?: string;
  alt: string;
  label?: string;
  inverted?: boolean;
}

export default function TeamBanner({ src, alt, label, inverted = false }: TeamBannerProps) {
  if (!src) {
    return (
      <div
        className={`w-full h-64 md:h-80 flex items-center justify-center rounded-2xl bg-gradient-to-br ${
          inverted
            ? "from-white/25 to-white/5 ring-1 ring-white/20"
            : "from-primary/15 to-primary/5 ring-1 ring-primary/15 shadow-soft"
        }`}
      >
        <p
          className={`font-primary text-2xl md:text-4xl tracking-wide text-center px-4 ${
            inverted ? "text-white" : "text-primary"
          }`}
        >
          {label ?? alt}
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5" />
    </div>
  );
}
