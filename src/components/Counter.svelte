<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class="text-[brown]">
  count is <span class="text-orange-500">{count}</span>
</button>
