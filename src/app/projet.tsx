import React from 'react';
import Image from "next/image";

export default function Projet() {
    return (
        <section id="projects" className="bg-gray-900 py-16 px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Projets</h2>
            <div className="flex flex-wrap justify-center space-x-0 md:space-x-8 ">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md flex-shrink-0 border border-gray-700 w-full md:w-1/2 lg:w-1/3 mb-8">
                    <Image src="/portfolio2/flatcraft.webp" alt="Projet 1" width={1200} height={500} loading="lazy" className="rounded"/>
                    <h3 className="text-xl font-semibold mt-4 text-white">FlatCraft</h3>
                    <p className="text-gray-400">
                        Mon équipe et moi devions implémenter en Java le jeu Flatcraft, une version simplifiée de Minecraft en 2D (ou encore Terraria). Le joueur explore un monde généré de manière aléatoire pour collecter des ressources, combattre des monstres et construire des objets et structures personnalisés. Dans ce projet, nous devions essentiellement mettre en place le modèle du jeu, la partie graphique (y compris le contrôleur) ainsi que la gestion des différents événements du jeu.                    </p>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white">Technologies:</h4>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>Java</li>
                            <li>JavaFx</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md flex-shrink-0 border border-gray-700 w-full md:w-1/2 lg:w-1/3 mb-8">
                    <Image src="/portfolio2/botdiscord.webp" alt="Projet 2" width={600} height={500} loading="lazy" className="rounded"/>
                    <h3 className="text-xl font-semibold mt-4 text-white">Bot Discord</h3>
                    <p className="text-gray-400">
                        Ce projet est un bot Discord écrit en Go, conçu pour offrir une expérience immersive dans un monde fantastique.
                        Ce projet vise à offrir une expérience de jeu interactive et engageante aux utilisateurs de Discord, en les plongeant dans un univers riche et détaillé.                    </p>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white">Technologies:</h4>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>GO</li>
                            <li>Discord</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md flex-shrink-0 border border-gray-700 w-full md:w-1/2 lg:w-1/3 mb-8">
                    <Image src="/portfolio2/galerie.webp" alt="Projet 3" width={600} height={500} loading="lazy" className="rounded"/>
                    <h3 className="text-xl font-semibold mt-4 text-white">Galerie</h3>
                    <p className="text-gray-400">
                        Dans ce projet, mon équipe et moi avons développé une application dont l’objectif est de gérer les images calculées par un raytracer précédemment mis en place.                    </p>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white">Technologies:</h4>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>Sqlite</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md flex-shrink-0 border border-gray-700 w-full md:w-1/2 lg:w-1/3 mb-8">
                    <Image src="/portfolio2/raytracer.webp" alt="Projet 4" width={600} height={500} loading="lazy" className="rounded"/>
                    <h3 className="text-xl font-semibold mt-4 text-white">Raytracer</h3>
                    <p className="text-gray-400">
                        Dans ce projet, on nous demandait de concevoir une bibliothèque de lancer de rayons afin de pouvoir générer les graphismes de leur toute dernière création. Plus précisément, notre bibliothèque devait permettre de prendre en entrée un fichier texte décrivant une image (une scène) et de produire une image correspondante.
                    </p>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white">Technologies:</h4>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>Java</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}