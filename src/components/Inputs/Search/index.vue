<template>
	<input
		class="search__field field"
		type="text"
		placeholder="Search"
		v-model="state.search"
	/>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "@vue/composition-api";

export default defineComponent({
	setup(_, { root }) {
		const $store = root.$store;
		const state = reactive({
			search: "",
		});

		watch(
			() => state.search,
			(value) => {
				if (value.length) {
					$store.commit("resetStart");
					$store.commit("setSearch", value);
					$store.dispatch("getArticlesByTitle");
				} else {
          $store.dispatch("getArticles");
        }
			}
		);

		return {
			state,
		};
	},
});
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
</style>
