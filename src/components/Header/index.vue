<template>
  <header class="header">
    <section class="header__controlers">
      <search />
      <sort-by />
    </section>
    <section class="header__icon">
      <img
        src="@/assets/img/rocket.png"
        alt="icone de um foguete fazendo decolagem."
      />
    </section>
    <h1>Space Flight News</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {
    Search: () => import("../Inputs/Search/index.vue"),
    SortBy: () => import("../Selects/SortBy/index.vue"),
  },
});
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
.header {
  width: 95vw;
  height: 400px;
  min-height: 400px;
  border-bottom: 2px solid $primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: $darkgray;

  &__controlers {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 10px;
  }

  &__icon {
    width: 150px;
    height: 150px;
    padding: 30px;
    border: 1px solid $darkgray;
    border-radius: 50%;
    transition: 400ms;

    &:active,
    &:focus,
    &:hover {
      box-shadow: 0 0 15px $darkgray;
    }

    & img {
      width: 100%;
      height: 100%;
      color: $darkgray;
    }
  }
}
</style>
