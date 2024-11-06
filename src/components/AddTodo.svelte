<script>
    import { addTodo } from '../stores/todoStore';
    let todoText = '';

    const handleAdd = () => {
        console.log("FGHGGXFCVHJBKNGF")
        if (todoText.trim()) {
            addTodo(todoText);
            todoText = '';
        }
    };
</script>

<input bind:value={todoText} placeholder="Add a new todo" on:keypress={(e) => e.key === 'Enter' && handleAdd()} />
<button class="btn btn-primary" on:click={handleAdd}>Add Todo</button>
