<script lang="ts">
    import Card from "../components/TodoComponents/Index.svelte";
    import type { TasksType } from "../utils/types/cardTypes";
    import Task from "../utils/classes/TaskPrint";

    let tasksArray: TasksType[] = [
        {
            id: crypto.randomUUID(), // randomly generates a 36 letter long v4 UUID
            name: "go to the gym",
            completed: false,
        },
        {
            id: crypto.randomUUID(),
            name: "go to school early",
            completed: false,
        },
        {
            id: crypto.randomUUID(),
            name: "Finish task",
            completed: false,
        },
    ];

    let taskName: string = "";

    const handleSubmit = () => {
        if (!taskName.trim()) return;

        const newTask = new Task(taskName);
        tasksArray = [...tasksArray, newTask];
    };

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
        />

        <button
            type="submit"
            class="text-white border-amber-300 border-2 px-[15px] py-[5px] whitespace-nowrap"
        >
            + Add
        </button>
    </form>

    <div class="flex items-start flex-col flex-wrap p-[10px]">
        <Card {tasksArray} />
    </div>
</main>
