import React, { useState } from 'react';

const faqs = [
    {
        q: 'Can I use the service for business transactions?',
        a: "MyBudgetBook is designed primarily for personal expense tracking and budgeting. For business transactions, some features may be helpful, but it's best suited for managing personal finances."
    },
    {
        q: 'Is there a limit on tracked expenses?',
        a: 'No, there is no limit on the number of expenses you can track with MyBudgetBook. Track as many as you need!'
    },
    {
        q: 'How do I update my categories or info?',
        a: `You can easily update your categories and personal information within the app's settings section. Look for the 'Settings' or 'Profile' menu.`
    },
    {
        q: 'Are there perks for frequent users?',
        a: 'Yes, we offer special perks and loyalty rewards for our frequent and active users. Stay tuned for announcements within the app!'
    },
    {
        q: 'Can I use MyBudgetBook on multiple devices?',
        a: 'Absolutely! MyBudgetBook supports multiple devices. Your data is synced securely across all your logged-in devices.'
    }
];

const FAQSection = () => {
    const [openIdx, setOpenIdx] = useState(0);

    return (
        <section id="faqs" className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between py-16 px-4 md:px-8 gap-12 md:gap-0">
            <div className="flex-1 max-w-md mb-10 md:mb-0">
                <div className="text-sm text-gray-400 mb-2">FAQ'S</div>
                <h2 className="text-5xl font-bold mb-6 leading-tight">Frequently<br />Asked<br />Questions</h2>
                <div className="text-gray-500 text-lg mb-2">Ask any questions</div>
                <a href="mailto:mybudgetbook@fintech.com" className="text-2xl md:text-3xl font-semibold text-indigo-600 hover:underline">mybudgetbook@fintech.com</a>
            </div>

            <div className="flex-1 w-full max-w-2xl divide-y divide-gray-200">
                {faqs.map((faq, idx) => (
                    <div key={idx}>
                        <button
                            className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                            onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
                        >
                            <span className="text-lg md:text-xl font-semibold text-gray-900">{faq.q}</span>
                            <span className="ml-4">
                                {openIdx === idx ? (
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6" stroke="#22223B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                ) : (
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="#22223B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                )}
                            </span>
                        </button>
                        {openIdx === idx && faq.a && (
                            <div className="text-gray-500 text-base pb-6 pr-8 pl-1">{faq.a}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection; 