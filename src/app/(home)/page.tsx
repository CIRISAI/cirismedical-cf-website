"use client";
import AccordionSection from "@/app/components/SectionAccordion";
import HomeHeader from "@/app/components/HomeHeader";
import Footer from "@/app/components/Footer";
import NewsletterForm from "@/app/components/NewsletterForm";
import FlexSection from "@/app/components/SectionFlexContent";
import { FloatingNav } from "@/app/components/ui/floating/nav";

import Image from "next/image";
import { stagger } from "motion";
import { splitText } from "motion-plus";
import { Cursor, useCursorState } from "motion-plus/react";
import { animate, motion, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import CardsSection from "@/app/components/CardsSection";
import ImageHeroBlock from "@/app/components/ImageHeroBlock";
import ImageHeroBlockLeftBottom from "@/app/components/ImageHeroBlockLeftBottom";
import SeparatorTitleBlock from "@/app/components/Separatortitle";

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
        }
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
        headline="Healthcare for Humanity."
        subheadline="Bringing physician-supervised AI healthcare to 3.5 billion underserved people"
        description="Every 4 seconds, someone dies from lack of basic healthcare. CIRISMedical bridges this gap with ethical AI, working alongside local healers and global physicians to deliver care where it's needed most."
        mediaType="video"
        opacityValue={0.5}
        mediaSrc="/videos/video3.mp4"
        buttonText="Join Our Mission"
        buttonHref="#partnership"
        linkText="Safety First "
        linkHref="/safety"
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
          headline="The Silent Crisis"
          subheadline="Half the world lacks access to essential health services."
          copyText="In rural Pakistan, a mother walks 20 kilometers to the nearest clinic. In sub-Saharan Africa, a child dies from malaria every minute. In refugee camps, millions suffer without basic care. CIRISMedical exists because healthcare is a human right, not a privilege of geography or wealth."
        />
        <SeparatorTitleBlock
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="Why Now"
          subheadline="AI can finally help where doctors cannot reach"
          copyText="With advances in medical AI and global connectivity, we can now provide expert medical guidance to any smartphone. CIRISMedical transforms a simple phone into a bridge to life-saving care."
          className="border-brand-primary text-brand-primary border-t border-b"
        />
        <ImageHeroBlockLeftBottom
          backgroundImageSrc="/overview.svg"
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="Our Approach"
          subheadline="Ethical AI working with human healers"
          copyText="CIRISMedical never replaces doctors - it extends their reach. Local community health workers use our AI for triage and basic diagnostics. Traditional healers integrate modern medical knowledge with cultural practices. Remote physicians supervise all decisions. Together, we create a healthcare network that honors both tradition and science."
        />
        <SeparatorTitleBlock
          animateNumber={true}
          animateNumberValue={3}
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="Core Services"
          subheadline="Three pillars of AI-assisted healthcare"
        />
        <CardsSection
          cardsData={[
            {
              headline: "Emergency Triage",
              copyText:
                "Using ESI protocols, our AI helps community workers quickly identify critical cases, ensuring those who need immediate care get it first. Every second counts when lives are at stake.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Diagnostic Support",
              copyText:
                "From analyzing symptoms to interpreting basic tests, our AI provides diagnostic assistance that helps local healers make informed decisions, always under physician supervision.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Treatment Guidance",
              copyText:
                "Access to current medical protocols, drug interactions, and treatment plans - bringing the world's medical knowledge to the most remote locations.",
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
          headline="Cultural Integration"
          subheadline="Respecting local wisdom while providing modern care"
          copyText="Healthcare isn't just medicine - it's trust, culture, and community. CIRISMedical works with traditional healers, respects local practices, and adapts to cultural contexts while ensuring medical safety."
        />
        <CardsSection
          cardsData={[
            {
              headline: "Local Healers",
              copyText:
                "We partner with traditional medicine practitioners, shamans, and herbalists - respecting their deep community trust while enhancing their capabilities with medical AI.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Community Workers",

              copyText:
                "Training local health workers to use AI tools effectively, creating sustainable healthcare infrastructure that remains in the community long after deployment.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Global Physicians",
              copyText:
                "Volunteer doctors from around the world provide supervision and expertise, ensuring every AI recommendation meets the highest medical standards.",
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
          headline="Safety Architecture"
          subheadline="Three layers of protection for every medical decision"
          copyText="Patient safety is paramount. Every decision passes through multiple safety checks, ensuring no harm while delivering life-saving care."
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
              headline: "AI Safety Layer",
              copyText:
                "Medical AI trained on millions of cases, validated by physicians, and constantly updated with the latest medical knowledge. Never makes autonomous decisions.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Human Oversight",

              copyText:
                "Every high-risk decision requires physician approval. Local health workers provide context. No critical action happens without human verification.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Ethical Governance",
              copyText:
                "Built on CIRIS principles - decisions must be beneficial, transparent, and just. The AI will refuse harmful actions and defer uncertain cases to humans.",
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
          headline="The Technology"
          subheadline="Domain-routed Medical AI"
          copyText="CIRISMedical uses advanced language models specifically trained on medical data, routed through domain-aware systems that ensure medical queries get medical-specific responses. With just one line of custom code, we've created a complete medical AI system that maintains perfect separation from general AI - ensuring safety, compliance, and specialization."
        />
        <AccordionSection
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="Partnership Opportunities"
          subheadline="Join us in democratizing healthcare access worldwide"
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
              headline: "NGO Partners",
              copyText:
                "Medical NGOs and humanitarian organizations can deploy CIRISMedical in their field operations, extending their reach and impact exponentially.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Government Health",
              copyText:
                "National health ministries can use CIRISMedical to provide basic healthcare in underserved regions, reducing burden on urban hospitals.",
              logoSrc: "logoIcon",
              logoAlt: "Brand logo icon",
            },
            {
              headline: "Medical Volunteers",
              copyText:
                "Physicians worldwide can volunteer their expertise, supervising AI decisions and providing guidance to health workers they'll never meet but whose patients they'll save.",
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
          buttonHref="mailto:medical@ciris.ai"
          buttonText="Get in Touch"
          logoSrc="logoIcon"
          logoAlt="Brand logo icon"
          headline="Healthcare is a Human Right."
          subheadline="Let's make it a reality."
          copyText="Together, we can ensure that no one dies from preventable diseases simply because of where they were born. CIRISMedical is more than technology - it's a movement to democratize healthcare, honor local wisdom, and save lives. Join us in building a world where quality healthcare reaches every human being."
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