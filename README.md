# Svelte Tutorial - Todo App

## Part 1: Setup Sveltekit

1. `npm init svelte svelte-todo`
2. `cd svelte-todo`
3. `npm install`
4. `npm run dev`

## Part 2: Create a Component

We're going to create a generic TodoItem component

1. create a `components` directory
2. create `TodoItem.svelte` inside the `components` directory

This component is going to display the text of your todo item and a checkbox to toggle completion.

### Accepting Props

At first our component will just need one prop, and that it the text to display. Svelte uses `<script>` tags to encapsulate props, lifecycle, and any imports.

To define a prop that another component could pass us the value of, we simply need to export a variable.

```
<script lang='ts'>
  export let item: string;
</script>
```

### Using Props and Rendering UI Elements

Rendering UI Elements is exactly like writing plain HTML code, and utilizing props is as simple as calling the variable you defined in the script tag.

```
<script lang='ts'>
  export let item: string;
</script>

<div>
  <input type='checkbox'>

  <span>{item}</span>
</div>
```