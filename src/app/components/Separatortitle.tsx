"use client";

import Image from "next/image";
import FadeInwrapper from "./ui/fadeInwrapper";
import LogoIcon from "./ui/floating/LogoIcon";
import CButton from "./Buttons";
import { motion, number, useInView } from "motion/react";
import { AnimateNumber } from "motion-plus/react";
import { useRef } from "react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
interface SeparatorTitleBlocksProps {
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
  className?: string;
  animateNumber?: boolean;
  animateNumberValue?: number;
}

function SeparatorTitleBlock({
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
  className,
  animateNumber,
  animateNumberValue = 3, // Default value if not provided
}: SeparatorTitleBlocksProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [numberElement, setNumberElement] = useState(0);
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setNumberElement(animateNumberValue); // Change to your desired number
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);
  return (
    <div
      ref={containerRef}
      className={cn(
        "relative container flex min-w-full gap-4 duration-300",
        className
      )}
    >
      <div className="text-brand-primary z-2 flex w-full flex-wrap items-center justify-center py-48">
        <div className="max-w-1/2 flex-col items-center justify-center">
          {!animateNumber && logoSrc && (
            <FadeInwrapper delay={0.4}>
              <div className="flex justify-center text-center opacity-0">
                {logoSrc === "logoIcon" ? (
                  <LogoIcon className="fill-brand-primary h-8 w-8 object-contain" />
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
          )}
          {animateNumber && (
            <FadeInwrapper delay={0.1}>
              <div className="relative z-10 flex justify-center text-center opacity-0">
                <AnimateNumber
                  style={{ originX: 0.5, originY: 1.5, fontWeight: "200" }}
                  transition={{
                    layout: { duration: 0.3 },
                    opacity: { ease: "linear" },
                    y: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
                  }}
                  className="text-brand-primary flex min-w-full items-center justify-center text-center text-9xl leading-none font-normal"
                >
                  {numberElement}
                </AnimateNumber>
              </div>
            </FadeInwrapper>
          )}
          <div className="relative z-10 flex flex-col space-y-4">
            <FadeInwrapper delay={0.6}>
              <div className="relative flex items-center justify-center text-center opacity-0">
                <h3 className="h0 text-center font-normal tracking-tight">
                  {headline}
                </h3>
              </div>
            </FadeInwrapper>
            <FadeInwrapper delay={0.8}>
              <div className="relative mb-4 flex items-center justify-center opacity-0">
                <h4 className="text-center text-2xl">{subheadline}</h4>
              </div>
            </FadeInwrapper>
          </div>
          <FadeInwrapper delay={1}>
            <div className="relative z-10 flex flex-col opacity-0">
              <p className="flex-grow text-center leading-relaxed text-gray-600 dark:text-gray-400">
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
        {animateNumber && logoSrc && (
          <FadeInwrapper delay={0.4}>
            <div className="mt-8 flex justify-center text-center opacity-0">
              {logoSrc === "logoIcon" ? (
                <LogoIcon className="fill-brand-primary h-8 w-8 object-contain" />
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
        )}
      </div>
    </div>
  );
}

export default SeparatorTitleBlock;
