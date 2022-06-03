<template>
  <button @click="$emit('clicked')" class="button shadow" :style="stylization">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    background: {
      type: String,
      required: false,
      default: () => "var(--buttonbg)",
    },
    color: {
      type: String,
      required: false,
      default: () => "white",
    },
    label: {
      type: String,
      required: false,
      default: () => "",
    },
  },
  setup(props) {
    const stylization = {
      background: props.background,
      color: props.color,
    };

    return {
      stylization,
    };
  },
});
</script>

<style lang="scss" scoped>
.button {
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  font: 500 18px "Roboto Condensed", sans-serif;

  &:hover {
    transform: scale3d(0.8, 0.8, 0.8);
  }
}
</style>
