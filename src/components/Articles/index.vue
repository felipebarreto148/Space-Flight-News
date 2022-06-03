<template>
  <section class="articles">
    <article-card
      v-for="(article, index) in state.articles"
      :key="index"
      :index="index"
      :article="article"
      :image="article.imageUrl"
      :title="article.title"
      :publishedAt="article.publishedAt"
      :newsSite="article.newsSite"
      :summary="article.summary"
    />
    <section class="articles__buton">
      <default-button
        label="Carregar mais"
        v-if="state.articles.length"
        @clicked="() => init()"
      ></default-button>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  components: {
    ArticleCard: () => import("./Card/index.vue"),
    DefaultButton: () => import("../Buttons/index.vue"),
  },
  setup(_, { root }) {
    const $store = root.$store;
    const state = reactive({
      articles: $store.getters.articles,
    });

    async function init() {
      $store.dispatch("getArticles");
    }

    init();

    return { state, init };
  },
});
</script>

<style lang="scss" scoped>
.articles {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 80px;
  width: 95vw;
  padding-bottom: 50px;
}
</style>
