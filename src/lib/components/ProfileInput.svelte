<script lang="ts">
	export let placeholder = 'placeholder'
    export let state = true;
	export let value = "";

    

</script>


<input type="text"
    disabled={state}
	placeholder={placeholder} autocomplete="off" required
	bind:value={value}>

    <style> 
        input {
            /*Generic Style*/
            background: pink;
            color: black;
            font-size: large;
            text-transform: uppercase;
            
        }
        /*only occurs if the input is disabled*/
        input:disabled {
            background: black;
            
        }
    </style>