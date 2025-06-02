"use client";

import Image from "next/image";
import FadeInwrapper from "./ui/fadeInwrapper";
import LogoIcon from "./ui/floating/LogoIcon";
import RadixAccordion from "./ui/Accordion";
import CButton from "./Buttons";
interface AccordionSectionProps {
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

function AccordionSection({
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
}: AccordionSectionProps) {
  return (
    <div className="container flex min-w-full flex-col gap-4 px-12 duration-300 md:flex-row">
      <div className="border-brand-primary flex pr-8 md:border-r md:py-56">
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
      <div className="border-brand-primary flex flex-col space-y-4 md:w-1/3 md:border-t md:py-56">
        <FadeInwrapper delay={0.6}>
          {" "}
          <div className="relative opacity-0">
            {" "}
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
        <div className="border-brand-primary flex w-full flex-col space-y-4 py-12 opacity-0 md:border-t md:border-r md:py-56">
          <RadixAccordion />
        </div>
      </FadeInwrapper>
    </div>
  );
}

export default AccordionSection;
