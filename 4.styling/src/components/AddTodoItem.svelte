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

<style>
  button {
    padding: 5px 8px;
    background-color: #b16326;
    color: white;
    border-radius: 5px;
    border: none;
  }
  button:hover {
    background-color: #e38d39;
    cursor: pointer;
  }
  input {
    padding: 5px 8px;
    border-radius: 5px;
    border: 1px solid black;
  }
</style>