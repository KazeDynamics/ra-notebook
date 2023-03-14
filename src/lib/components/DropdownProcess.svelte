<script>
	export let value = '';
	export let id;
	export let label;
	export let type = 'select';
	export let disabled = false;
	export let required = false;
	export let errors;
</script>

<div class="form-control w-full max-w-lg">
	<label for={id} class="label font-medium pb-1">
		<span class="label-text">{label}</span>
	</label>
	<select
		class="select select-primary w-full max-w-xs"
		{type}
		{required}
		{disabled}
		{id}
		name={id}
		{value}
	>
		<option disabled selected>Choose a process type</option>
		<option value="productSubmission">Product Submission</option>
		<option value="productRenewal">Product Renewal</option>
	</select>
	{#if errors}
		{#each errors as error}
			<label for={id} class="label py-0 pt-1">
				<span class="label-text-alt text-error">
					{error}
				</span>
			</label>
		{/each}
	{/if}
</div>
