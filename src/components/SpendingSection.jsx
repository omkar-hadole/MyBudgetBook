import React, { useRef } from 'react';
import Spending from "../assets/Spendding.svg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const features = [
    'Track expenses with real-time updates.',
    'Instantly categorize and monitor your spending.'
];

const SpendingSection = () => {
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
        gsap.fromTo(
            rightColRef.current.querySelectorAll('.spending-feature-item'),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.15,
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
        <section ref={sectionRef} className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 md:py-20 px-4 md:px-8 gap-12 md:gap-8 lg:gap-20">
            <div ref={leftColRef} className="flex-1 flex justify-center items-center w-full mb-10 md:mb-0">
                <img src={Spending} alt="" />
            </div>

            <div ref={rightColRef} className="flex-1 flex flex-col items-start max-w-xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left leading-tight">Track, Categorize, and<br />Visualize Your<br />Spending Effortlessly.</h2>
                <p className="text-gray-500 text-base sm:text-lg mb-8 text-left">MyBudgetBook is designed to empower everyone with easy-to-use tools to track expenses and gain clear insights into personal finances.</p>
                <div className="flex flex-col gap-y-8 w-full mb-8">
                    {features.map((f, i) => (
                        <div key={i} className="spending-feature-item flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100">
                                <svg width="25" height="25" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#22223B" strokeWidth="1.5" /><path d="M8 12.5l2.5 2.5 5-5" stroke="#22223B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <span className="text-gray-800 text-base sm:text-lg">{f}</span>
                        </div>
                    ))}
                </div>
                <Link to="/signup" className="mt-2 px-8 py-3 bg-black text-white rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition cursor-pointer">Get Started</Link>
            </div>
        </section>
    );
};

export default SpendingSection; 