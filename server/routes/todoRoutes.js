const express = require('express');
const { getTodos, addTodo, deleteTodo } = require('../controllers/todoController');

const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
