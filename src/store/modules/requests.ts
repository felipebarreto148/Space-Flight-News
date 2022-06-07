import { ArticleState, Article, ActionsParam } from "@/types";
import { getArticles, getArticlesByTitle } from "@/services/modules/articles";

export default {
  state: () =>
    <ArticleState>{
      _limit: 10,
      _start: 0,
      _sort: "",
      _search: "",
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
    setSearch(state: ArticleState, search: string) {
      state._search = search;
    },
    setArticles(state: ArticleState, articles: Article[]) {
      state.articles.push(...articles);
    },
    resetArticles(state: ArticleState) {
      state.articles = [];
    },
  },
  actions: {
    async getArticles({ state, commit }: ActionsParam) {
      return await getArticles(state._start, state._sort).then(
        (res: Article[]) => {
          commit("setArticles", res);
          commit("setStart");
          return res;
        }
      );
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
  },
  getters: {
    limit: (state: ArticleState) => state._limit,
    search: (state: ArticleState) => state._search,
    articles: (state: ArticleState) => state.articles,
  },
};
