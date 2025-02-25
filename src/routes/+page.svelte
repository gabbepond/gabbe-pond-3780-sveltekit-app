<script lang="ts">
	import { browser } from '$app/environment';
    import type { PageData } from './$types'

	// Use $props() rune to get data from layout.server.ts load function
    const { data } = $props<{ data: PageData }>();

    //console.log('User Profile:', data.userProfile);
    //console.log('Is Authenticated:', data.isAuthenticated);

	//console.log('Browser:', browser);
</script>

<div class="container mx-auto flex h-screen items-center justify-center">
  	{#if data.isAuthenticated}
		<div>
			<h1>Welcome {data.userProfile?.given_name}!</h1>
			
		</div>
	{:else}
		<div class="flex flex-col items-center space-y-10">
			<h2 class="text-2xl">Welcome to Gabbe's SvelteKit App!</h2>
			<div class="flex gap-x-4 drop-shadow-lg">
				<a
					href="/api/auth/login?post_login_redirect_url=/"
					class="btn bg-purple-600 text-white">Login</a
				>
				<a href="/api/auth/register" class="btn bg-purple-600 text-white">Signup</a>
			</div>
			<a href="/api/auth/logout" class="btn  bg-purple-600 text-white">Logout</a>
		</div>
 	{/if}
</div>