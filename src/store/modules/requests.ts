import { ArticleState, Article, ActionsParam } from "@/types";
import {
  getArticles,
  getArticlesByTitle,
  getArticlesBySort,
} from "@/services/modules/articles";

export default {
  state: () =>
    <ArticleState>{
      _limit: 10,
      _start: 0,
      _sort: "",
      articles: [],
    },
  mutations: {
    setStart(state: ArticleState) {
      state._start += state._limit;
    },
    resetStart(state: ArticleState) {
      state._start = 0;
    },
    setSort(state: ArticleState, sortBy: string) {
      state._sort = sortBy;
    },
    setArticles(state: ArticleState, articles: Article[]) {
      state.articles.push(...articles);
    },
  },
  actions: {
    async getArticles({ state, commit }: ActionsParam) {
      return await getArticles(state._start).then((res: Article[]) => {
        commit("setArticles", res);
        commit("setStart");
        return res;
      });
    },
    async getArticlesByTitle({ state, commit }: ActionsParam, search: string) {
      return await getArticlesByTitle(state._start, search).then(
        (res: Article[]) => {
          commit("setArticles", res);
          commit("setStart");
          return res;
        }
      );
    },
    async getArticlesBySort({ state, commit }: ActionsParam) {
      return await getArticlesBySort(state._start, state._sort).then(
        (res: Article[]) => {
          commit("setArticles", res);
          commit("setStart");
          return res;
        }
      );
    },
  },
  getters: {
    limit: (state: ArticleState) => state._limit,
    articles: (state: ArticleState) => state.articles,
  },
};
