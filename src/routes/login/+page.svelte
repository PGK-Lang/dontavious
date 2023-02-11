<script>
	import InputBox from "$lib/components/InputBox.svelte";
	import { onValue } from "firebase/database";
	import { authHandlers, readHandlers } from "../../lib/firebase/firebase.client"
	import { base } from "$app/paths";
    import { get_custom_elements_slots } from "svelte/internal";

	let email = ''
	let password = ''
</script>


<!-- create account page title -->
<div class="text-white uppercase mx-auto pt-16 pb-[3%] relative z-0 flex flex-col items-center justify-center">
	<h1 class="tracking-[1.5rem] text-5xl text-center pb-[20%]">
        login
	</h1>
	<!-- link to sign up -->
    <p class="text-1xl text-center uppercase">
        don't have an account? <a href="/login/signup" class="text-button">sign up!</a>
    </p>
</div>


<form class="bg-black rounded px-8 pt-6 pb-8 mb-4">
<!-- Email -->
<InputBox type="text" id="email" placeholder="EMAIL" />


<!-- Password -->
<InputBox type="password" id="password" placeholder="PASSWORD"/>

<!-- alerts -->
<div class="text-white uppercase mx-auto pt-1 relative z-0 flex flex-col items-center justify-center">
	<p id="incomplete" class="text-1xl text-center uppercase"></p>
</div>


<!-- Login Button -->
<div class="text-white uppercase mx-auto pt-[5%] pb-[5%] px-80 relative z-0 flex flex-col items-center justify-center">
		<button on:click={() => console.log("x")} id="login" class="bg-hot-pink hover:bg-hot-pink-hover text-white py-2 rounded-full align-center px-20">
			<h1 class=" text-3xl text-center">LOGIN</h1>
		</button>	
</div>
<script>
	function Validate() {
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value; 
		
		var incomplete = document.getElementById("incomplete");

		if(email == "" || password == "")  {   
			incomplete.innerHTML =  "Fields not all filled!!";
		} else {
			incomplete.innerHTML =  "";
			//location.href = '/';
	}  
}  
document.getElementById("login").addEventListener("click", Validate);
</script>
</form>
