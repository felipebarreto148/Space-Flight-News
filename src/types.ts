export interface Article {
  id: number;
  featured?: boolean;
  title: string;
  url?: string;
  imageUrl?: string;
  newsSite?: string;
  summary?: string;
  publishedAt?: string;
  updatedAt?: string;
  launches?: {
    id: string;
    provider: string;
  }[];
  events: {
    id: string;
    provider: string;
  }[];
}
