<script>
	import InputBox from "$lib/components/InputBox.svelte";
</script>


<!-- Title -->
<div class="text-white uppercase mx-auto pt-16 pb-[5%] relative z-0 flex flex-col items-center justify-center">
	<h1 class="tracking-[1.5rem] text-5xl text-center">
        CREATE PROFILE
	</h1>
</div>

<form>
<!-- Columns -->
<div class="columns-3">
  <!-- Row 1: age, pronouns, occupation -->
  <div class="max-w-sm rounded overflow-hidden align-middle row-auto">
    <!-- Age -->
    <InputBox type="number" id="age" placeholder="AGE" marginx=0 marginb="[5%]" min=18 max=116 />


    <!-- Pronouns -->
    <InputBox type="text" id="pronouns" placeholder="PRONOUNS" marginx=0 marginb="[5%]" max=25 />


    <!-- Occupation -->
    <InputBox type="text" id="occupation" placeholder="OCCUPATION" marginx=0 marginb="[5%]" max=35 />
  </div>


  <!-- Row 2: image -->
  <div class="max-w-sm rounded overflow-hidden align-middle row-auto">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer bg-hot-pink dark:bg-hot-pink hover:bg-hot-pink-hover dark:border-white dark:hover:border-hot-pink-hover dark:hover:bg-hot-pink-hover">
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg aria-hidden="true" class="w-10 h-10 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          <p class="mb-2 text-sm text-white uppercase"><b>Upload your image</b></p>
          <p class="text-xs text-white uppercase"><span class="font-semibold">Click to upload</span> or drag and drop</p>
      </div>
      <input id="dropzone-file" type="file" class="hidden" />
  </label>
  </div>


  <!-- Row 3: description -->
  <div class="max-w-sm rounded overflow-hidden align-middle row-auto px-[1%] pt-[1%] pb-[5%] px-auto">
    <textarea id="description" rows="11" class="block p-2.5 w-full text-sm text-white bg-white rounded-lg border border-white focus:ring-white focus:border-white dark:bg-hot-pink dark:border-hot-pink dark:placeholder-white dark:text-white dark:focus:ring-white dark:focus:border-white"
     placeholder="WRITE ABOUT YOURSELF, WHAT ARE YOUR INTERESTS?" style="width: 300px; text-align: center;"></textarea>
  </div>
</div>


<!-- Location -->
<div class="text-white uppercase mx-auto pt-16 pb-[5%] relative z-0 flex flex-col items-center justify-center">
	<h1 class=" text-5xl text-center">
    (Insert Map Here)
	</h1>
</div>


<!-- Next -->
<div class="text-white uppercase mx-auto pt-[4%] pb-[1%] px-80 relative z-0 flex flex-col items-center justify-center">
  <button id="next" type="submit" class="bg-hot-pink hover:bg-hot-pink-hover text-white py-2 rounded-full align-center px-20">
    <h1 class=" text-3xl text-center">NEXT</h1>
  </button>
</div>

<script>
	// validates if password is same as confirm password and if all fields are filled
	function Validate() {  
		location.href = '/profile';
  }
  

document.getElementById("next").addEventListener("click", Validate);
</script>

</form>