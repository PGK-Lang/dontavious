<script>
    import { authHandlers } from "$lib/firebase/firebase.client";


// @ts-nocheck

    export let value = "";
    let words = value.split(' ').length;
    const handleInput = (event) => {
        words = value.length
    }
</script>

<div class="signup-container space-y-6">
    <h1 class="text-2xl sm:text-5xl uppercase font-semibold ">
		Create Bio
	</h1>
    <p>Create a Little Biography About Yourself! Make sure it is Under 250 Characters</p> 
    <textarea class="text-black" rows=10 cols=50 maxlength="250" bind:value={value} on:input={handleInput} />
    <p>{words}/250</p>
    <a href="/profile">
    <button  class="bg-black text-hot-pink rounded-lg uppercase text-2xl font-semibold" on:click={authHandlers.setBio(value)}>CREATE!</button>
    </a>
</div>
