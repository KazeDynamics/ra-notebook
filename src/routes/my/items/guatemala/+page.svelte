<script>
	import { MyItem } from '$lib/components';
	export let data;
	import Icon from '@iconify/svelte';

	$: {
		if (data.items && data.items.length > 0) {
			data.items.sort((a, b) => new Date(b.created) - new Date(a.created));
		}
	}
</script>

<h2 class="text-3xl font-bold">
	Guatemala<Icon icon="twemoji:flag-guatemala" class="text-xxl ml-4 mb-2 inline" />
</h2>
<div class="w-full mt-4 flex flex-col items-center">
	{#if data.items.length === 0}
		<p class="text-center text-3xl">😮</p>
		<p class="text-center text-3xl m-3">
			Looks like you don't have any products for this country yet.
		</p>
		<a href="/items/new" class="btn btn-primary max-w-md mt-4">Add One</a>
	{:else}
		{#each data.items as item}
			<MyItem {item} />
			<div class="py-2" />
		{/each}
	{/if}
</div>
