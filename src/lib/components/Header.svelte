<script>
    import { base } from "$app/paths";
    import { userStore } from 'sveltefire';
    import { auth, readHandlers } from "../firebase/firebase.client";
    const user = userStore(auth);
    const promise = readHandlers.readUserName();
</script>
<header class="flex bg-hot-pink h-16 w-screen min-w-[375px]">
    <div class="m-2 flex flex-row justify-between w-full">
        <a href="/">
            <h1 class="font-poppins align-middle font-extrabold m-1 text-4xl text-white">
                DONT
            </h1>
        </a>
    {#if $user}
        <a href="/login">
            <h2 class="font-poppins align-middle font-bold m-2 text-2xl text-white">
                LOG IN
            </h2>
        </a>
        <a href="/profile">
            <h2 class="font-poppins align-middle font-bold m-2 text-2xl text-white">
                Welcome {$user.displayName}!
            </h2>
        </a>
    {:else}
    <a href="/login">
        <h2 class="font-poppins align-middle font-bold m-2 text-2xl text-white">
            LOG IN
        </h2>
    </a>
    {/if}
    </div>
</header>