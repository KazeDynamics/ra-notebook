<script>
	import '../app.postcss';
	import { getImageURL } from '$lib/utils';
	import { Toaster } from 'svelte-french-toast';
	export let data;
	import Icon from '@iconify/svelte';
</script>

<Toaster />
<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="min-h-full">
			<nav class="navbar border-b bg-primary">
				{#if data.user}
					<div class="flex-none lg:hidden">
						<label for="my-drawer-3" class="btn btn-square btn-ghost ">
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
			<div class=" flex flex-row">
				{#if data.user}
					<ul class="menu bg-base-100 w-56 hidden lg:block border border-solid border-r-gray-300">
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
						<div class="mx-auto max-w-max xl:max-w-full lg:px-8">
							<slot />
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100">
			<!-- <li class="py-2 h-12">
				<span
					><Icon icon="material-symbols:map" class="inline text-xl" />Map
					<div class="badge badge-accent">Coming soon!</div></span
				>
			</li> -->
			<li class="py-2">
				<a
					on:click={() => {
						document.getElementById('my-drawer-3').click();
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
						document.getElementById('my-drawer-3').click();
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
						document.getElementById('my-drawer-3').click();
					}}
					href="/my/items/honduras"><Icon icon="noto:palm-tree" class="inline text-xl" />Honduras</a
				>
			</li>
			<li>
				<a
					on:click={() => {
						document.getElementById('my-drawer-3').click();
					}}
					href="/my/items/elSalvador"
					><Icon icon="game-icons:mountain-cave" class="inline text-xl text-amber-700" />El Salvador</a
				>
			</li>
			<li>
				<a
					on:click={() => {
						document.getElementById('my-drawer-3').click();
					}}
					href="/my/items/nicaragua"
					><Icon icon="emojione:volcano" class="inline text-xl" />Nicaragua</a
				>
			</li>
			<li>
				<a
					on:click={() => {
						document.getElementById('my-drawer-3').click();
					}}
					href="/my/items/costaRica"
					><Icon icon="game-icons:waterfall" class="inline text-xl text-lightBlue-600" />Costa Rica</a
				>
			</li>
			<li>
				<a
					on:click={() => {
						document.getElementById('my-drawer-3').click();
					}}
					href="/my/items/panama"><Icon icon="openmoji:ship" class="inline text-xl" />Panama</a
				>
			</li>
		</ul>
	</div>
</div>
