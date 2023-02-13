<script>
  let score = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0
  };

  function handleAnswer(key, points) {
    score[key] += points;
  }

  function getPersonality() {
    const EI = score.EI > 0 ? "E" : "I";
    const SN = score.SN > 0 ? "S" : "N";
    const TF = score.TF > 0 ? "T" : "F";
    const JP = score.JP > 0 ? "J" : "P";

    return `${EI}${SN}${TF}${JP}`;
  }
</script>

<h1>Personality Test</h1>

<p>Answer the following questions truthfully to find out your personality type:</p>

<form>
  <div>
    <p>1. Do you enjoy being around people and are energized by social interaction?</p>
    <input type="radio" name="question1" on:change={() => handleAnswer("EI", 1)}>Yes</input>
    <input type="radio" name="question1" on:change={() => handleAnswer("EI", -1)}>No</input>
  </div>

  <div>
    <p>2. Do you rely more on your intuition or on your senses to understand the world?</p>
    <input type="radio" name="question2" on:change={() => handleAnswer("SN", 1)}>Intuition</input>
    <input type="radio" name="question2" on:change={() => handleAnswer("SN", -1)}>Senses</input>
  </div>

  <div>
    <p>3. Do you make decisions based on logic and reason or based on your values and emotions?</p>
    <input type="radio" name="question3" on:change={() => handleAnswer("TF", 1)}>Logic and reason</input>
    <input type="radio" name="question3" on:change={() => handleAnswer("TF", -1)}>Values and emotions</input>
  </div>

  <div>
    <p>4. Do you prefer a planned and organized approach to life or a more spontaneous one?</p>
    <input type="radio" name="question4" on:change={() => handleAnswer("JP", 1)}>Planned and organized</input>
    <input type="radio" name="question4" on:change={() => handleAnswer("JP", -1)}>Spontaneous</input>
  </div>

  <div>
    <p>5. Do you focus more on the present moment or on the future?</p>
    <input type="radio" name="question5" on:change={() => handleAnswer("SN", 1)}>Present moment</input>
    <input type="radio" name="question5" on:change={() => handleAnswer("SN", -1)}>Future</input>
  </div>
  <div>
  <p>6. Do you prefer to work independently or as part of a team?</p>
  <input type="radio" name="question6" on:change={() => handleAnswer("EI", 1)}>As part of a team</input>
  <input type="radio" name="question6" on:change={() => handleAnswer("EI", -1)}>Independently</input>
</div>
<div>
  <p>7. Do you like to focus on details or the big picture?</p>
  <input type="radio" name="question7" on:change={() => handleAnswer("SN", -1)}>Details</input>
  <input type="radio" name="question7" on:change={() => handleAnswer("SN", 1)}>Big picture</input>
</div>
<div>
  <p>8. Do you prioritize stability and routine or flexibility and variety?</p>
  <input type="radio" name="question8" on:change={() => handleAnswer("JP", 1)}>Stability and routine</input>
  <input type="radio" name="question8" on:change={() => handleAnswer("JP", -1)}>Flexibility and variety</input>
</div>
<div>
  <p>9. Do you make decisions based on facts and objective information or based on personal values and beliefs?</p>
  <input type="radio" name="question9" on:change={() => handleAnswer("TF", 1)}>Facts and objective information</input>
  <input type="radio" name="question9" on:change={() => handleAnswer("TF", -1)}>Personal values and beliefs</input>
</div>
<div>
  <p>10. Do you prefer to have a clear structure and plan for your future or keep your options open and adapt as you go?</p>
  <input type="radio" name="question10" on:change={() => handleAnswer("JP", 1)}>Clear structure and plan</input>
  <input type="radio" name="question10" on:change={() => handleAnswer("JP", -1)}>Open options and adapt as you go</input>
</div>

  <button type="submit" on:click={getPersonality}>Submit</button>
</form>

<p>Your personality type is: {getPersonality()}</p>

</script>
<script>
import './personality.css';
</script>




