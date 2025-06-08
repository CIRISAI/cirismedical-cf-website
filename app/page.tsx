"use client";
import AccordionSection from "@/app/components/SectionAccordion";
import HomeHeader from "@/app/components/HomeHeader";
import Footer from "@/app/components/Footer";
import NewsletterForm from "./components/NewsletterForm";
import FlexSection from "@/app/components/SectionFlexContent";
import { FloatingNav } from "@/app/components/ui/floating/nav";

import Image from "next/image";
import { stagger } from "motion";
import { splitText } from "motion-plus";
import { Cursor, useCursorState } from "motion-plus/react";
import { animate, motion, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import CardsSection from "./components/CardsSection";
import ImageHeroBlock from "./components/ImageHeroBlock";
import ImageHeroBlockLeftBottom from "./components/ImageHeroBlockLeftBottom";
import SeparatorTitleBlock from "./components/Separatortitle";

import navItems from "@/app/components/navitems";
export default function Homepage() {
  const state = useCursorState();
  const rotate = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1")!);

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        },
      );
    });
  }, []);
  useEffect(() => {
    if (!state.targetBoundingBox) {
      /**
       * If we don't have a current target then we want to make an infinite
       * rotation animation. We do an infinite rotation between the current rotation
       * and +360 degrees.
       */
      animate(rotate, [rotate.get(), rotate.get() + 360], {
        duration: 17,
        ease: "linear",
        repeat: Infinity,
      });
    } else {
      /**
       * If we do have a target then we want to animate the rotation to
       * the nearest 180 degree angle. We can use 180 instead of 360 to minimise
       * the spin and because it doesn't visually matter if the cursor is upside down
       * for this effect. We could increase the spin by doing something like
       * (rotate.get() + minimumSpin) / 180
       */
      animate(rotate, Math.round(rotate.get() / 180) * 180, {
        type: "spring",
        bounce: 0.3,
      });
    }
  }, [state.targetBoundingBox]);

  return (
    <>
      <FloatingNav navItems={navItems} />
      <HomeHeader
        headline="CIRIS."
        subheadline="Ethical AI That Knows Its Limits"
        description="A comprehensive, open-source governance framework that works with existing AI systems—attempting to embed principled decision-making and human oversight into autonomous AI operations as they scale."
        mediaType="video"
        opacityValue={0.5}
        mediaSrc="/videos/video3.mp4"
        buttonText="Get the Code"
        buttonHref="https://github.com/CIRISAI"
        linkText="The Covenant "
        linkHref="https://ciris-covenant.alignordie.workers.dev/"
      />
      <div className="container min-h-screen max-w-7xl" ref={containerRef}>
        <Cursor
          magnetic={{ morph: false, snap: 0 }}
          matchTextSize={false}
          style={{ width: 4, height: 4 }}
          className="cursor"
        />
        <Cursor
          magnetic={{ snap: 0.9 }}
          style={{ rotate, width: 30, height: 30 }}
          variants={{
            pressed: {
              scale: state.targetBoundingBox ? 0.9 : 0.7,
            },
          }}
          className="reticule"
        >
          <>
            <Corner top={0} left={0} />
            <Corner top={0} right={0} />
            <Corner bottom={0} left={0} />
            <Corner bottom={0} right={0} />
          </>
        </Cursor>
        <FlexSection
          // buttonHref=" "
          // buttonText="About CIRIS"
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="What is CIRIS"
          subheadline="A governance framework for responsible AI"
          copyText="CIRIS (Core Identity, Integrity, Resilience, Incompleteness Awareness, and Sustained Coherence) is a comprehensive framework that attempts to guide AI systems toward ethical behavior through structured decision-making and meaningful human oversight.
          Unlike simple ethics checklists, CIRIS works with your existing AI models—adding a layer of principled reasoning that recognizes when human wisdom is needed. It's designed to be thorough enough for researchers yet practical enough for real-world deployment."
        />
        <SeparatorTitleBlock
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="How CIRIS Works"
          subheadline="At the heart of CIRIS is the Principled Decision-Making Algorithm (PDMA), which guides AI actions through structured ethical evaluation. When facing uncertainty or high-stakes decisions, systems use Wisdom-Based Deferral (WBD) to escalate to designated human authorities.
          CIRIS attempts to maintain ethical alignment through continuous monitoring, transparent reasoning, and the crucial recognition that AI systems have limits requiring human judgment."
          className="border-brand-primary text-brand-primary border-t border-b"
        />
        <ImageHeroBlockLeftBottom
          backgroundImageSrc="/overview.svg"
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="An overview of CIRIS"
          subheadline="CIRIS is a comprehensive ethical framework for AI systems"
          copyText="At the heart of CIRIS is the Hyper3 Ethical Recursive Engine (H3ERE), which employs a 3×3×3 ethical reasoning structure for ethical decision-making, ensuring that every action is guided by core principles, contextual knowledge, and behavioral handlers. This recursive approach guarantees that AI systems maintain ethical integrity, transparency, and resilience in their operations."
        />
        <SeparatorTitleBlock
          animateNumber={true}
          animateNumberValue={3}
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="Core Decision Framework"
          subheadline="Three pillars of ethical operation"
        />
        <CardsSection
          cardsData={[
            {
              headline: "Principled Decision-Making Algorithm (PDMA)",
              copyText:
                "Guides every action through systematic ethical evaluation, assessing alignment with core principles: beneficence, non-maleficence, integrity, transparency, autonomy, and justice.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Wisdom-Based Deferral (WBD)",
              copyText:
                "Recognizes system limits by automatically escalating uncertain or high-stakes decisions to designated human authorities—embodying the principle of Incompleteness Awareness.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Transparent Operations",
              copyText:
                "All decisions are cryptographically logged with clear reasoning trails, enabling full auditability and accountability of AI actions.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
          ]}
        />
        <SeparatorTitleBlock
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          animateNumber={true}
          animateNumberValue={3}
          headline="Contextual Understanding"
          subheadline="Environmental, identity, and task awareness"
          copyText="CIRIS attempts to ground ethical decisions in relevant context through three knowledge domains, helping AI systems make informed choices that consider their operational environment."
        />
        <CardsSection
          cardsData={[
            {
              headline: "Core Identity Context",
              copyText:
                "Maintains awareness of the system's fundamental ethical commitments and operational boundaries, ensuring consistency with its foundational principles.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Environmental Context",

              copyText:
                "Provides understanding of the external world and stakeholder relationships, enabling decisions that consider broader impacts and consequences.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Task-Specific Context",
              copyText:
                "Contains mission-relevant information and constraints, allowing for informed decision-making tailored to specific operational objectives and requirements.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
          ]}
        />
        <SeparatorTitleBlock
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          animateNumber={true}
          animateNumberValue={3}
          headline="Operational Handlers"
          subheadline="Action, memory, and deferral management"
          copyText="These core handlers attempt to manage how AI systems act, learn, and recognize their limits, maintaining ethical coherence throughout operations."
        />
        <Image
          alt="decoration static image"
          width={1500}
          height={1000}
          className="border-brand-primary mb-8 border-t border-b"
          src={"overview1.svg"}
        />
        <CardsSection
          cardsData={[
            {
              headline: "Action Handler",
              copyText:
                "Manages system responses through structured choices: Communicate (share decisions and reasoning), Act (implement approved actions), or Listen (monitor and gather information).",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Memory Handler",

              copyText:
                "Maintains ethical coherence by managing information retention: Memorize (store important ethical context), Remember (recall relevant past decisions), or Forget (discard outdated information).",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Deferral Handler",
              copyText:
                "Addresses uncertainty through escalation choices: Continue (proceed with current understanding), Ponder (revisit in future cycles), or Defer (escalate to human authorities).",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
          ]}
        />
        <div className="mb-8"></div>
        <FlexSection
          // buttonHref="ddsfgsdf"
          // buttonText="Click me"
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="Continuous Ethical Review"
          subheadline="PDMA-driven decision validation"
          copyText="Decisions in CIRIS aren't one-time checks—they undergo ongoing evaluation cycles. When the system generates insights or takes actions, these outcomes enter a review queue where they're rigorously assessed through the PDMA process.
          This recursive approach attempts to maintain ethical alignment over time, helping catch potential issues before they compound and ensuring transparency in the system's reasoning process."
        />
        <AccordionSection
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="Governance & Oversight"
          subheadline="CIRIS includes comprehensive governance mechanisms designed to maintain ethical integrity throughout the system's lifecycle:"
        />
        {/* <ImageHeroBlock
          className="text-brand-primary fill-brand-primary mb-8"
          backgroundImageSrc="/kelly-vohs-soSTXmIxTDU-unsplash.jpg"
          buttonHref="ddsfgsdf"
          opacity={0.4}
          buttonText="Click me"
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="System Design"
          subheadline="AI based system design"
          copyText="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua."
        /> */}
        <CardsSection
          cardsData={[
            {
              headline: "Open Source & Transparent",
              copyText:
                "Built on open principles to avoid corporate capture, with all reasoning and decisions available for public scrutiny and improvement.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Works With Existing Models",
              copyText:
                "Integrates with AI systems from major providers (OpenAI, Anthropic, etc.) without requiring custom models or extensive rebuilding.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Research-Grade Rigor",
              copyText:
                "Developed through extensive documentation and testing, suitable for both academic research and practical deployment scenarios.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
          ]}
        />
        <Stylesheet />
      </div>
      <div>
        <ImageHeroBlock
          className="my-8 min-h-screen fill-white text-white"
          backgroundImageSrc="/chip-vincent-PkQDwfl9Flc-unsplash.jpg"
          opacity={0.8}
          video={true}
          videoSrc="/videos/video1.mp4"
          buttonHref="mailto:info@ciris.ai"
          buttonText="Get in Touch"
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="Building AI for Human Flourishing"
          subheadline="Ethics as foundation, not afterthought"
          copyText="CIRIS is designed for a future where AI systems become increasingly autonomous and capable. By embedding ethical reasoning at the core—not as a superficial layer—we attempt to create AI that remains aligned with human values even as it scales beyond constant human oversight.
          This represents an effort to build a new type of AI that is complete, open, self-verifiable, won't go feral or sell you ads or prioritize a corporation, ever."
        />{" "}
        <NewsletterForm />
        <Footer />
      </div>
    </>
  );
}

function Button({ children }: { children: React.ReactNode }) {
  return (
    <motion.button className="button" whileTap={{ scale: 0.9 }}>
      {children}
    </motion.button>
  );
}
``;

function Corner({
  thickness = 1.5,
  length = 9,
  ...position
}: {
  thickness?: number;
  length?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}) {
  return (
    <>
      <motion.div
        layout
        className="corner"
        style={{
          width: thickness,
          height: length,
          ...position,
        }}
      />
      <motion.div
        layout
        className="corner"
        style={{
          width: length,
          height: thickness,
          ...position,
        }}
      />
    </>
  );
}

/**
 * ==============   Styles   ================
 */

function Stylesheet() {
  return (
    <style>
      {`
             
           .corner {
              background: var(--color-brand-primary);
              position: absolute;
            }

            .cursor {
              background-color: var(--color-brand-primary);
            }

            .reticule {
              background-color: transparent;
              border-radius: 0;
            }

            `}
    </style>
  );
}
