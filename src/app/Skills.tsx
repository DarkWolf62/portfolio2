import React from 'react';

export default function Skills() {
    return (
        <section id="skills" className="bg-gray-800 py-16 px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Compétences</h2>
            <div className="flex flex-col items-center justify-center">
                <div className="md:w-1/2 lg:w-1/3 p-4 flex flex-col items-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">Technologies</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                               className="text-blue-400 hover:underline">JavaScript</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://www.typescriptlang.org/"
                               className="text-blue-400 hover:underline">TypeScript</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://golang.org/" className="text-blue-400 hover:underline">Golang</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://www.java.com/" className="text-blue-400 hover:underline">Java</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://www.python.org/" className="text-blue-400 hover:underline">Python</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://www.php.net/" className="text-blue-400 hover:underline">PHP</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://git-scm.com/" className="text-blue-400 hover:underline">Git</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://grpc.io/" className="text-blue-400 hover:underline">gRPC</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://kotlinlang.org/" className="text-blue-400 hover:underline">Kotlin</a>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 lg:w-1/3 p-4 flex flex-col items-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">Logiciel</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://code.visualstudio.com/" className="text-blue-400 hover:underline">VS Code</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://www.jetbrains.com/pycharm/" className="text-blue-400 hover:underline">PyCharm</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://www.jetbrains.com/webstorm/" className="text-blue-400 hover:underline">WebStorm</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://www.jetbrains.com/idea/" className="text-blue-400 hover:underline">IntelliJ</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://www.jetbrains.com/phpstorm/" className="text-blue-400 hover:underline">PhpStorm</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://www.jetbrains.com/go/" className="text-blue-400 hover:underline">GoLand</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://developer.android.com/studio" className="text-blue-400 hover:underline">Android Studio</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://www.pgadmin.org/" className="text-blue-400 hover:underline">PGAdmin</a>
                        </div>
                        <div className="bg-gray-900 p-4 rounded text-center transform transition-transform duration-300 hover:scale-105">
                            <a href="https://pgmodeler.io/" className="text-blue-400 hover:underline">PGModeler</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}