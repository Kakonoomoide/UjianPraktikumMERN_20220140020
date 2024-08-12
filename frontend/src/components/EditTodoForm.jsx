import { useState } from 'react';
import { Input, Button, Box } from '@chakra-ui/react';
import axios from 'axios';

const EditTodoForm = ({ todo, onUpdate }) => {
    const [title, setTitle] = useState(todo.title);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return;

        const updatedTodo = { ...todo, title };
        const response = await axios.put(`http://localhost:5000/api/todos/${todo._id}`, updatedTodo);
        onUpdate(response.data);
    };

    return (
        <Box as="form" onSubmit={handleSubmit} className="mb-4">
            <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Edit todo title"
                className="mb-2"
                bg="gray.700"
                color="white"
                _placeholder={{ color: 'gray.400' }}
            />
            <Button type="submit" colorScheme="blue">Update Todo</Button>
        </Box>
    );
};

export default EditTodoForm;
