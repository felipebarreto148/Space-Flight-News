<template>
  <section class="articles">
    <template v-if="filtered.length">
      <article-card
        v-for="(article, index) in filtered"
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
          v-if="articles.length"
          @clicked="() => init()"
        ></default-button>
      </section>
    </template>
    <h1 v-else>Não foi encontrado nenhuma notícia...</h1>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import * as Types from "@/types";

export default defineComponent({
  components: {
    ArticleCard: () => import("./Card/index.vue"),
    DefaultButton: () => import("../Buttons/index.vue"),
  },
  setup(_, { root }) {
    const $store = root.$store;
    const articles = computed(() => $store.getters.articles);
    const searched = computed(() => $store.getters.search);
    const filtered = computed(() => {
      if (searched.value.length) {
        return articles.value.filter((article: Types.Article) =>
          article.title?.toLowerCase().includes(searched.value.toLowerCase())
        );
      } else {
        return articles.value;
      }
    });

    async function init() {
      await $store.dispatch("getArticles");
    }

    init();

    return { articles, filtered, init };
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
