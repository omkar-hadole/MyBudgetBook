import React, { useRef } from 'react';
import Google from '../assets/google.svg'
import Slack from '../assets/slack.svg'
import Walmart from '../assets/walmart.svg'
import Tesla from '../assets/tesla.svg'
import Siemens from '../assets/siemens.svg'
import OpenAI from '../assets/OpenAI.svg'
import Microsoft from '../assets/microsoft.svg'
import Framer from '../assets/Framer.svg'
import Adobe from '../assets/adobe.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logos = [
    { src: Google, alt: 'Google' },
    { src: Siemens, alt: 'Siemens' },
    { src: Microsoft, alt: 'Microsoft' },
    { src: Slack, alt: 'Slack' },
    { src: Tesla, alt: 'Tesla' },
    { src: Walmart, alt: 'Walmart' },
    { src: Adobe, alt: 'Adobe' },
    { src: Framer, alt: 'Framer' },
    { src: OpenAI, alt: 'OpenAI' },
];

const TrustedBy = () => {
    const sectionRef = useRef();
    useGSAP(() => {
        gsap.fromTo(
            '.trusted-logo',
            { opacity: 0, y: 40, scale: 0.85 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.12,
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
        <section ref={sectionRef} className="w-full bg-white border-t border-l border-r border-gray-200 rounded-t-xl px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center">
            <div className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
                Over 5,500+ industry leaders have invested in us.
            </div>
            <div className="flex flex-wrap justify-center gap-x-20 gap-y-0 max-w-5xl mx-auto gap-2">
                {logos.map((logo, idx) => (
                    <div className="flex items-center justify-center" key={logo.alt}>
                        <img src={logo.src} alt={logo.alt} className="trusted-logo w-auto opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustedBy; 