<script>
	export let data;
</script>

<div class="flex flex-col w-full mt-4">
	<h1 class="text-2xl font-bold mt-4">
		{data.item.name}
	</h1>
	<p class="text-2xl font-light mt-2">{data.item.country}</p>
	<p>{data.item.process}</p>
</div>
