<template>
  <main id="app">
    <header-default />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {
    HeaderDefault: () => import("@/components/Header/index.vue"),
  },
});
</script>

<style lang="scss">
@import "@/scss/_global.scss";
</style>
