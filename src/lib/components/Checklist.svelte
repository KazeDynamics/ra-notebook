<script>
	import { createEventDispatcher } from 'svelte';
	import { enhance } from '$app/forms';
	import { Modal } from '$lib/components';
	import toast from 'svelte-french-toast';

	let modalOpen;
	const label = 'modal1';

	function reverseDate(dateString) {
		const [year, month, day] = dateString.split('-');
		return `${month}-${day}-${year}`;
	}

	function openModal() {
		const modalShown = localStorage.getItem(`${item.id}_modalShown`);
		if (modalShown !== 'true') {
			modalOpen = true;
			localStorage.setItem(`${item.id}_modalShown`, 'true');
		}
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

	const submitUpdateItem = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Item updated successfully!');
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

	const dispatch = createEventDispatcher();

	export let tasks = [];
	export let item;

	export let completedPercentage = 0;

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

<div class="relative pt-1 min-[820px]:hidden">
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

<div class="overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th />
				<th class="whitespace-nowrap">Task</th>
				<th class="whitespace-nowrap">Status</th>
			</tr>
		</thead>
		<tbody>
			{#each tasks as task}
				<tr class="md:table-row overflow-x-auto">
					<td class="md:table-cell">
						<input
							type="checkbox"
							class="checkbox checkbox-success"
							bind:checked={task.completed}
							on:click={() => handleCheckboxClick(task)}
							disabled={completedPercentage === 100 || item.status === true}
						/>
					</td>
					<td class="md:table-cell whitespace-normal">{task.name}</td>
					<td>
						{#if task.completed}
							<span class="badge badge-success gap-2">Completed</span>
						{:else}
							<span class="badge-fix badge badge-info gap-2">In Progress</span>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<h2 class="float-right text-xs text-gray-400 pr-1">
	Created on: <h1 class="text-xs font-bold">{reverseDate(item.created.split(' ')[0])}</h1>
</h2>

<Modal {label} checked={modalOpen}>
	<div slot="heading">
		<h3 class="text-2xl">Congratulations!</h3>
		<p class="text-base font-normal mt-2">You've completed all the tasks for <b>{item.name}</b></p>
	</div>
	<div slot="actions" class="flex w-full items-center justify-center space-x-2">
		<form method="POST" action="?/updateItem" use:enhance={submitUpdateItem}>
			<input type="hidden" name="id" value={item.id} />
			<button
				type="submit"
				class="btn btn-success"
				disabled={loading}
				on:click={() => (modalOpen = false)}>Complete</button
			>
		</form>
		<form action="?/deleteItem" method="POST" use:enhance={submitDeleteItem}>
			<input type="hidden" name="id" value={item.id} />
			<button type="submit" class="btn btn-outline bg-error text-white" disabled={loading}
				>Delete</button
			>
		</form>
	</div>
</Modal>

<style lang="postcss">
	@media (min-width: 1024px) and (max-width: 1068px) {
		.badge-fix {
			width: 122%;
			gap: 0;
		}		
	}
	@media (max-width: 875px) {
		.badge-fix {
			width: 122%;
			gap: 0;
			font-size: 0.75rem;
			line-height: 1rem;
		}		
	}
</style>
