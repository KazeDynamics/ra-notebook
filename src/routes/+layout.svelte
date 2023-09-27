<script>
	import '../app.postcss';
	import { getImageURL } from '$lib/utils';
	import { Toaster } from 'svelte-french-toast';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	export let data;
	import Icon from '@iconify/svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { onMount } from 'svelte';

	let loading = false;

	const submitUpdateTheme = ({ action }) => {
		loading = true;
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
			if (typeof window !== 'undefined') {
				window.localStorage.setItem('theme', theme);
			}
		}
		loading = false;
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			const savedTheme = window.localStorage.getItem('theme');
			if (savedTheme) {
				document.documentElement.setAttribute('data-theme', savedTheme);
			}
		}
	});

	$: {
		if (!data.user && typeof window !== 'undefined') {
			const savedTheme = window.localStorage.getItem('theme');
			if (savedTheme) {
				document.documentElement.setAttribute('data-theme', boston);
			}
		}
	}
	const themes = [
		'boston',
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];

	inject({ mode: dev ? 'development' : 'production' }); //analytics
</script>

<Toaster />
<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div>
			<nav class="navbar bg-primary z-50 relative">
				{#if data.user}
					<div class="flex-none lg:hidden">
						<label for="my-drawer" class="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-6 h-6 stroke-current text-base-100"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/></svg
							>
						</label>
					</div>
				{/if}
				{#if !data.user}
					<div class="flex-1">
						<a href="/" class="btn btn-ghost normal-case text-xl pl-2 text-base-100 e">Notebook</a>
					</div>
				{:else}
					<div class="flex-1">
						<a href="/home" class="btn btn-ghost normal-case text-xl pl-2 text-base-100"
							>Regulatory Notebook</a
						>
					</div>
				{/if}
				<div class="flex-none">
					{#if !data.user}
						<div class="dropdown dropdown-end">
							<a href="/login" class="btn btn-primary bg-base-100 border-black text-black">Login</a>
							<a href="/register" class="btn btn-secondary">Register</a>
						</div>
					{:else}
						<div class="dropdown">
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label tabindex="0" class="btn btn-ghost btn-circle">🎨</label>
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<ul
								tabindex="0"
								class="flex flex-nowrap menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 max-h-60 right-0 overflow-y-scroll sticky border-4"
							>
								{#each themes as theme}
									<form
										method="POST"
										use:enhance={submitUpdateTheme}
										action="/?/setTheme&theme={theme}&redirectTo={$page.url.pathname}"
									>
										<li class="!rounded-none font-bold">
											<button type="submit" class="capitalize" disabled={loading}>{theme}</button>
										</li>
									</form>
								{/each}
							</ul>
						</div>
						<div class="dropdown dropdown-end">
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label tabindex="0" class="btn btn-ghost btn-circle avatar">
								<div class="w-10 rounded-full">
									<img
										src={data.user?.avatar
											? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
											: `https://ui-avatars.com/api/?name=${data.user?.name}`}
										alt="User avatar"
									/>
								</div>
							</label>
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<ul
								tabindex="0"
								class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<a href="/my/items" class="justify-between">My Items</a>
								</li>
								<li>
									<a href="/my/items/open" class="justify-between">Open Items</a>
								</li>
								<li>
									<a href="/my/items/completed" class="justify-between">Completed Items</a>
								</li>
								<li><a href="/my/settings">Settings</a></li>
								<li>
									<form action="/logout" method="POST">
										<button type="submit" class="w-full text-start">Logout</button>
									</form>
								</li>
							</ul>
						</div>
					{/if}
				</div>
			</nav>
			<div class="flex flex-row">
				{#if data.user}
					<ul class="menu bg-base-100 min-w-[12rem] hidden lg:flex first:mt-2">
						<!-- <li>
							<span
								><Icon icon="material-symbols:map" class="inline text-xl" />Map
								<div class="badge badge-accent  min-w-fit">Coming soon!</div></span
							>
						</li> -->
						<li class="pb-4">
							<a href="/items/new"
								><Icon icon="bi:plus-circle" class="text-green-700 inline text-xl" />Add Item</a
							>
						</li>
						<li class="menu-title">
							<span>LATAM Countries</span>
						</li>
						<li>
							<a href="/my/items/guatemala"
								><Icon
									icon="game-icons:byzantin-temple"
									class="inline text-xl text-blueGray-500"
								/>Guatemala</a
							>
						</li>
						<li>
							<a href="/my/items/honduras"
								><Icon icon="noto:palm-tree" class="inline text-xl" />Honduras</a
							>
						</li>
						<li>
							<a href="/my/items/elSalvador"
								><Icon icon="game-icons:mountain-cave" class="inline text-xl text-amber-700" />El
								Salvador</a
							>
						</li>
						<li>
							<a href="/my/items/nicaragua"
								><Icon icon="emojione:volcano" class="inline text-xl" />Nicaragua</a
							>
						</li>
						<li>
							<a href="/my/items/costaRica"
								><Icon icon="game-icons:waterfall" class="inline text-xl text-lightBlue-600" />Costa
								Rica</a
							>
						</li>
						<li>
							<a href="/my/items/panama"
								><Icon icon="openmoji:ship" class="inline text-xl" />Panama</a
							>
						</li>
						<li class="menu-title pt-11">
							<span>Resources</span>
						</li>
						<li>
							<a href="/my/items/master"
								><Icon icon="gg:list" class="inline text-xl" />Master List</a
							>
						</li>
					</ul>
				{/if}
				{#if !data.user}
					<div class="flex-auto">
						<div class="mx-auto">
							<slot />
						</div>
					</div>
				{:else}
					<div class="flex-auto py-4 px-4 md:px-0">
						<div class="mx-auto lg:mx-0 max-w-max xl:max-w-full sm:px-8">
							<slot />
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 bg-base-100 w-full sm:w-80 h-full">
			<!-- <li class="py-2 h-12">
				<span
					><Icon icon="material-symbols:map" class="inline text-xl" />Map
					<div class="badge badge-accent">Coming soon!</div></span
				>
			</li> -->
			<li class="py-2">
				<a
					on:click={() => {
						document.getElementById('my-drawer').checked = false;
					}}
					href="/items/new"
					><Icon icon="bi:plus-circle" class="text-green-700 inline text-xl" />Add Item</a
				>
			</li>
			<!-- Sidebar content here -->
			<li class="menu-title">
				<span>LATAM Countries</span>
			</li>
			<li>
				<a
					on:click={() => {
						document.getElementById('my-drawer').checked = false;
					}}
					href="/my/items/guatemala"
					><Icon
						icon="game-icons:byzantin-temple"
						class="inline text-xl text-blueGray-500"
					/>Guatemala</a
				>
			</li>
			<li>
				<a
					on:click={() => {
						document.getElementById('my-drawer').checked = false;
					}}
					href="/my/items/honduras"><Icon icon="noto:palm-tree" class="inline text-xl" />Honduras</a
				>
			</li>
			<li>
				<a
					on:click={() => {
						document.getElementById('my-drawer').checked = false;
					}}
					href="/my/items/elSalvador"
					><Icon icon="game-icons:mountain-cave" class="inline text-xl text-amber-700" />El Salvador</a
				>
			</li>
			<li>
				<a
					on:click={() => {
						document.getElementById('my-drawer').checked = false;
					}}
					href="/my/items/nicaragua"
					><Icon icon="emojione:volcano" class="inline text-xl" />Nicaragua</a
				>
			</li>
			<li>
				<a
					on:click={() => {
						document.getElementById('my-drawer').checked = false;
					}}
					href="/my/items/costaRica"
					><Icon icon="game-icons:waterfall" class="inline text-xl text-lightBlue-600" />Costa Rica</a
				>
			</li>
			<li>
				<a
					on:click={() => {
						document.getElementById('my-drawer').checked = false;
					}}
					href="/my/items/panama"><Icon icon="openmoji:ship" class="inline text-xl" />Panama</a
				>
			</li>
			<li class="mt-auto">
				<a
					on:click={() => {
						document.getElementById('my-drawer').checked = false;
					}}
					href="/my/items/master"><Icon icon="gg:list" class="inline text-xl" />Master List</a
				>
			</li>
		</ul>
	</div>
</div>
