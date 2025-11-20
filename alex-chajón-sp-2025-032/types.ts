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

export interface QuoteData {
  metadata: QuoteMetadata;
  client: ClientInfo;
  items: LineItem[];
  taxRate: number;
}