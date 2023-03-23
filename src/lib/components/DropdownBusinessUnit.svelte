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
		<option value="IC">IC</option>
		<option value="PI">PI</option>
		<option value="CRM">CRM</option>
		<option value="EP">EP</option>
		<option value="ENDO">ENDO</option>
		<option value="URO">URO</option>
		<option value="NMD">NMD</option>
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
