<script>
    import Match from "$lib/components/Match.svelte";

let matches = [];
</script>

<!-- Title -->
<div class="text-white uppercase mx-auto pt-16 pb-[5%] relative z-0 flex flex-col items-center justify-center">
	<h1 class="tracking-[1.0rem] text-5xl text-center">
        FIND A MATCH
	</h1>
</div>


<form>
    <!-- Columns -->
    <div id="columns" class="columns-3">
            <Match image="/spongebob.png" name="spongebob" URL="/profile"/>
            <Match image="/sexy-patrick.jpg" name="patrick" URL="/profile"/>   
            <Match image="/sexy-squidward.jpg" name="squidward" URL="/profile"/>   
    </div>
</form>