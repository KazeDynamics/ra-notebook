<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let tasks = [];
	export let item;

	function handleCheckboxClick(task) {
		task.completed = !task.completed;
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(`${item.id}_${task.name}`, task.completed.toString());
		}
		dispatch('update', tasks);
	}

	function getSavedState(task) {
		if (typeof localStorage !== 'undefined') {
			const savedState = localStorage.getItem(`${item.id}_${task.name}`);
			if (savedState !== null) {
				task.completed = savedState === 'true';
			}
		}
	}

	$: tasks.forEach((task) => getSavedState(task));

	$: dispatch('update', tasks);
</script>

<table class="table w-full">
	<thead>
		<tr>
			<th />
			<th>Task</th>
			<th>Status</th>
		</tr>
	</thead>
	<tbody>
		{#each tasks as task}
			<tr>
				<td>
					<input
						type="checkbox"
						class="checkbox checkbox-success"
						bind:checked={task.completed}
						on:click={() => handleCheckboxClick(task)}
					/>
				</td>
				<td>{task.name}</td>
				<td>
					{#if task.completed}
						<span class="badge badge-success gap-2">Completed</span>
					{:else}
						<span class="badge badge-info gap-2">In Progress</span>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
