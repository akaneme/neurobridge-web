'use client';
import { useState } from 'react';

export default function Journal() {
    const [entries, setEntries] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const addEntry = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        setEntries([input, ...entries]);
        setInput('');
    };

    const deleteEntry = (idx: number) => {
        setEntries(entries.filter((_, i) => i !== idx));
    };

    return (
        <div className="flex flex-col h-full max-w-2xl mx-auto p-6 gap-4">
            <h1 className="text-xl font-semibold mb-2">Caregiver Journal</h1>
            <form onSubmit={addEntry} className="flex gap-2 mb-4">
                <input
                    className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-black/20 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Write a new entry..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Add</button>
            </form>
            <ul className="flex-1 overflow-y-auto space-y-3">
                {entries.length === 0 && <li className="text-gray-400 text-center">No entries yet.</li>}
                {entries.map((entry, idx) => (
                    <li key={idx} className="bg-black/5 dark:bg-white/5 rounded-lg p-4 flex justify-between items-center">
                        <span>{entry}</span>
                        <button onClick={() => deleteEntry(idx)} className="text-red-500 hover:underline ml-4">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
} 