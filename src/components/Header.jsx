import { useState, useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";
import '../css/Header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDarkMode = () => setTheme(theme === "light" ? "dark" : "light");

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const go = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky border-b-black top-0 z-10 shadow-lg w-full md:h-20 h-30">
            <nav className="mx-auto p-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <button type="button" onClick={() => go('/')} className="flex items-center space-x-2">
                        <img src="me.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
                        <span className="text-xl font-semibold">Portfolio</span>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center flex-grow space-x-2">
                    <button type="button" className="px-3 py-2 rounded" onClick={() => go('/')}>About</button>
                    <button type="button" className="px-3 py-2 rounded" onClick={() => go('/projects')}>Projects</button>
                    <button type="button" className="px-3 py-2 rounded" onClick={() => go('/experience')}>Experience</button>
                    <button type="button" className="px-3 py-2 rounded" onClick={() => go('/skills')}>Skills</button>
                    <button type="button" className="px-3 py-2 rounded" onClick={() => go('/education')}>Education</button>
                    <button type="button" className="px-3 py-2 rounded" onClick={() => go('/contact')}>Contact</button>
                </div>

                {/* Dark Mode Toggle Button */}
                <button onClick={toggleDarkMode} className="md:flex hidden">
                    {theme === "dark" ? (
                        <FaLightbulb className="p-2 rounded-full text-yellow-400 text-4xl hover:bg-gray-900" title="Light Mode" />
                    ) : (
                        <FaLightbulb className="p-2 rounded-full text-black text-4xl hover:bg-gray-200" title="Dark Mode" />
                    )}
                </button>

                {/* Hamburger Menu for Small Screens */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={toggleDarkMode}>
                        {theme === "dark" ? (
                            <FaLightbulb className="p-2 rounded-full text-yellow-400 text-3xl hover:bg-gray-900" title="Light Mode" />
                        ) : (
                            <FaLightbulb className="p-2 rounded-full text-black text-3xl hover:bg-gray-200" title="Dark Mode" />
                        )}
                    </button>

                    <button onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black text-white py-4 space-y-4">
                    <button type="button" className="block px-4 py-2 w-full text-left" onClick={() => go('/')}>About</button>
                    <button type="button" className="block px-4 py-2 w-full text-left" onClick={() => go('/projects')}>Projects</button>
                    <button type="button" className="block px-4 py-2 w-full text-left" onClick={() => go('/experience')}>Experience</button>
                    <button type="button" className="block px-4 py-2 w-full text-left" onClick={() => go('/skills')}>Skills</button>
                    <button type="button" className="block px-4 py-2 w-full text-left" onClick={() => go('/education')}>Education</button>
                    <button type="button" className="block px-4 py-2 w-full text-left" onClick={() => go('/contact')}>Contact</button>
                </div>
            )}
        </header>
    );
};

export default Header;
