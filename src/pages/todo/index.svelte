<script lang="ts">
    import Card from "../../components/TodoComponents/Card.svelte";
    import type { TasksType } from "../../utils/types/cardTypes";
    import Task from "../../utils/classes/TaskPrint";
    import Form from "../../components/TodoComponents/Form.svelte";

    let tasksArray: TasksType[] = [
        // typicall look of a new todo
        // {
        //     id: crypto.randomUUID(), // randomly generates a 36 letter long v4 UUID
        //     name: "go to the gym",
        //     completed: false,
        // },
    ];

    const handleSubmit = (e: CustomEvent) => {
        const {
            detail: { taskName },
        } = e;

        const newTask = new Task(taskName);
        tasksArray = [...tasksArray, newTask];
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

<main
    class="container min-w-[220px] bg-slate-800 mx-auto p-[20px_0] rounded min-h-[50vh]"
>
    <Form on:submission={handleSubmit} />

    <Card {tasksArray} on:delete={handleDelete} on:done={handleDone} />
</main>

<style>
    .container {
        width: min(97vw, 600px);
        margin: 0 auto;
    }
</style>
