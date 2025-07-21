import React from 'react';
import Google from '../assets/google.svg'
import Slack from '../assets/slack.svg'
import Walmart from '../assets/walmart.svg'
import Tesla from '../assets/tesla.svg'
import Siemens from '../assets/siemens.svg'
import OpenAI from '../assets/OpenAI.svg'
import Microsoft from '../assets/microsoft.svg'
import Framer from '../assets/Framer.svg'
import Adobe from '../assets/adobe.svg'

const TrustedBy = () => (
    <section className="w-full bg-white border-t border-l border-r border-gray-200 rounded-t-xl px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center">
        <div className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
            Over 5,500+ industry leaders have invested in us.
        </div>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-0 max-w-5xl mx-auto gap-2">
            <div className="flex items-center justify-center">
                <img src={Google} alt="Google" className="w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center">
                <img src={Siemens} alt="Siemens" className="w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center">
                <img src={Microsoft} alt="Microsoft" className="w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center">
                <img src={Slack} alt="Slack" className="w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center">
                <img src={Tesla} alt="Tesla" className="w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center">
                <img src={Walmart} alt="Walmart" className="w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center">
                <img src={Adobe} alt="Adobe" className="w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center">
                <img src={Framer} alt="Framer" className="w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center">
                <img src={OpenAI} alt="OpenAI" className="w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
        </div>
    </section>
);

export default TrustedBy; 