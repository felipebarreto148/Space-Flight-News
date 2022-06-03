import { api } from "../index";
import * as Types from "@/types";

export const getArticles = async (_start: number): Promise<Types.Article[]> => {
  return await api.get("/articles", {
    params: {
      _start,
    },
  });
};

export const getArticlesByTitle = async (
  _start: number,
  _search: string
): Promise<Types.Article[]> => {
  return await api.get("/articles", {
    params: {
      _start,
      "=": _search,
    },
  });
};

export const getArticlesBySort = async (
  _start: number,
  _sort: string
): Promise<Types.Article[]> => {
  return await api.get("/articles", {
    params: {
      _start,
      _sort,
    },
  });
};
