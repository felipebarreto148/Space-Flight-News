<template>
  <select class="sortby field" name="sortby" id="sortby">
    <option value="0" disabled selected>Sort</option>
    <option value="2">Mais Antigas</option>
    <option value="1">Mais Novas</option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.sortby {
  min-width: 120px;
}
</style>
