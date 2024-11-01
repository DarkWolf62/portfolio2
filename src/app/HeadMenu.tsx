import React from 'react';

export default function HeadMenu() {
    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
            <h1 className="text-xl font-bold">Nourry Nicolas</h1>
            <nav className="flex-1 text-center">
                <a href="#about" className="px-4">À propos</a>
                <a href="#projects" className="px-4">Projets</a>
                <a href="#skills" className="px-4">Compétences</a>
                <a href="#contact" className="px-4">Contact</a>
            </nav>
            <div>
                <a href="https://github.com/yourusername" className="px-2">GitHub</a>
                <a href="https://gitlab.com/yourusername" className="px-2">GitLab</a>
            </div>
        </header>
    );
}
