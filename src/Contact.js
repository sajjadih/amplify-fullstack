import React, { useState } from 'react';
import './Chatbot.css'; // Import CSS file for styling
import { FaComment, FaTimes } from 'react-icons/fa'; // Import icons from react-icons library

function Interactions() {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setTimeout(() => {
                setMessages([...messages, { text: 'Sorry, I am just a demo bot. I cannot respond.', sender: 'bot' }]);
            }, 500);
            setInputValue('');
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h3>Chat Bot</h3>
            </div>
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chatbot-input-form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type a message..."
                    className="chatbot-input"
                />
                <button type="submit" className="chatbot-send-button">
                    Send
                </button>
            </form>
        </div>
    );
}

function Contact() {
    const [chatOpen, setChatOpen] = useState(false);

    const toggleChat = () => {
        setChatOpen(!chatOpen);
    };

    return (
        <div>
            <div className="chatbot-header">
                <h3>Chat Bot</h3>
                <button className="toggle-btn" onClick={toggleChat}>
                    {chatOpen ? <FaTimes /> : <FaComment />}
                </button>
            </div>
            {chatOpen && <Interactions />}
        </div>
    );
}

export default Contact;
