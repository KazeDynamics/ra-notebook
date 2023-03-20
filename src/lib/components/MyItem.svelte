<script>
	import { enhance } from '$app/forms';
	import { Modal } from '$lib/components';
	import toast from 'svelte-french-toast';
	export let item;
	let modalOpen;
	let loading = false;
	const submitDeleteItem = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Item deleted successfully!');
					await update();
					break;
				case 'error':
					toast.error('Could not delete item. Try again later.');
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
	$: modalOpen = false;
</script>

<div class="w-full h-28 flex items-center justify-between">
	<div class="flex flex-col w-full ml-4 h-full justify-center">
		<a href="/items/{item.id}" class="font-semibold text-lg">{item.name}</a>
		{#if item.country === 'guatemala'}
			<p>Guatemala</p>
		{:else if item.country === 'honduras'}
			<p>Honduras</p>
		{:else if item.country === 'elSalvador'}
			<p>El Salvador</p>
		{:else if item.country === 'nicaragua'}
			<p>Nicaragua</p>
		{:else if item.country === 'costaRica'}
			<p>Costa Rica</p>
		{:else if item.country === 'panama'}
			<p>Panama</p>
		{/if}
		{#if item.process === 'productSubmission'}
			<p>Product Submission</p>
		{:else if item.process === 'productRenewal'}
			<p>Product Renewal</p>
		{/if}
		<p>{item.businessUnit}</p>
	</div>
	<div class="flex items-center justify-end w-full">
		<a href="/items/{item.id}/edit" class="btn btn-outline">Edit Item</a>
		<Modal label={item.id} checked={modalOpen}>
			<span slot="trigger" class="btn btn-error ml-2">Delete</span>
			<div slot="heading">
				<h3 class="text-2xl">Delete {item.name}</h3>
				<p class="text-base font-normal mt-2">
					Are you sure you want to delete this item? Once deleted, the item cannot be restored.
				</p>
			</div>
			<div slot="actions" class="flex w-full items-center justify-center space-x-2">
				<label for={item.id} class="btn btn-outline">Cancel</label>
				<form action="?/deleteItem" method="POST" use:enhance={submitDeleteItem}>
					<input type="hidden" name="id" value={item.id} />
					<button type="submit" class="btn btn-error" disabled={loading}>Delete</button>
				</form>
			</div>
		</Modal>
	</div>
</div>
