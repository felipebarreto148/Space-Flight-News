<template>
  <section class="modal">
    <section class="modal__content">
      <slot />
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const state = reactive({
      isVisible: false,
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.modal {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba($color: $primary, $alpha: 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    width: 90%;
    height: 90%;
    max-width: 800px;
    max-height: 500px;
    background: white;
    border-radius: 8px;
  }
}
</style>
