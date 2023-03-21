<script>
	export let item;
</script>

<div class="card w-72 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title font-bold">{item.name}</h2>
		{#if item.process === 'productSubmission'}
			<p class="text-secondary font-medium">Product Submission</p>
		{:else if item.process === 'productRenewal'}
			<p class="text-secondary font-medium">Product Renewal</p>
		{/if}
		<div class="card-actions justify-center pt-5">
			<a href="/items/{item.id}" class="btn btn-primary">View Item</a>
		</div>
	</div>
</div>
