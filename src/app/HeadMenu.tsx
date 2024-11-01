"use client";

import React, { useState } from 'react';

export default function HeadMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
    <h1 className="text-xl font-bold">Nourry Nicolas</h1>
    <button
        className="block md:hidden"
        onClick={() => setIsOpen(!isOpen)}
    >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
    </button>
    <nav className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-8 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:p-0`}>
        <a href="#about" className="block md:inline-block px-4 py-2 hover:underline">À propos</a>
        <a href="#projects" className="block md:inline-block px-4 py-2 hover:underline">Projets</a>
        <a href="#skills" className="block md:inline-block px-4 py-2 hover:underline">Compétences</a>
        <a href="#contact" className="block md:inline-block px-4 py-2 hover:underline">Contact</a>
        <div className="md:hidden mt-4">
            <a href="https://github.com/yourusername" className="block px-4 py-2 hover:underline">GitHub</a>
            <a href="https://gitlab.com/yourusername" className="block px-4 py-2 hover:underline">GitLab</a>
        </div>
    </nav>
    <div className="hidden md:block">
        <a href="https://github.com/yourusername" className="px-2 hover:underline">GitHub</a>
        <a href="https://gitlab.com/yourusername" className="px-2 hover:underline">GitLab</a>
    </div>
</header>
    );
}