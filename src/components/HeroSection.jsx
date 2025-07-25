import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Phone_Mockup from "../assets/Phone_Mockup.svg";
import Trust from "../assets/Trust.svg"
import Float_1 from "../assets/Float_1.svg"
import Float_2 from "../assets/Float_2.svg"
import Float_3 from "../assets/Float_3.svg"
import Float_4 from "../assets/Float_4.svg"

const HeroSection = () => {
    const container = useRef();
    useGSAP(() => {
        gsap.fromTo(
            ".hero-headline",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(
            ".hero-subtext",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
        );
        gsap.fromTo(
            ".hero-buttons",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out", stagger: 0.1 }
        );
        gsap.fromTo(
            ".hero-phone",
            { opacity: 0, scale: 0.9, y: 40 },
            { opacity: 1, scale: 1, y: 0, duration: 1.2, delay: 0.9, ease: "power3.out" }
        );
    }, { scope: container });

    return (
        <section ref={container} className="flex flex-col items-center text-center pt-12 px-4 bg-horizontal-lines w-full box-border">
            <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-2 sm:px-1 sm:pr-4 py-1 bg-[#E9E9E9] rounded-full text-sm font-medium text-gray-700 gap-2.5">
                    <img src={Trust} alt="Trust Icon" />
                    Smart Finance, Smart Living
                </span>
            </div>
            <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight px-4">Revolutionizing Finance for a<br className="hidden md:block" />Better Tomorrow, Today</h1>
            <p className="hero-subtext text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto px-4">MyBudgetBook leverages technology to simplify expense tracking, offering innovative solutions for budgeting.</p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full sm:w-auto">
                <Link to="/signup" className="px-8 py-3 bg-gradient-to-tr from-indigo-400 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">Get Started</Link>
                <Link to="/signin" className="px-8 py-3 bg-purple-100 text-purple-700 rounded-full font-semibold shadow-lg hover:bg-purple-200 transition">Request a demo</Link>
            </div>
            <div className="relative flex justify-center items-center mt-2 mb-0">
                <div className="relative z-10">
                    <img src={Phone_Mockup} alt="App Screenshot" className="hero-phone w-[280px] sm:w-[340px] md:w-[400px]" />
                </div>
                <div className="absolute left-0 top-0 md:top-16 -translate-x-1/2 z-20">
                    <img src={Float_2} alt="Trust Icon" className='animate-float-reverse w-[80px] sm:w-auto' />
                    <img src={Float_1} alt="Trust Icon" className='animate-float-reverse w-[80px] sm:w-auto' />
                </div>
                <div className="absolute right-0 top-16 md:top-24 translate-x-1/2 z-20 flex flex-col items-end gap-6">
                    <img src={Float_3} alt="Trust Icon" className='animate-float-reverse w-[80px] sm:w-auto' />
                    <img src={Float_4} alt="Trust Icon" className='animate-float-reverse w-[80px] sm:w-auto' />
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 