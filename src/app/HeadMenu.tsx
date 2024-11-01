"use client";


import React, {useState} from 'react';

export default function HeadMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
            <h1 className="text-xl font-bold">Nourry Nicolas</h1>
            <button
                className="block md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <nav className={`flex-1 text-center md:flex ${isOpen ? 'block' : 'hidden'}`}>
                <a href="#about" className="block md:inline-block px-4">À propos</a>
                <a href="#projects" className="block md:inline-block px-4">Projets</a>
                <a href="#skills" className="block md:inline-block px-4">Compétences</a>
                <a href="#contact" className="block md:inline-block px-4">Contact</a>
            </nav>
            <div className="hidden md:block">
                <a href="https://github.com/yourusername" className="px-2">GitHub</a>
                <a href="https://gitlab.com/yourusername" className="px-2">GitLab</a>
            </div>
        </header>
    );
}
