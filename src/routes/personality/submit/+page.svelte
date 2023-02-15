<script>
  import { page } from '$app/stores';
  import { get } from 'svelte/store';

  const personalityType = $page.params.personalityType;
</script>

<h1>Your personality type is {personalityType}.</h1>
