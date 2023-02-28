<script lang="ts">
	export let placeholder = 'placeholder'
    export let state = true;
	export let value = "";
	export let type="basic";

    

</script>

{#if type == "basic"}
{#if state}
<input type="text"
	placeholder={placeholder} autocomplete="off" required
	class="text-black ml-[15%] pt-[1%] pb-[2%] px-auto relative z-0 flex flex-col items-left justify-left"
	bind:value={value}>
{:else}
<div class="text-white uppercase ml-[15%] pt-[1%] pb-[2%] px-auto relative z-0 flex flex-col items-left justify-left">
	<h1 class=" text-3xl text-left uppercase">
		{value}
	</h1>
</div>
{/if}

{:else if type == "text"}
{#if state}
<textarea placeholder={placeholder} class="text-black" rows=10 cols=50 maxlength="250" bind:value={value}></textarea>
{:else}
<div class="text-white uppercase ml-[15%] pt-[1%] pb-[2%] px-auto relative z-0 flex flex-col items-left justify-left">
	<h1 class=" text-3xl text-left uppercase">
		{value}
	</h1>
</div>
{/if}
{/if}