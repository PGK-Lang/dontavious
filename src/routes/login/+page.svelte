<script>
	import { authHandlers } from '$lib/firebase/firebase.client';
	import InputBox from '$lib/components/InputBox.svelte';

	let email = "";
	let pwd = "";
</script>

<div class="signup-container space-y-6">
	<h1 class="text-2xl sm:text-5xl uppercase font-semibold ">
		LOG IN
	</h1>
	<p class="font-base">
		Don't have an account? <a class="text-black font-semibold underline" href="/login/signup">Sign up!</a>
	</p>
	<InputBox placeholder="email..." bind:value={email}/>
	<InputBox placeholder="password..." bind:value={pwd}/>
	<a href="/profile">
		<button on:click={() => authHandlers.login(email, pwd) } class="bg-black text-hot-pink rounded-lg w-1/6 h-12 uppercase text-2xl font-semibold">
			log in
		</button>
	</a>

</div>