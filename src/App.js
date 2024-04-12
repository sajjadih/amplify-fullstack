import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { generateClient } from "aws-amplify/api";
import { listTodos } from "./graphql/queries";
import { createTodo } from "./graphql/mutations";
import { Container, Table, Form, Button, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { signOut } from 'aws-amplify/auth';
import { FaSignOutAlt, FaBars, FaHome, FaCog, FaExchangeAlt, FaMoneyCheckAlt, FaDatabase, FaChartBar } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

Amplify.configure(awsconfig);
const client = generateClient();

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodoName, setNewTodoName] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');
    const [sidebarVisible, setSidebarVisible] = useState(false);

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
            const newTodo = await client.graphql({
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

    useEffect(() => {
        fetchTodos();
    }, []);

    async function handleSignOut() {
        try {
            await signOut({ global: true });
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

    return (
        <Router>
            <div className="d-flex" id="wrapper">
                <Sidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} handleSignOut={handleSignOut} />
                <div id="page-content-wrapper" style={{ width: '100%', marginLeft: sidebarVisible ? '250px' : '0px' }}>
                    <Button className="m-2" onClick={toggleSidebar}><FaBars /></Button>
                    <Routes>
                        <Route path="/" element={<MainPage todos={todos} handleCreateTodo={handleCreateTodo} newTodoName={newTodoName} setNewTodoName={setNewTodoName} newTodoDescription={newTodoDescription} setNewTodoDescription={setNewTodoDescription} handleSignOut={handleSignOut} />} />
                        <Route path="/next-page" element={<NextPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

const Sidebar = ({ isVisible, toggleSidebar, handleSignOut }) => (
    <div className={`bg-dark ${isVisible ? 'visible' : 'invisible'}`} id="sidebar-wrapper" style={{ width: "250px", height: "100vh", position: 'fixed' }}>
        <Button onClick={toggleSidebar} className="btn btn-secondary m-2">Toggle</Button>
        <div className="sidebar-heading text-light">Menu</div>
        <div className="list-group list-group-flush">
            <CustomLink to="/" className="list-group-item list-group-item-action bg-dark text-light">
                <FaHome className="mr-3" /> Home
            </CustomLink>
            <CustomLink to="/base-configuration" className="list-group-item list-group-item-action bg-dark text-light">
                <FaCog className="mr-3" /> Base Configuration
            </CustomLink>
            <CustomLink to="/transactions" className="list-group-item list-group-item-action bg-dark text-light">
                <FaExchangeAlt className="mr-3" /> Transactions
            </CustomLink>
            <CustomLink to="/accounting-postings" className="list-group-item list-group-item-action bg-dark text-light">
                <FaMoneyCheckAlt className="mr-3" /> Accounting & Postings
            </CustomLink>
            <CustomLink to="/master-data-management" className="list-group-item list-group-item-action bg-dark text-light">
                <FaDatabase className="mr-3" /> Master Data Management
            </CustomLink>
            <CustomLink to="/reports" className="list-group-item list-group-item-action bg-dark text-light">
                <FaChartBar className="mr-3" /> Reports
            </CustomLink>
            <CustomLink to="/" className="list-group-item list-group-item-action bg-dark text-light" onClick={handleSignOut}>
                <FaSignOutAlt className="mr-3" /> Sign Out
            </CustomLink>
        </div>
    </div>
);

const CustomLink = ({ to, children, ...rest }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={to}
            {...rest}
            style={{
                color: isHovered ? 'orange' : 'inherit',
                textDecoration: 'none',
                transition: 'color 0.3s',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </Link>
    );
};

const MainPage = ({ todos, handleCreateTodo, newTodoName, setNewTodoName, newTodoDescription, setNewTodoDescription, handleSignOut }) => (
    <Container fluid>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Todo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Button variant="outline-primary" onClick={handleSignOut}>
                        <FaSignOutAlt /> Sign Out
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <TodoForm handleCreateTodo={handleCreateTodo} newTodoName={newTodoName} setNewTodoName={setNewTodoName} newTodoDescription={newTodoDescription} setNewTodoDescription={setNewTodoDescription} />
        <h2 className="mt-3">Todo List</h2>
        <TodoList todos={todos} />
        <Link to="/next-page">
            <Button variant="primary" className="mt-3">Next Page</Button>
        </Link>
    </Container>
);

const NextPage = () => (
    <Container fluid>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Next Page</Navbar.Brand>
        </Navbar>
        <Link to="/">Back</Link>
    </Container>
);

const TodoForm = ({ handleCreateTodo, newTodoName, setNewTodoName, newTodoDescription, setNewTodoDescription }) => (
    <Form onSubmit={handleCreateTodo}>
        <Row>
            <Col md={6}>
                <Form.Group controlId="formTodoName">
                    <Form.Label>Todo Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={newTodoName}
                        onChange={(e) => setNewTodoName(e.target.value)}
                        required
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="formTodoDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter description"
                        value={newTodoDescription}
                        onChange={(e) => setNewTodoDescription(e.target.value)}
                        required
                    />
                </Form.Group>
            </Col>
        </Row>
        <Button variant="success" type="submit" className="mt-2">Create Todo</Button>
    </Form>
);

const TodoList = ({ todos }) => (
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {todos.map((todo, index) => (
            <tr key={index}>
                <td>{todo.name}</td>
                <td>{todo.description}</td>
            </tr>
        ))}
        </tbody>
    </Table>
);

export default withAuthenticator(App, {
    theme: {
        backgroundColor: '#FFA500', // Orange background
        textColor: '#000000', // Black text
        primaryColor: '#FFA500', // Orange buttons
        buttonTextColor: '#ffffff', // White text on buttons
        secondaryColor: '#000000' // Black secondary color
    }
});
