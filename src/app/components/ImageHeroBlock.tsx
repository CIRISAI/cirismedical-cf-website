"use client";

import Image from "next/image";
import FadeInwrapper from "./ui/fadeInwrapper";
import LogoIcon from "./ui/floating/LogoIcon";
import CButton from "./Buttons";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

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
  opacity?: number;

  className?: ClassValue;
  videoSrc?: string;
  video?: boolean;
  backgroundImageSrc?: string;
}

function ImageHeroBlock({
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
  opacity = 1,
  videoSrc,
  className,
  backgroundImageSrc,
  video = false,
}: ImageHeroBlocksProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative container flex min-h-[50vh] min-w-full gap-4 px-12 duration-300",
        className
      )}
    >
      {(backgroundImageSrc || videoSrc) && (
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden rounded-sm bg-black"
          initial={{ opacity: 0, y: 44, scale: 0.9 }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.9,
            y: isInView ? 0 : 44,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              src={videoSrc}
              className="h-full w-full object-cover"
              style={{ opacity: opacity }}
            />
          ) : (
            <Image
              src={backgroundImageSrc ?? ""}
              alt="Background"
              fill
              className="h-full w-full object-cover"
              style={{ objectFit: "cover", opacity: opacity }}
            />
          )}
        </motion.div>
      )}

      <div className="z-2 mx-auto flex flex-col justify-center md:max-w-1/2">
        <div className="flex-col items-center justify-center text-center md:max-w-96">
          <FadeInwrapper delay={0.4}>
            <div className="relative z-10 flex justify-center text-center opacity-0">
              {logoSrc === "logoIcon" ? (
                <LogoIcon className="h-16 w-16 object-contain" />
              ) : (
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </FadeInwrapper>

          <div className="relative z-10 flex flex-col space-y-8">
            <FadeInwrapper delay={0.6}>
              <div className="relative flex items-center justify-center opacity-0">
                <h3 className="h0">{headline}</h3>
              </div>
            </FadeInwrapper>
            {subheadline && (
              <FadeInwrapper delay={0.8}>
                <div className="relative flex items-center justify-center opacity-0">
                  <h4 className="h4">{subheadline}</h4>
                </div>
              </FadeInwrapper>
            )}
          </div>
          <FadeInwrapper delay={1}>
            <div className="relative flex flex-col justify-center space-y-8 opacity-0">
              <p className="flex-grow leading-relaxed">{copyText}</p>
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
        </div>{" "}
      </div>
    </div>
  );
}

export default ImageHeroBlock;
