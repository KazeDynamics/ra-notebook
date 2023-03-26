<script>
	import { enhance } from '$app/forms';
	import { Modal } from '$lib/components';
	import toast from 'svelte-french-toast';
	import ChecklistGMPS from './ChecklistGMPS.svelte';
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

<div class="collapse w-full collapse-arrow border border-base-300 bg-base-100 rounded-box">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="w-full h-28 flex items-center justify-between">
			<div class="flex flex-col w-full ml-4 h-full justify-center">
				<a href="/items/{item.id}" class="font-semibold text-4xl">{item.name}</a>
				{#if item.process === 'productSubmission'}
					<p class="text-base my-2 text-col font-medium text-primary">Product Submission</p>
				{:else if item.process === 'productRenewal'}
					<p class="text-base my-2 text-col font-medium text-primary">Product Renewal</p>
				{/if}
				<p class="font-light text-base">
					Business Unit: <span class="text-base text-col font-medium text-primary"
						>{item.businessUnit}</span
					>
				</p>
			</div>
			<div class="flex items-center justify-end w-full z-10">
				<div class="radial-progress text-primary mx-4" style="--value:70;">
					<span class="text-primary">70%</span>
				</div>
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
	</div>

	<div class="collapse-content">
		<!-- Guatemala -->
		{#if item.country === 'guatemala' && item.process === 'productSubmission'}
			<ChecklistGMPS />
		{:else if item.country === 'guatemala' && item.process === 'productRenewal'}
			<ChecklistGMPS />
			<!-- Honduras -->
		{:else if item.country === 'honduras' && item.process === 'productSubmission'}
			<ChecklistGMPS />
		{:else if item.country === 'honduras' && item.process === 'productRenewal'}
			<ChecklistGMPS />
			<!-- El Salvador -->
		{:else if item.country === 'elSalvador' && item.process === 'productSubmission'}
			<ChecklistGMPS />
		{:else if item.country === 'elSalvador' && item.process === 'productRenewal'}
			<ChecklistGMPS />
			<!-- Nicaragua -->
		{:else if item.country === 'nicaragua' && item.process === 'productSubmission'}
			<ChecklistGMPS />
		{:else if item.country === 'nicaragua' && item.process === 'productRenewal'}
			<ChecklistGMPS />
			<!-- Costa Rica -->
		{:else if item.country === 'costaRica' && item.process === 'productSubmission'}
			<ChecklistGMPS />
		{:else if item.country === 'costaRica' && item.process === 'productRenewal'}
			<ChecklistGMPS />
			<!-- Panama -->
		{:else if item.country === 'panama' && item.process === 'productSubmission'}
			<ChecklistGMPS />
		{:else if item.country === 'panama' && item.process === 'productRenewal'}
			<ChecklistGMPS />
		{/if}
	</div>
</div>
