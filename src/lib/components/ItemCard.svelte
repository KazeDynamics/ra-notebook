<script>
	import Icon from '@iconify/svelte';

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

<div class="card w-72 m-4 bg-base-100 shadow-xl">
	<div class="card-body">
		<div class="w-full md:h-28 h:30 flex items-center md:justify-between basis-1/2 flex-row">
			<div class="flex flex-col w-full h-full justify-center">
				<h2 class="card-title font-bold">{item.name}</h2>
				{#if item.process === 'productSubmission'}
					<p class="text-secondary font-medium">Product Submission</p>
				{:else if item.process === 'productRenewal'}
					<p class="text-secondary font-medium">Product Renewal</p>
				{/if}
			</div>
			<h2 class="text-3xl font-bold">
				{#if item.country === 'guatemala'}
					<Icon icon="twemoji:flag-guatemala" class="text-xxl ml-4 mb-2 inline" />
				{:else if item.country === 'honduras'}
					<Icon icon="twemoji:flag-honduras" class="text-xxl ml-4 mb-2 inline" />
				{:else if item.country === 'elSalvador'}
					<Icon icon="twemoji:flag-el-salvador" class="text-xxl ml-4 mb-2 inline" />
				{:else if item.country === 'nicaragua'}
					<Icon icon="twemoji:flag-nicaragua" class="text-xxl ml-4 mb-2 inline" />
				{:else if item.country === 'costaRica'}
					<Icon icon="twemoji:flag-costa-rica" class="text-xxl ml-4 mb-2 inline" />
				{:else if item.country === 'panama'}
					<Icon icon="twemoji:flag-panama" class="text-xxl ml-4 mb-2 inline" />
				{/if}
			</h2>
		</div>
		<div class="card-actions justify-center pt-5">
			<a href={url} class="btn btn-primary">View Item</a>
		</div>
	</div>
</div>
