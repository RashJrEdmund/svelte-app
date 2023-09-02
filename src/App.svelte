<script lang="ts">
  import TailwindCss from "./TailwindCSS.svelte";
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./components/Counter/index.svelte";
  import Todo from "./pages/todo/index.svelte";
  import Timer from "./pages/timer/+page.svelte";

  const staticval: number = 2;
</script>

<TailwindCss />
<main >
  <section class="container min-w-[220px] bg-slate-800 mx-auto p-[20px_0] rounded">
    <Todo />
  </section>
  <Counter />
  <Timer />
</main>

<style>
  .container {
    width: min(97vw, 600px);
    margin: 0 auto;
  }
</style>
