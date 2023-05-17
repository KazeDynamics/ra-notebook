<script>
	import { createEventDispatcher } from 'svelte';
	import { enhance } from '$app/forms';
	import { Modal } from '$lib/components';
	import toast from 'svelte-french-toast';

	let modalOpen = false;
	const label = 'modal1';

	function openModal() {
		modalOpen = true;
	}

	let loading = false;
	const submitDeleteItem = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Item completed!');
					await update();
					break;
				case 'error':
					toast.error('Could not complete item. Try again later.');
					break;
				default:
					await update();
			}
			loading = false;
		};
	};

	const dispatch = createEventDispatcher();

	export let tasks = [];
	export let item;

	let completedPercentage = 0;

	function handleCheckboxClick(task) {
		task.completed = !task.completed;
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(`${item.id}_${task.name}`, task.completed.toString());
		}
		updateCompletedPercentage();
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

	function updateCompletedPercentage() {
		let completedTasks = 0;
		tasks.forEach((task) => {
			getSavedState(task);
			if (task.completed) {
				completedTasks++;
			}
		});
		completedPercentage = (completedTasks / tasks.length) * 100;

		if (completedPercentage === 100) {
			openModal();
		}
	}

	$: updateCompletedPercentage();

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

<div class="relative pt-1">
	<div class="flex mb-2 items-center justify-between">
		<div>
			<span
				class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded {completedPercentage ===
				100
					? 'text-green-500 bg-green-100'
					: 'text-blue-600 bg-blue-200'}"
			>
				{completedPercentage === 100 ? 'Completed' : 'Progress'}
			</span>
		</div>
		<div class="text-right">
			<span
				class="text-xs font-semibold inline-block {completedPercentage === 100
					? 'text-success'
					: 'text-blue-600'}"
			>
				{completedPercentage.toFixed(0)}%
			</span>
		</div>
	</div>
	<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
		<div
			class="{completedPercentage === 100
				? 'bg-green-600'
				: 'bg-blue-600'} w-0 transition-all duration-500"
			style={`width: ${completedPercentage}%;`}
		/>
	</div>
</div>

<Modal {label} checked={modalOpen}>
	<div slot="heading">
		<h3 class="text-2xl">Congratulations!</h3>
		<p class="text-base font-normal mt-2">You've completed all the tasks for this product.</p>
	</div>
	<div slot="actions" class="flex w-full items-center justify-center space-x-2">
		<form action="?/deleteItem" method="POST" use:enhance={submitDeleteItem}>
			<input type="hidden" name="id" value={item.id} />
			<button type="submit" class="btn btn-success" disabled={loading}>Complete</button>
		</form>
	</div>
</Modal>
