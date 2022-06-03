<template>
	<select
		class="sortby field"
		name="sortby"
		id="sortby"
		v-model="state.sortby"
		@change="() => sortBy()"
	>
		<option value="" selected disabled hidden>Sort</option>
		<option value="publishedAt">Mais Antigas</option>
		<option value="newer">Mais Novas</option>
	</select>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
	setup(_, { root }) {
		const $store = root.$store;
		const state = reactive({
			sortby: "",
		});

		async function sortBy() {
			if (state.sortby == "newer") {
				await $store.dispatch("getArticles");
			} else {
				await $store.commit("setSort", state.sortby);
				await $store.dispatch("getArticlesBySort");
			}
		}
		return {
			state,
			sortBy,
		};
	},
});
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.sortby {
	min-width: 120px;
}
</style>
