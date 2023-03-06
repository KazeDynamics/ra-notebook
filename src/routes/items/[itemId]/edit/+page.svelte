<script>
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { Input, DropdownBusinessUnit, DropdownCountry, DropdownProcess } from '$lib/components';
	export let data;
	export let form;
	let loading = false;
	const submitUpdateItem = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			method="POST"
			action="?/updateItem"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
			use:enhance={submitUpdateItem}
		>
			<h3 class="text-3xl font-bold">Edit {data.item.name}</h3>
			<Input
				id="name"
				label="Project name"
				value={form?.data?.name ?? data.item.name}
				errors={form?.errors?.name}
			/>
			<DropdownCountry
				id="country"
				label="Country"
				value={form?.data?.country ?? data.item.country}
				errors={form?.errors?.country}
			/>
			<DropdownProcess
				id="process"
				label="Process Type"
				value={form?.data?.process ?? data.item.process}
				errors={form?.errors?.process}
			/>
			<DropdownBusinessUnit
				id="businessUnit"
				label="Business Unit"
				value={form?.data?.businessUnit ?? data.item.businessUnit}
				errors={form?.errors?.businessUnit}
			/>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg">Save Changes</button>
			</div>
		</form>
	</div>
</div>
