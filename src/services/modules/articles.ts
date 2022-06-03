import { api } from "../index";
import * as Types from "@/types";

export const getArticles = async (): Promise<Types.Article[]> => {
  return await api.get("/articles");
};
