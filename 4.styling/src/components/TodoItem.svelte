<script lang="ts">
  import { todoItems } from '../stores/todo';
  import type { TodoItemType } from '../stores/todo';

  export let item: string;
  export let done: boolean = false;

  const toggleTaskCompletion = () => {
    todoItems.update((store: TodoItemType[]) => {
      const updateIndex = store
        .map<string>((todoItem: TodoItemType) => todoItem.item)
        .indexOf(item)

      store[updateIndex] = {
        item,
        done: !done
      }

      return store;
    })
  }

  const removeTask = () => {
    todoItems.update((store: TodoItemType[]) => {
      const updateIndex = store
        .map<string>((todoItem: TodoItemType) => todoItem.item)
        .indexOf(item)

      store.splice(updateIndex, 1);

      return store;
    })
  }
</script>

<div>
  <input
    type='checkbox'
    bind:checked={done}
    on:click={toggleTaskCompletion}
  />

  <span>{item}</span>

  <button on:click={removeTask}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="12"
      height="12"
      viewBox="0 0 24 24"
    >
      <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z" />
    </svg>
  </button>
</div>

<style>
  div {
    padding-top: 10px;
  }
  button {
    background-color: transparent;
    border: none;
    color: gray;
  }
  button:hover {
    cursor: pointer;
    color: red;
  }
  svg {
    fill: currentColor;
  }
</style>
