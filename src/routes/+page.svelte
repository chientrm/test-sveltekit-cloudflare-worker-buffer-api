<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Encrypted message: {data.encrypted}</p>
