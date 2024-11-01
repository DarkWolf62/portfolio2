import React from 'react';

export default function Presentation() {
    return (
        <section id="about" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 mt-8">
            <img src="/portfolio2/portrait.webp" alt="Profile" className="w-64 h-64 rounded-full mb-10"/>
            <h2 className="text-4xl text-white font-bold mb-4">Salut, je suis Nourry Nicolas!</h2>
            <p className="text-lg text-white text-center max-w-2xl">
                Je suis un développeur web passionné par la création d&rsquo;expériences utilisateur modernes et
                dynamiques.
                Avec des compétences en développement frontend et backend, je construis des applications performantes
                et
                intuitives.
            </p>
        </section>
    );
}