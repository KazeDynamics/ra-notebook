<script>
	import { enhance } from '$app/forms';
	import { Input, DropdownCountry, DropdownProcess, DropdownBusinessUnit } from '$lib/components';
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			use:enhance
		>
			<h3 class="text-3xl font-bold">Tell us more about this item</h3>
			<Input id="name" label="Item name" />
			<DropdownCountry id="country" label="Item country" />
			<DropdownProcess id="process" label="Item process" />
			<DropdownBusinessUnit id="businessUnit" label="Item business unit" />
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg">Create Item</button>
			</div>
		</form>
	</div>
</div>
