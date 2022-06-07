import { Commit } from "vuex";

export interface Article {
  id?: number;
  featured?: boolean;
  title?: string;
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
  events?: {
    id: string;
    provider: string;
  }[];
}

export interface ArticleState {
  _limit: number;
  _start: number;
  _sort: string;
  _search: string;
  articles: Article[];
}

export interface ActionsParam {
  state: ArticleState;
  commit: Commit;
}
