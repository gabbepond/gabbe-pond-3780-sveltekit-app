<script lang="ts">
	import type { MovieType } from '$lib/types/MovieType';
	import MovieCard from '$lib/components/MovieCard.svelte';

	let { data } = $props<{ data: { body: MovieType } }>();
	let movie = data.body;

	console.log(data);
</script>

<main class="min-h-screen flex items-center justify-center bg-primary-50-950">
	<MovieCard {movie} />
</main>