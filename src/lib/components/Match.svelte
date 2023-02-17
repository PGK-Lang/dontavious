<script lang="ts">
    export let image = "image"
    export let name = "name"
    export let URL = "URL"
</script>


<div class="max-w-sm overflow-hidden align-middle row-auto border-hot-pink rounded-full mx-8 w-96 h-96">
    <a href={URL}>
        <button>
            <img src={image} alt="potential match" style="background-color:#e14761;" class="object-cover w-96 h-96">
        </button>
    </a>
</div>
<h1 class="text-3xl text-center uppercase ml-8">
    <b>{name}</b>
</h1>