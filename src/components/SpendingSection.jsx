import React from 'react';
import Spending from "../assets/Spendding.svg"


const features = [
    'Track expenses with real-time updates.',
    'Instantly categorize and monitor your spending.'
];

const SpendingSection = () => (
    <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 md:py-20 px-4 md:px-8 gap-12 md:gap-8 lg:gap-20">
        <div className="flex-1 flex justify-center items-center w-full mb-10 md:mb-0">
            <img src={Spending} alt="" />
        </div>
        
        <div className="flex-1 flex flex-col items-start max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left leading-tight">Track, Categorize, and<br />Visualize Your<br />Spending Effortlessly.</h2>
            <p className="text-gray-500 text-base sm:text-lg mb-8 text-left">MyBudgetBook is designed to empower everyone with easy-to-use tools to track expenses and gain clear insights into personal finances.</p>
            <div className="flex flex-col gap-y-8 w-full mb-8">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100">
                            <svg width="25" height="25" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#22223B" strokeWidth="1.5" /><path d="M8 12.5l2.5 2.5 5-5" stroke="#22223B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className="text-gray-800 text-base sm:text-lg">{f}</span>
                    </div>
                ))}
            </div>
            <button className="mt-2 px-8 py-3 bg-black text-white rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition cursor-pointer">Get Started</button>
        </div>
    </section>
);

export default SpendingSection; 