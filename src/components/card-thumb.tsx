import Image from "next/image";

interface LiveClassProps {
  title: string
  imageUrl: string
  subtitle?: string
  link?: string
}

export default function CardThumb({
  subtitle,
  title,
  imageUrl,
  link = "#"
}: LiveClassProps) {
  return (
    <a href={link} target="_blank" className="relative w-full max-w-md rounded-lg overflow-hidden bg-gray-900 shadow-md">
      <div className="relative w-full h-40">
        <Image
          src={imageUrl}
          alt={title || "Thumbnail"}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
        {subtitle ? <p className="text-white text-sm">{subtitle}</p> : null}
        <h3 className="text-white font-semibold">
          {title}
        </h3>
      </div>
    </a>
  );
}
