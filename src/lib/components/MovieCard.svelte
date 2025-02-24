<script lang="ts">
    import type { MovieType } from '$lib/types/MovieType';
    import { Rating } from '@skeletonlabs/skeleton-svelte';

    let { movie } = $props<{ movie: MovieType }>();
  
    // Calculate star rating
    const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(movie.rating));
  </script>
  
  <div class="card w-full max-w-2xl bg-white dark:bg-gray-800 shadow-xl">
    <div class="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
      <!-- Movie Poster -->
      <div class="relative aspect-[2/3] w-full">
        <img
          src={movie.poster || "/placeholder.svg"}
          alt="{movie.title} poster"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
  
      <!-- Content -->
      <div class="p-6 flex flex-col gap-4">
        <!-- Header -->
        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tight">
            {movie.title} <span class="text-gray-500 dark:text-gray-400">({movie.year})</span>
          </h2>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Directed by <span class="font-semibold">{movie.directors.join(',')}</span>
          </p>
        </div>
  
        <!-- Rating -->
        <div class="flex items-center gap-4">
          <div class="flex gap-1">
            <Rating bind:value={movie.imdb.rating} allowHalf readOnly></Rating>
          </div>
          <span class="text-sm font-medium">{movie?.imdb?.rating}</span>
          <span class="text-sm text-gray-500 dark:text-gray-400">({movie.reviews} reviews)</span>
        </div>
  
        <!-- Metadata -->
        <div class="flex gap-4 text-sm">
          <span class="px-2.5 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100">
            {movie.runtime} minutes
          </span>
          {#each movie.genre as g}
            <span class="px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
              {g}
            </span>
          {/each}
        </div>
  
        <!-- Plot -->
        <p class="text-gray-700 dark:text-gray-300 line-clamp-3">
          {movie.plot}
        </p>
  
        <!-- Cast -->
        <div class="space-y-2">
          <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">Starring</h3>
          <div class="flex flex-wrap gap-2">
            {#each movie.cast as actor}
              <span class="px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm">
                {actor}
              </span>
            {/each}
          </div>
        </div>
  
        <!-- Actions -->
        <div class="flex gap-4 mt-auto">
          <span class="text-sm font-medium">{movie.genres.join(', ')}</span>
          <button class="btn preset-outlined-primary-50-950" type="button">
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    /* Add any custom styles here if needed */
  </style>