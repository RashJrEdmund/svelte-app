<script lang="ts">
  import TailwindCss from "./TailwindCSS.svelte";
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./components/Counter.svelte";
  import Todo from "./routes/+page.svelte";
</script>

<TailwindCss />
<main class="container min-w-[220px] bg-slate-800 mx-auto p-[20px_0] rounded">
  <Todo />
  <Counter />
</main>

<style>
  .container {
    width: min(97vw, 600px);
    margin: 0 auto;
  }
</style>
