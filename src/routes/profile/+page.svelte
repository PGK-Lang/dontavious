<script lang=ts>
    import { auth, db, authHandlers, readHandlers, updateHandlers } from "$lib/firebase/firebase.client";
    import { updateCurrentUser } from "firebase/auth";
    import { snapshotEqual } from "firebase/firestore";
    import { FirebaseApp, userStore } from "sveltefire";
    import Switch from "../../lib/components/Switch.svelte"
    import ProfileInput from "../../lib/components/ProfileInput.svelte"
    import type { stringify } from "postcss";
    const user = userStore(auth);
    let age:Promise<string>;
    let pronouns:Promise<string>;
    let like:Promise<string>;
    let biography:Promise<string>;
    
    setTimeout(() => {
        age = readHandlers.readAge()
        pronouns = readHandlers.readPronouns();
        like = readHandlers.readHobby();
        biography = readHandlers.readBio(); 
    }, 1000);
    
    let switchVal:boolean;
    let yay = "";
</script>

<!-- Edit Page -->


<div class="text-white uppercase mx-auto pt-12 relative z-0 flex flex-col items-right justify-right ml-auto mr-[5%]">
    <Switch bind:value={switchVal} label="Edit Page" design="inner" />
    {#if switchVal}
    <button on:click={() => console.log(yay)} class="border-white text-right">Click to Save!</button>
    {/if}
</div>


<!-- Title -->
<div class="text-white uppercase mx-auto pt-0 pb-[5%] relative z-0 flex flex-col items-center justify-center">
	<h1 class="tracking-[1.5rem] text-5xl text-center">
        VIEW PROFILE
	</h1>
</div>


    <!-- Columns -->
    <div class="columns-3">

      <!-- Row 1: age, pronouns, occupation -->
      <div class="max-w-sm rounded overflow-hidden align-middle row-auto">

        <!-- Name -->
        <div>
            <ProfileInput placeholder="Name" value={$user?.displayName} state={switchVal} />
        </div>

        <!-- Age -->
        <div>
            <h1>
                {#await age}
	            <p>...waiting</p>
                {:then string}
                    {#if $user}
                    <ProfileInput placeholder="Age" value={string} state={switchVal} />
                    {:else}
                        <p>sorry</p>
                     {/if}   
                {:catch error}
	            <p style="color: red">{error.message}</p>
                {/await}
            </h1>
        </div>

        <!-- Pronouns -->
        <div>
            <h1>
                {#await pronouns}
	            <p>...waiting</p>
                {:then string}
                    {#if $user}
                    <ProfileInput placeholder="Pronouns" value={string} state={switchVal} />
                    {:else}
                        <p>sorry</p>
                     {/if}   
                {:catch error}
	            <p style="color: red">{error.message}</p>
                {/await}
            </h1>
        </div>
    
        <!-- Occupation -->
        <div>
            <h1>
                {#await like}
	            <p>...waiting</p>
                {:then string}
                    {#if $user}
                    <ProfileInput placeholder="Pronouns" value={string} state={switchVal} />
                    {:else}
                        <p>sorry</p>
                     {/if}   
                {:catch error}
	            <p style="color: red">{error.message}</p>
                {/await}
            </h1>
        </div>
    </div>
    
      <!-- Row 2: image -->
      <div class="max-w-sm overflow-hidden align-middle row-auto border-8 border-hot-pink rounded-lg">
        <img src="/spongebob.png" alt="spongebob" style="background-color:#e14761">
      </div>
    
    
      <!-- Row 3: description -->
      <div>
        <h1>
            {#await biography}
            <p>...waiting</p>
            {:then string}
                {#if $user}
                <ProfileInput type="text" placeholder="Bio" value={string} state={switchVal}/>
                {:else}
                    <p>sorry</p>
                 {/if}   
            {:catch error}
            <p style="color: red">{error.message}</p>
            {/await}
        </h1>
    </div>
    </div>

    
    <!-- logout -->
    <div class="text-white uppercase mx-auto pt-16 pb-[5%] relative z-0 flex flex-col items-center justify-center">
        <a href="/">
            <button on:click = {() => authHandlers.logout()} id="login" class="bg-hot-pink hover:bg-hot-pink-hover text-white py-2 rounded-full align-center px-20">
                <h1 class=" text-3xl text-center">logout</h1>
            </button>
        </a>
    </div>

