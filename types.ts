export interface LineItem {
  id: string;
  description: string;
  details?: string;
  price: number;
}

export interface ClientInfo {
  name: string;
  productionLocation: string;
}

export interface QuoteMetadata {
  number: string;
  date: string;
  validUntil?: string;
}

// Standard Quote (List based)
export interface StandardQuoteData {
  type: 'standard';
  metadata: QuoteMetadata;
  client: ClientInfo;
  items: LineItem[];
  taxRate: number;
}

// Plan Based Quote (Card comparison)
export interface PlanItem {
  title: string;
  marketValue: number;
  initialPayment: number;
  deliveryPayment?: number; // Optional: Payment upon delivery
  monthlyPayment: number;
  maintenance: number;
  totalFirstYear: number;
  subsequentText: string;
  isRecommended?: boolean;
}

export interface PlanQuoteData {
  type: 'plans';
  metadata: QuoteMetadata;
  client: ClientInfo;
  plans: PlanItem[];
}

export type QuoteData = StandardQuoteData | PlanQuoteData;