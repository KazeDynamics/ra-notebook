<script>
	import { enhance } from '$app/forms';
	import { Icon, Trash } from 'svelte-hero-icons';
	import { Input, DropdownCountry, DropdownProcess, DropdownBusinessUnit } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	export let data;
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			method="POST"
			action="?/updateItem"
			class="flex flex-col space-y-2 w-full items-center"
			use:enhance
		>
			<h3 class="text-3xl font-bold">Edit {data.item.name}</h3>
			<Input id="name" label="Item name" value={data.item.name ?? ''} />
			<DropdownCountry id="country" label="Item country" value={data.item.country ?? ''} />
			<DropdownProcess id="process" label="Item process" value={data.item.process ?? ''} />
			<DropdownBusinessUnit
				id="businessUnit"
				label="Item business unit"
				value={data.item.businessUnit ?? ''}
			/>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg">Save Changes</button>
			</div>
		</form>
	</div>
</div>
