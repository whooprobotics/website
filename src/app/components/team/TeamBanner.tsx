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
        className={`w-full h-64 md:h-80 flex items-center justify-center rounded-xl ${
          inverted ? "bg-white/15" : "bg-primary/15"
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
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
