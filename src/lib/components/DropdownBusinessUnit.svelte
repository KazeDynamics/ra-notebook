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
		<option disabled selected>Choose a Business Unit</option>
		<option value="bu1">BU1</option>
		<option value="bu2">BU2</option>
		<option value="bu3">BU3</option>
		<option value="bu4">BU4</option>
		<option value="bu5">BU5</option>
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
