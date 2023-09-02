<script lang="ts">
  let count: number = 0;
  const messages: string[] = ["u over doing it! 👀", "dude 😓"];

  const getRandomMessage: () => string = () => {
    const randomIndex: number = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const increment = () => count++;
  const decrement = () => count--;
</script>

<div>
  <button on:click={decrement} class="text-orange-500"> - minus </button>

  <span>{count}</span>

  <button on:click={increment} class="text-green-500"> plus + </button>
</div>

{#if count <= -10 || count >= 10}
  <span>{getRandomMessage()}</span>
{/if}
