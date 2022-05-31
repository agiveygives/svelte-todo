<script>
  import TodoItem from '../components/TodoItem.svelte';

  let todoItems = [
    'Generate Project Skeleton',
    'Create your first component',
    'Create a store',
    'Make a new todo items flow'
  ]
</script>

{#each todoItems as todoItem}
  <TodoItem item={todoItem} />
{/each}
