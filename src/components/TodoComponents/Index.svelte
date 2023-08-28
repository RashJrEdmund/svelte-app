<script lang="ts">
    import type { TasksType } from "../../utils/types/cardTypes";

    export let tasksArray: TasksType[];
</script>

{#each tasksArray as { id, name, completed } (id)}
    <div
        class="card flex flex-col items-start bg-[#a52a2a] w-full mb-2 rounded p-[10px]"
    >
        <p class="w-full text-left break-all">{name}</p>

        <p class="text-orange-500">
            status: {completed ? "Completed" : "Pending"}
        </p>
    </div>
{/each}
