<script>
	import Header from './Header.svelte';
	import "../app.css";
</script>

<div class="overflow-hidden">
	<Header />

	<main class="flex flex-col">
		<slot />
	</main>

</div>
