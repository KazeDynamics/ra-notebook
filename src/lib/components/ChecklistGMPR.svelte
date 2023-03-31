<script>
	import { writable } from 'svelte/store';

	export let tasks2 = [];

	const checkboxes = writable(tasks2.map(() => false));

	function handleCheckboxChange(index, event) {
		checkboxes.update((values) => {
			const newValues = [...values];
			newValues[index] = event.target.checked;
			return newValues;
		});
	}
</script>

<div class="overflow-x-auto w-full flex">
	<table class="table w-full ">
		<thead>
			<tr>
				<th style="z-index: 0" />
				<th>Task</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
			{#each tasks2 as task2, index}
				<tr>
					<th style="z-index: 0">
						<label>
							<input
								type="checkbox"
								class="checkbox checkbox-success"
								bind:checked={checkboxes[index]}
								on:change={(event) => handleCheckboxChange(index, event)}
							/>
						</label>
					</th>
					<td>{task2}</td>
					<td
						>{#if checkboxes[index]}<span class="badge badge-success gap-2">Completed</span
							>{:else}<span class="badge badge-info gap-2">In Progress</span>{/if}</td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
