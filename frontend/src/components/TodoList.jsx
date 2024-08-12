import { useState, useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get('http://localhost:5000/api/todos');
            setTodos(response.data);
        };

        fetchTodos();
    }, []);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo._id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const updateTodo = (updatedTodo) => {
        setTodos(
            todos.map(todo =>
                todo._id === updatedTodo._id ? updatedTodo : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo._id !== id));
    };

    return (
        <Box className="p-4 bg-gray-800 text-white min-h-screen">
            <Heading as="h1" className="mb-4">Todo List</Heading>
            <AddTodoForm addTodo={addTodo} />
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </Box>
    );
};

export default TodoList;
