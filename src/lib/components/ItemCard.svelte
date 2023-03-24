<script>
	export let item;
	let url = '';
	if (item.country === 'guatemala') {
		url = 'my/items/guatemala';
	} else if (item.country === 'honduras') {
		url = 'my/items/honduras';
	} else if (item.country === 'elSalvador') {
		url = 'my/items/elSalvador';
	} else if (item.country === 'nicaragua') {
		url = 'my/items/nicaragua';
	} else if (item.country === 'costaRica') {
		url = 'my/items/costaRica';
	} else if (item.country === 'panama') {
		url = 'my/items/panama';
	} else {
		url = '/home';
	}
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
			<a href={url} class="btn btn-primary">View Item</a>
		</div>
	</div>
</div>
