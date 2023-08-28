<script lang="ts">
  import TailwindCss from "./TailwindCSS.svelte";
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./components/Counter.svelte";
  import Todo from "./routes/+page.svelte";
</script>

<TailwindCss />
<main class="min-w-[400px] max-w-[600px] bg-slate-800">
  <Counter />
  <Todo />
</main>
