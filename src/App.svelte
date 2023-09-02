<script lang="ts">
  import TailwindCss from "./TailwindCSS.svelte";
  import svelteLogo from "./assets/svelte.svg";
  import tailwindLogo from "./assets/tailwindLogo.png";
  import viteLogo from "/vite.svg";
  import Counter from "./components/Counter/index.svelte";
  import Todo from "./pages/todo/index.svelte";
  import Timer from "./pages/timer/+page.svelte";

  import ProjectDelimeter from "./components/ProjectDelimeter/ProjectDelimeter.svelte";

  console.log("type", typeof Todo);

  type ProjectType = {
    title: string;
    component: typeof Todo;
    index?: boolean;
  };

  const Projects: ProjectType[] = [
    {
      index: true,
      title: "Todo App",
      component: Todo,
    },
    {
      title: "Plus minus",
      component: Counter,
    },
    {
      title: "Stop Watch",
      component: Timer,
    },
  ];
</script>

<TailwindCss />
<main>
  <div
    class="flex mx-auto mb-[40px] items-center justify-between w-[min(97vw,_700px)]"
  >
    <img src={viteLogo} alt="vite logo" />
    <img src={svelteLogo} alt="svelte Logo" />
    <img
      src={tailwindLogo}
      alt="tailwind Logo"
      class="rounded-full w-[40px] h-[40px]"
    />
  </div>

  {#each Projects as { title, index, component: Component } (title)}
    <ProjectDelimeter {title} {index} />
    <Component />
  {/each}
</main>
