'use client';
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useEffect, useRef } from 'react';

const moodData = [
  { day: 'Mon', mood: 3 },
  { day: 'Tue', mood: 4 },
  { day: 'Wed', mood: 2 },
  { day: 'Thu', mood: 5 },
  { day: 'Fri', mood: 3 },
  { day: 'Sat', mood: 4 },
  { day: 'Sun', mood: 5 },
];

const medData = [
  { name: 'Donepezil', taken: 7 },
  { name: 'Memantine', taken: 6 },
  { name: 'Rivastigmine', taken: 5 },
];

export default function Home() {
  // Fade-in animation for hero and cards
  const heroRef = useRef<HTMLDivElement>(null);
  const graphsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (heroRef.current) heroRef.current.classList.add('animate-fadein');
    if (graphsRef.current) graphsRef.current.classList.add('animate-fadein');
  }, []);

  return (
    <div className="flex flex-col gap-12 p-8 max-w-5xl mx-auto w-full mt-10 mb-10">
      {/* Hero Section */}
      <section ref={heroRef} className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-blue-950 dark:via-black dark:to-violet-950 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
        {/* Left: Greeting and CTA */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-4xl font-poppins font-bold mb-2 text-blue-700 dark:text-violet-300 drop-shadow">Welcome to <span className="text-violet-700 dark:text-blue-300">NeuroBridge</span></h1>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-violet-800 text-blue-700 dark:text-violet-200 text-xs font-bold mb-2 animate-pulse shadow">AI for Dementia Caregivers</span>
          <p className="text-lg font-inter text-gray-700 dark:text-gray-200 mb-4">Your <span className="text-blue-600 dark:text-violet-300 font-semibold">AI-powered</span> companion for <span className="text-violet-700 dark:text-blue-300 font-semibold">dementia care</span>. Track moods, manage medications, and get support—all in one place.</p>
          <div className="flex gap-4">
            <a href="/journal" className="px-6 py-3 rounded-xl bg-blue-600 dark:bg-violet-700 text-white font-poppins font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-violet-600 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-violet-400 animate-bounce-slow">Start a Journal Entry</a>
            <a href="/ask-ai" className="px-6 py-3 rounded-xl bg-white text-blue-700 dark:bg-gray-900 dark:text-violet-200 font-poppins font-semibold border-2 border-blue-400 dark:border-violet-400 shadow hover:bg-blue-50 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-violet-400">Ask AI Now</a>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center">
          {/* Tooltip on illustration */}
          <div className="group relative w-40 h-40 rounded-full bg-blue-100 dark:bg-violet-900 flex items-center justify-center shadow-lg cursor-pointer">
            <span className="text-7xl">🧠</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-black/80 text-white text-xs rounded px-3 py-1 mt-2 transition pointer-events-none whitespace-nowrap">AI Mood & Memory Assistant</span>
          </div>
        </div>
        {/* Decorative gradient blob */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 dark:bg-violet-900 opacity-30 rounded-full blur-2xl pointer-events-none" />
      </section>
      {/* Graphs Section */}
      <section ref={graphsRef} className="bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-blue-950 dark:via-black dark:to-violet-950 rounded-3xl shadow-2xl p-8 animate-fadein">
        <h2 className="text-2xl font-poppins font-semibold mb-8 text-center text-blue-700 dark:text-violet-300 drop-shadow">Your <span className="text-violet-700 dark:text-blue-300">Weekly Overview</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mood Graph */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow flex flex-col items-center hover:shadow-xl transition-shadow animate-fadein">
            <h3 className="text-lg font-poppins font-semibold mb-4 text-blue-600 dark:text-violet-300">Mood <span className="text-violet-700 dark:text-blue-300">Trends</span></h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#8884d8" />
                <XAxis dataKey="day" />
                <YAxis domain={[1, 5]} />
                <Tooltip />
                <Line type="monotone" dataKey="mood" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Medication Graph */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow flex flex-col items-center hover:shadow-xl transition-shadow animate-fadein">
            <h3 className="text-lg font-poppins font-semibold mb-4 text-violet-700 dark:text-blue-300">Medication <span className="text-blue-600 dark:text-violet-300">Adherence</span></h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={medData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="taken" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 font-inter">
          <span>Use the sidebar to access more features and support.</span>
        </div>
      </section>
      {/* Animations */}
      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadein { animation: fadein 1.2s cubic-bezier(0.4,0,0.2,1) both; }
        .animate-bounce-slow { animation: bounce 2.5s infinite; }
      `}</style>
    </div>
  );
}
