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
</script>

<div>
  <input
    type='checkbox'
    bind:checked={done}
    on:click={toggleTaskCompletion}
  />

  <span>{item}</span>
</div>
