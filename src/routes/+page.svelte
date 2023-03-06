<script>
	import { ItemCard } from '$lib/components';
	export let data;
</script>

<div class="flex flex-col gap-3">
	<h1 class="text-xl font-bold">Recent Items</h1>
	<div class="grid grid-cols-3 gap-2">
		{#each data.items as item}
			<ItemCard {item} />
		{/each}
	</div>
</div>
