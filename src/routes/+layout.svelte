<script>
	import Header from './Header.svelte';
	import "../app.css";
</script>

<div class="flex flex-col bg-black">
	<Header />

	<main>
		<slot />
	</main>

</div>
