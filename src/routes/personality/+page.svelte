<script lang="ts">
	import { onMount } from "svelte";
	import {
		auth,
		authHandlers,
		writePersonalityData,
	} from "../../lib/firebase/firebase.client";
	import Question from "../../lib/components/Question.svelte";
	import { userStore } from "sveltefire";

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

	const personalityTypes = [
		{ type: "ISTJ", name: "Inspector" },
		{ type: "ISFJ", name: "Protector" },
		{ type: "INFJ", name: "Counselor" },
		{ type: "INTJ", name: "Mastermind" },
		{ type: "ISTP", name: "Crafter" },
		{ type: "ISFP", name: "Composer" },
		{ type: "INFP", name: "Healer" },
		{ type: "INTP", name: "Architect" },
		{ type: "ESTP", name: "Dynamo" },
		{ type: "ESFP", name: "Performer" },
		{ type: "ENFP", name: "Champion" },
		{ type: "ENTP", name: "Inventor" },
		{ type: "ESTJ", name: "Supervisor" },
		{ type: "ESFJ", name: "Provider" },
		{ type: "ENFJ", name: "Teacher" },
		{ type: "ENTJ", name: "Commander" },
	];

	function getPersonalityType() {
		const answers = Object.values(values);
		const count = (value: string) => answers.filter((v) => v === value).length;
		const result = [
			count("Yes") > 1 ? "E" : "I",
			count("Intuition") > 1 ? "N" : "S",
			count("Values and emotions") > 1 ? "F" : "T",
			count("Planned and Organized") > 1 ? "J" : "P",
			count("Present Moment") > 1 ? "S" : "A",
			count("Taking risks") > 1 ? "P" : "C",
			count("Big Picture") > 1 ? "N" : "D",
			count("Stability & Routine") > 1 ? "J" : "P",
			count("A few close friends") > 1 ? "I" : "E",
			count("Make decisions quickly") > 1 ? "A" : "C",
			count("In control") > 1 ? "J" : "P",
		].join("");

		const possibleTypes = personalityTypes.filter((type) =>
			result.startsWith(type.type)
		);
		const randomIndex = Math.floor(Math.random() * possibleTypes.length);
		return possibleTypes[randomIndex].name;
	}

	function handleAnswer(questionId: string, optionValue: string) {
		values = { ...values, [questionId]: optionValue };
	}

	const user = userStore(auth);

	function handleSubmit() {
		const personalityType = getPersonalityType();
		console.log(personalityType);
		authHandlers.setInfoFor(personalityType);
		let message = "Your personality type is " + personalityType;
		alert(message);
		writePersonalityData($user.uid, personalityType)
	}
</script>

<main>
	<form>
		<on:submit|preventDefault={handleSubmit}>
			<Question
				question="1. Do you enjoy being around people and are energized by social interaction?"
				answer1="Yes"
				answer2="No"
				bind:value={values.q1}
			/>
			<Question
				question="2. Do you rely more on your intuition or on your senses to understand the world?"
				answer1="Intuition"
				answer2="Senses"
				bind:value={values.q2}
			/>
			<Question
				question="3. Do you make decisions based on logic and reason or based on your values and emotions?"
				answer1="Logic and reason"
				answer2="Values and emotions"
				bind:value={values.q3}
			/>
			<Question
				question="4. Do you prefer a planned and organized approach to life or a more spontaneous one?"
				answer1="Planned and Organized"
				answer2="Spontaneous"
				bind:value={values.q4}
			/>
			<Question
				question="5. Do you focus more on the present moment or on the future?"
				answer1="Present Moment"
				answer2="Future"
				bind:value={values.q5}
			/>
			<Question
				question="6. Do you prefer to work independently or as part of a team?"
				answer1="Team"
				answer2="Independent"
				bind:value={values.q6}
			/>
			<Question
				question="7. Do you like to focus on details or the big picture?"
				answer1="Details"
				answer2="Big Picture"
				bind:value={values.q7}
			/>
			<Question
				question="8. Do you prioritize stability and routine or flexibility and variety?"
				answer1="Stability & Routine"
				answer2="Flexibility and Variety"
				bind:value={values.q8}
			/>
			<Question
				question="9. Do you make decisions based on facts and objective information or based on personal values and beliefs?"
				answer1="Facts and Objective Information"
				answer2="Personal Values & Beliefs"
				bind:value={values.q9}
			/>
			<Question
				question="10. Do you prefer to have a clear structure and plan for your future or keep your options open and adapt as you go?"
				answer1="Clear Structure/Plan"
				answer2="Open Options/Adapt"
				bind:value={values.q10}
			/>
			<button on:click={() => handleSubmit()} type="submit">Submit</button
			>
		</on:submit|preventDefault={handleSubmit}>
	</form>
</main>
