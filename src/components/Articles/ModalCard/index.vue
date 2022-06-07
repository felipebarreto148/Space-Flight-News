<template>
  <section class="card">
    <section class="card__body">
      <img class="card__image" :src="image" :alt="title" />
      <section class="card__informations">
        <h1 class="card__informations__title">{{ title }}</h1>
        <section class="card__informations__subtitles">
          <span class="card__informations__subtitles__date">{{
            publishedAt
          }}</span>
        </section>
        <p class="card__informations__summary">{{ summary }}</p>
      </section>
    </section>
    <section class="card__action">
      <default-button
        class="card__action__button"
        label="Voltar para o site"
        @clicked="() => closeModal()"
      ></default-button>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {
    DefaultButton: () => import("../../Buttons/index.vue"),
  },
  props: {
    article: { type: Object, required: true, default: () => "" },
    image: {
      type: String,
      required: false,
      default: () => "",
    },
    title: {
      type: String,
      required: false,
      default: () => "",
    },
    publishedAt: {
      type: String,
      required: false,
      default: () => "",
    },
    summary: {
      type: String,
      required: false,
      default: () => "",
    },
    "close-modal": {
      type: Function,
      required: false,
      default: () => ({}),
    },
  }
});
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 800px;
  column-gap: 50px;
  row-gap: 50px;
  font-family: "Roboto Condensed", sans-serif;
  overflow-y: auto;

  &__body {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 800px;
    column-gap: 50px;
    row-gap: 50px;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }

  &__action {
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 100%;
    max-height: 250px;
    max-width: 250px;
    border-radius: 3px;
    @media (max-width: 700px) {
      max-width: none;
    }
  }

  &__informations {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 8px;
    width: 100%;

    &__title {
      font-size: 22px;
    }

    &__subtitles {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: 16px;
    }

    &__summary {
      font-size: 18px;
    }

    &__button {
      max-width: 250px;
      min-width: 200px;
    }
  }
}
</style>
