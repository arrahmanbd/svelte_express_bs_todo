import { writable } from 'svelte/store';

export const todos = writable([]);

export const fetchTodos = async () => {
    const res = await fetch('http://localhost:8383/api/todos');
    todos.set(await res.json());
};

export const addTodo = async (todoText) => {
    console.log("Todo added");
    const res = await fetch('http://localhost:8383/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ todo: todoText })
    });
    const newTodo = await res.json();
    todos.update((current) => [...current, newTodo]);
};

export const deleteTodo = async (id) => {
    await fetch(`http://localhost:8383/api/todos/${id}`, { method: 'DELETE' });
    todos.update((current) => current.filter(todo => todo.id !== id));
};
