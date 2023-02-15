<script>
    export let answer;
    export let value;
  </script>
  
  <div>
    <label>
      <input type="radio" bind:value={value} />
      {answer}
    </label>
  </div>
  