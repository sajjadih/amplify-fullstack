import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { generateClient } from "aws-amplify/api";
import { listTodos } from './graphql/queries';
import { createTodo, deleteTodo, updateTodo } from './graphql/mutations';
import { Container, Form, Button, Table, Modal, Navbar, Nav } from 'react-bootstrap';
import { FaTrash, FaPen } from 'react-icons/fa';

Amplify.configure(awsconfig);
const client = generateClient();

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodoName, setNewTodoName] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedTodoId, setSelectedTodoId] = useState('');
    const [selectedTodoDescription, setSelectedTodoDescription] = useState('');

    const fetchTodos = async () => {
        try {
            const { data } = await client.graphql({ query: listTodos });
            setTodos(data.listTodos.items);
        } catch (err) {
            console.error('Error fetching todos:', err);
        }
    };

    const handleCreateTodo = async (event) => {
        event.preventDefault();
        if (!newTodoName.trim() || !newTodoDescription.trim()) return;
        try {
            await client.graphql({
                query: createTodo,
                variables: { input: { name: newTodoName, description: newTodoDescription } }
            });
            fetchTodos();
            setNewTodoName('');
            setNewTodoDescription('');
        } catch (err) {
            console.error('Error creating new todo:', err);
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await client.graphql({
                query: deleteTodo,
                variables: { input: { id } }
            });
            fetchTodos();
        } catch (err) {
            console.error('Error deleting todo:', err);
        }
    };

    const handleUpdateTodo = async () => {
        try {
            await client.graphql({
                query: updateTodo,
                variables: { input: { id: selectedTodoId, description: selectedTodoDescription } }
            });
            fetchTodos();
            handleCloseModal();
        } catch (err) {
            console.error('Error updating todo:', err);
        }
    };

    const handleOpenModal = (id, description) => {
        setSelectedTodoId(id);
        setSelectedTodoDescription(description);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedTodoId('');
        setSelectedTodoDescription('');
        setShowModal(false);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <Router>
            <Container fluid>
                <Navbar bg="light" expand="sm">
                    <Navbar.Brand href="#">Todo App</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#/page1">PAGE 1</Nav.Link>
                        <Nav.Link href="#/page2">PAGE 2</Nav.Link>
                    </Nav>
                </Navbar>
                <div className="my-3"></div> {/* Space between navbar and content */}
                <Routes>
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2
                        todos={todos}
                        handleCreateTodo={handleCreateTodo}
                        newTodoName={newTodoName}
                        setNewTodoName={setNewTodoName}
                        newTodoDescription={newTodoDescription}
                        setNewTodoDescription={setNewTodoDescription}
                        handleDeleteTodo={handleDeleteTodo}
                        handleOpenModal={handleOpenModal}
                        showModal={showModal}
                        handleCloseModal={handleCloseModal}
                        description={newTodoDescription}
                        setDescription={setNewTodoDescription}
                        handleUpdateTodo={handleUpdateTodo}
                    />} />
                </Routes>
            </Container>
        </Router>
    );
}

const Page1 = () => (
    <Container>
        <h1>Page 1</h1>
        <p>This is Page 1 content.</p>
    </Container>
);

const Page2 = ({
                   todos,
                   handleCreateTodo,
                   newTodoName,
                   setNewTodoName,
                   newTodoDescription,
                   setNewTodoDescription,
                   handleDeleteTodo,
                   handleOpenModal,
                   showModal,
                   handleCloseModal,
                   description,
                   setDescription,
                   handleUpdateTodo
               }) => (
    <Container>
        <h1 className="mt-3">Todos</h1>
        <div className="my-3"></div> {/* Space between header and content */}
        <TodoForm
            handleCreateTodo={handleCreateTodo}
            newTodoName={newTodoName}
            setNewTodoName={setNewTodoName}
            newTodoDescription={newTodoDescription}
            setNewTodoDescription={setNewTodoDescription}
        />
        <hr style={{ borderColor: '#ddd' }} />
        <div className="my-3"></div> {/* Space between form and table */}
        <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleOpenModal={handleOpenModal} />
        <DescriptionModal
            show={showModal}
            handleClose={handleCloseModal}
            description={description}
            setDescription={setDescription}
            handleUpdateTodo={handleUpdateTodo}
        />
    </Container>
);

const TodoForm = ({ handleCreateTodo, newTodoName, setNewTodoName, newTodoDescription, setNewTodoDescription }) => (
    <Form onSubmit={handleCreateTodo}>
        <Form.Group controlId="formTodoName">
            <Form.Label>Todo Name</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter name"
                value={newTodoName}
                onChange={(e) => setNewTodoName(e.target.value)}
                required
                className="text-xs"
            />
        </Form.Group>
        <Form.Group controlId="formTodoDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter description"
                value={newTodoDescription}
                onChange={(e) => setNewTodoDescription(e.target.value)}
                required
                className="text-xs"
            />
        </Form.Group>
        <Button variant="primary" type="submit" className="text-xs">Create Todo</Button>
    </Form>
);

const TodoList = ({ todos, handleDeleteTodo, handleOpenModal }) => (
    <Table bordered striped size="sm">
        <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {todos.map(todo => (
            <tr key={todo.id}>
                <td>{todo.name}</td>
                <td>{todo.description}</td>
                <td>
                    <Button variant="danger" onClick={() => handleDeleteTodo(todo.id)} size="sm" className="text-xs">
                        <FaTrash />
                    </Button>
                    <Button variant="primary" onClick={() => handleOpenModal(todo.id, todo.description)} size="sm" className="text-xs">
                        <FaPen />
                    </Button>
                </td>
            </tr>
        ))}
        </tbody>
    </Table>
);

const DescriptionModal = ({ show, handleClose, description, setDescription, handleUpdateTodo }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Create Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group controlId="formTodoDescriptionModal">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="text-xs"
                />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} size="sm" className="text-xs">
                Close
            </Button>
            <Button variant="primary" onClick={handleUpdateTodo} size="sm" className="text-xs">
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
);

export default withAuthenticator(App);
