<script>
	export let item;
</script>

<div class="card w-72 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{item.name}</h2>
		{#if item.process === 'productSubmission'}
			<p>Product Submission</p>
		{:else if item.process === 'productRenewal'}
			<p>Product Renewal</p>
		{/if}
		<div class="card-actions justify-center pt-5">
			<a href="/items/{item.id}" class="btn btn-primary">View Item</a>
		</div>
	</div>
</div>
