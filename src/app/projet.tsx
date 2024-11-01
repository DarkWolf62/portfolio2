
import React from 'react';
import Image from "next/image";

export default function Projet() {
    return (
        <section id="projects" className="bg-white py-16 px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                    <Image src="/portfolio2/portrait.jpg" alt="Projet 1" width={400} height={300}
                           className="rounded"/>
                    <h3 className="text-xl font-semibold mt-4">Projet 1</h3>
                    <p className="text-gray-600">
                        Description de votre projet, les technologies utilisées, et l&rsquo;objectif de ce projet.
                    </p>
                </div>
            </div>
        </section>
    );
}