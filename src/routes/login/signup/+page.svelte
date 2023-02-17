<script lang="ts">
	import { authHandlers } from '$lib/firebase/firebase.client';
	import InputBox from '$lib/components/InputBox.svelte';

	let email = "";
	let pwd = "";
	let username = "";
</script>

<div class="signup-container space-y-6">
	<h1 class="text-2xl sm:text-5xl uppercase font-semibold ">
		SIGN UP
	</h1>
	<p class="font-base">
		Already have an account? <a class="text-black font-semibold underline" href="/login">Log in!</a>
	</p>
	<InputBox placeholder="email..." bind:value={email}/>
	<InputBox placeholder="username..." bind:value={username}/>
	<InputBox placeholder="password..." bind:value={pwd}/>
	<a href="/profile">
		<button on:click={() => authHandlers.signup(email, pwd, username)} class="bg-black text-hot-pink rounded-lg w-1/6 h-12 uppercase text-2xl font-semibold w-24">
			Next
		</button>
	</a>
</div>