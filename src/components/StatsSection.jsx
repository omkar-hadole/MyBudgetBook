import React from 'react';
import Ratting_1 from '../assets/ratting_1.svg'
import Ratting_2 from '../assets/ratting_2.svg'
import Ratting_3 from '../assets/ratting_3.svg'


const StatsSection = () => (
    <section className="w-full max-w-7xl mx-auto py-8 sm:py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">

            <div className="flex flex-col items-center md:items-start flex-1 text-center md:text-left w-full">
                <div className="flex items-center justify-center md:justify-start mb-2">
                    <span className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 mr-4">
                        <img src={Ratting_1} alt="Rating 1" />
                    </span>
                    <span className="ml-4 text-3xl sm:text-4xl font-bold text-gray-900">120K+</span>
                </div>
                <div className="text-gray-500 text-sm sm:text-base max-w-xs px-4 sm:px-0">Our platform is a trusted choice for managing your personal finances.</div>
            </div>

            <div className="flex flex-col items-center md:items-start flex-1 text-center md:text-left w-full">
                <div className="flex items-center justify-center md:justify-start mb-2">
                    <span className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 mr-4">
                        <img src={Ratting_2} alt="Rating 2" />
                    </span>
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">4.9</span>
                </div>
                <div className="text-gray-500 text-sm sm:text-base max-w-xs px-4 sm:px-0">Our high rating proves our platform's quality and positive global user impact.</div>
            </div>

            <div className="flex flex-col items-center md:items-start flex-1 text-center md:text-left w-full">
                <div className="flex items-center justify-center md:justify-start mb-2">
                    <span className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 mr-4">
                        <img src={Ratting_3} alt="Rating 3" />
                    </span>
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">89+</span>
                </div>
                <div className="text-gray-500 text-sm sm:text-base max-w-xs px-4 sm:px-0">Our global presence ensures reliable, efficient financial solutions.</div>
            </div>

        </div>
    </section>
);

export default StatsSection; 