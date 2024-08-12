import { useState } from 'react';
import { Input, Button, Box } from '@chakra-ui/react';
import axios from 'axios';

const AddTodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return;

        const response = await axios.post('http://localhost:5000/api/todos', { title });
        addTodo(response.data);
        setTitle('');
    };

    return (
        <Box as="form" onSubmit={handleSubmit} className="mb-4">
            <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
                className="mb-2"
                bg="gray.700"
                color="white"
                _placeholder={{ color: 'gray.400' }}
            />
            <Button type="submit" colorScheme="teal">Add Todo</Button>
        </Box>
    );
};

export default AddTodoForm;
