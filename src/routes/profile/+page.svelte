<script lang=ts>
    import { auth, db, authHandlers, readHandlers } from "$lib/firebase/firebase.client";
    import { snapshotEqual } from "firebase/firestore";
    import { FirebaseApp, userStore } from "sveltefire";
    const user = userStore(auth);
    let usr = readHandlers.readUserName()

</script>

<!-- Title -->
<div class="text-white uppercase mx-auto pt-16 pb-[5%] relative z-0 flex flex-col items-center justify-center">
	<h1 class="tracking-[1.5rem] text-5xl text-center">
        VIEW PROFILE
	</h1>
</div>

<form>
    <!-- Columns -->
    <div class="columns-3">

      <!-- Row 1: age, pronouns, occupation -->
      <div class="max-w-sm rounded overflow-hidden align-middle row-auto">

        <!-- Name -->
        <div class="text-white uppercase ml-[15%] pt-[1%] pb-[2%] px-auto relative z-0 flex flex-col items-left justify-left">
            <h1 class=" text-4xl text-left uppercase">
                <b>{$user?.displayName}</b>
            </h1>
        </div>

        <!-- Age -->
        <div class="text-white uppercase ml-[15%] pt-[1%] pb-[2%] px-auto relative z-0 flex flex-col items-left justify-left">
            <h1 class=" text-3xl text-left uppercase">
                {#await usr}
	            <p>...waiting</p>
                {:then string}
                    <button on:click={() => console.log(typeof(string))}>{string}</button>
                {:catch error}
	            <p style="color: red">{error.message}</p>
                {/await}
            </h1>
        </div>

        <!-- Pronouns -->
        <div class="text-white uppercase ml-[15%] pt-[1%] pb-[2%] px-auto relative z-0 flex flex-col items-left justify-left">
            <h1 class=" text-3xl text-left uppercase">
                he/him
            </h1>
        </div>
    
        <!-- Occupation -->
        <div class="text-white uppercase ml-[15%] pt-[1%] pb-[2%] px-auto relative z-0 flex flex-col items-left justify-left">
            <h1 class=" text-3xl text-left uppercase">
                cook
            </h1>
        </div>
      </div>
    
    
      <!-- Row 2: image -->
      <div class="max-w-sm overflow-hidden align-middle row-auto border-8 border-hot-pink rounded-lg">
        <img src="/spongebob.png" alt="spongebob" style="background-color:#e14761">
      </div>
    
    
      <!-- Row 3: description -->
      <div class="text-white uppercase ml-[10%] mr-[10%] pt-[1%] pb-[2%] px-auto relative z-0 flex flex-col items-left justify-left">
        <h1 class=" text-2xl text-left uppercase">
            SpongeBob SquarePants is the protagonist of the American animated television series of the same name. Voiced by Tom Kenny, he is characterized by his optimism and childlike attitude. SpongeBob is commonly seen hanging out with his friend Patrick Star, working at the Krusty Krab.
        </h1>
    </div>
    </div>
    
    
    <!-- Location -->
    <div class="text-white uppercase mx-auto pt-0 pb-[0%] relative z-0 flex flex-col items-center justify-center">
    </div>
    
    
    <!-- logout -->
    <div class="text-white uppercase mx-auto pt-16 pb-[5%] relative z-0 flex flex-col items-center justify-center">
        <a href="/">
            <button on:click = {() => authHandlers.logout()} id="login" class="bg-hot-pink hover:bg-hot-pink-hover text-white py-2 rounded-full align-center px-20">
                <h1 class=" text-3xl text-center">logout</h1>
            </button>
        </a>
    </div>
    
    
    <script lang="ts">
        // validates if password is same as confirm password and if all fields are filled
        function Validate() {  
            location.href = '/profile';
      }
      
    
    document.getElementById("next").addEventListener("click", Validate);
    </script>
    
</form>


