import React from 'react';
import Phone_Mockup from '../assets/FeaturesSection.svg';

const features = [
    {
        icon: (
            <span className="bg-gray-100 rounded-xl p-2 mr-4 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M3 10V6.2A2.2 2.2 0 0 1 5.2 4h13.6A2.2 2.2 0 0 1 21 6.2V10m-18 0v7.8A2.2 2.2 0 0 0 5.2 20h13.6a2.2 2.2 0 0 0 2.2-2.2V10m-18 0h18" stroke="#22223B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="7" y="13" width="2" height="2" rx="1" fill="#22223B" /><rect x="11" y="13" width="2" height="2" rx="1" fill="#22223B" /><rect x="15" y="13" width="2" height="2" rx="1" fill="#22223B" /></svg>
            </span>
        ),
        title: 'First of all track your expenses',
        desc: 'Start tracking by entering your daily expenses. A quick and intuitive process to get your budget on track.'
    },
    {
        icon: (
            <span className="bg-gray-100 rounded-xl p-2 mr-4 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#22223B" strokeWidth="1.5" /><path d="M12 7v5l3 3" stroke="#22223B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
        ),
        title: 'Track Expenses in Real-Time',
        desc: 'Monitor your spending patterns with real-time updates and category-wise breakdowns.'
    },
    {
        icon: (
            <span className="bg-gray-100 rounded-xl p-2 mr-4 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 19v-7m0 0V5m0 7h7m-7 0H5" stroke="#22223B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
        ),
        title: 'Get Help with Budgeting Anytime',
        desc: 'Get assistance anytime with our dedicated support team ready to help you manage your budget and expenses.'
    }
];

const FeaturesSection = () => (
    <section id="features" className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 md:py-20 px-4 md:px-8 gap-12 md:gap-8 lg:gap-20">
        <div className="flex-1 flex flex-col items-start max-w-xl mb-10 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left leading-tight">Let's Start Tracking<br />Your Money</h2>
            <p className="text-gray-500 text-base sm:text-lg mb-8 text-left">By using smart expense tools, MyBudgetBook reshapes budgeting habits, making it more user-friendly and adaptive to modern needs.</p>
            <div className="flex flex-col gap-y-8 w-full">
                {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                        {f.icon}
                        <div>
                            <div className="font-semibold text-base sm:text-lg mb-1 text-gray-900">{f.title}</div>
                            <div className="text-gray-500 text-sm sm:text-base leading-snug">{f.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
            <img src={Phone_Mockup} alt="App Feature Screenshot" className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[420px] " />
        </div>
    </section>
);

export default FeaturesSection; 