"use client";
import Image from "next/image";
import FadeInwrapper from "./ui/fadeInwrapper";
import LogoIcon from "./ui/floating/LogoIcon";

interface CardProps {
  headline: string;
  subheadline?: string;
  copyText: string;
    imageUrl?: string;
  logoSrc?: string;
  logoAlt?: string;
  delay?: number;
}

function CardImage({ headline, copyText, subheadline,imageUrl, logoSrc, logoAlt, delay = 0 }: CardProps) {
  return (
    <FadeInwrapper delay={delay}>
      <div className="bg-ciris-vlback/40 flex h-full flex-col p-8 transition-shadow duration-300 md:p-20 dark:bg-gray-800">
 
        <><Image
          src={imageUrl}
          alt={headline}
          width={500}
          height={300}
          className="object-cover"
        /></>
        <h3 className="text-brand-primary text-left text-2xl mt-4">{headline}</h3>
        <h4 className="text-brand-primary text-left text-sm mb-4">{subheadline}</h4>
        <p className="flex-grow text-left text-xs leading-relaxed text-gray-600 dark:text-gray-100">
          {copyText}
        </p>
      </div>
    </FadeInwrapper>
  );
}

export default CardImage;
