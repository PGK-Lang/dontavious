<script>
    import { auth, authHandlers } from "$lib/firebase/firebase.client";


  let fn = "";
	let ln= "";
	let pn = "";
  let gr = "";
  let age = "";
  let h = "";
  let teach = "";
</script>


<form class="signup-container text-">
  <h1 class="text-2xl sm:text-5xl uppercase font-semibold mb-8">
		CREATE YOUR ACCOUNT
	</h1>
  <div class="flex flex-wrap -mx-3 mb-1">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input bind:value={fn} class="text-black appearance-none block w-full bg-gray-200  border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input bind:value={ln} class="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-city">
        Pronouns
      </label>
      <input bind:value={pn} class="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-state">
        Grade
      </label>
      <div class="relative">
        <select bind:value={gr} class="text-black font-semibold block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-zip">
        Age
      </label>
      <input bind:value={age} class="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
    </div>
  </div>
  <div class="flex flex-wrap mt-6 -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-city">
        A Hobby
      </label>
      <input bind:value={h} class="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
    </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-zip">
        Favorite teacher
      </label>
      <input bind:value={teach} class="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
    </div>
  </div>
  <div>

  </div>
  <a href="/login/signup/create/bio">
  <button on:click={() => authHandlers.setVitals(fn, ln, pn, gr, age, h, teach)} class="bg-black text-hot-pink rounded-lg uppercase text-2xl font-semibold ">
		Next
	</button>
</a>
</form>
