<script lang="ts">
    import type { TasksType } from "../../utils/types/cardTypes";
    import Actions from "./Actions.svelte";
    export let tasksArray: TasksType[];
</script>

<div class="flex items-start flex-col flex-wrap p-[10px]">
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
                    {completed ? "Completed ✅" : "Pending 👀"}
                </span>
            </p>

            <Actions {id} on:delete on:done />
            <!-- custom events that've been dispatched will propagate up-->
        </div>
    {/each}
</div>
