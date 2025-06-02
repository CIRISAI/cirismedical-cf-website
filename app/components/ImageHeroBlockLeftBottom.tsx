"use client";

import Image from "next/image";
import FadeInwrapper from "./ui/fadeInwrapper";
import LogoIcon from "./ui/floating/LogoIcon";
import CButton from "./Buttons";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ImageHeroBlocksProps {
  headline: string;
  subheadline?: string;
  copyText?: string;
  logoSrc: string;
  logoAlt: string;
  delay?: number;
  buttonText?: string;
  buttonHref?: string;
  linkText?: string;
  linkHref?: string;
  backgroundImageSrc?: string;
}

function ImageHeroBlockLeftBottom({
  headline,
  subheadline,
  copyText,
  logoSrc,
  logoAlt,
  buttonText,
  buttonHref,
  linkText,
  linkHref,
  delay = 1,
  backgroundImageSrc,
}: ImageHeroBlocksProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <div ref={containerRef} className="relative container min-w-full md:flex">
      {backgroundImageSrc && (
        <motion.div
          className="min-w-full"
          initial={{ opacity: 0, x: 22 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 22,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <Image
            src={backgroundImageSrc}
            alt="Background"
            className="h-full w-full min-w-full flex-1/12 border"
            width={1121}
            height={12}
          />
        </motion.div>
      )}

      <div className="z-2 mx-auto flex max-w-96 flex-col items-start justify-end rounded-lg bg-white p-4 shadow-lg md:absolute md:bottom-8 md:left-8 md:max-w-1/2 dark:bg-gray-800">
        <div className="max-w-96 flex-col items-center justify-end text-center">
          <div className="relative z-10 flex flex-col">
            <FadeInwrapper delay={0.6}>
              <div className="relative flex items-start justify-start opacity-0">
                <h3 className="text-brand-primary text-lg">{headline}</h3>
              </div>
            </FadeInwrapper>
            <FadeInwrapper delay={0.8}>
              <div className="relative flex items-start justify-start text-start opacity-0">
                <h5 className="text-brand-primary text-sm">{subheadline}</h5>
              </div>
            </FadeInwrapper>
          </div>
          <FadeInwrapper delay={1}>
            <div className="relative z-10 flex flex-col justify-start space-y-4 text-left opacity-0">
              <p className="flex-grow text-xs leading-snug text-gray-600 dark:text-gray-400">
                {copyText}
              </p>
              {buttonText && buttonHref && (
                <div>
                  <CButton
                    className="w-fit"
                    text={buttonText}
                    href={buttonHref}
                    variant="secondary"
                  />
                </div>
              )}
            </div>
          </FadeInwrapper>
        </div>
      </div>
    </div>
  );
}

export default ImageHeroBlockLeftBottom;
