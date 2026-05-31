export type PricingCard = {
  price: number;
  note: string;
  title: string;
  features: string[];
  description: string;
  highlight?: boolean;
};

// Bellerose Roofing does not advertise fixed prices — pricing is job-specific.
// The PricingSection is not used in this build.
export const pricingCards: PricingCard[] = [];
