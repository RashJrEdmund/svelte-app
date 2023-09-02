<script lang="ts">
    import Card from "../../components/TodoComponents/Card.svelte";
    import type { TasksType } from "../../utils/types/cardTypes";
    import Task from "../../utils/classes/TaskPrint";

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

    let error: { show: boolean; message: string } = {
        show: false,
        message: "",
    };

    let taskName: string = "";

    const handleInput = () => {
        if (error.show && taskName.trim()) error = { show: false, message: "" };
    };

    const handleSubmit = () => {
        if (!taskName.trim()) {
            error = { show: true, message: "You must add a todo" };
            return;
        }

        const newTask = new Task(taskName);
        tasksArray = [...tasksArray, newTask];
        taskName = ""; // clearing the input field
    };

    const handleDelete = (e: CustomEvent): void => {
        const {
            detail: { id: taskId },
        } = e;

        tasksArray = [...tasksArray.filter(({ id }) => id !== taskId)];
    };

    const handleDone = (e: CustomEvent): void => {
        const {
            detail: { id: taskId },
        } = e;

        tasksArray = tasksArray.map((task: TasksType) => {
            if (task.id === taskId)
                return { ...task, completed: !task.completed };
            return task;
        });
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

    <Card {tasksArray} on:delete={handleDelete} on:done={handleDone} />
</main>
