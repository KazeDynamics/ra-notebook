<script>
	import Icon from '@iconify/svelte';

	export let item;
	const countryUrlMap = {
		guatemala: 'my/items/guatemala',
		honduras: 'my/items/honduras',
		elSalvador: 'my/items/elSalvador',
		nicaragua: 'my/items/nicaragua',
		costaRica: 'my/items/costaRica',
		panama: 'my/items/panama'
	};

	const country = item.country;

	let url = countryUrlMap[country] ? countryUrlMap[country] : '/home';

	const countryFlagMap = {
		guatemala: 'twemoji:flag-guatemala',
		honduras: 'twemoji:flag-honduras',
		elSalvador: 'twemoji:flag-el-salvador',
		nicaragua: 'twemoji:flag-nicaragua',
		costaRica: 'twemoji:flag-costa-rica',
		panama: 'twemoji:flag-panama'
	};
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
			<div class="flex flex-col items-center justify-center">
				<h2 class="text-3xl">
					{#if countryFlagMap[item.country]}
						<Icon icon={countryFlagMap[item.country]} class="text-xxl ml-4 mb-2 inline" />
					{/if}
				</h2>
				<h2>
					{#if item.status === true}
						<Icon
							class="text-xl ml-4 mb-2 mt-1 text-green-600 scale-150 text-center"
							icon="material-symbols:check-circle"
						/>
					{/if}
				</h2>
			</div>
		</div>
		<div class="card-actions justify-center pt-5">
			<a href={url} class="btn btn-primary">View Item</a>
		</div>
	</div>
</div>
