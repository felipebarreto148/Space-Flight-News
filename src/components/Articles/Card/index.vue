<template>
  <section class="card" :style="stylization">
    <img class="card__image" :src="image" :alt="title" />
    <section class="card__informations">
      <h1 class="card__informations__title">{{ title }}</h1>
      <section class="card__informations__subtitles">
        <span class="card__informations__subtitles__date">{{
          formatDate
        }}</span>
        <span class="card__informations__subtitles__newssite">
          {{ newsSite }}</span
        >
      </section>
      <p class="card__informations__summary">{{ summary }}</p>
      <default-button
        class="card__informations__button"
        label="Ver mais"
        @clicked="() => open()"
      ></default-button>
    </section>

    <modal ref="cardModal">
      <modal-card
        :article="article"
        :image="image"
        :title="title"
        :publishedAt="formatDate"
        :summary="summary"
        :close-modal="close"
      />
    </modal>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

// Utils
import { DateManager } from "@/Utils/dataManager";

export default defineComponent({
  components: {
    DefaultButton: () => import("../../Buttons/index.vue"),
    Modal: () => import("../../Modal/index.vue"),
    ModalCard: () => import("../ModalCard/index.vue"),
  },
  props: {
    article: { type: Object, required: true, default: () => "" },
    index: { type: Number, required: false, default: () => 0 },
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
    newsSite: {
      type: String,
      required: false,
      default: () => "",
    },
    summary: {
      type: String,
      required: false,
      default: () => "",
    },
  },
  setup(props) {
    const cardModal: any = ref(null);
    const dateManager = new DateManager();
    const formatDate = dateManager.convert(props.publishedAt);
    const stylization = {
      "flex-direction": props.index % 2 == 0 ? "row" : "row-reverse",
    };

    function open() {
      cardModal.value.open();
    }

    function close() {
      cardModal.value.close();
    }

    return {
      formatDate,
      stylization,
      cardModal,
      open,
      close,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.card {
  display: flex;
  width: 90%;
  max-width: 800px;
  column-gap: 50px;
  font-family: "Roboto Condensed", sans-serif;

  &__image {
    width: 40%;
    height: 100%;
    max-height: 250px;
    border-radius: 3px;
  }

  &__informations {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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

      &__newssite {
        border: 1px solid $primary;
        background: $lightgray;
        padding: 3px 8px;
      }
    }

    &__summary {
      font-size: 18px;
    }

    &__button {
      max-width: 100px;
      min-width: 50px;
    }
  }
}
</style>
