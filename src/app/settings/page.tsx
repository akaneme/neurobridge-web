'use client';
import { useState } from 'react';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('auto');

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-2xl font-poppins font-bold mb-6 text-blue-700 dark:text-violet-300 text-center">Settings</h1>
      <div className="bg-white dark:bg-violet-900 rounded-2xl shadow p-6 border border-blue-100 dark:border-violet-800 flex flex-col gap-6">
        {/* Notification Preferences */}
        <div className="flex items-center justify-between">
          <span className="font-poppins text-blue-700 dark:text-violet-200">Notifications</span>
          <button
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${notifications ? 'bg-blue-500 dark:bg-violet-700' : 'bg-gray-300 dark:bg-gray-700'}`}
            onClick={() => setNotifications((n) => !n)}
          >
            <span className={`h-4 w-4 bg-white rounded-full shadow transform transition-transform duration-300 ${notifications ? 'translate-x-6' : ''}`}></span>
          </button>
        </div>
        {/* Theme Selection */}
        <div>
          <div className="font-poppins text-blue-700 dark:text-violet-200 mb-2">Theme</div>
          <div className="flex gap-4">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="theme" value="light" checked={theme === 'light'} onChange={() => setTheme('light')} className="accent-blue-500" />
              <span className="text-sm">Light</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="theme" value="dark" checked={theme === 'dark'} onChange={() => setTheme('dark')} className="accent-violet-500" />
              <span className="text-sm">Dark</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="theme" value="auto" checked={theme === 'auto'} onChange={() => setTheme('auto')} className="accent-blue-400" />
              <span className="text-sm">Auto</span>
            </label>
          </div>
        </div>
        <button className="mt-4 px-6 py-2 rounded-lg bg-blue-600 dark:bg-violet-700 text-white font-poppins font-semibold shadow hover:bg-blue-700 dark:hover:bg-violet-600 transition">Save Settings</button>
      </div>
    </div>
  );
} 