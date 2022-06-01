<script lang='ts'>
import { todoItems } from '../stores/todo';
</script>

{#each $todoItems.filter((item) => item.done) as todoItem}
  <div>{todoItem.item}</div>
{/each}

<style>
  div {
    padding-top: 10px;
  }
</style>
