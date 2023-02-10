<script>
	import InputBox from "$lib/components/InputBox.svelte";
</script>


<!-- Title -->
<div class="text-white uppercase mx-auto pt-16 pb-[5%] relative z-0 flex flex-col items-center justify-center">
	<h1 class="tracking-[1.5rem] text-5xl text-center">
        CREATE PROFILE
	</h1>
</div>

<!-- Columns -->
<div class="columns-3">
  <!-- Row 1: age, pronouns, occupation -->
  <div class="max-w-sm rounded overflow-hidden align-middle row-auto">
    <!-- Age -->
    <InputBox type="number" id="age" placeholder="AGE" marginx=0 marginb="[5%]" />


    <!-- Pronouns -->
    <InputBox type="text" id="pronouns" placeholder="PRONOUNS" marginx=0 marginb="[5%]" />


    <!-- Occupation -->
    <InputBox type="text" id="occupation" placeholder="OCCUPATION" marginx=0 marginb="[5%]" />

  </div>
  <!-- Row 2: image -->
  <div class="max-w-sm rounded overflow-hidden align-middle row-auto">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-hot-pink border-dashed rounded-lg cursor-pointer bg-hot-pink dark:hover:bg-bray-800 dark:bg-hot-pink hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg aria-hidden="true" class="w-10 h-10 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          <p class="mb-2 text-sm text-white"><span class="font-semibold">Click to upload</span> or drag and drop an image of yourself</p>
          <p class="text-xs text-white">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
      </div>
      <input id="dropzone-file" type="file" class="hidden" />
  </label>
  </div>
</div>