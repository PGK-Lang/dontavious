<script>
	import Header from '../lib/components/Header.svelte';
	import "../app.css";

	import {onMount} from 'svelte'
	import {auth} from "../lib/firebase/firebase.client"
    import { signInWithCredential } from 'firebase/auth';

	// onMount(() => {
	// 	const unsubscribe = auth.onAuthStateChanged((user) => {
	// 		console.log(user)
	// 	})
	// }
	// )
</script>

<div class="overflow-hidden">
	<Header />
	
	<main class="flex flex-col">
		<slot />
	</main>

</div>
