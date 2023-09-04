<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let taskName: string = "";

    let error: { show: boolean; message: string } = {
        show: false,
        message: "",
    };

    const handleSubmit = () => {
        if (!taskName.trim()) {
            error = { show: true, message: "You must add a todo" };
            return;
        }

        dispatch("submission", { taskName });
        taskName = ""; // clearing the input field
    };

    const handleInput = () => {
        if (error.show && taskName.trim()) error = { show: false, message: "" };
    };
    //
</script>

<main>
    <form
        class="flex items-center flex-nowrap px-[10px] py-[10px]"
        on:submit|preventDefault={handleSubmit}
    >
        <input
            type="text"
            placeholder="Add to do"
            class="text-slate-900 h-[40px] w-full rounded p-[5px]"
            bind:value={taskName}
            on:input={handleInput}
        />

        <button
            type="submit"
            class="text-white border-amber-300 border-2 px-[15px] py-[5px] whitespace-nowrap"
        >
            + Add
        </button>
    </form>

    {#if error.show}
        <p class="w-full text-white p-2 text-left font-medium">
            Warning:
            <span class="text-orange-600 font-normal"> {error.message}</span>
        </p>
    {/if}
</main>
