'use client';
import { Geist, Geist_Mono, Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { MoonIcon, SunIcon, UserCircleIcon, ChatBubbleLeftRightIcon, BookOpenIcon, Cog6ToothIcon, Squares2X2Icon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-poppins" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"], variable: "--font-montserrat" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', !darkMode);
    }
  };

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable} ${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen bg-background text-foreground font-sans`}>
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-28 bg-gradient-to-b from-blue-100 via-white to-violet-100 dark:from-violet-950 dark:via-gray-900 dark:to-blue-950 border-r border-blue-200 dark:border-violet-900 py-6 items-center gap-8 shadow-2xl relative">
          {/* Top left: Logo + NeuroBridge below */}
          <div className="flex flex-col items-center mb-6 mt-1 w-full">
            <span className="inline-block mb-1">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#7C3AED" />
                <path d="M12 20c-2-2-2-6 0-8s6-2 8 0 2 6 0 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 12v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-montserrat text-[1.1rem] font-bold tracking-tight text-violet-700 dark:text-blue-200 whitespace-nowrap text-center">NeuroBridge</span>
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-6 w-full items-center">
            <Link href="/" className={`group flex flex-col items-center w-full py-2 rounded-lg transition ${pathname === '/' ? 'bg-blue-200 dark:bg-violet-800 text-blue-700 dark:text-violet-200 shadow-lg' : 'hover:bg-blue-100 dark:hover:bg-violet-900 hover:shadow-md'}`}> <Squares2X2Icon className="h-7 w-7 mb-1" /> <span className="text-xs">Dashboard</span> </Link>
            <Link href="/ask-ai" className={`group flex flex-col items-center w-full py-2 rounded-lg transition ${pathname === '/ask-ai' ? 'bg-blue-200 dark:bg-violet-800 text-blue-700 dark:text-violet-200 shadow-lg' : 'hover:bg-blue-100 dark:hover:bg-violet-900 hover:shadow-md'}`}> <ChatBubbleLeftRightIcon className="h-7 w-7 mb-1" /> <span className="text-xs">Ask AI</span> </Link>
            <Link href="/journal" className={`group flex flex-col items-center w-full py-2 rounded-lg transition ${pathname === '/journal' ? 'bg-blue-200 dark:bg-violet-800 text-blue-700 dark:text-violet-200 shadow-lg' : 'hover:bg-blue-100 dark:hover:bg-violet-900 hover:shadow-md'}`}> <BookOpenIcon className="h-7 w-7 mb-1" /> <span className="text-xs">Journal</span> </Link>
            <Link href="/medications" className={`group flex flex-col items-center w-full py-2 rounded-lg transition ${pathname === '/medications' ? 'bg-blue-200 dark:bg-violet-800 text-blue-700 dark:text-violet-200 shadow-lg' : 'hover:bg-blue-100 dark:hover:bg-violet-900 hover:shadow-md'}`}> <ClipboardDocumentListIcon className="h-7 w-7 mb-1" /> <span className="text-xs">Medications</span> </Link>
            <Link href="/settings" className={`group flex flex-col items-center w-full py-2 rounded-lg transition ${pathname === '/settings' ? 'bg-blue-200 dark:bg-violet-800 text-blue-700 dark:text-violet-200 shadow-lg' : 'hover:bg-blue-100 dark:hover:bg-violet-900 hover:shadow-md'}`}> <Cog6ToothIcon className="h-7 w-7 mb-1" /> <span className="text-xs">Settings</span> </Link>
          </nav>
          {/* Divider */}
          <div className="w-4/5 h-px my-6 bg-blue-200 dark:bg-violet-800 rounded-full opacity-60" />
          <div className="flex-1" />
          {/* User Profile Card */}
          <div className="mb-6 w-24 flex flex-col items-center bg-white/90 dark:bg-violet-900 rounded-2xl p-4 shadow-lg border border-blue-200 dark:border-violet-700 transition-all">
            <span className="inline-block mb-2">
              <UserCircleIcon className="h-12 w-12 text-blue-500 dark:text-violet-300" />
            </span>
            <span className="font-poppins font-semibold text-base text-blue-900 dark:text-violet-100 mb-1">Alex Kim</span>
            <span className="font-inter text-xs text-blue-500 dark:text-violet-300 mb-2">Caregiver</span>
            <span className="text-xs text-gray-500 dark:text-gray-300 italic">Hi, Alex!</span>
          </div>
          {/* Dark mode toggle */}
          <button onClick={toggleDarkMode} className="mt-auto relative group" aria-label="Toggle dark mode">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 transition pointer-events-none">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            <span className="inline-block transition-transform duration-300 group-hover:rotate-12">
              {darkMode ? (
                <SunIcon className="h-7 w-7 text-yellow-400" />
              ) : (
                <MoonIcon className="h-7 w-7 text-gray-600 dark:text-gray-300" />
              )}
            </span>
          </button>
        </aside>
        {/* Main content */}
        <main className="flex-1 flex flex-col min-h-screen font-inter bg-background text-foreground">
          {children}
        </main>
      </body>
    </html>
  );
}
