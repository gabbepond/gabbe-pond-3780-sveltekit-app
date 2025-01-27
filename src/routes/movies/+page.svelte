<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	console.log(data?.body?.length);
</script>

<h1>Movies page</h1>

<div class="flex flex-wrap">
	{#if data.body}
		{#if data.body.length > 0}
			{#each data.body as movie}
				<div
					class="card card-hover m-4 block max-w-md divide-y overflow-hidden border-[1px] p-2 border-surface-200-800 divide-surface-200-800 preset-filled-surface-100-900"
				>
					<h2 class="text-lg">{movie.title}</h2>
					<h3 class="text-sm">{movie.year}</h3>
					<p>{movie.title}</p>
				</div>
			{/each}
		{:else}
			<p>There are {data.body.length} movies available</p>
		{/if}
	{:else}
		<li>No data returned from server</li>
	{/if}
</div>