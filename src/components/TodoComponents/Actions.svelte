<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let id: string; // accepting id prop

    const dispatch = createEventDispatcher(); // this is gonna help to proper gate my custom event

    const handleDelete = (id: string) => {
        dispatch("delete", { id });
    };

    const handleDone = (id: string) => {
        dispatch("done", { id });
    };
</script>

<div
    class="absolute top-0 right-0 p-[10px_10px_0_10px] h-full max-h-[70px] flex flex-col justify-between font-semibold"
>
    <button class="text-orange-600" on:click={() => handleDelete(id)}>
        Delete
    </button>

    <button class="text-green-700" on:click={() => handleDone(id)}>
        Done
    </button>
</div>
