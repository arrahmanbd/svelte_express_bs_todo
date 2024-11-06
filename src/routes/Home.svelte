<script>
    import { onMount } from 'svelte';
    import { todos, fetchTodos } from '../stores/todoStore';
    import AddTodo from '../components/AddTodo.svelte';
    import TodoItem from '../components/TodoItem.svelte';

    onMount(fetchTodos);
</script>

<main>
    <h1>Todo List</h1>
    <AddTodo />

    <ul>
        {#each $todos as todo}
            <TodoItem {todo} />
        {/each}
    </ul>
</main>
