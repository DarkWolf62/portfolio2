import React from 'react';

export default function skills() {
    return (
        <section id="skills" className="bg-gray-100 py-16 px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Compétences</h2>
            <div className="flex flex-wrap justify-center">
                <div className="bg-gray-200 m-2 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">JavaScript</h3>
                </div>
                <div className="bg-gray-200 m-2 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">React</h3>
                </div>
            </div>
        </section>
    );
}