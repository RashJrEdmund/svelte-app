<script lang="ts">
    export let title: string;
    export let index: boolean = false;
</script>

<section
    class="w-[min(97vw,_700px)] mx-auto my-14 py-10 hover:text-green-600 bg-slate-800"
>
    <h1>
        {#if index}
            My Svelte Sandbox
            <br />
            project: 1
        {:else}
            Next project 🥳:
        {/if}
        <span class="font-extrabold"> {title ?? ""}</span>
    </h1>
</section>
