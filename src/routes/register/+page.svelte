<script>
	import { Input } from '$lib/components';
	export let form;
</script>

<div class="flex flex-col items-center h-full w-full p-8">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Register for an account
	</h2>
	<p class="text-center mt-1">
		Or <a href="/login" class="text-primary font-medium hover:cursor-pointer hover:underline"
			>sign in</a
		> if you already have an account.
	</p>
	<form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
		<Input
			id="name"
			label="First and Last Name"
			value={form?.data?.name}
			errors={form?.errors?.name}
		/>
		<Input
			type="email"
			id="email"
			label="Email"
			value={form?.data?.email}
			errors={form?.errors?.email}
		/>
		<Input type="password" id="password" label="Password" errors={form?.errors?.password} />
		<Input
			type="password"
			id="passwordConfirm"
			label="Confirm Password"
			errors={form?.errors?.passwordConfirm}
		/>
		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn btn-primary w-full">Register</button>
		</div>
		{#if form?.success}
			<div class="alert alert-success shadow-lg w-full max-w-md">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>An email has been sent to verify your account!</span>
				</div>
			</div>
			<div class="alert alert-info shadow-lg w-full max-w-md">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="stroke-current flex-shrink-0 w-6 h-6"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>Log in once your email has been verified</span>
				</div>
			</div>
		{/if}
	</form>
</div>
