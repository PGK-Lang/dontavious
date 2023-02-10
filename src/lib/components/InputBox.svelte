<script>
	export let type = 'type'
	export let id = 'id'
	export let placeholder = 'placeholder'
</script>

<div class="text-white uppercase mx-auto pt-[1%] px-80 relative z-0 flex flex-col items-center justify-center">
	<input type={type}
		id={id} 
		class="bg-hot-pink border border-hot-pink text-white text-sm rounded-lg focus:bg-hot-pink focus:border-hot-pink block w-full p-2.5 dark:bg-hot-pink dark:border-hot-pink dark:placeholder-white dark:text-white dark:focus:ring-hot-pink dark:focus:border-hot-pink" 
		placeholder={placeholder} style="width: 500px; text-align: center;" autocomplete="off" required>
</div>