<script>
	export let data;
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col w-full mt-4">
	<h2>
		Product Name: <h1 class="text-3xl font-bold">{data.item.name}</h1>
	</h2>
	<h2 class="mt-6">
		Country:
		{#if data.item.country === 'guatemala'}
			<div><Icon icon="twemoji:flag-guatemala" class="text-5xl" /></div>
		{:else if data.item.country === 'honduras'}
			<div><Icon icon="twemoji:flag-honduras" class="text-5xl" /></div>
		{:else if data.item.country === 'elSalvador'}
			<div><Icon icon="twemoji:flag-el-salvador" class="text-5xl" /></div>
		{:else if data.item.country === 'nicaragua'}
			<div><Icon icon="twemoji:flag-nicaragua" class="text-5xl" /></div>
		{:else if data.item.country === 'costaRica'}
			<div><Icon icon="twemoji:flag-costa-rica" class="text-5xl" /></div>
		{:else if data.item.country === 'panama'}
			<div><Icon icon="twemoji:flag-panama" class="text-5xl" /></div>
		{/if}
	</h2>
	<h2 class="mt-6">
		Process Type:
		{#if data.item.process === 'productSubmission'}
			<h1 class="text-3xl font-bold">Product Submission</h1>
		{:else if data.item.process === 'productRenewal'}
			<h1 class="text-3xl font-bold">Product Renewal</h1>
		{/if}
	</h2>
	<h2 class="mt-6">
		Business Unit: <h1 class="text-3xl font-bold">{data.item.businessUnit}</h1>
	</h2>
	<h2 class="mt-6">
		Created on: <h1 class="text-3xl font-bold">{data.item.created.split(' ')[0]}</h1>
	</h2>
</div>
