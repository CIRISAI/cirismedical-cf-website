"use client";

import Image from "next/image";
import FadeInwrapper from "./ui/fadeInwrapper";
import LogoIcon from "./ui/floating/LogoIcon";
import CButton from "./Buttons";
interface FlexSectionProps {
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
}

function FlexSection({
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
}: FlexSectionProps) {
  return (
    <div className="my-24 flex min-w-full flex-col gap-4 px-8 duration-300 md:my-0 md:flex-row md:px-12">
      <div className="text-brand-primary border-brand-primary flex pr-8 md:border-r md:py-56">
        <FadeInwrapper delay={0.4}>
          <div className="relative h-16 w-16 opacity-0">
            {logoSrc === "logoIcon" ? (
              <LogoIcon className="fill-brand-primary h-16 w-16 object-contain" />
            ) : (
              <Image
                src={logoSrc}
                alt={logoAlt}
                fill
                className="object-contain"
              />
            )}{" "}
          </div>
        </FadeInwrapper>
      </div>
      <div className="flex flex-col space-y-4 md:w-1/3 md:py-56">
        <FadeInwrapper delay={0.6}>
          {" "}
          <div className="relative opacity-0">
            <h3 className="h0 text-brand-primary">{headline}</h3>
          </div>{" "}
        </FadeInwrapper>
        <FadeInwrapper delay={0.8}>
          {" "}
          <div className="opacity-0">
            {" "}
            <h4 className="h4 text-brand-primary">{subheadline}</h4>
          </div>
        </FadeInwrapper>
      </div>
      <FadeInwrapper delay={1}>
        <div className="flex flex-col space-y-4 py-8 opacity-0 md:py-56">
          <p className="flex-grow text-sm leading-relaxed text-gray-600 md:max-w-2/3 dark:text-gray-300">
            {copyText}
          </p>
          {buttonText && buttonHref && (
            <CButton
              className="w-fit"
              text={buttonText}
              href={buttonHref}
              variant="secondary"
            />
          )}
        </div>
      </FadeInwrapper>
    </div>
  );
}

export default FlexSection;
