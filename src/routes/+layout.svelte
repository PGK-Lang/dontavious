<script>
	import Header from '../lib/components/Header.svelte';
	import "../app.css";

	import {onMount} from 'svelte'
	import {auth} from "../lib/firebase/firebase.client"
	import { signInWithCredential } from 'firebase/auth';

</script>

<div class="overflow-hidden">
	<Header />
	
	<main class="flex flex-col">
		<slot />
	</main>

</div>
