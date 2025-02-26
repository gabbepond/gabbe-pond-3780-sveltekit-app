<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types'

	const { data, children } = $props<{ data: PageData, children: any }>();

	//let { children } = $props();
	console.log(data?.userProfile);
</script>
<button class="btn preset-filled rounded-md !p-6 uppercase  text-xl"><a href="/api/auth/login">Sign in</a></button>

{@render children()}
