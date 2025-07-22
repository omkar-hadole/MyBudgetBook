import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
    const navRef = useRef();
    const mobileMenuRef = useRef();

    useGSAP(() => {
        gsap.fromTo(
            navRef.current,
            { opacity: 0, y: -40 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
    }, { scope: navRef });

    useEffect(() => {
        if (isMobileMenuOpen) {
            setIsMobileMenuVisible(true);
            if (mobileMenuRef.current) {
                gsap.fromTo(
                    mobileMenuRef.current,
                    { opacity: 0, y: -30 },
                    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
                );
            }
        } else if (isMobileMenuVisible && mobileMenuRef.current) {
            gsap.to(mobileMenuRef.current, {
                opacity: 0,
                y: -760,
                duration: 0.9,
                ease: 'power3.inOut',
                onComplete: () => setIsMobileMenuVisible(false)
            });
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (!isMobileMenuOpen) return;
        function handleClick(e) {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
                setIsMobileMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((open) => !open);
    };

    const handleScrollToFaq = (e) => {
        e.preventDefault();
        const faqSection = document.getElementById('faqs');
        if (faqSection) {
            faqSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setIsMobileMenuOpen(false);
    };

    const handleScrollToFeatures = (e) => {
        e.preventDefault();
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div ref={navRef} className="mx-4 sm:mx-auto sm:max-w-7xl mt-6 mb-0">
                <nav className="flex items-center justify-between px-4 sm:px-6 py-1 sm:py-3 bg-black rounded-full w-full">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Link to="/" className="flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1687 6H24L13.8313 19H0L10.1687 6Z" fill="#155EEF" />
                                <path d="M10.9935 19.9648L7 25H21.6894L32 12H21.1583L14.8412 19.9648H10.9935Z" fill="#9E77ED" />
                            </svg>
                            <span className="text-white text-xl font-semibold ml-2">MyBudgetBook</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex gap-8 text-white font-medium">
                        <Link to="/about" className="hover:text-purple-400 transition">About</Link>
                        <a href="#features" onClick={handleScrollToFeatures} className="hover:text-purple-400 transition">Features</a>
                        <a href="#faqs" onClick={handleScrollToFaq} className="hover:text-purple-400 transition">FAQ</a>
                        <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/signup" className="bg-gradient-to-tr from-indigo-400 to-purple-500 px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition hidden md:block">Download App</Link>
                        <button
                            className="md:hidden text-white p-2"
                            aria-label="Menu"
                            onClick={toggleMobileMenu}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {isMobileMenuVisible && (
                <div
                    ref={mobileMenuRef}
                    className={`md:hidden fixed inset-0 bg-black bg-opacity-95 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : ''}`}
                    style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
                >
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        <button
                            className="absolute top-6 right-6 text-white p-2"
                            onClick={toggleMobileMenu}
                            aria-label="Close menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <Link to="/about" className="text-white text-xl hover:text-purple-400 transition" onClick={toggleMobileMenu}>About</Link>
                        <a href="#features" className="text-white text-xl hover:text-purple-400 transition" onClick={handleScrollToFeatures}>Features</a>
                        <a href="#faqs" className="text-white text-xl hover:text-purple-400 transition" onClick={handleScrollToFaq}>FAQ</a>
                        <Link to="/contact" className="text-white text-xl hover:text-purple-400 transition" onClick={toggleMobileMenu}>Contact</Link>
                        <Link to="/download" className="bg-gradient-to-tr from-indigo-400 to-purple-500 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition" onClick={toggleMobileMenu}>Download App</Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar; 