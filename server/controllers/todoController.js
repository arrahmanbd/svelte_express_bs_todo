const todos = []; // In-memory array for simplicity

exports.getTodos = (req, res) => {
    res.json(todos);
};

exports.addTodo = (req, res) => {
    const { todo } = req.body;
    if (todo) {
        const newTodo = { id: Date.now().toString(), text: todo };
        todos.push(newTodo);
        res.status(201).json(newTodo);
    } else {
        res.status(400).json({ error: 'Todo text is required' });
    }
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
        res.json({ message: 'Todo deleted' });
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
};
