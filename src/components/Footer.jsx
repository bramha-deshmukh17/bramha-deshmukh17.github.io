import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    return (
        <footer
            className="border-t py-3"
            style={{
                backgroundColor: '#000',
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.08)',
            }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-8">

                {/* Mobile: quick links + copyright */}
                <div className="md:hidden">
                    <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
                        <button type="button" className="hover:underline" onClick={() => navigate('/')}>Home</button>
                        <button type="button" className="hover:underline" onClick={() => window.open('https://labs.bramhadeshmukh.me/', "_blank")}>Labs</button>
                        <button type="button" className="hover:underline" onClick={() => navigate('/projects')}>Projects</button>
                        <button type="button" className="hover:underline" onClick={() => navigate('/experience')}>Experience</button>
                        <button type="button" className="hover:underline" onClick={() => navigate('/skills')}>Skills</button>
                        <button type="button" className="hover:underline" onClick={() => navigate('/education')}>Education</button>
                        <button type="button" className="hover:underline" onClick={() => navigate('/contact')}>Contact</button>
                    </nav>
                    <div className="text-xs text-center opacity-80 mt-3">
                        &copy; {currentYear} Bramha Deshmukh
                    </div>
                </div>

                {/* Desktop copyright */}
                <div className="hidden md:block text-sm opacity-75 text-center">
                    &copy; {currentYear} Bramha Deshmukh
                </div>
            </div>
        </footer>
    );
};

export default Footer;