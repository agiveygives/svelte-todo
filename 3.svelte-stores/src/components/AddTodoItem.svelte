<script lang='ts'>
  import { todoItems } from '../stores/todo';
  import type { TodoItemType } from '../stores/todo';

  let todoItem = '';

  const addNewTask = () => {
    todoItems.update((store: TodoItemType[]) => {
      store.push({
        item: todoItem,
        done: false
      })

      return store;
    })
  }
</script>

<input type='text' bind:value={todoItem} />

<button on:click={addNewTask}>Add</button>