<script lang="ts">
    // this the to do route;
    const tasks = [
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
</script>

<main>
    <form
        action=""
        class="text-white flex items-center flex-nowrap px-[10px] py-[10px]"
    >
        <input
            type="text"
            placeholder="Add to do"
            class="h-[40px] w-full rounded p-[5px]"
        />

        <button
            type="submit"
            class="border-amber-300 border-2 px-[15px] py-[5px]">Add</button
        >
    </form>
</main>
