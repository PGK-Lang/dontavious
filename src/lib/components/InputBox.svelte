<script lang="ts">
	export let placeholder = 'placeholder'

	export let value = "";
</script>

<input type="text"
	class="input" 
	placeholder={placeholder} autocomplete="off" required
	bind:value={value}>