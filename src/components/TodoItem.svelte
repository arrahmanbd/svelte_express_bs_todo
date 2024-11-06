<script>
    export let todo;
    import { deleteTodo } from '../stores/todoStore';
</script>

<li>
    {todo.text}
    <button on:click={() => deleteTodo(todo.id)}>Delete</button>
</li>

<style>
    li {
        margin: 0.5rem 0;
    }
</style>
