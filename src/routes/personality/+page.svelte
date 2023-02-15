<script>
	import Question from '../../lib/components/Question.svelte';
  
	let values = {
	  q1: null,
	  q2: null,
	  q3: null,
	  q4: null,
	  q5: null,
	  q6: null,
	  q7: null,
	  q8: null,
	  q9: null,
	  q10: null,
	};
  
	function getPersonalityType() {
	  // logic to calculate personality type based on the user's answers
	  // e.g. using the Myers-Briggs Type Indicator
	  // return a string representing the personality type
	}
  
	function handleSubmit() {
	  const personalityType = getPersonalityType();
	  const message = `Your personality type is ${personalityType}.`;
	  // display the message to the user, for example:
	  console.log(message); // prints the message to the browser console
	}
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
	<Question question="1. Do you enjoy being around people and are energized by social interaction?" answer1="Yes" answer2="No" bind:value={values.q1}/>
	<Question question="2. Do you rely more on your intuition or on your senses to understand the world?" answer1="Intuition" answer2="Senses" bind:value={values.q2}/>
	<Question question="3. Do you make decisions based on logic and reason or based on your values and emotions?" answer1="Logic and reason" answer2="Values and emotions" bind:value={values.q3}/>
	<Question question="4. Do you prefer a planned and organized approach to life or a more spontaneous one?" answer1="Planned and Organized" answer2="Spontaneous" bind:value={values.q4}/>
	<Question question="5. Do you focus more on the present moment or on the future?" answer1="Present Moment" answer2="Future" bind:value={values.q5}/>
	<Question question="6. Do you prefer to work independently or as part of a team?" answer1="Team" answer2="Independent" bind:value={values.q6}/>
	<Question question="7. Do you like to focus on details or the big picture?" answer1="Details" answer2="Big Picture" bind:value={values.q7}/>
	<Question question="8. Do you prioritize stability and routine or flexibility and variety" answer1="Stability & Routine" answer2="Flexibility and Variety" bind:value={values.q8}/>
	<Question question="9. Do you make decisions based on facts and objective information or based on personal values and beliefs?" answer1="Facts and Objective Information" answer2="Personal Values & Beliefs" bind:value={values.q9}/>
	<Question question="10. Do you prefer to have a clear structure and plan for your future or keep your options open and adapt as you go?" answer1="Clear Structure/Plan" answer2="Open Options/Adapt" bind:value={values.q10}/>
  
	<button type="submit">Submit</button>
  </form>
  