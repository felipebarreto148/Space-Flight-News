<template>
  <transition name="fade">
    <section
      class="modal"
      v-if="state.isVisible"
      @click="() => (state.isVisible = false)"
    >
      <section class="modal__content" @click.stop>
        <slot />
      </section>
    </section>
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const state = reactive({
      isVisible: false,
    });

    function open() {
      state.isVisible = true;
    }

    function close() {
      state.isVisible = false;
    }
    return {
      state,
      open,
      close,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: $primary, $alpha: 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    width: 90%;
    max-width: 700px;
    max-height: 90vh;
    background: white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    padding: 50px;

    @media (max-width: 500px) {
      padding: 20px;
    }
  }
}
</style>
