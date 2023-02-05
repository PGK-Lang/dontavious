<script>
import { authHandlers } from "../../lib/firebase/firebase.client"

let email = ''
let password = ''
</script>

<svelte:head>
	<title>Don't Leave Me</title>
	<meta name="description" content="Don't Leave Me (Dontavious): Exclusive dating app for high schoolers by high schoolers" />
</svelte:head>

<div class="text-white uppercase mx-auto pt-16 pb-[3%] relative z-0 flex flex-col items-center justify-center">
	<h1 class="tracking-[1.5rem] text-5xl text-center pb-[20%]">
        login
	</h1>
    <p class="text-1xl text-center uppercase">
        don't have an account? <a href="/Login/signup" class="text-button">sign up!</a>
    </p>
</div>


<div class="text-white uppercase mx-auto pt-[1%] px-80 relative z-0 flex flex-col items-center justify-center">
	<input bind:value={email} type="text" 
		id="username" 
		class="bg-hot-pink border border-hot-pink text-white text-sm rounded-lg focus:bg-hot-pink focus:border-hot-pink block w-full p-2.5 dark:bg-hot-pink dark:border-hot-pink dark:placeholder-white dark:text-white dark:focus:ring-hot-pink dark:focus:border-hot-pink" 
		placeholder="USERNAME" style="width: 500px; text-align: center;" autocomplete="off" required>
</div>

<div class="text-white uppercase mx-auto pt-[1%] px-80 relative z-0 flex flex-col items-center justify-center">
	<input bind:value={password} type="password" 
		id="password" 
		class="bg-hot-pink border border-hot-pink text-white text-sm rounded-lg focus:bg-hot-pink focus:border-hot-pink block w-full p-2.5 dark:bg-hot-pink dark:border-hot-pink dark:placeholder-white dark:text-white dark:focus:ring-hot-pink dark:focus:border-hot-pink" 
		placeholder="PASSWORD" style="width: 500px; text-align: center;" autocomplete="off" required>
</div>


<div class="text-white uppercase mx-auto pt-[5%] pb-[5%] px-80 relative z-0 flex flex-col items-center justify-center">
	<a href="/">
		<button class="bg-hot-pink hover:bg-hot-pink-hover text-white py-2 rounded-full align-center px-20">
			<h1 class=" text-3xl text-center">LOGIN</h1>
		</button>
	</a>	
</div>
