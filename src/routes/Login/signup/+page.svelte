<script>
// @ts-nocheck

    import { authHandlers } from "$lib/firebase/firebase.client";


</script>

<svelte:head>
	<title>Don't Leave Me</title>
	<meta name="description" content="Don't Leave Me (Dontavious): Exclusive dating app for high schoolers by high schoolers" />
</svelte:head>

<div class="text-white uppercase mx-auto pt-16 pb-[2%] relative z-0 flex flex-col items-center justify-center">
	<h1 class="tracking-[1.5rem] text-5xl text-center">
        CREATE ACCOUNT
	</h1>
</div>
<form class="bg-black rounded px-8 pt-6 pb-8 mb-4">
<div class="text-white uppercase mx-auto pt-[1%] px-80 relative z-0 flex flex-col items-center justify-center">
	<input type="text" 
		id="first_name" 
		class="bg-hot-pink border border-hot-pink text-white text-sm rounded-lg focus:bg-hot-pink focus:border-hot-pink block w-full p-2.5 dark:bg-hot-pink dark:border-hot-pink dark:placeholder-white dark:text-white dark:focus:ring-hot-pink dark:focus:border-hot-pink" 
		placeholder="FIRST NAME" style="width: 500px; text-align: center;" autocomplete="off" required>
</div>

<div class="text-white uppercase mx-auto pt-[1%] px-80 relative z-0 flex flex-col items-center justify-center">
	<input type="text" 
		id="last_name" 
		class="bg-hot-pink border border-hot-pink text-white text-sm rounded-lg focus:bg-hot-pink focus:border-hot-pink block w-full p-2.5 dark:bg-hot-pink dark:border-hot-pink dark:placeholder-white dark:text-white dark:focus:ring-hot-pink dark:focus:border-hot-pink" 
		placeholder="LAST NAME" style="width: 500px; text-align: center;" autocomplete="off" required>
</div>

<div class="text-white uppercase mx-auto pt-[1%] px-80 relative z-0 flex flex-col items-center justify-center">
	<input
	type="text" 
		id="email" 
		class="bg-hot-pink border border-hot-pink text-white text-sm rounded-lg focus:bg-hot-pink focus:border-hot-pink block w-full p-2.5 dark:bg-hot-pink dark:border-hot-pink dark:placeholder-white dark:text-white dark:focus:ring-hot-pink dark:focus:border-hot-pink" 
		placeholder="USERNAME" style="width: 500px; text-align: center;" autocomplete="off" required>
</div>

<div class="text-white uppercase mx-auto pt-[4%] px-80 relative z-0 flex flex-col items-center justify-center">
	<input type="password" 
		id="password" 
		class="bg-hot-pink border border-hot-pink text-white text-sm rounded-lg focus:bg-hot-pink focus:border-hot-pink block w-full p-2.5 dark:bg-hot-pink dark:border-hot-pink dark:placeholder-white dark:text-white dark:focus:ring-hot-pink dark:focus:border-hot-pink" 
		placeholder="PASSWORD" style="width: 500px; text-align: center;" autocomplete="off" required>
</div>

<div class="text-white uppercase mx-auto pt-[1%] px-80 relative z-0 flex flex-col items-center justify-center">
	<input type="password" 
		id="comfirm_password" 
		class="bg-hot-pink border border-hot-pink text-white text-sm rounded-lg focus:bg-hot-pink focus:border-hot-pink block w-full p-2.5 dark:bg-hot-pink dark:border-hot-pink dark:placeholder-white dark:text-white dark:focus:ring-hot-pink dark:focus:border-hot-pink" 
		placeholder="CONFIRM_PASSWORD" style="width: 500px; text-align: center;" autocomplete="off" required>
</div>


<div class="text-white uppercase mx-auto pt-[4%] pb-[1%] px-80 relative z-0 flex flex-col items-center justify-center">
	<a href="http://localhost:5173/">
		<button type="submit" on:click={authHandlers.signup("banana@gmail.com", "helloworld", "helloworlld")} class="bg-hot-pink hover:bg-hot-pink-hover text-white py-2 rounded-full align-center px-20">
			<h1 class=" text-3xl text-center">NEXT</h1>
		</button>
	</a>	
</div>
</form>