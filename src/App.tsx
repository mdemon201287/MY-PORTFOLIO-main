import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="bg-gray-800 p-4 flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white">About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="text-white">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white">Contact</Link>
                    </li>
                </ul>
                <a
                    href="https://github.com/mdemon201287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                >
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.172c-3.338.726-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.833 2.805 1.303 3.49.997.108-.775.418-1.303.76-1.602-2.665-.304-5.467-1.333-5.467-5.931 0-1.311.47-2.382 1.236-3.222-.124-.304-.536-1.527.117-3.176 0 0 1.01-.323 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.553 3.3-1.23 3.3-1.23.653 1.649.241 2.872.117 3.176.77.84 1.236 1.911 1.236 3.222 0 4.609-2.807 5.625-5.482 5.922.429.369.814 1.096.814 2.211v3.282c0 .319.218.694.825.576C20.565 21.795 24 17.298 24 12 24 5.373 18.627 0 12 0z"
                        />
                    </svg>
                </a>
            </nav>
            <div className="p-4 flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
