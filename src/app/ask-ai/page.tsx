'use client';
import { useState } from 'react';

export default function AskAI() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { sender: 'ai', text: 'Hi! How can I help you with dementia care today?' },
    ]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages([...messages, { sender: 'user', text: input }]);
        setTimeout(() => {
            setMessages((msgs) => [
                ...msgs,
                { sender: 'ai', text: 'This is a mock AI response. (Integrate real AI later!)' },
            ]);
        }, 600);
        setInput('');
    };

    return (
        <div className="flex flex-col h-full max-w-2xl mx-auto p-6 gap-4">
            <h1 className="text-xl font-semibold mb-2">Ask AI</h1>
            <div className="flex-1 overflow-y-auto bg-black/5 dark:bg-white/5 rounded-lg p-4 mb-2">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <span className={`px-4 py-2 rounded-2xl text-sm max-w-xs inline-block ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}>{msg.text}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSend} className="flex gap-2">
                <input
                    className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-black/20 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Type your question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Send</button>
            </form>
        </div>
    );
} 