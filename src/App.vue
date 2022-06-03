<template>
  <main id="app">
    <header-default />
    <articles />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {
    HeaderDefault: () => import("@/components/Header/index.vue"),
    Articles: () => import("@/components/Articles/index.vue"),
  },
});
</script>

<style lang="scss">
@import "@/scss/_global.scss";
</style>
