<script>
	import { enhance } from '$app/forms';
	import { Input, DropdownCountry, DropdownProcess, DropdownBusinessUnit } from '$lib/components';
	export let form;
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			use:enhance
		>
			<h3 class="text-3xl font-bold">Please provide the product information</h3>
			<Input id="name" label="Product Name" value={form?.data?.name} errors={form?.errors?.name} />
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
				<button type="submit" class="btn btn-primary w-full max-w-lg">Create Item</button>
			</div>
		</form>
	</div>
</div>
