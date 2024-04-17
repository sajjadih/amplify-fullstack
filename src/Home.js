import React, { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/api";
import { listTodos } from "./graphql/queries";
import { createTodo, updateTodo, deleteTodo } from "./graphql/mutations";
import ReactPaginate from 'react-paginate';
import { FaTrash, FaEdit, FaPlus, FaFilter, FaAngleLeft, FaAngleRight, FaSave, FaTimes } from 'react-icons/fa';
import { Document, Page, Text, View, PDFDownloadLink } from '@react-pdf/renderer';

const client = generateClient();

function Home() {
    const [todos, setTodos] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editingTodoDescription, setEditingTodoDescription] = useState('');
    const [editingTodoCurrentValue, setEditingTodoCurrentValue] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');
    const [newTodoInterestRate, setNewTodoInterestRate] = useState('');
    const [newTodoInflationRate, setNewTodoInflationRate] = useState('');
    const [newTodoCurrentValue, setNewTodoCurrentValue] = useState('');
    const [newTodoFutureValue, setNewTodoFutureValue] = useState('');
    const [newTodoPresentValue, setNewTodoPresentValue] = useState('');
    const [filterDescription, setFilterDescription] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalNewTodoDescription, setModalNewTodoDescription] = useState('');
    const [modalNewTodoInterestRate, setModalNewTodoInterestRate] = useState('');
    const [modalNewTodoInflationRate, setModalNewTodoInflationRate] = useState('');
    const [modalNewTodoCurrentValue, setModalNewTodoCurrentValue] = useState('');
    const [modalNewTodoFutureValue, setModalNewTodoFutureValue] = useState('');
    const [modalNewTodoPresentValue, setModalNewTodoPresentValue] = useState('');
    const [modalNewTodoName, setModalNewTodoName] = useState('Initial Name Value');
    const [modalValidationErrors, setModalValidationErrors] = useState([]);

    const todosPerPage = 15;

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const { data } = await client.graphql({ query: listTodos });
                setTodos(data.listTodos.items);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    useEffect(() => {
        const messageTimer = setTimeout(() => {
            setMessage('');
        }, 5000);

        return () => clearTimeout(messageTimer);
    }, [message]);

    const handleEditDescription = async (id, description, currentValue) => {
        setEditingTodoId(id);
        setEditingTodoDescription(description);
        setEditingTodoCurrentValue(currentValue);
    };

    const handleSaveDescription = async () => {
        try {
            await client.graphql({
                query: updateTodo,
                variables: {
                    input: {
                        id: editingTodoId,
                        description: editingTodoDescription,
                        current_value: editingTodoCurrentValue
                    }
                }
            });

            setEditingTodoId(null);
            setEditingTodoDescription('');
            setEditingTodoCurrentValue('');

            const { data } = await client.graphql({ query: listTodos });
            setTodos(data.listTodos.items);
        } catch (error) {
            console.error('Error updating description:', error);
        }
    };


    const handleCancelEdit = () => {
        setEditingTodoId(null);
        setEditingTodoDescription('');
        setEditingTodoCurrentValue('');
    };

    const handleDeleteTodo = async (id) => {
        try {
            const deletedTodo = todos.find(todo => todo.id === id);
            await client.graphql({ query: deleteTodo, variables: { input: { id } } });

            const updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos);

            setMessage(`Deleted entry - ID: ${deletedTodo.id}, Description: ${deletedTodo.description}`);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const onValidateNewTodo = async (newTodo) => {
        // Default validation response
        let validationResponse = {
            hasError: false,
            errorMessage: ''
        };

        // Custom validation for interest rate
        if (newTodo.interestRate < 0) {
            validationResponse = {
                hasError: true,
                errorMessage: 'Interest Rate cannot be negative'
            };
        }

        return validationResponse;
    };

    const handleCreateTodo = async () => {
        try {
            const validationResponse = await onValidateNewTodo({
                interestRate: modalNewTodoInterestRate
            });

            if (validationResponse.hasError) {
                setModalValidationErrors([validationResponse.errorMessage]);
                return; // Prevent further execution if there are validation errors
            }

            const id = Date.now().toString(); // Generate ID based on timestamp
            await client.graphql({
                query: createTodo,
                variables: {
                    input: {
                        name: id, // Use generated ID as the name
                        description: modalNewTodoDescription,
                        interest_rate: modalNewTodoInterestRate,
                        inflation_rate: modalNewTodoInflationRate,
                        current_value: modalNewTodoCurrentValue,
                        future_value: modalNewTodoFutureValue,
                        present_value: modalNewTodoPresentValue
                    }
                }
            });

            setModalNewTodoDescription('');
            setModalNewTodoInterestRate('');
            setModalNewTodoInflationRate('');
            setModalNewTodoCurrentValue('');
            setModalNewTodoFutureValue('');
            setModalNewTodoPresentValue('');

            const { data } = await client.graphql({ query: listTodos });
            setTodos(data.listTodos.items);

            setMessage(`New entry created - ID: ${id}, Description: ${modalNewTodoDescription}`);

            setIsModalOpen(true);
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    };

    const handleFilterDescriptionChange = (e) => {
        setFilterDescription(e.target.value);
    };

    const formatCurrency = (value) => {
        return Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const filteredTodos = todos.filter(todo => {
        const descriptionMatch = todo.description.toLowerCase().includes(filterDescription.toLowerCase());
        return descriptionMatch;
    });

    const pageCount = Math.ceil(filteredTodos.length / todosPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const displayTodos = filteredTodos
        .slice(pageNumber * todosPerPage, (pageNumber + 1) * todosPerPage)
        .map(todo => (
            editingTodoId === todo.id ? (
                <tr key={todo.id}>
                    <td>{todo.name}</td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            style={{ fontSize: '0.7rem' }}
                            value={editingTodoDescription}
                            onChange={(e) => setEditingTodoDescription(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            style={{ fontSize: '0.7rem' }}
                            value={editingTodoCurrentValue}
                            onChange={(e) => setEditingTodoCurrentValue(e.target.value)}
                        />
                    </td>
                    <td>{todo.interest_rate}</td>
                    <td>{todo.inflation_rate}</td>
                    <td>{todo.future_value}</td>
                    <td>{todo.present_value}</td>
                    <td>{new Date(todo.createdAt).toLocaleString()}</td>
                    <td>{new Date(todo.updatedAt).toLocaleString()}</td>
                    <td>
                        <div>
                            <FaSave onClick={handleSaveDescription} style={{ cursor: 'pointer', fontSize: '0.7rem', marginRight: '5px' }} />
                            <FaTimes onClick={handleCancelEdit} style={{ cursor: 'pointer', fontSize: '0.7rem' }} />
                        </div>
                    </td>
                </tr>
            ) : (
                <tr key={todo.id}>
                    <td>{todo.name}</td>
                    <td>{todo.description}</td>
                    <td>{formatCurrency(todo.current_value)}</td>
                    <td>{todo.interest_rate}</td>
                    <td>{todo.inflation_rate}</td>
                    <td>{todo.future_value}</td>
                    <td>{todo.present_value}</td>
                    <td>{new Date(todo.createdAt).toLocaleString()}</td>
                    <td>{new Date(todo.updatedAt).toLocaleString()}</td>
                    <td>
                        <div>
                            <FaEdit onClick={() => handleEditDescription(todo.id, todo.description, todo.current_value)} style={{ cursor: 'pointer', fontSize: '0.7rem' }} />
                            <FaTrash onClick={() => handleDeleteTodo(todo.id)} style={{ cursor: 'pointer', marginLeft: '5px', fontSize: '0.7rem' }} />
                        </div>
                    </td>
                </tr>
            )
        ));

    // PDF Document Component
    const MyDocument = () => (
        <Document>
            <Page size="A4" style={{ flexDirection: 'landscape' }}>
                {filteredTodos.map(todo => (
                    <View key={todo.id} style={{ flexDirection: 'row', margin: 10 }}>
                        <Text style={{ width: '10%', fontSize: '8px' }}>{todo.name}</Text>
                        <Text style={{ width: '15%', fontSize: '8px' }}>{todo.description}</Text>
                        <Text style={{ width: '10%', fontSize: '8px' }}>{formatCurrency(todo.current_value)}</Text>
                        <Text style={{ width: '10%', fontSize: '8px' }}>{todo.interest_rate}</Text>
                        <Text style={{ width: '10%', fontSize: '8px' }}>{todo.inflation_rate}</Text>
                        <Text style={{ width: '10%', fontSize: '8px' }}>{todo.future_value}</Text>
                        <Text style={{ width: '10%', fontSize: '8px' }}>{todo.present_value}</Text>
                        <Text style={{ width: '10%', fontSize: '8px' }}>{new Date(todo.createdAt).toLocaleString()}</Text>
                        <Text style={{ width: '10%', fontSize: '8px' }}>{new Date(todo.updatedAt).toLocaleString()}</Text>
                    </View>
                ))}
            </Page>
        </Document>
    );

    return (
        <div>
            <h2>Home Page</h2>
            <p>Welcome to the Home Page</p>

            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}

            <div className="mb-3">
                <div className="input-group mb-3">
                    <span className="input-group-text"><FaFilter /></span>
                    <input type="text" className="form-control" placeholder="Filter by description" value={filterDescription} onChange={handleFilterDescriptionChange} />
                </div>
            </div>

            <div className="mb-3">
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Open Modal</button>
            </div>

            {isModalOpen && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
                            </div>
                            <div className="modal-body">
                                {modalValidationErrors.map((error, index) => (
                                    <div key={index} className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                ))}
                                <div className="mb-3">
                                    <label htmlFor="modalNewTodoName" className="form-label">Name:</label>
                                    <input type="text" id="modalNewTodoName" className="form-control mb-2" value={modalNewTodoName} readOnly />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="modalNewTodoDescription" className="form-label">Description:</label>
                                    <input type="text" id="modalNewTodoDescription" className="form-control mb-2" style={{ fontSize: '0.7rem', height: '1.5rem' }} placeholder="Enter description" value={modalNewTodoDescription} onChange={(e) => setModalNewTodoDescription(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="modalNewTodoInterestRate" className="form-label">Interest Rate:</label>
                                    <input type="text" id="modalNewTodoInterestRate" className="form-control mb-2" style={{ fontSize: '0.7rem', height: '1.5rem' }} placeholder="Enter interest rate" value={modalNewTodoInterestRate} onChange={(e) => setModalNewTodoInterestRate(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="modalNewTodoInflationRate" className="form-label">Inflation Rate:</label>
                                    <input type="text" id="modalNewTodoInflationRate" className="form-control mb-2" style={{ fontSize: '0.7rem', height: '1.5rem' }} placeholder="Enter inflation rate" value={modalNewTodoInflationRate} onChange={(e) => setModalNewTodoInflationRate(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="modalNewTodoCurrentValue" className="form-label">Current Value:</label>
                                    <input type="text" id="modalNewTodoCurrentValue" className="form-control mb-2" style={{ fontSize: '0.7rem', height: '1.5rem' }} placeholder="Enter current value" value={modalNewTodoCurrentValue} onChange={(e) => setModalNewTodoCurrentValue(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="modalNewTodoFutureValue" className="form-label">Future Value:</label>
                                    <input type="text" id="modalNewTodoFutureValue" className="form-control mb-2" style={{ fontSize: '0.7rem', height: '1.5rem' }} placeholder="Enter future value" value={modalNewTodoFutureValue} onChange={(e) => setModalNewTodoFutureValue(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="modalNewTodoPresentValue" className="form-label">Present Value:</label>
                                    <input type="text" id="modalNewTodoPresentValue" className="form-control mb-2" style={{ fontSize: '0.7rem', height: '1.5rem' }} placeholder="Enter present value" value={modalNewTodoPresentValue} onChange={(e) => setModalNewTodoPresentValue(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleCreateTodo}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="table-responsive">
                <table className="table table-bordered table-condensed" style={{ fontSize: '0.7rem', tableLayout: 'fixed' }}>
                    <thead style={{ backgroundColor: 'rgb(51, 51, 51)', color: 'rgb(231, 140, 7)' }}>
                    <tr>
                        <th style={{ width: '10%' }}>Name</th>
                        <th style={{ width: '15%' }}>Description</th>
                        <th style={{ width: '10%' }}>Current Value</th>
                        <th style={{ width: '10%' }}>Interest Rate</th>
                        <th style={{ width: '10%' }}>Inflation Rate</th>
                        <th style={{ width: '10%' }}>Future Value</th>
                        <th style={{ width: '10%' }}>Present Value</th>
                        <th style={{ width: '15%' }}>Created On</th>
                        <th style={{ width: '15%' }}>Updated On</th>
                        <th style={{ width: '10%' }}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayTodos}
                    </tbody>
                </table>
            </div>

            <ReactPaginate
                previousLabel={<FaAngleLeft />}
                nextLabel={<FaAngleRight />}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'pagination justify-content-center'}
                activeClassName={'active'}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
            />

            <PDFDownloadLink document={<MyDocument />} fileName="todos.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Export to PDF'
                }
            </PDFDownloadLink>
        </div>
    );
}

export default Home;
