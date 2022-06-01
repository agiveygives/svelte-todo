<script lang='ts'>
  import TodoItem from '../components/TodoItem.svelte';
  import AddTodoItem from '../components/AddTodoItem.svelte';
  import { todoItems } from '../stores/todo';
</script>

<AddTodoItem />

{#each $todoItems as todoItem}
  <TodoItem item={todoItem.item} done={todoItem.done} />
{/each}
