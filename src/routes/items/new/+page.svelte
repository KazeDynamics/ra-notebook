<script>
	import { enhance } from '$app/forms';
	import { Input, DropdownBusinessUnit, DropdownCountry, DropdownProcess } from '$lib/components';
	export let form;
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
			use:enhance
		>
			<h3 class="text-3xl font-bold">Tell us more about this item</h3>
			<p class="mt-2 text-lg">We'll need the name, country, type of process, and business unit</p>
			<Input id="name" label="Item name" value={form?.data?.name} errors={form?.errors?.name} />
			<DropdownCountry
				id="country"
				label="Country"
				value={form?.data?.country}
				errors={form?.errors?.country}
			/>
			<DropdownProcess
				id="process"
				label="Process Type"
				value={form?.data?.process}
				errors={form?.errors?.process}
			/>
			<DropdownBusinessUnit
				id="businessUnit"
				label="Business Unit"
				value={form?.data?.businessUnit}
				errors={form?.errors?.businessUnit}
			/>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg">+ Create Item</button>
			</div>
		</form>
	</div>
</div>
