import { ReactNode } from "react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface PricingDetail {
  label: string;
  value: string;
  subValue?: string;
  highlight?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  marketValue: string;
  details: PricingDetail[];
  totalLabel: string;
  totalPrice: string;
  ctaText?: string;
  isLifetime?: boolean;
}