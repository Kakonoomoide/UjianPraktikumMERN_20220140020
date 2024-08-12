import { useState } from 'react';
import axios from 'axios';
import { Checkbox, Button, Box, Text, HStack, VStack } from '@chakra-ui/react';
import EditTodoForm from './EditTodoForm';

const TodoItem = ({ todo, toggleComplete, removeTodo, updateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleToggle = async () => {
        const updatedTodo = { ...todo, completed: !todo.completed };
        await axios.put(`http://localhost:5000/api/todos/${todo._id}`, updatedTodo);
        toggleComplete(todo._id);
    };

    const handleRemove = async () => {
        await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
        removeTodo(todo._id);
    };

    const handleUpdate = (updatedTodo) => {
        updateTodo(updatedTodo);
        setIsEditing(false);
    };

    return (
        <VStack className="p-2 border-b border-gray-600">
            {isEditing ? (
                <EditTodoForm todo={todo} onUpdate={handleUpdate} />
            ) : (
                <HStack justify="space-between" w="full">
                    <Checkbox isChecked={todo.completed} onChange={handleToggle} colorScheme="teal">
                        <Text as={todo.completed ? 'del' : ''} color={todo.completed ? 'gray.400' : 'white'}>
                            {todo.title}
                        </Text>
                    </Checkbox>
                    <HStack>
                        <Button size="sm" colorScheme="yellow" onClick={() => setIsEditing(true)}>Edit</Button>
                        <Button size="sm" colorScheme="red" onClick={handleRemove}>Delete</Button>
                    </HStack>
                </HStack>
            )}
        </VStack>
    );
};

export default TodoItem;
