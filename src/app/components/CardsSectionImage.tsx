"use client";
import CardImage from "./CardImage";

interface CardData {
  headline: string;
  subheadline: string;
  imageUrl?: string;
  copyText: string;
  logoSrc?: string;
  logoAlt?: string;
}

interface CardsSectionProps {
  cardsData: CardData[];
}

function CardsSectionImage({ cardsData }: CardsSectionProps) {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cardsData.map((card, index) => (
          <CardImage
            key={index}
            headline={card.headline}
            subheadline={card.subheadline}
            imageUrl={card.imageUrl}
            copyText={card.copyText}
            logoSrc={card.logoSrc}
            logoAlt={card.logoAlt}
            delay={index * 0.2} // Stagger the animation
          />
        ))}
      </div>
    </section>
  );
}

export default CardsSectionImage;
