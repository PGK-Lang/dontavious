<script>
  export let question;
  export let answer1;
  export let answer2;
  export let value;
</script>

<div>
  <p>{question}</p>
  <label>
    <input type="radio" name={question} value={answer1} bind:group={value} />
    {answer1}
  </label>
  <label>
    <input type="radio" name={question} value={answer2} bind:group={value} />
    {answer2}
  </label>
</div>
