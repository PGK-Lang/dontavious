<script>
// @ts-nocheck
	import InputBox from "$lib/components/InputBox.svelte";
    import { authHandlers } from "$lib/firebase/firebase.client";
</script>

<svelte:head>
	<title>Don't Leave Me</title>
	<meta name="description" content="Don't Leave Me (Dontavious): Exclusive dating app for high schoolers by high schoolers" />
</svelte:head>


<!-- create account page title -->
<div class="text-white uppercase mx-auto pt-16 pb-[2%] relative z-0 flex flex-col items-center justify-center">
	<h1 class="tracking-[1.5rem] text-5xl text-center">
        CREATE ACCOUNT
	</h1>
</div>


<form class="bg-black rounded px-8 pt-6 pb-8 mb-4">
<!-- first name -->
<InputBox type="text" id="first_name" placeholder="FIRST NAME" />


<!-- Last name -->
<InputBox type="text" id="last_name" placeholder="LAST NAME" />


<!-- Email -->
<InputBox type="text" id="email" placeholder="EMAIL" />


<!-- Blank space -->
<div class="pb-[4%]"></div>


<!-- password -->
<InputBox type="password" id="password" placeholder="PASSWORD" />


<!-- confirm password -->
<InputBox type="password" id="confirm_password" placeholder="CONFIRM PASSWORD" />


<!-- 'next' button -->
<div class="text-white uppercase mx-auto pt-[4%] pb-[1%] px-80 relative z-0 flex flex-col items-center justify-center">
	<a href="http://localhost:5173/">
		<button type="submit" on:click={authHandlers.signup("banana@gmail.com", "helloworld", "helloworlld")} class="bg-hot-pink hover:bg-hot-pink-hover text-white py-2 rounded-full align-center px-20">
			<h1 class=" text-3xl text-center">NEXT</h1>
		</button>
	</a>	
</div>
</form>