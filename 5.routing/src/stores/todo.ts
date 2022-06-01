import { writable } from 'svelte/store';

export type TodoItemType = {
  item: string;
  done: boolean;
}

export const todoItems = writable<TodoItemType[]>([
  { item: 'Generate Project Skeleton', done: true },
  { item: 'Create your first component', done: true },
  { item: 'Create a store', done: false },
  { item: 'Make a new todo items flow', done: false },
]);
