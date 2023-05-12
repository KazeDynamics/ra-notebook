<script>
	import { ItemCard } from '$lib/components';
	export let data;
</script>

<div class="flex flex-col gap-3">
	<h1 class="text-xl font-bold">Recent Items</h1>
	{#if data.items.length === 0}
		<div class="w-full mt-4 flex flex-col items-center">
			<p class="text-center text-3xl">😮</p>
			<p class="text-center text-3xl m-3">Looks like you don't have any products.</p>
			<a href="/items/new" class="btn btn-primary max-w-md mt-4">Add One</a>
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
			{#each data.items as item}
				<ItemCard {item} />
			{/each}
		</div>
	{/if}
</div>
