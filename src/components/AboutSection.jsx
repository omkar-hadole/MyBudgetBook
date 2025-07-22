import React, { useRef } from 'react';
import AboutImage from '../assets/about.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef();
    const leftColRef = useRef();
    const rightColRef = useRef();

    useGSAP(() => {
        gsap.fromTo(
            leftColRef.current,
            { opacity: 0, x: -60 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
        gsap.fromTo(
            rightColRef.current,
            { opacity: 0, x: 60 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="about" className="w-full bg-gradient-to-b from-white to-gray-50 py-20 sm:py-32 px-4 md:px-8 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 w-full">
                <div ref={leftColRef} className="md:w-1/2 text-center md:text-left max-w-xl md:max-w-none">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        About MyBudgetBook: Empowering Your Financial Journey
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                        At MyBudgetBook, we believe in simplifying finance for everyone. Our mission is to provide intuitive and powerful tools that help you track expenses, manage budgets, and achieve your financial goals effortlessly. We are committed to innovation, security, and user-friendly design.
                    </p>
                    <a href="#learn-more" className="px-8 py-3 bg-gradient-to-tr from-indigo-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
                        Learn More
                    </a>
                </div>
                <div ref={rightColRef} className="md:w-1/2 flex justify-center md:justify-end">
                    <img src={AboutImage} alt="About MyBudgetBook" className="w-full max-w-md h-auto transform hover:scale-105 transition duration-300" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection; 