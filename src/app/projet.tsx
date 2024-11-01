import React from 'react';
import Image from "next/image";

export default function Projet() {
    return (
        <section id="projects" className="bg-gray-900 py-16 px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Projets</h2>
            <div className="flex space-x-8 overflow-x-auto">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md flex-shrink-0 border border-gray-700 w-80">
                    <Image src="/portfolio2/portrait.webp" alt="Projet 1" width={600} height={500} loading="lazy" className="rounded"/>
                    <h3 className="text-xl font-semibold mt-4 text-white">Projet 1</h3>
                    <p className="text-gray-400">
                        Description de votre projet, les technologies utilisées, et l&rsquo;objectif de ce projet.
                    </p>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white">Technologies:</h4>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md flex-shrink-0 border border-gray-700 w-80">
                    <Image src="/portfolio2/portrait.webp" alt="Projet 2" width={600} height={500} loading="lazy" className="rounded"/>
                    <h3 className="text-xl font-semibold mt-4 text-white">Projet 2</h3>
                    <p className="text-gray-400">
                        Description de votre projet, les technologies utilisées, et l&rsquo;objectif de ce projet.
                    </p>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white">Technologies:</h4>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>Next.js</li>
                            <li>JavaScript</li>
                            <li>CSS Modules</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md flex-shrink-0 border border-gray-700 w-80">
                    <Image src="/portfolio2/portrait.webp" alt="Projet 3" width={600} height={500} loading="lazy" className="rounded"/>
                    <h3 className="text-xl font-semibold mt-4 text-white">Projet 3</h3>
                    <p className="text-gray-400">
                        Description de votre projet, les technologies utilisées, et l&rsquo;objectif de ce projet.
                    </p>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white">Technologies:</h4>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>Vue.js</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}