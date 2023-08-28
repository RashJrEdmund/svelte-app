<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { TasksType } from "../../utils/types/cardTypes";
    export let tasksArray: TasksType[];

    const dispatch = createEventDispatcher();

    const handleDelete = (id: string) => {
        dispatch("delete", { id });
    };

    const handleDone = (id: string) => {
        dispatch("done", { id });
    };
</script>

{#each tasksArray as { id, name, completed } (id)}
    <div
        class="card flex flex-col items-start bg-[#321E1E] w-full h-fit min-h-[99px] mb-5 rounded p-[10px] relative drop-shadow-[0_0_4px_#000]"
    >
        <p class="w-width-40px text-left break-all h-width-40px">
            {name}
        </p>

        <p class="text-white bottom-0 left-0 mt-[15px]">
            status:
            <span class={completed ? "text-green-500" : "text-orange-500"}>
                {completed ? "Completed" : "Pending"}
            </span>
        </p>

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
    </div>
{/each}
